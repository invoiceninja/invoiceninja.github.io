const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
function version() {
  const hash = createHash('sha256');
  for (const file of ['docusaurus.config.ts', 'package-lock.json', 'search/section-aliases.json', 'scripts/search-context.cjs',
    'src/components/DocumentationSearch/schema.ts', 'src/components/DocumentationSearch/results.ts', 'src/components/DocumentationSearch/retrieval.ts']) {
    hash.update(fs.readFileSync(path.resolve(__dirname, '..', file)));
  }
  return hash.digest('hex').slice(0, 12);
}
module.exports = { version };
