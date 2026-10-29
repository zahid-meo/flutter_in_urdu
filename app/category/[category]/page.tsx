import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostsByCategory } from '@/lib/posts';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArticleCard } from '@/components/ArticleCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return SITE_CONFIG.categories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const currentCategory = SITE_CONFIG.categories.find(
    (c) => c.slug.toLowerCase() === category.toLowerCase()
  );

  if (!currentCategory) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${currentCategory.name} Tutorials in Roman Urdu | Muhammad Zahid`,
    description: `${currentCategory.name} ke step-by-step programming tutorials Roman Urdu mein. ${currentCategory.description}`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const currentCategory = SITE_CONFIG.categories.find(
    (c) => c.slug.toLowerCase() === category.toLowerCase()
  );

  if (!currentCategory) {
    notFound();
  }

  const posts = getPostsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { label: 'Categories', href: '/' },
          { label: currentCategory.name },
        ]}
      />

      {/* Category Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-10">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300 uppercase tracking-wider">
          Category Archive
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
          {currentCategory.name} Tutorials (Roman Urdu)
        </h1>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          {currentCategory.description}
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
          <p className="text-sm text-slate-500">
            Is category mein jald naye tutorials shamil kiye ja rahe hain. 
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Category Ad slot */}
      <AdPlaceholder format="horizontal" className="mt-12" />
    </div>
  );
}
