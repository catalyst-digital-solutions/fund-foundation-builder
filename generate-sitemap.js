import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.mesagroupconsulting.com';

// Current date for lastmod
const today = new Date().toISOString().split('T')[0];

// All static routes from App.tsx with SEO priority and update frequency
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/for-consumers', priority: '0.9', changefreq: 'weekly' },
  { path: '/for-businesses', priority: '0.9', changefreq: 'weekly' },
  { path: '/build-credit', priority: '0.8', changefreq: 'weekly' },
  { path: '/business-credit-builder', priority: '0.8', changefreq: 'weekly' },
  { path: '/resources', priority: '0.8', changefreq: 'weekly' },
  { path: '/resources/articles', priority: '0.8', changefreq: 'daily' },
  { path: '/resources/news', priority: '0.8', changefreq: 'daily' },
  { path: '/resources/calculators', priority: '0.7', changefreq: 'monthly' },
  { path: '/resources/templates', priority: '0.7', changefreq: 'monthly' },
  { path: '/business-credit', priority: '0.7', changefreq: 'weekly' },
  { path: '/credit-monitoring', priority: '0.8', changefreq: 'weekly' },
  { path: '/credit-repair', priority: '0.9', changefreq: 'weekly' },
  { path: '/diy-credit-repair', priority: '0.8', changefreq: 'weekly' },
  { path: '/credit-cards', priority: '0.7', changefreq: 'weekly' },
  { path: '/personal-loans', priority: '0.7', changefreq: 'weekly' },
  { path: '/auto-loan-refi', priority: '0.7', changefreq: 'weekly' },
  { path: '/student-loan-refi', priority: '0.7', changefreq: 'weekly' },
  { path: '/debt-consolidation-loan', priority: '0.7', changefreq: 'weekly' },
  { path: '/debt-relief', priority: '0.7', changefreq: 'weekly' },
  { path: '/trust-and-will-plan', priority: '0.7', changefreq: 'weekly' },
  { path: '/life-insurance', priority: '0.7', changefreq: 'weekly' },
  { path: '/zero-interest-business-funding', priority: '0.8', changefreq: 'weekly' },
  { path: '/business-funding', priority: '0.8', changefreq: 'weekly' },
  { path: '/business-debt-relief', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, 'public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log(`✅ sitemap.xml generated with ${routes.length} URLs in public/ directory`);
};

generateSitemap();
