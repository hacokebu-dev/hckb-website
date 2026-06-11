import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = 'https://hacokebu.com';
const DIST_DIR = path.join(process.cwd(), 'dist');

type ContentType = 'blog' | 'project';
type Lang = 'en' | 'ko';

interface ContentEntry {
    id: string;
    title: string;
    description: string;
    excerpt: string;
    lang: Lang;
    type: ContentType;
}

function parseFrontmatter(content: string): { data: Record<string, string>; body: string } {
    const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!match) {
        return { data: {}, body: content };
    }

    const data: Record<string, string> = {};
    for (const line of match[1].split('\n')) {
        const idx = line.indexOf(':');
        if (idx < 0) continue;
        const key = line.slice(0, idx).trim();
        const value = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
        data[key] = value;
    }

    return { data, body: match[2] };
}

function stripMarkdown(markdown: string): string {
    return markdown
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`[^`]*`/g, ' ')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/^#{1,6}\s+/gm, '')
        .replace(/[>*_~#-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function trimToLength(value: string, maxLength: number): string {
    if (value.length <= maxLength) return value;
    return `${value.slice(0, maxLength - 1).trim()}...`;
}

function loadEntries(type: ContentType, lang: Lang): ContentEntry[] {
    const dir = path.join(process.cwd(), 'src', 'content', type === 'project' ? 'projects' : 'blog', lang);
    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir).filter((file) => file.endsWith('.md'));
    return files.map((file) => {
        const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
        const { data, body } = parseFrontmatter(raw);
        const plain = stripMarkdown(body);

        return {
            id: data.id || file.replace(/\.md$/, ''),
            title: data.title || data.id || file.replace(/\.md$/, ''),
            description: trimToLength(data.description || plain, 160),
            excerpt: trimToLength(plain, 320),
            lang,
            type,
        };
    });
}

function ensureTrailingSlash(url: string): string {
    return url.endsWith('/') ? url : `${url}/`;
}

function canonicalPath(type: ContentType, lang: Lang, id: string): string {
    const prefix = lang === 'ko' ? '/ko' : '';
    const segment = type === 'project' ? 'project' : 'blog';
    return ensureTrailingSlash(`${prefix}/${segment}/${id}`);
}

function injectOrReplace(html: string, pattern: RegExp, replacement: string): string {
    if (pattern.test(html)) {
        return html.replace(pattern, replacement);
    }
    return html;
}

function applySeoTemplate(html: string, entry: ContentEntry, altEnUrl: string, altKoUrl: string): string {
    const pageTypeLabel = entry.type === 'project' ? 'Projects' : 'Blog';
    const canonicalUrl = `${SITE_URL}${canonicalPath(entry.type, entry.lang, entry.id)}`;
    const title = `${entry.title} | HACO & KEBU ${pageTypeLabel}`;

    let updated = html;

    updated = injectOrReplace(updated, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
    updated = injectOrReplace(
        updated,
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/i,
        `<meta name="description" content="${escapeHtml(entry.description)}" />`
    );
    updated = injectOrReplace(
        updated,
        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?\s*>/i,
        `<meta property="og:title" content="${escapeHtml(title)}" />`
    );
    updated = injectOrReplace(
        updated,
        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?\s*>/i,
        `<meta property="og:description" content="${escapeHtml(entry.description)}" />`
    );
    updated = injectOrReplace(
        updated,
        /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?\s*>/i,
        `<meta property="og:url" content="${canonicalUrl}" />`
    );

    const extraHead = [
        `<link rel="canonical" href="${canonicalUrl}" />`,
        `<link rel="alternate" hrefLang="en" href="${altEnUrl}" />`,
        `<link rel="alternate" hrefLang="ko" href="${altKoUrl}" />`,
        `<link rel="alternate" hrefLang="x-default" href="${altEnUrl}" />`,
    ].join('\n  ');

    if (!updated.includes('rel="canonical"')) {
        updated = updated.replace('</head>', `  ${extraHead}\n</head>`);
    }

    const noscriptExcerpt = `<noscript><article><h1>${escapeHtml(entry.title)}</h1><p>${escapeHtml(entry.excerpt)}</p></article></noscript>`;
    if (!updated.includes('<noscript><article><h1>')) {
        updated = updated.replace('</body>', `  ${noscriptExcerpt}\n</body>`);
    }

    return updated;
}

function writeRouteFiles(routePath: string, html: string): void {
    const cleanRoute = routePath.replace(/^\//, '').replace(/\/$/, '');
    const htmlPath = path.join(DIST_DIR, `${cleanRoute}.html`);
    const indexPath = path.join(DIST_DIR, cleanRoute, 'index.html');

    fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
    fs.mkdirSync(path.dirname(indexPath), { recursive: true });

    fs.writeFileSync(htmlPath, html, 'utf-8');
    fs.writeFileSync(indexPath, html, 'utf-8');
}

function generatePrerenderPages(): void {
    const indexHtmlPath = path.join(DIST_DIR, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
        console.error('Error: dist/index.html not found. Run build first.');
        process.exit(1);
    }

    const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
    const allEntries: ContentEntry[] = [
        ...loadEntries('blog', 'en'),
        ...loadEntries('blog', 'ko'),
        ...loadEntries('project', 'en'),
        ...loadEntries('project', 'ko'),
    ];

    const idsByType = {
        blog: new Set(allEntries.filter((entry) => entry.type === 'blog').map((entry) => entry.id)),
        project: new Set(allEntries.filter((entry) => entry.type === 'project').map((entry) => entry.id)),
    };

    let generated = 0;
    for (const entry of allEntries) {
        if (!idsByType[entry.type].has(entry.id)) continue;

        const enUrl = `${SITE_URL}${canonicalPath(entry.type, 'en', entry.id)}`;
        const koUrl = `${SITE_URL}${canonicalPath(entry.type, 'ko', entry.id)}`;
        const routePath = canonicalPath(entry.type, entry.lang, entry.id);
        const html = applySeoTemplate(baseHtml, entry, enUrl, koUrl);

        writeRouteFiles(routePath, html);
        generated += 1;
        console.log(`✓ Prerendered ${routePath}`);
    }

    console.log(`\n✅ Prerender pages generated for ${generated} blog/project detail routes.`);
}

generatePrerenderPages();