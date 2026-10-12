export const API_CONTEXT = "docs/api-reference";
export const SEARCH_SCOPES = [
  { value: "", label: "Documentation" },
  { value: API_CONTEXT, label: "API Reference" },
  { value: "docs/developer-guide", label: "Developer Guides" },
  { value: "docs/legal", label: "Legal" },
];

export interface SearchDocument {
  i: number;
  t: string;
  u: string;
  h?: string;
  s?: string;
  b?: string[];
}

export interface SearchHit {
  document: SearchDocument;
  page?: SearchDocument;
  type: number;
  tokens: string[];
  metadata: Record<string, { t?: { position?: [number, number][] } }>;
}

export interface SearchResult {
  url: string;
  title: string;
  section: string;
  category: string;
  excerpt: string;
}

export function categoryFor(url: string): string {
  if (url.includes("/api-reference/")) return "API Reference";
  if (url.includes("/developer-guide")) return "Developer Guide";
  if (url.includes("/self-host/")) return "Self Hosting";
  if (url.includes("/hosted/")) return "Hosted Platform";
  if (url.includes("/advanced-topics/")) return "Advanced Topics";
  if (url.includes("/legal/")) return "Legal";
  if (url.includes("/editor-guides/")) return "Contributor Guide";
  return "User Guide";
}

export function excerptFor(hit: SearchHit, maxLength = 180): string {
  const text = hit.document.t;
  const positions = Object.values(hit.metadata).flatMap(value => value.t?.position ?? []);
  const match = positions.length ? Math.min(...positions.map(([start]) => start)) : 0;
  let start = Math.max(0, match - 55);
  // Preserve whole words on each side of the matching passage.
  if (start > 0) {
    const boundary = text.indexOf(" ", start);
    start = boundary >= 0 && boundary < match ? boundary + 1 : 0;
  }
  let end = Math.min(text.length, start + maxLength);
  if (end < text.length) {
    const boundary = text.lastIndexOf(" ", end);
    if (boundary > start) end = boundary;
  }
  return `${start ? "…" : ""}${text.slice(start, end).replace(/\s+/g, " ").trim()}${end < text.length ? "…" : ""}`;
}

// The plugin returns titles, headings, descriptions, and body matches separately.
// Merge hits for the same destination, retaining its readable body excerpt.
export function prepareResults(hits: SearchHit[], limit: number): SearchResult[] {
  const results = new Map<string, SearchResult>();
  for (const hit of hits) {
    const { document, page, type } = hit;
    const url = document.u + (document.h ?? "");
    const title = page?.t || document.s || document.t;
    const section = type === 1 ? document.t : document.s || "";
    const excerpt = type === 2 || type === 4 ? excerptFor(hit) : "";
    const existing = results.get(url);
    if (existing) {
      if (!existing.excerpt && excerpt) existing.excerpt = excerpt;
    } else {
      results.set(url, {
        url,
        title,
        section: section === title ? "" : section,
        category: categoryFor(document.u),
        excerpt,
      });
    }
  }
  // Keep the engine's title-first ordering, but give other pages room to appear.
  const pageCounts = new Map<string, number>();
  return [...results.values()].filter(result => {
    const page = result.url.split("#")[0];
    const count = pageCounts.get(page) ?? 0;
    pageCounts.set(page, count + 1);
    return count < 2;
  }).slice(0, limit);
}
