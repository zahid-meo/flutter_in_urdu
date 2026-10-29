import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostMetadata } from './types';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Estimate reading time (~200 words per minute)
      const wordCount = content.split(/\s+/g).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        category: data.category || 'flutter',
        author: data.author || 'Muhammad Zahid',
        publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
        updatedAt: data.updatedAt || data.publishedAt || new Date().toISOString().split('T')[0],
        readingTime: data.readingTime || readingTime,
        tags: data.tags || [],
        featured: Boolean(data.featured),
      } as PostMetadata;
    });

  return allPostsData.sort((a, b) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    let fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`);
    }
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      category: data.category || 'flutter',
      author: data.author || 'Muhammad Zahid',
      publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
      updatedAt: data.updatedAt || data.publishedAt || new Date().toISOString().split('T')[0],
      readingTime: data.readingTime || readingTime,
      tags: data.tags || [],
      featured: Boolean(data.featured),
      content,
    };
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter((post) => post.slug !== currentSlug && post.category.toLowerCase() === category.toLowerCase())
    .slice(0, limit);
}
