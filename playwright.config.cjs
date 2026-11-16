const { defineConfig } = require('@playwright/test');

// Node's extraction tests match Playwright's default *.test.cjs pattern and are
// run by search:test. This suite is only the browser smoke check.
module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.cjs',
  timeout: 60_000,
  expect: { timeout: 30_000 },
  workers: 1,
  use: { browserName: 'chromium' },
});
