import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { SITE_CONFIG } from '@/lib/site-config';
import { ArticleCard } from '@/components/ArticleCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { Smartphone, Flame, Cpu, Bot, ArrowRight, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((p) => p.featured).slice(0, 3);
  const recentPosts = allPosts.slice(0, 6);

  const categoryIcons: Record<string, React.ReactNode> = {
    flutter: <Smartphone className="w-6 h-6 text-sky-500" />,
    firebase: <Flame className="w-6 h-6 text-amber-500" />,
    kotlin: <Cpu className="w-6 h-6 text-purple-500" />,
    'ai-tools': <Bot className="w-6 h-6 text-emerald-500" />,
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-sky-50/60 via-transparent to-transparent dark:from-sky-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Pakistan Ka No.1 Roman Urdu Developer Blog</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Flutter aur Modern AI Tools Seekhein,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
              Aasan Roman Urdu Mein
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Beginners, CS students aur junior mobile developers ke liye step-by-step practical guides, real code examples, aur problem-solving tutorials.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/category/flutter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition shadow-sm"
            >
              <span>Flutter Tutorials Shuru Karein</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-semibold text-sm transition shadow-sm"
            >
              <span>Muhammad Zahid Ke Baare Mein</span>
            </Link>
          </div>

          {/* Quick Stats/Highlights */}
          <div className="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">100% Practical Code</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Simple Roman Urdu</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Zero Copy-Paste</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Real Developer Tips</span>
            </div>
          </div>

        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Sikhne Ke Zariye (Tutorial Categories)
            </h2>
            <p className="text-sm text-slate-500 mt-1">Apna pasandeeda topic choose karein</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-sky-500 dark:hover:border-sky-400 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {categoryIcons[cat.slug] || <BookOpen className="w-6 h-6 text-sky-500" />}
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors flex items-center justify-between">
                <span>{cat.name}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Placeholder 1 (CLS Safe) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder format="horizontal" />
      </div>

      {/* Featured / Recent Tutorials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Taza Tareen Tutorials (Recent Posts)
            </h2>
            <p className="text-sm text-slate-500 mt-1">Har hafte naye step-by-step guides</p>
          </div>
        </div>

        {allPosts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">Abhi articles publish ho rahe hain</h3>
            <p className="text-xs text-slate-500 mt-1">Pehle tutorial ka full draft tayyar hai aur niche shamil kiya ja raha hai.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
