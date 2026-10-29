import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/site-config';
import { ShieldCheck, Award, GraduationCap, Code2, Heart, CheckCircle2, Terminal } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Muhammad Zahid - Flutter Developer & Tech Blogger',
  description: 'Muhammad Zahid ke baare mein janiye: BS Computer Science graduate, Flutter developer aur Pakistan ke CS students ke liye Roman Urdu tutorial platform ke founder.',
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Zahid',
    url: 'https://muhammadzahid.dev/about',
    jobTitle: 'Flutter Developer & Technical Writer',
    alumniOf: 'BS Computer Science',
    knowsAbout: ['Flutter', 'Firebase', 'Kotlin', 'Android App Development', 'Artificial Intelligence in Software Development'],
    sameAs: [
      SITE_CONFIG.author.github,
      SITE_CONFIG.author.linkedin,
      SITE_CONFIG.author.twitter,
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero section */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-10 mb-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shrink-0">
            MZ
          </div>
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Founder & Lead Author</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About Muhammad Zahid
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              BS Computer Science | Flutter & Mobile Developer | Technical Educator
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Article */}
      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-8 leading-relaxed">
        
        {/* Intro */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            Mera Ta'aruf (Who I Am)
          </h2>
          <p>
            Assalam-o-Alaikum! Mera naam <strong>Muhammad Zahid</strong> hai. Main ek certified BS Computer Science graduate aur professional <strong>Flutter & Mobile App Developer</strong> hoon.
          </p>
          <p>
            Pichle kayi saalon se main production-level cross-platform applications (Android aur iOS) design aur develop kar raha hoon. Mera main focus Flutter, Google Firebase backend architecture, Kotlin/Android, aur software engineering mein modern AI tools (Cursor, Claude Code, GitHub Copilot) ke behtareen istemaal par hai.
          </p>
        </div>

        {/* Mission / Kyun banaya yeh blog? */}
        <div className="p-6 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900">
          <h2 className="text-2xl font-bold text-sky-950 dark:text-sky-100 mb-3 flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            Is Website Ka Maqsad (Our Mission)
          </h2>
          <p className="text-slate-700 dark:text-slate-200">
            Jab main Computer Science ka student tha, to aksar official documentation aur international tutorials mein technical English itni complex hoti thi ke shuruati concepts samajhna mushkil ho jata tha. 
          </p>
          <p className="text-slate-700 dark:text-slate-200 mt-3">
            Is platform ka maqsad Pakistan, India aur poore sub-continent ke Urdu/Hindi samajhne wale students aur beginner developers ke liye coding ko <strong>100% simple aur practical</strong> banana hai. Hum technical terms (jaise State Management, Widget Tree, Asynchronous Programming, Firestore Listeners) ko English mein rakhte hain, lekin unki explanation bilkul aasan <strong>Roman Urdu</strong> mein karte hain taake har student aasani se samajh sake.
          </p>
        </div>

        {/* What You Will Learn Here */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            Aap Is Platform Par Kya Seekhenge?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-base">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Flutter App Development
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Zero se lekar production tak: Dart basics, Flutter UI widgets, Provider, Bloc, Riverpod aur responsive design techniques.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-base">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Firebase & Backend
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Firebase Authentication, Cloud Firestore CRUD, Cloud Storage, Push Notifications aur real-time data sync.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-base">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Kotlin & Jetpack Compose
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Native Android development, Jetpack Compose modern UI, Coroutines aur MVVM architecture principles.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-base">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                AI Tools for Coders
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Cursor IDE, Claude Code, GitHub Copilot aur AI prompting ki madad se faster development aur bug fixing methods.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Standards & Accuracy (E-E-A-T for AdSense) */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            Hamari Quality Policy & Editorial Standards
          </h2>
          <p>
            Is website par shaya hone wala har tutorial <strong>100% original, verified aur practical testing ke baad</strong> likha jata hai:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Har code snippet ko pehle local environment (Android Studio / VS Code) mein run aur verify kiya jata hai.</li>
            <li>Hum kisi tarah ka clickbait, fake earning schemes, ya copy-pasted content publish nahi karte.</li>
            <li>Har article mein common errors aur unka solution clearly mention kiya jata hai taake reader ko frustration na ho.</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-center">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
            Koi sawaal ya project discussion hai?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-md mx-auto">
            Aap mujhe directly contact kar sakte hain. Main students aur junior coders ki guide karne ke liye hamesha tayyar hoon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition shadow-sm"
          >
            Contact Muhammad Zahid
          </Link>
        </div>

      </article>
    </div>
  );
}
