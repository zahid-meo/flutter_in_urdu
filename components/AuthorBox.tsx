import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';
import { UserCheck, ShieldCheck, Award } from 'lucide-react';

export function AuthorBox() {
  return (
    <div className="my-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 flex flex-col sm:flex-row items-center sm:items-start gap-5">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-md">
        MZ
      </div>
      <div className="text-center sm:text-left space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-1.5">
            {SITE_CONFIG.author.name}
            <ShieldCheck className="w-4 h-4 text-sky-500 inline" />
          </h4>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300 font-medium">
            {SITE_CONFIG.author.role}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {SITE_CONFIG.author.bio}
        </p>
        <div className="pt-1 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-4">
          <Link href="/about" className="text-sky-600 dark:text-sky-400 font-semibold hover:underline">
            Meri complete profile parhein →
          </Link>
          <Link href="/contact" className="hover:underline">
            Sawalat poochein
          </Link>
        </div>
      </div>
    </div>
  );
}
