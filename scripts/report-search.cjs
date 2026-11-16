const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const { performance } = require('node:perf_hooks');
const { benchmark } = require('./benchmark-search.cjs');
const { buildContext } = require('./search-context.cjs');
const root = path.resolve(__dirname, '..');
const percentile = (values, fraction) => [...values].sort((a, b) => a - b)[Math.ceil(values.length * fraction) - 1];
function timing(report) {
  const seen = new Set();
  const cold = [], warm = [];
  for (const row of report.rows) {
    (seen.has(row.scope) ? warm : cold).push(row.milliseconds);
    seen.add(row.scope);
  }
  return { firstQueryPerScopeMs: cold, cachedIndexMedianMs: percentile(warm, 0.5), cachedIndexP95Ms: percentile(warm, 0.95) };
}
async function main() {
  const baseline = JSON.parse(fs.readFileSync(path.join(root, 'search/baseline.json'), 'utf8'));
  const final = await benchmark();
  if (final.fixtureHash !== baseline.fixtureHash) throw new Error('Fixture changed; regenerate the baseline against the original snapshot before comparing.');
  let sameContent = null;
  const snapshot = path.join(root, '.search-artifacts/baseline/site');
  if (fs.existsSync(snapshot)) sameContent = await benchmark({ buildDir: snapshot });
  const payloads = ['', '-docs-api-reference', '-docs-developer-guide', '-docs-legal'].map(suffix => {
    const read = (prefix, directory = 'build') => fs.readFileSync(path.join(root, directory, `${prefix}${suffix}.json`));
    const index = read('search-index'), context = read('search-context');
    return { scope: suffix || 'documentation', indexGzipBytes: zlib.gzipSync(index).length,
      contextGzipBytes: zlib.gzipSync(context).length, sectionCount: JSON.parse(context).sections.length };
  });
  const rows = final.rows.map(row => ({ id: row.id, query: row.query, kind: row.kind, heldOut: row.heldOut,
    before: baseline.rows.find(old => old.id === row.id).rank,
    sameContent: sameContent?.rows.find(same => same.id === row.id).rank ?? null,
    after: row.rank, passed: row.passed && !row.forbidden.length }));
  const exportStarted = performance.now();
  buildContext(path.join(root, 'build'));
  const contextExportMs = +(performance.now() - exportStarted).toFixed(1);
  const report = { baselineRevision: '128341b84f0e1ae05c584f78ff5231ab2d14df59', fixtureHash: final.fixtureHash,
    conditions: 'Curated 50-query fixture. Node ' + process.version + ', installed worker with local file-backed fetch, no network or debounce; first query per scope loads its index, subsequent queries reuse index/context caches. Gzip sizes are estimates, not browser transfer measurements.',
    baseline: baseline.summary, sameContent: sameContent?.summary || null, final: final.summary,
    timings: { baseline: timing(baseline), final: timing(final), contextExportMs }, payloads, rows };
  const browserFile = path.join(root, '.search-artifacts/browser-timings.json');
  if (fs.existsSync(browserFile)) {
    const browser = JSON.parse(fs.readFileSync(browserFile, 'utf8'));
    const current = JSON.parse(fs.readFileSync(path.join(root, 'build/search-context.json'), 'utf8'));
    if (browser.contextVersion === current.contextVersion && browser.indexVersion === current.indexVersion) report.browser = browser;
  }
  fs.writeFileSync(path.join(root, 'search/results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ before: report.baseline, sameContent: report.sameContent, after: report.final, timings: report.timings, payloads }, null, 2));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
