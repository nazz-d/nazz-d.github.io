const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const files = [
    'index.html',
    'pages/journey.html',
    'pages/homelab.html',
    'pages/certifications.html',
    'pages/resume.html',
    'pages/skillsusa.html',
    'pages/writeups.html',
    'pages/writeup-cyberlaunch-2026.html',
    'pages/wazuh.html',
    'pages/opnsense.html',
    'pages/proxmox.html',
    'pages/switching.html',
    'pages/identity.html',
    'pages/remote-access.html',
    'pages/status.html',
  ];

  const screenshotsDir = path.resolve(root, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

  for (const file of files) {
    const url = 'file:///' + path.resolve(root, file).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    const name = file.replace('pages/', '').replace('.html', '');
    await page.screenshot({ path: path.resolve(screenshotsDir, `${name}.png`), fullPage: true });
    console.log('Captured', file);
  }

  await browser.close();
  console.log('Done - screenshots saved to screenshots/');
})();
