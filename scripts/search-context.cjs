const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { load } = require('cheerio');
const aliases = require('../search/section-aliases.json');
const { version } = require('./search-version.cjs');
const SCHEMA = 1;
const scopes = ['', 'docs/api-reference', 'docs/developer-guide', 'docs/legal'];
const clean = text => text.replace(/[\u200b\u200c]/g, '').replace(/\s+/g, ' ').trim();
const hash = text => crypto.createHash('sha256').update(text).digest('hex');

function extractSections(html, url, sourcePath = '') {
  const $ = load(html);
  if ($('meta[name="robots"]').attr('content')?.includes('noindex')) return [];
  const canonical = $('link[rel="canonical"]').attr('href');
  if (!canonical || new URL(canonical).pathname.replace(/\/$/, '') !== url.replace(/\/$/, '')) return [];
  const article = $('article').first();
  if (!article.length) return [];
  article.find('[data-search-ignore], [hidden], [aria-hidden="true"], nav, button, script, style, video, .theme-doc-toc-mobile, .theme-doc-footer, .pagination-nav, .openapi-right-panel__container, .openapi-tabs__container, .openapi-tabs__heading, .openapi-schema__container, .openapi-schema__list-item').remove();
  // Keep configuration identifiers and developer examples, not user-guide CSS noise.
  if (!/\/docs\/(self-host|developer-guide)(\/|$)/.test(url)) article.find('pre, .theme-code-block').remove();
  if (url === '/docs/advanced-topics/templates') article.find('table').remove();
  const pageTitle = clean(article.find('h1').first().text());
  const stack = [];
  const records = [];
  let current;
  function start(title, anchor) {
    current = { url: url + (anchor ? `#${anchor}` : ''), pageTitle, sectionTitle: title,
      headingPath: stack.length ? stack.map(heading => heading.title) : [pageTitle], body: '', aliases: aliases[url + (anchor ? `#${anchor}` : '')] || [], sourcePath, linkTextLength: 0 };
    records.push(current);
  }
  start(pageTitle, '');
  function walk(node) {
    if (node.type === 'text') {
      current.body += node.data;
      return;
    }
    const tag = node.name || '';
    if (tag === 'a') current.linkTextLength += clean($(node).text()).length;
    if (/^h[1-6]$/.test(tag)) {
      const level = Number(tag[1]);
      const title = clean($(node).clone().find('a.hash-link').remove().end().text());
      while (stack.length && stack[stack.length - 1].level >= level) stack.pop();
      stack.push({ level, title });
      const anchor = $(node).attr('id');
      if (level === 1 && records.length === 1 && !current.body.trim()) {
        current.headingPath = [title];
      } else if (anchor) {
        start(title, anchor);
      } else {
        // Hand-authored cards sometimes contain headings without IDs. Keep their
        // text under the nearest real destination rather than inventing an anchor.
        current.body += `\n${title}\n`;
      }
      return;
    }
    if (tag === 'table') {
      current.body += '\n' + $(node).find('tr').map((_, row) => $(row).children('th,td').map((_, cell) => clean($(cell).text())).get().join(' | ')).get().join('\n') + '\n';
      return;
    }
    for (const child of node.children || []) walk(child);
    if (/^(p|li|ul|ol|pre|div|section|br)$/.test(tag)) current.body += '\n';
  }
  for (const node of article.get(0).children) walk(node);
  return records.map(record => {
    const blocks = record.body.split(/\n+/).map(clean).filter(Boolean);
    const body = blocks.join('\n');
    const { linkTextLength, ...section } = record;
    return { ...section, body, summary: blocks.find(block => block.length > 40)?.slice(0, 300) || blocks[0] || '',
      relatedLinks: /^(related(?: links)?|see also)$/i.test(record.sectionTitle)
        || (/^advanced settings$/i.test(record.sectionTitle) && linkTextLength / body.length > 0.35),
      contentHash: hash(JSON.stringify({ ...section, body })), id: hash(record.url).slice(0, 20) };
  }).filter(record => record.body || record.aliases.length);
}

function buildContext(buildDir, { validateAliases = true } = {}) {
  const result = new Map();
  const found = new Set();
  const sourceMap = new Map();
  const metadataDir = path.resolve(__dirname, '../.docusaurus/docusaurus-plugin-content-docs/default');
  for (const file of fs.readdirSync(metadataDir).filter(file => file.endsWith('.json'))) {
    const metadata = JSON.parse(fs.readFileSync(path.join(metadataDir, file), 'utf8'));
    if (metadata.permalink && metadata.source) sourceMap.set(metadata.permalink.replace(/\/$/, ''), metadata.source.replace('@site/', ''));
  }
  for (const scope of scopes) {
    const suffix = scope ? `-${scope.replaceAll('/', '-')}` : '';
    const index = JSON.parse(fs.readFileSync(path.join(buildDir, `search-index${suffix}.json`), 'utf8'));
    const sections = [];
    // Canonical title records already encode the plugin's scope/exclusion rules.
    for (const page of index[0].documents) {
      const url = page.u.replace(/\/$/, '');
      const html = fs.readFileSync(path.join(buildDir, `${url}.html`), 'utf8');
      const extracted = extractSections(html, url, sourceMap.get(url));
      for (const section of extracted) {
        found.add(section.url);
        section.scope = scope;
        sections.push(section);
      }
    }
    sections.sort((a, b) => a.url.localeCompare(b.url));
    result.set(scope, { schema: SCHEMA, scope, sections, contentHash: hash(JSON.stringify(sections)) });
  }
  if (validateAliases) for (const url of Object.keys(aliases)) {
    if (!found.has(url)) throw new Error(`Section aliases point to a missing destination: ${url}`);
  }
  return result;
}

function writeContext(buildDir, options) {
  const contexts = buildContext(buildDir, options);
  const constants = fs.readFileSync(path.resolve(__dirname, '../.docusaurus/@easyops-cn/docusaurus-search-local/default/generated-constants.js'), 'utf8');
  const indexVersion = constants.match(/search-index\{dir\}\.json\?_=(\w+)/)?.[1];
  if (!indexVersion) throw new Error('Missing production index version. Run the Docusaurus build first.');
  for (const file of fs.readdirSync(buildDir).filter(file => /^search-context(?:-|\.).*\.json$/.test(file))) {
    fs.unlinkSync(path.join(buildDir, file));
  }
  for (const [scope, context] of contexts) {
    const suffix = scope ? `-${scope.replaceAll('/', '-')}` : '';
    context.contextVersion = version();
    context.indexVersion = indexVersion;
    const json = JSON.stringify(context);
    fs.writeFileSync(path.join(buildDir, `search-context${suffix}.json`), json);
    fs.writeFileSync(path.join(buildDir, `search-context${suffix}.${context.contextVersion}.${indexVersion}.json`), json);
  }
  return contexts;
}
module.exports = { extractSections, buildContext, writeContext, SCHEMA };
if (require.main === module) {
  const directory = path.resolve(process.argv[2] || 'build');
  const contexts = writeContext(directory);
  console.log(`Search context: ${[...contexts.values()].reduce((n, context) => n + context.sections.length, 0)} canonical sections in ${contexts.size} scopes.`);
}
