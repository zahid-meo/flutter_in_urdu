import Link from 'next/link';
import { PostMetadata } from '@/lib/types';
import { Calendar, Clock, Tag } from 'lucide-react';

interface ArticleCardProps {
  post: PostMetadata;
}

export function ArticleCard({ post }: ArticleCardProps) {
  const categoryBadgeColors: Record<string, string> = {
    flutter: 'bg-sky-100 text-sky-700 dark:bg-sky-950/70 dark:text-sky-300 border-sky-200 dark:border-sky-800',
    firebase: 'bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    kotlin: 'bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    'ai-tools': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  };

  const badgeClass = categoryBadgeColors[post.category] || categoryBadgeColors.flutter;

  return (
    <article className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-lg transition-all duration-200">
      <div>
        {/* Category & Read Time */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Link
            href={`/category/${post.category}`}
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${badgeClass}`}
          >
            {post.category}
          </Link>
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 mb-2.5">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
          {post.description}
        </p>
      </div>

      {/* Meta Footer */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span className="font-medium text-slate-700 dark:text-slate-300">
          By {post.author}
        </span>
        <div className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        </div>
      </div>
    </article>
  );
}
