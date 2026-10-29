import { List } from 'lucide-react';

interface TableOfContentsProps {
  headings: { id: string; text: string; level: number }[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) return null;

  return (
    <div className="my-8 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
      <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white mb-3">
        <List className="w-4 h-4 text-sky-600 dark:text-sky-400" />
        <span>Is Tutorial Mein Kya Hai (Table of Contents)</span>
      </div>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${heading.level === 3 ? 'ml-4' : 'font-medium'}`}
          >
            <a
              href={`#${heading.id}`}
              className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
