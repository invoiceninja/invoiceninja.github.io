const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { load } = require('cheerio');
const { benchmark } = require('./benchmark-search.cjs');
const scopes = ['', 'docs/api-reference', 'docs/developer-guide', 'docs/legal'];
const { SCHEMA } = require('./search-context.cjs');
const fixture = require('../search/queries.json');
const buildDir = path.resolve(__dirname, '../build');

async function main() {
  const ids = new Set();
  const destinations = new Set();
  const htmlCache = new Map();
  function checkDestination(url) {
    const [route, fragment] = url.split('#');
    assert(route.startsWith('/docs/'), `Unexpected search route: ${url}`);
    let page = htmlCache.get(route);
    if (!page) {
      const filename = path.join(buildDir, `${route}.html`);
      assert(fs.existsSync(filename), `Search result page is missing: ${url}`);
      const $ = load(fs.readFileSync(filename, 'utf8'));
      page = { ids: new Set($('[id]').map((_, node) => $(node).attr('id')).get()),
        canonical: new URL($('link[rel=canonical]').attr('href')).pathname };
      htmlCache.set(route, page);
    }
    assert.equal(page.canonical.replace(/\/$/, ''), route, `Noncanonical search route: ${url}`);
    if (fragment) assert(page.ids.has(decodeURIComponent(fragment)), `Search fragment is missing: ${url}`);
  }
  for (const scope of scopes) {
    const suffix = scope ? `-${scope.replaceAll('/', '-')}` : '';
    const context = JSON.parse(fs.readFileSync(path.join(buildDir, `search-context${suffix}.json`), 'utf8'));
    assert.equal(context.schema, SCHEMA);
    assert.equal(context.scope, scope);
    assert(context.sections.length, `Empty search context: ${scope}`);
    assert(fs.existsSync(path.join(buildDir, `search-context${suffix}.${context.contextVersion}.${context.indexVersion}.json`)), 'Missing versioned search asset');
    for (const section of context.sections) {
      assert(!ids.has(section.id), `Duplicate section ID: ${section.url}`);
      ids.add(section.id);
      assert(!destinations.has(section.url), `Duplicate destination: ${section.url}`);
      destinations.add(section.url);
      assert(section.sourcePath && section.contentHash && section.headingPath.length, `Incomplete context: ${section.url}`);
      assert.equal(section.scope, scope);
      assert(!section.body.includes('Loading video...'), `Video placeholder in context: ${section.url}`);
      checkDestination(section.url);
    }
    const index = JSON.parse(fs.readFileSync(path.join(buildDir, `search-index${suffix}.json`), 'utf8'));
    for (const group of index) for (const document of group.documents) checkDestination(document.u + (document.h || ''));
  }
  for (const entry of fixture.cases) for (const url of entry.expectedUrls) checkDestination(url);
  checkDestination('/docs/user-guide/gateways#limits-fees');
  const gateways = load(fs.readFileSync(path.join(buildDir, 'docs/user-guide/gateways.html'), 'utf8'));
  assert(gateways('a[href="/docs/user-guide/gateways#limitsfees"]').length, 'Gateway fee cross-reference is not canonical');

  const report = await benchmark();
  assert.equal(report.rows.length, 50);
  const failures = [];
  for (const row of report.rows) {
    const entry = fixture.cases.find(entry => entry.id === row.id);
    if (entry.mandatory && (!row.passed || !row.visible)) failures.push(`${row.query}: mandatory result rank ${row.rank}`);
    if (row.kind === 'negative' && !row.passed) failures.push(`${row.query}: unrelated strong results`);
    if (row.forbidden.length) failures.push(`${row.query}: unrelated top-three result ${row.forbidden.join(', ')}`);
    for (const result of row.results) checkDestination(result.url);
    if (row.kind === 'ambiguous' && row.results.filter(result => entry.expectedUrls.includes(result.url)).length < 2) {
      failures.push(`${row.query}: distinct relevant interpretations are missing`);
    }
  }
  if (report.summary.top3Percent < 90) failures.push(`Top-three success ${report.summary.top3Percent}% is below 90%`);
  fs.mkdirSync(path.resolve(__dirname, '../.search-artifacts'), { recursive: true });
  fs.writeFileSync(path.resolve(__dirname, '../.search-artifacts/candidate.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(`Relevance: ${report.summary.top3}/${report.summary.positiveCases} answerable cases in the top three; ${report.summary.mandatoryPassed}/10 mandatory cases; ${report.summary.negativePassed}/3 negative cases.`);
  assert.equal(failures.length, 0, failures.join('\n'));
  console.log(`Validated ${destinations.size} canonical section destinations and all plugin destinations.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
