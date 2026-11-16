// Run after npm run build. Checks the actual indexes shipped to readers.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const lunr = require('lunr');

const readIndex = (context = '') => JSON.parse(fs.readFileSync(
  path.join(__dirname, '../build', `search-index${context ? `-${context.replaceAll('/', '-')}` : ''}.json`),
  'utf8',
));
const docs = readIndex();
const api = readIndex('docs/api-reference');
const developer = readIndex('docs/developer-guide');
const legal = readIndex('docs/legal');

assert(docs[0].documents.some(doc => doc.u === '/docs/user-guide/payments'));
for (const group of docs) {
  for (const doc of group.documents) {
    assert(!/\/docs\/(api-reference|developer-guide|legal|editor-guides)(\/|$)/.test(doc.u), `Wrong documentation scope: ${doc.u}`);
    assert(!doc.t.includes('Loading video...'), `Video placeholder indexed: ${doc.u}`);
    assert(!doc.t.includes('--portal-primary: #'), `CSS example indexed: ${doc.u}`);
  }
}
for (const [index, context] of [[api, 'api-reference'], [developer, 'developer-guide'], [legal, 'legal']]) {
  assert(index[0].documents.length > 0, `Empty ${context} index`);
  for (const group of index) {
    assert(group.documents.every(doc => doc.u === `/docs/${context}` || doc.u.startsWith(`/docs/${context}/`)), `Mixed ${context} index`);
  }
}

function matches(index, query) {
  return index.flatMap(group => {
    const engine = lunr.Index.load(group.index);
    return engine.search(query).map(hit => group.documents.find(doc => String(doc.i) === hit.ref));
  });
}
assert(matches(docs, 'refund').some(doc => doc.u === '/docs/user-guide/payments'));
// Both heading and passage results must land on the matching section.
const refundUrl = '/docs/user-guide/payments';
const refundHeading = docs[1].documents.find(doc => doc.u === refundUrl && doc.t === 'Refunds');
const refundPassage = docs[4].documents.find(doc => doc.u === refundUrl && doc.s === 'Refunds');
assert.equal(refundHeading?.h, '#refunds', 'Refunds heading lost its section anchor');
assert.equal(refundPassage?.h, '#refunds', 'Refunds passage lost its section anchor');
assert(matches(docs, 'refund').some(doc => doc.u + (doc.h || '') === `${refundUrl}#refunds`),
  'Refund search must return the section destination');
const paymentsHtml = fs.readFileSync(path.join(__dirname, '../build/docs/user-guide/payments.html'), 'utf8');
assert(paymentsHtml.includes('id="refunds"'), 'Refunds destination is missing from the built page');
assert(matches(docs, 'reminder').some(doc => doc.u === '/docs/user-guide/advanced-settings'));
assert(matches(docs, 'customization').some(doc => doc.u === '/docs/user-guide/client-portal'));
assert(matches(api, 'refund').some(doc => /refund/.test(doc.u)));
assert(matches(api, 'invoice').length > 0);
const actionText = api.flatMap(group => group.documents)
  .filter(doc => doc.u === '/docs/api-reference/action-invoice').map(doc => doc.t).join(' ');
assert(actionText.includes('custom action'), 'Endpoint explanation was removed');
assert(!actionText.includes('X-RateLimit-Remaining'), 'Response widget noise is still indexed');
console.log(`Search checks passed: ${docs[0].documents.length} documentation pages, ${api[0].documents.length} API pages, ${developer[0].documents.length} developer guides, ${legal[0].documents.length} legal pages.`);
