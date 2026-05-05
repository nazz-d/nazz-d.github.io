const { chromium } = require('playwright');
const path = require('path');

const root = path.resolve(__dirname, '..');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const files = [
    {
      html: 'pages/resume-ats.html',
      pdf: 'assets/resumes/resume-ats.pdf',
      margin: { top: '0.3in', right: '0.45in', bottom: '0.25in', left: '0.45in' },
    },
    {
      html: 'pages/resume-styled.html',
      pdf: 'assets/resumes/resume-styled.pdf',
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    },
  ];

  for (const file of files) {
    const url = 'file:///' + path.resolve(root, file.html).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.pdf({
      path: path.resolve(root, file.pdf),
      format: 'Letter',
      printBackground: true,
      margin: file.margin,
    });
    console.log('Exported', file.pdf);
  }

  await browser.close();
})();
