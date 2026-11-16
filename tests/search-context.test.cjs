const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { extractSections, SCHEMA } = require('../scripts/search-context.cjs');

const hash = text => crypto.createHash('sha256').update(text).digest('hex');
const origin = 'https://invoiceninja.github.io';

function page(url, article, extras = '') {
  return `<!doctype html><html><head>
    <link rel="canonical" href="${origin}${url}">
    ${extras}
  </head><body><article>${article}</article></body></html>`;
}

function heading(level, id, title) {
  const attr = id ? ` id="${id}"` : '';
  return `<h${level}${attr}>${title}<a class="hash-link" href="#${id || ''}">\u200b</a></h${level}>`;
}

describe('search context schema', () => {
  it('exports schema version 1', () => {
    assert.equal(SCHEMA, 1);
  });
});

describe('section extraction', () => {
  const url = '/docs/user-guide/payments';
  const html = page(url, `
    ${heading(1, 'payments', 'Payments')}
    <p>Record money received from a client and allocate it across invoices.</p>
    ${heading(2, 'refunds', 'Refunds')}
    <p>Issue a refund after a payment has been applied to an invoice.</p>
    ${heading(3, 'partial-refunds', 'Partial refunds')}
    <p>Refund only part of the original payment amount when needed.</p>
    <div data-search-ignore><p>This indexed-looking copy must never become a search section.</p></div>
    <div hidden><p>Hidden copy is not searchable.</p></div>
    <nav><p>Table of contents should be ignored.</p></nav>
    <pre><code>--portal-primary: #337ab7;</code></pre>
    <div class="theme-code-block"><pre>secret css token</pre></div>
  `);

  it('splits H1–H6 sections under canonical article headings', () => {
    const sections = extractSections(html, url, 'docs/user-guide/payments.mdx');
    assert.deepEqual(sections.map(section => section.url), [
      url,
      `${url}#refunds`,
      `${url}#partial-refunds`,
    ]);
    assert.equal(sections[0].pageTitle, 'Payments');
    assert.equal(sections[0].sectionTitle, 'Payments');
    assert.equal(sections[1].sectionTitle, 'Refunds');
    assert.equal(sections[2].sectionTitle, 'Partial refunds');
    assert.deepEqual(sections[1].headingPath, ['Payments', 'Refunds']);
    assert.deepEqual(sections[2].headingPath, ['Payments', 'Refunds', 'Partial refunds']);
    assert.match(sections[0].body, /Record money received/);
    assert.match(sections[1].body, /Issue a refund/);
    assert.match(sections[2].body, /Refund only part/);
  });

  it('keeps sourcePath, summary, and aliases on each record', () => {
    const sections = extractSections(html, url, 'docs/user-guide/payments.mdx');
    for (const section of sections) {
      assert.equal(section.sourcePath, 'docs/user-guide/payments.mdx');
      assert(section.summary.length > 0);
      assert(Array.isArray(section.aliases));
    }
  });

  it('strips ignored, hidden, nav, and user-guide code examples', () => {
    const [pageSection] = extractSections(html, url);
    assert(!pageSection.body.includes('indexed-looking copy'));
    assert(!pageSection.body.includes('Hidden copy'));
    assert(!pageSection.body.includes('Table of contents'));
    assert(!pageSection.body.includes('--portal-primary'));
    assert(!pageSection.body.includes('secret css token'));
  });

  it('keeps configuration examples for self-host and developer guides', () => {
    const selfHost = '/docs/self-host/installation';
    const sections = extractSections(page(selfHost, `
      ${heading(1, 'installation', 'Installation')}
      <p>Install Invoice Ninja on your own server.</p>
      <pre><code>APP_URL=https://ninja.example.com</code></pre>
    `), selfHost);
    assert.match(sections[0].body, /APP_URL=https:\/\/ninja.example.com/);
  });

  it('drops tables on the templates page and keeps them elsewhere', () => {
    const templates = '/docs/advanced-topics/templates';
    const table = `<table><tr><th>Variable</th><td>$company.name</td></tr></table>`;
    const templateSections = extractSections(page(templates, `
      ${heading(1, 'templates', 'Templates')}
      <p>Customize invoice designs with template variables.</p>
      ${table}
    `), templates);
    assert(!templateSections[0].body.includes('$company.name'));

    const other = '/docs/user-guide/invoices';
    const invoiceSections = extractSections(page(other, `
      ${heading(1, 'invoices', 'Invoices')}
      <p>Create and send invoices to clients.</p>
      ${table}
    `), other);
    assert.match(invoiceSections[0].body, /Variable \| \$company\.name/);
  });

  it('folds headings without IDs into the parent section instead of inventing anchors', () => {
    const sections = extractSections(page(url, `
      ${heading(1, 'payments', 'Payments')}
      <p>Record money received from a client and allocate it across invoices.</p>
      <h2>Untitled card heading</h2>
      <p>Card copy stays attached to Payments.</p>
    `), url);
    assert.equal(sections.length, 1);
    assert.equal(sections[0].url, url);
    assert.match(sections[0].body, /Untitled card heading/);
    assert.match(sections[0].body, /Card copy stays attached/);
  });

  it('marks related-link sections so ranking can downweight them', () => {
    const sections = extractSections(page(url, `
      ${heading(1, 'payments', 'Payments')}
      <p>Record money received from a client and allocate it across invoices.</p>
      ${heading(2, 'related-links', 'Related links')}
      <p><a href="/docs/user-guide/invoices">Invoices</a> <a href="/docs/user-guide/credits">Credits</a></p>
    `), url);
    const related = sections.find(section => section.url === `${url}#related-links`);
    assert.equal(related.relatedLinks, true);
    assert.equal(sections[0].relatedLinks, false);
  });

  it('attaches aliases from section-aliases.json', () => {
    const logoUrl = '/docs/user-guide/basic-settings';
    const sections = extractSections(page(logoUrl, `
      ${heading(1, 'basic-settings', 'Basic Settings')}
      <p>Configure company details shown on invoices and the client portal.</p>
      ${heading(2, 'logo', 'Logo')}
      <p>Upload a company logo for invoices and the client portal.</p>
    `), logoUrl);
    const logo = sections.find(section => section.url === `${logoUrl}#logo`);
    assert.deepEqual(logo.aliases, ['company logo', 'client portal logo', 'customer facing branding']);
  });

  it('skips noindex pages, canonical mismatches, and pages without an article', () => {
    assert.deepEqual(extractSections(page(url, `${heading(1, 'payments', 'Payments')}<p>Body</p>`,
      '<meta name="robots" content="noindex, nofollow">'), url), []);
    assert.deepEqual(extractSections(page('/docs/other', `${heading(1, 'payments', 'Payments')}<p>Body</p>`), url), []);
    assert.deepEqual(extractSections(`<!doctype html><html><head><link rel="canonical" href="${origin}${url}"></head>
      <body><main>${heading(1, 'payments', 'Payments')}<p>Body</p></main></body></html>`, url), []);
  });

  it('drops empty sections unless they have aliases', () => {
    const logoUrl = '/docs/user-guide/basic-settings';
    const sections = extractSections(page(logoUrl, `
      ${heading(1, 'basic-settings', 'Basic Settings')}
      ${heading(2, 'logo', 'Logo')}
      ${heading(2, 'empty', 'Empty')}
    `), logoUrl);
    assert(sections.some(section => section.url === `${logoUrl}#logo`));
    assert(!sections.some(section => section.url === `${logoUrl}#empty`));
  });
});

