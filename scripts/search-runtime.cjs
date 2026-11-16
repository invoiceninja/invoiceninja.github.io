// Execute the installed plugin's actual worker in Node for production-index checks.
// Transpile ESM/TS without copying or reimplementing its query strategies.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createRequire } = require('node:module');
const ts = require('typescript');

function createRuntime(buildDir = path.resolve(__dirname, '../build')) {
  const cache = new Map();
  const builtConstants = path.resolve(buildDir, '../.docusaurus/@easyops-cn/docusaurus-search-local/default/generated-constants.js');
  const constantsPath = fs.existsSync(path.join(buildDir, 'search-constants.js')) ? path.join(buildDir, 'search-constants.js')
    : fs.existsSync(builtConstants) ? builtConstants
    : path.resolve(__dirname, '../.docusaurus/@easyops-cn/docusaurus-search-local/default/generated-constants.js');
  const constantsSource = fs.readFileSync(constantsPath, 'utf8');
  const constants = {};
  for (const [, name, value] of constantsSource.matchAll(/export const (\w+) = ([^;]+);/g)) {
    constants[name] = JSON.parse(value);
  }
  function load(file) {
    if (cache.has(file)) return cache.get(file).exports;
    if (file.endsWith('.json')) return JSON.parse(fs.readFileSync(file, 'utf8'));
    const module = { exports: {} };
    cache.set(file, module);
    const nativeRequire = createRequire(file);
    function requireModule(name) {
      if (name === 'comlink') return { expose() {} };
      if (name.endsWith('/proxiedGeneratedConstants')) return constants;
      if (name.startsWith('.')) {
        const tsFile = path.resolve(path.dirname(file), `${name}.ts`);
        return load(fs.existsSync(tsFile) ? tsFile : nativeRequire.resolve(name));
      }
      return nativeRequire(name);
    }
    const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    }).outputText;
    const run = vm.runInThisContext(`(function(require,module,exports,location,fetch){${js}\n})`, { filename: file });
    run(requireModule, module, module.exports, { origin: 'http://localhost' }, async url => ({
      json: async () => JSON.parse(fs.readFileSync(path.join(buildDir, new URL(url, 'http://localhost').pathname), 'utf8')),
    }));
    return module.exports;
  }
  const { SearchWorker } = load(require.resolve('@easyops-cn/docusaurus-search-local/dist/client/client/theme/worker.js'));
  return { worker: new SearchWorker(), load, constants };
}
module.exports = { createRuntime };
