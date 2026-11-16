const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { test, expect } = require('@playwright/test');

const root = path.resolve(__dirname, '../build');
const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function startServer() {
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + path.sep)) {
      res.writeHead(403).end();
      return;
    }
    if (!path.extname(file)) file = fs.existsSync(`${file}.html`) ? `${file}.html` : path.join(file, 'index.html');
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404).end();
      return;
    }
    res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve, reject) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

let server;
let baseUrl;

test.beforeAll(async () => {
  if (!fs.existsSync(path.join(root, 'search-context.json'))) {
    throw new Error('Production search assets are missing. Run npm run build before search:smoke.');
  }
  server = await startServer();
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.afterAll(() => {
  server?.close();
});

test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => {
    if (new URL(route.request().url()).hostname === '127.0.0.1') return route.continue();
    return route.abort();
  });
});

async function expectTopResult(scope, query, href) {
  await scope.getByRole('searchbox').fill(query);
  const link = scope.getByRole('region', { name: 'Documentation', exact: true }).getByRole('link').first();
  await expect(link).toHaveAttribute('href', href);
  await expect(scope.getByRole('status')).toContainText('matching sections');
  await expect(scope.getByRole('alert')).toHaveCount(0);
}

test('navbar search finds a guide and opens the full results page', async ({ page }) => {
  const blocked = [];
  page.on('requestfailed', request => blocked.push(request.url()));
  await page.goto(`${baseUrl}/`);
  await expectTopResult(page, 'gateway fees', '/docs/user-guide/gateways#limitsfees');
  expect(blocked.some(url => url.startsWith('https://'))).toBe(true);

  await page.getByRole('link', { name: 'See all results' }).click();
  await expect(page).toHaveURL(/\/search\?q=gateway(?:\+|%20)fees/);
  const main = page.getByRole('main');
  await expect(main.getByRole('searchbox')).toHaveValue('gateway fees');
  await expect(main.getByRole('region', { name: 'Documentation', exact: true }).getByRole('link').first())
    .toHaveAttribute('href', '/docs/user-guide/gateways#limitsfees');
});

test('search page ranks known queries and can hide a category', async ({ page }) => {
  await page.goto(`${baseUrl}/search`);
  const main = page.getByRole('main');
  await expectTopResult(main, 'payment reminders', '/docs/user-guide/advanced-settings#reminder-templates');
  await expectTopResult(main, 'custom invoice fields', '/docs/user-guide/advanced-settings#custom_fields');
  await expectTopResult(main, 'add my logo to client portal', '/docs/user-guide/basic-settings#logo');

  await main.getByRole('button', { name: 'Documentation' }).click();
  await expect(main.getByRole('button', { name: 'Documentation' })).toHaveAttribute('aria-pressed', 'false');
  await expect(page).toHaveURL(/hide=Documentation/);
  await expect(main.getByRole('region', { name: 'Documentation', exact: true })).toHaveCount(0);
  await expect(main.getByRole('status')).not.toContainText('Could not load');
});
