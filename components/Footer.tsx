import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';
import { Code2, Globe, Share2, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {SITE_CONFIG.tagline}. Pakistan ke beginners, students aur mobile app developers ke liye aasan Roman Urdu mein Flutter, Firebase, Kotlin aur Modern AI tools ke real-world practical tutorials.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-sky-600 hover:border-sky-500 transition"
                aria-label="GitHub Profile"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-sky-600 hover:border-sky-500 transition"
                aria-label="LinkedIn Profile"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.author.email}`}
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-sky-600 hover:border-sky-500 transition"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/category/flutter" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  Flutter Tutorials
                </Link>
              </li>
              <li>
                <Link href="/category/firebase" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  Firebase Integration
                </Link>
              </li>
              <li>
                <Link href="/category/kotlin" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  Kotlin & Android
                </Link>
              </li>
              <li>
                <Link href="/category/ai-tools" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  AI Tools for Coders
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policy (Crucial for AdSense) */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Zaroori Safhaat
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  About Muhammad Zahid
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved. Tamam huqooq mehfooz hain.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Pakistani Developers
          </p>
        </div>
      </div>
    </footer>
  );
}
