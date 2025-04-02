const fs = require('fs');
const path = require('path');

const baseUrl = 'https://pranjaldev.live';

const pages = [
  '',
  '#about',
  '#education',
  '#projects',
  '#work-experience',
  '#contact'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages
        .map(page => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
              <priority>${page === '' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync(
    path.join(__dirname, '../../public/sitemap.xml'),
    sitemap.trim()
  );
  console.log('Sitemap generated successfully!');
};

generateSitemap(); 