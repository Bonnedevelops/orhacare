import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')
const publicDir = resolve(projectRoot, 'public')

const SITE_URL = process.env.SITE_URL

if (!SITE_URL) {
  console.error('Missing SITE_URL. Run with: SITE_URL=https://your-domain.com npm run generate:sitemap')
  process.exit(1)
}

const routes = ['/', '/services', '/about', '/contact']
const today = new Date().toISOString().split('T')[0]

const urlSet = routes
  .map(
    (path) => `  <url>
    <loc>${SITE_URL.replace(/\/$/, '')}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')

const sitemap = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
${urlSet}
</urlset>
`

if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true })

writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap.trim() + '\\n', 'utf8')

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL.replace(/\/$/, '')}/sitemap.xml
`

writeFileSync(resolve(publicDir, 'robots.txt'), robots, 'utf8')

console.log('Generated public/sitemap.xml and public/robots.txt')
