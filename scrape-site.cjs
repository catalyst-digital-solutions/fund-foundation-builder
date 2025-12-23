const puppeteer = require('puppeteer');
const fs = require('fs');

const BASE_URL = 'http://localhost:8080';

const routes = [
  '/',
  '/about',
  '/contact',
  '/for-consumers',
  '/credit-repair',
  '/credit-repair-2',
  '/diy-credit-repair',
  '/build-credit',
  '/credit-monitoring',
  '/credit-cards',
  '/personal-loans',
  '/auto-loan-refi',
  '/student-loan-refi',
  '/student-loan-refi-2',
  '/debt-consolidation-loan',
  '/debt-relief',
  '/trust-and-will-plan',
  '/life-insurance',
  '/for-businesses',
  '/business-credit-builder',
  '/business-funding',
  '/business-funding-2',
  '/zero-interest-business-funding',
  '/zero-interest-business-funding-2',
  '/business-debt-relief',
  '/business-credit',
  '/resources',
  '/resources/articles',
  '/resources/news',
  '/resources/calculators',
  '/resources/templates'
];

async function scrapePage(browser, route) {
  const page = await browser.newPage();
  const url = `${BASE_URL}${route}`;

  console.log(`Scraping: ${url}`);

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.waitForSelector('body', { timeout: 5000 });

    // Wait a bit for React to render
    await new Promise(r => setTimeout(r, 1000));

    const data = await page.evaluate(() => {
      // Get page title
      const title = document.title || '';

      // Get all text content, excluding scripts and styles
      const bodyText = document.body.innerText || '';

      // Get all headings
      const headings = {
        h1: Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim()),
        h2: Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim()),
        h3: Array.from(document.querySelectorAll('h3')).map(h => h.innerText.trim())
      };

      // Get all links
      const links = Array.from(document.querySelectorAll('a[href]')).map(a => ({
        text: a.innerText.trim().substring(0, 100),
        href: a.getAttribute('href')
      })).filter(link => link.href && link.text);

      // Separate internal and external links
      const internalLinks = links.filter(l =>
        l.href.startsWith('/') || l.href.startsWith(window.location.origin)
      );
      const externalLinks = links.filter(l =>
        l.href.startsWith('http') && !l.href.startsWith(window.location.origin)
      );

      // Get meta description if exists
      const metaDesc = document.querySelector('meta[name="description"]')?.content || '';

      return {
        title,
        metaDescription: metaDesc,
        headings,
        bodyText,
        internalLinks: [...new Map(internalLinks.map(l => [l.href, l])).values()],
        externalLinks: [...new Map(externalLinks.map(l => [l.href, l])).values()]
      };
    });

    await page.close();

    return {
      url: `https://staging.mesagroupconsulting.com${route}`,
      route,
      ...data
    };

  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    await page.close();
    return {
      url: `https://staging.mesagroupconsulting.com${route}`,
      route,
      error: error.message
    };
  }
}

async function main() {
  console.log('Starting website scrape...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = [];

  for (const route of routes) {
    const data = await scrapePage(browser, route);
    results.push(data);
  }

  await browser.close();

  // Save JSON
  const jsonOutput = JSON.stringify(results, null, 2);
  fs.writeFileSync('website-scrape.json', jsonOutput);
  console.log('\n✅ JSON saved to website-scrape.json');

  // Also create a readable text version
  let textOutput = `MESA GROUP CONSULTING - FULL WEBSITE COPY\n`;
  textOutput += `Scraped: ${new Date().toISOString()}\n`;
  textOutput += `Total Pages: ${results.length}\n`;
  textOutput += `${'='.repeat(80)}\n\n`;

  for (const page of results) {
    textOutput += `\n${'='.repeat(80)}\n`;
    textOutput += `PAGE: ${page.url}\n`;
    textOutput += `${'='.repeat(80)}\n\n`;

    if (page.error) {
      textOutput += `ERROR: ${page.error}\n`;
      continue;
    }

    textOutput += `TITLE: ${page.title}\n\n`;

    if (page.headings.h1.length) {
      textOutput += `H1 HEADINGS:\n`;
      page.headings.h1.forEach(h => textOutput += `  - ${h}\n`);
      textOutput += '\n';
    }

    if (page.headings.h2.length) {
      textOutput += `H2 HEADINGS:\n`;
      page.headings.h2.forEach(h => textOutput += `  - ${h}\n`);
      textOutput += '\n';
    }

    textOutput += `FULL PAGE TEXT:\n${'-'.repeat(40)}\n`;
    textOutput += page.bodyText + '\n\n';

    if (page.internalLinks.length) {
      textOutput += `INTERNAL LINKS (${page.internalLinks.length}):\n`;
      page.internalLinks.forEach(l => textOutput += `  - ${l.text}: ${l.href}\n`);
      textOutput += '\n';
    }

    if (page.externalLinks.length) {
      textOutput += `EXTERNAL LINKS (${page.externalLinks.length}):\n`;
      page.externalLinks.forEach(l => textOutput += `  - ${l.text}: ${l.href}\n`);
      textOutput += '\n';
    }
  }

  fs.writeFileSync('website-scrape.txt', textOutput);
  console.log('✅ Text version saved to website-scrape.txt');

  console.log(`\n📊 Summary: Scraped ${results.length} pages`);
}

main().catch(console.error);
