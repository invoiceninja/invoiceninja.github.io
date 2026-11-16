const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { performance } = require('node:perf_hooks');
const { chromium, expect } = require('@playwright/test');
const root = path.resolve(__dirname, '../build');
const mime = { '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  let file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  if (!path.extname(file)) file = fs.existsSync(file + '.html') ? file + '.html' : path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});

async function main() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch();
  const rows = [];
  try {
    for (let run = 0; run < 3; run++) {
      const context = await browser.newContext();
      await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:${server.address().port}/search`);
      const main = page.getByRole('main');
      const input = main.getByRole('searchbox');
      const cases = [['gateway fees', '/docs/user-guide/gateways#limitsfees'],
        ['payment reminders', '/docs/user-guide/advanced-settings#reminder-templates'],
        ['custom invoice fields', '/docs/user-guide/advanced-settings#custom_fields'],
        ['add my logo to client portal', '/docs/user-guide/basic-settings#logo']];
      for (const [index, [query, url]] of cases.entries()) {
        const started = performance.now();
        await input.fill(query);
        await expect(main.getByRole('region', { name: 'Documentation', exact: true }).getByRole('link').first()).toHaveAttribute('href', url);
        await expect(main.getByRole('status')).not.toContainText('Searching');
        rows.push({ run, query, cold: index === 0, milliseconds: +(performance.now() - started).toFixed(1) });
      }
      if (!run) {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.screenshot({ path: '.search-artifacts/search-mobile.png', fullPage: true });
      }
      await context.close();
    }
    fs.writeFileSync('.search-artifacts/browser-timings.json', JSON.stringify({
      contextVersion: JSON.parse(fs.readFileSync(path.join(root, 'search-context.json'), 'utf8')).contextVersion,
      indexVersion: JSON.parse(fs.readFileSync(path.join(root, 'search-context.json'), 'utf8')).indexVersion,
      conditions: 'Headless Chromium; local uncompressed static server; three fresh browser contexts; four queries per run; no CPU/network throttling; includes input handling, the 180ms debounce, all four scopes and Playwright assertion polling. External requests blocked.', rows }, null, 2) + '\n');
    console.table(rows);
  } finally { await browser.close(); server.close(); }
}
fs.mkdirSync('.search-artifacts', { recursive: true });
main().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
