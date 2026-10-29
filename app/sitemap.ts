import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://muhammadzahid.dev';

  const posts = getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
    '/category/flutter',
    '/category/firebase',
    '/category/kotlin',
    '/category/ai-tools',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticRoutes, ...postUrls];
}
