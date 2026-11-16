const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { performance } = require('node:perf_hooks');
const { execFileSync } = require('node:child_process');
const { createRuntime } = require('./search-runtime.cjs');
const root = path.resolve(__dirname, '..');
const fixture = require('../search/queries.json');

async function benchmark({ buildDir = path.join(root, 'build'), legacy = false } = {}) {
  const runtime = createRuntime(buildDir);
  const { prepareResults } = runtime.load(legacy
    ? path.join(root, '.search-artifacts/baseline/results.ts')
    : path.join(root, 'src/components/DocumentationSearch/results.ts'));
  const retrieval = legacy ? null : runtime.load(path.join(root, 'src/components/DocumentationSearch/retrieval.ts'));
  const contexts = new Map();
  const rows = [];
  for (const entry of fixture.cases) {
    const start = performance.now();
    let results;
    if (legacy) {
      results = prepareResults(await runtime.worker.search('/', entry.scope, entry.query, 200), 40);
    } else {
      const suffix = entry.scope ? `-${entry.scope.replaceAll('/', '-')}` : '';
      let context = contexts.get(entry.scope);
      if (!context) {
        context = JSON.parse(fs.readFileSync(path.join(buildDir, `search-context${suffix}.json`), 'utf8'));
        contexts.set(entry.scope, context);
      }
      results = await retrieval.searchScope(entry.query, context.sections,
        query => runtime.worker.search('/', entry.scope, query, 200));
    }
    const index = results.findIndex(result => entry.expectedUrls.includes(result.url));
    rows.push({ id: entry.id, query: entry.query, scope: entry.scope,
      kind: entry.kind || 'positive', heldOut: !!entry.heldOut,
      rank: index < 0 ? null : index + 1,
      passed: entry.kind === 'negative' ? results.length === 0 : index >= 0 && index + 1 <= entry.maxRank,
      visible: index >= 0 && index < (legacy ? 3 : 5),
      forbidden: (entry.forbiddenTopUrls || []).filter(url => results.slice(0, 3).some(result => result.url.startsWith(url))),
      milliseconds: +(performance.now() - start).toFixed(2),
      results: results.slice(0, 8).map(result => ({ url: result.url, title: result.title, section: result.section, excerpt: result.excerpt })),
    });
  }
  const positives = rows.filter(row => row.kind === 'positive');
  const top3 = positives.filter(row => row.rank && row.rank <= 3).length;
  return { schema: 1, node: process.version, fixtureHash: crypto.createHash('sha256').update(JSON.stringify(fixture)).digest('hex'),
    mode: legacy ? 'baseline' : 'candidate',
    summary: { positiveCases: positives.length, top3, top3Percent: +(100 * top3 / positives.length).toFixed(1),
      mandatoryPassed: rows.filter(row => fixture.cases.find(entry => entry.id === row.id).mandatory && row.passed && !row.forbidden.length).length,
      negativePassed: rows.filter(row => row.kind === 'negative' && row.passed).length }, rows };
}

async function main() {
  const capture = process.argv.includes('--capture-baseline');
  const corpusArg = process.argv.indexOf('--corpus');
  const buildDir = corpusArg >= 0 ? path.resolve(process.argv[corpusArg + 1]) : path.join(root, 'build');
  if (capture) {
    const directory = path.join(root, '.search-artifacts/baseline');
    if (fs.existsSync(directory)) throw new Error('Baseline snapshot already exists; preserve it or choose a fresh checkout.');
    fs.mkdirSync(path.join(directory, 'site'), { recursive: true });
    fs.cpSync(path.join(buildDir, 'docs'), path.join(directory, 'site/docs'), {
      recursive: true, filter: file => fs.statSync(file).isDirectory() || file.endsWith('.html'),
    });
    for (const file of fs.readdirSync(buildDir).filter(file => /^search-index.*\.json$/.test(file))) {
      fs.copyFileSync(path.join(buildDir, file), path.join(directory, 'site', file));
    }
    const auditedResults = execFileSync('git', ['show', '128341b84f0e1ae05c584f78ff5231ab2d14df59:src/components/DocumentationSearch/results.ts'], { cwd: root, encoding: 'utf8' });
    fs.writeFileSync(path.join(directory, 'results.ts'), auditedResults);
    const generatedConstants = path.resolve(buildDir, '../.docusaurus/@easyops-cn/docusaurus-search-local/default/generated-constants.js');
    fs.copyFileSync(generatedConstants, path.join(directory, 'site/search-constants.js'));
  }
  const report = await benchmark({ legacy: capture || process.argv.includes('--legacy'),
    buildDir });
  const output = capture ? 'search/baseline.json' : '.search-artifacts/candidate.json';
  fs.mkdirSync(path.dirname(path.join(root, output)), { recursive: true });
  fs.writeFileSync(path.join(root, output), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report.summary, null, 2));
  console.table(report.rows.map(({ query, rank, passed, forbidden }) => ({ query, rank, passed, forbidden: forbidden.join(', ') })));
}
module.exports = { benchmark };
if (require.main === module) main().catch(error => { console.error(error); process.exitCode = 1; });
