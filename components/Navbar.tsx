'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2, Sparkles, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SITE_CONFIG } from '@/lib/site-config';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Flutter', href: '/category/flutter' },
    { name: 'Firebase', href: '/category/firebase' },
    { name: 'Kotlin', href: '/category/kotlin' },
    { name: 'AI Tools', href: '/category/ai-tools' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                {SITE_CONFIG.name}
                <span className="text-xs px-1.5 py-0.5 rounded bg-sky-100 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300 font-semibold">Dev</span>
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">Roman Urdu Tutorials</p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50'
                      : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: ThemeToggle + Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
