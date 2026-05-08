const { chromium } = require('playwright');
const path = require('path');

const root = path.resolve(__dirname, '..');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14

  const url = 'file:///' + path.resolve(root, 'index.html').replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle' });

  // Wait a beat for canvas to render
  await page.waitForTimeout(600);

  await page.screenshot({ path: path.resolve(root, 'tools/mobile-check.png'), fullPage: false });
  console.log('Screenshot saved to tools/mobile-check.png');
  await browser.close();
})();