describe('deterministic IDs and content lifecycle', () => {
  const url = '/docs/user-guide/payments';

  function fixture(refundBody = 'Issue a refund after a payment has been applied to an invoice.') {
    return page(url, `
      ${heading(1, 'payments', 'Payments')}
      <p>Record money received from a client and allocate it across invoices.</p>
      ${heading(2, 'refunds', 'Refunds')}
      <p>${refundBody}</p>
    `);
  }

  it('derives destination IDs only from the canonical URL', () => {
    const sections = extractSections(fixture(), url, 'docs/user-guide/payments.mdx');
    for (const section of sections) {
      assert.equal(section.id, hash(section.url).slice(0, 20));
    }
    assert.equal(sections[0].id, hash(url).slice(0, 20));
    assert.equal(sections[1].id, hash(`${url}#refunds`).slice(0, 20));
  });

  it('keeps the same ID when section copy changes', () => {
    const original = extractSections(fixture(), url);
    const updated = extractSections(fixture('Refunds now also reverse gateway fees.'), url);
    assert.equal(updated[1].id, original[1].id);
    assert.notEqual(updated[1].contentHash, original[1].contentHash);
    assert.match(updated[1].body, /reverse gateway fees/);
  });

  it('changes the content hash when heading text changes', () => {
    const original = extractSections(fixture(), url);
    const renamed = extractSections(page(url, `
      ${heading(1, 'payments', 'Payments')}
      <p>Record money received from a client and allocate it across invoices.</p>
      ${heading(2, 'refunds', 'Payment refunds')}
      <p>Issue a refund after a payment has been applied to an invoice.</p>
    `), url);
    assert.equal(renamed[1].id, original[1].id);
    assert.notEqual(renamed[1].contentHash, original[1].contentHash);
    assert.equal(renamed[1].sectionTitle, 'Payment refunds');
  });

  it('omits deleted sections while leaving remaining IDs stable', () => {
    const original = extractSections(fixture(), url);
    const deleted = extractSections(page(url, `
      ${heading(1, 'payments', 'Payments')}
      <p>Record money received from a client and allocate it across invoices.</p>
    `), url);
    assert.equal(deleted.length, 1);
    assert.equal(deleted[0].id, original[0].id);
    assert(!deleted.some(section => section.url === `${url}#refunds`));
  });

  it('reproduces the same IDs and hashes for identical HTML', () => {
    const first = extractSections(fixture(), url, 'docs/user-guide/payments.mdx');
    const second = extractSections(fixture(), url, 'docs/user-guide/payments.mdx');
    assert.deepEqual(second.map(section => ({ id: section.id, contentHash: section.contentHash, url: section.url })),
      first.map(section => ({ id: section.id, contentHash: section.contentHash, url: section.url })));
  });
});
