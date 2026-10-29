import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Markdown from 'markdown-to-jsx';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/posts';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TableOfContents } from '@/components/TableOfContents';
import { AuthorBox } from '@/components/AuthorBox';
import { ArticleCard } from '@/components/ArticleCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { CodeBlock } from '@/components/CodeBlock';
import { Calendar, Clock, User, Tag, Share2, Sparkles } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Muhammad Zahid`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  // Auto extract headings for Table of Contents
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;
  while ((match = headingRegex.exec(post.content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.push({ id, text, level });
  }

  // Schema.org Article structured data (E-E-A-T & Google News/Rich Results)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://muhammadzahid.dev/about',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'ur-PK',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: post.category.toUpperCase(), href: `/category/${post.category}` },
          { label: post.title },
        ]}
      />

      {/* Article Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300 uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {post.description}
        </p>

        {/* Metadata info: Author, publish date, update date */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
              MZ
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">{post.author}</p>
              <p className="text-[11px] text-slate-400">Flutter Developer & Author</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Published: {post.publishedAt}</span>
            </div>
            {post.updatedAt !== post.publishedAt && (
              <span className="text-sky-600 dark:text-sky-400">
                (Updated: {post.updatedAt})
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <TableOfContents headings={headings} />

      {/* Safe Ad Placement: Top of Content */}
      <AdPlaceholder format="horizontal" />

      {/* Main Content Article Body */}
      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-base">
        <Markdown
          options={{
            overrides: {
              pre: ({ children }: any) => {
                const codeElement = children?.props;
                const rawCode = codeElement?.children || '';
                const language = (codeElement?.className || '').replace('lang-', '') || 'dart';
                return <CodeBlock code={String(rawCode).trim()} language={language} />;
              },
              h2: ({ children }: any) => {
                const text = String(children);
                const id = text
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-');
                return (
                  <h2 id={id} className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white pt-6 pb-2 scroll-mt-20">
                    {children}
                  </h2>
                );
              },
              h3: ({ children }: any) => {
                const text = String(children);
                const id = text
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-');
                return (
                  <h3 id={id} className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 pt-4 pb-1 scroll-mt-20">
                    {children}
                  </h3>
                );
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>

      {/* Mid/End-of-Content Ad Placeholder */}
      <AdPlaceholder format="horizontal" />

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 flex-wrap">
          <Tag className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs text-slate-400 mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Author Card Box (Critical for Google E-E-A-T) */}
      <AuthorBox />

      {/* Related Tutorials Section */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Muta&apos;aliqah Tutorials (Related Guides)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <ArticleCard key={related.slug} post={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
