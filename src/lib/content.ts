export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  description?: string;
  ogImage?: string;
  content: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  date: string;
  thumbnail: string;
  description?: string;
  ogImage?: string;
  content: string;
}

// Simple frontmatter parser (browser-compatible)
function parseFrontmatter(rawContent: string): { data: Record<string, string>; content: string } {
  const lines = rawContent.split('\n');
  const data: Record<string, string> = {};
  let content = rawContent;

  if (lines[0]?.trim() === '---') {
    let endIndex = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i]?.trim() === '---') {
        endIndex = i;
        break;
      }
      const line = lines[i];
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();
        // Remove surrounding quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        data[key] = value;
      }
    }
    if (endIndex > 0) {
      content = lines.slice(endIndex + 1).join('\n').trim();
    }
  }

  return { data, content };
}

// Import all markdown files using Vite's glob import
const blogFilesEn = import.meta.glob('/src/content/blog/en/*.md', { query: '?raw', import: 'default', eager: true });
const blogFilesKo = import.meta.glob('/src/content/blog/ko/*.md', { query: '?raw', import: 'default', eager: true });
const projectFilesEn = import.meta.glob('/src/content/projects/en/*.md', { query: '?raw', import: 'default', eager: true });
const projectFilesKo = import.meta.glob('/src/content/projects/ko/*.md', { query: '?raw', import: 'default', eager: true });

function parseBlogPost(rawContent: string): BlogPost {
  const { data, content } = parseFrontmatter(rawContent);
  return {
    id: data.id || '',
    title: data.title || '',
    date: data.date || '',
    category: data.category || '',
    description: data.description,
    ogImage: data.ogImage,
    content: content,
  };
}

function parseProject(rawContent: string): Project {
  const { data, content } = parseFrontmatter(rawContent);
  return {
    id: data.id || '',
    number: data.number || '',
    title: data.title || '',
    date: data.date || '',
    thumbnail: data.thumbnail || '',
    description: data.description,
    ogImage: data.ogImage,
    content: content,
  };
}

function parseBlogDateToTimestamp(dateString: string): number {
  const trimmed = dateString.trim();

  // Supports formats like "26년 3월 12일" and "2026년 3월 12일".
  const koDateMatch = trimmed.match(/^(\d{2,4})년\s*(\d{1,2})월\s*(\d{1,2})일$/);
  if (koDateMatch) {
    const rawYear = Number.parseInt(koDateMatch[1], 10);
    const year = rawYear < 100 ? 2000 + rawYear : rawYear;
    const month = Number.parseInt(koDateMatch[2], 10);
    const day = Number.parseInt(koDateMatch[3], 10);
    return Date.UTC(year, month - 1, day);
  }

  const parsed = Date.parse(trimmed);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function getBlogPosts(lang: 'en' | 'ko'): BlogPost[] {
  const files = lang === 'ko' ? blogFilesKo : blogFilesEn;
  const posts: BlogPost[] = [];

  for (const path in files) {
    const rawContent = files[path] as string;
    const post = parseBlogPost(rawContent);
    if (post.id) {
      posts.push(post);
    }
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return parseBlogDateToTimestamp(b.date) - parseBlogDateToTimestamp(a.date);
  });
}

export function getBlogPost(id: string, lang: 'en' | 'ko'): BlogPost | null {
  const posts = getBlogPosts(lang);
  return posts.find(post => post.id === id) || null;
}

export function getProjects(lang: 'en' | 'ko'): Project[] {
  const files = lang === 'ko' ? projectFilesKo : projectFilesEn;
  const projects: Project[] = [];

  for (const path in files) {
    const rawContent = files[path] as string;
    const project = parseProject(rawContent);
    if (project.id) {
      projects.push(project);
    }
  }

  // Sort by number (descending)
  return projects.sort((a, b) => parseInt(b.number) - parseInt(a.number));
}

export function getProject(id: string, lang: 'en' | 'ko'): Project | null {
  const projects = getProjects(lang);
  return projects.find(project => project.id === id) || null;
}

// Categories for blog filtering
export const categories = [
  { id: 'all', name: 'All', nameKo: '전체' },
  { id: 'makingstory', name: 'Making Story', nameKo: '제작기' },
  { id: 'notes', name: 'Notes', nameKo: '노트' },
  // { id: 'category2', name: 'Category2', nameKo: '카테고리2' },
  // { id: 'category3', name: 'Category3', nameKo: '카테고리3' },
];
