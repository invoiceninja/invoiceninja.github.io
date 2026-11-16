import lunr from "lunr";

import type { SearchHit, SearchSection, SearchResult } from "./schema";
export * from "./schema";

export function categoryFor(url: string): string {
  if (url.includes("/api-reference/")) return "API Reference";
  if (url.includes("/developer-guide")) return "Developer Guide";
  if (url.includes("/self-host/")) return "Self Hosting";
  if (url.includes("/hosted/")) return "Hosted Platform";
  if (url.includes("/advanced-topics/")) return "Advanced Topics";
  if (url.includes("/legal/")) return "Legal";
  return "User Guide";
}

// Preserve complete identifiers; use the same English stemmer as the installed
// engine for prose. No independent search engine or incompatible score fusion.
const conversational = new Set(["please", "want", "need", "make", "add", "shown", "show"]);
export function termsFor(text: string): string[] {
  return [...new Set((text.toLowerCase().replace(/invoice ninja/g, "").match(/[\p{L}\p{N}_]+(?:-[\p{L}\p{N}_]+)*/gu) || [])
    .filter(word => !conversational.has(word) && !!lunr.stopWordFilter(new lunr.Token(word)))
    .map(word => {
      if (word.includes("_") || word.includes("-")) return word;
      if (/^customers?$/.test(word)) word = "client";
      if (word === "automatically") word = "automatic";
      return lunr.stemmer(new lunr.Token(word)).toString();
    }))];
}

const sectionTerms = new WeakMap<SearchSection, { title: Set<string>; aliases: Set<string>; ancestors: Set<string>; page: Set<string>; body: Set<string> }>();
const corpusWeights = new WeakMap<SearchSection[], Map<string, number>>();
function fieldsFor(section: SearchSection) {
  let fields = sectionTerms.get(section);
  if (!fields) {
    fields = {
      title: new Set(termsFor(section.sectionTitle)),
      aliases: new Set(termsFor(section.aliases.join(" "))),
      ancestors: new Set(termsFor(section.headingPath.slice(0, -1).join(" "))),
      page: new Set(termsFor(section.pageTitle)),
      body: new Set(termsFor(section.body)),
    };
    sectionTerms.set(section, fields);
  }
  return fields;
}

function weightsFor(sections: SearchSection[]): Map<string, number> {
  let weights = corpusWeights.get(sections);
  if (!weights) {
    const frequencies = new Map<string, number>();
    for (const section of sections) {
      const fields = fieldsFor(section);
      const words = new Set(Object.values(fields).flatMap(field => [...field]));
      words.forEach(word => frequencies.set(word, (frequencies.get(word) || 0) + 1));
    }
    weights = new Map([...frequencies].map(([word, count]) => [word, 1 + Math.log((sections.length + 1) / (count + 1))]));
    corpusWeights.set(sections, weights);
  }
  return weights;
}

export function contextMatches(section: SearchSection, terms: string[]): boolean {
  const fields = fieldsFor(section);
  // Supplement worker candidates from searchable headings, aliases and exact
  // configuration identifiers. Body retrieval remains the plugin's job.
  return terms.some(term => fields.title.has(term) || fields.aliases.has(term)
    || fields.ancestors.has(term) || (/[_-]/.test(term) && fields.body.has(term)));
}

function oneEditAway(a: string, b: string): boolean {
  if (a.length < 5 || Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (a.length >= b.length) i++;
    if (b.length >= a.length) j++;
  }
  return edits + Number(i < a.length || j < b.length) <= 1;
}

function rankSection(section: SearchSection, terms: string[], query: string, hits: SearchHit[], importance: Map<string, number>, unknownWeight: number): number {
  const fields = fieldsFor(section);
  const workerTerms = new Set(hits.flatMap(hit => Object.keys(hit.metadata)));
  let matched = 0, weighted = 0, total = 0;
  for (const term of terms) {
    const effective = fields.body.has(term) || fields.title.has(term) || fields.aliases.has(term) ? term
      : [...workerTerms].find(word => word === term || oneEditAway(term, word)) || term;
    const weight = fields.title.has(effective) ? 12 : fields.aliases.has(effective) ? 8
      : fields.ancestors.has(effective) ? 4 : fields.page.has(effective) ? 3
      : fields.body.has(effective) ? 1 : 0;
    const termWeight = importance.get(effective) || unknownWeight;
    total += termWeight;
    if (weight) { matched += termWeight; weighted += weight * termWeight; }
  }
  const coverage = matched / total;
  // Long questions need meaningful coverage; unknown words cannot be dropped.
  // Exact short queries and identifiers retain their normal path.
  if (!matched || (terms.length > 1 && coverage < 0.65)) return 0;
  const phrase = query.toLowerCase().replace(/\s+/g, " ").trim();
  const phraseBoost = section.sectionTitle.toLowerCase().includes(phrase) ? 12
    : section.aliases.some(alias => alias.toLowerCase().includes(phrase)) ? 8
    : section.body.toLowerCase().includes(phrase) ? 3 : 0;
  let score = coverage * coverage * (20 + 8 * weighted / total) + phraseBoost;
  if (section.relatedLinks) score *= 0.25;
  return score;
}

export function passageFor(text: string, query: string, maxLength = 210): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  const terms = new Set(termsFor(query));
  const words = [...cleaned.matchAll(/[\p{L}\p{N}_-]+/gu)];
  let bestStart = 0, bestScore = -1;
  // Prefer a passage covering several meaningful terms, not the first match.
  for (const word of words) {
    if (!termsFor(word[0]).some(term => terms.has(term))) continue;
    let start = Math.max(0, word.index! - 45);
    if (start) start = cleaned.indexOf(" ", start) + 1;
    const window = cleaned.slice(start, start + maxLength);
    const coverage = termsFor(window).filter(term => terms.has(term)).length;
    if (coverage > bestScore) { bestScore = coverage; bestStart = start; }
  }
  let end = Math.min(cleaned.length, bestStart + maxLength);
  if (end < cleaned.length) end = cleaned.lastIndexOf(" ", end);
  return `${bestStart ? "…" : ""}${cleaned.slice(bestStart, end).trim()}${end < cleaned.length ? "…" : ""}`;
}

export function prepareResults(hits: SearchHit[], limit: number, query: string, sections: SearchSection[]): SearchResult[] {
  const terms = termsFor(query);
  if (!terms.length) return [];
  // Missing a distinctive word such as "logo" matters more than matching
  // common context such as "client portal". This also limits weak fallbacks.
  const importance = weightsFor(sections);
  const unknownWeight = 1 + Math.log(sections.length + 1);
  const byDestination = new Map<string, SearchHit[]>();
  for (const hit of hits) {
    const url = hit.document.u + (hit.document.h || "");
    byDestination.set(url, [...(byDestination.get(url) || []), hit]);
  }
  const candidates = sections.filter(section => byDestination.has(section.url) || contextMatches(section, terms));
  const results = candidates.map(section => {
    const score = rankSection(section, terms, query, byDestination.get(section.url) || [], importance, unknownWeight);
    return { url: section.url, title: section.pageTitle,
      section: section.sectionTitle === section.pageTitle ? "" : section.sectionTitle,
      category: categoryFor(section.url), excerpt: passageFor(section.body, query), score };
  }).filter(result => result.score > 0);
  // Rank before destination deduplication; there is no page-level suppression.
  results.sort((a, b) => b.score - a.score || a.url.localeCompare(b.url));
  return [...new Map(results.map(result => [result.url, result])).values()].slice(0, limit);
}
