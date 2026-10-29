import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Schema for Google SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://muhammadzahid.dev',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://muhammadzahid.dev${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6 flex-wrap">
        <Link href="/" className="flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {isLast || !item.href ? (
                <span className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[200px] sm:max-w-xs">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
