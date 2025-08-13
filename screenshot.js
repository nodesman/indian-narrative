const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    const url = 'http://127.0.0.1:4000';
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Set viewport to capture the full page height
    const bodyHandle = await page.$('body');
    const { height } = await bodyHandle.boundingBox();
    await bodyHandle.dispose();
    await page.setViewport({ width: 1280, height: Math.ceil(height) });


    const timestamp = new Date().toISOString().replace(/:/g, '-').slice(0, -5);
    const filename = `screenshot-${timestamp}.png`;

    console.log(`Taking screenshot: ${filename}`);
    await page.screenshot({ path: filename, fullPage: false }); // fullPage is false because we set viewport

    console.log('Closing browser...');
    await browser.close();

    console.log(`
✅ Screenshot saved as ${filename}`);
    console.log('Please view the screenshot and let me know what design changes you\'d like.');

  } catch (error) {
    console.error('❌ An error occurred while taking the screenshot:');
    console.error(error);
    if (error.message.includes('ECONNREFUSED')) {
        console.error('\nHint: Is your Jekyll server running? Please start it with `bundle exec jekyll serve` before running this script.');
    }
    process.exit(1);
  }
})();
