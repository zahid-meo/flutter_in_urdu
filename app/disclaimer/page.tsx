import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/site-config';
import { AlertTriangle, BookOpen, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | Muhammad Zahid',
  description: 'Disclaimer for Muhammad Zahid programming tutorials blog: Content is purely for educational and informational purposes.',
};

export default function DisclaimerPage() {
  const lastUpdated = 'October 28, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: 'Disclaimer' }]} />

      <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
          <span>Important Notice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Disclaimer (Wazahat-o-Bari-uz-Zimma)
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-sm sm:text-base">
        
        <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 my-2">
          <p className="font-semibold text-amber-950 dark:text-amber-200 mb-1">
            Mukhtasar Khulasa (Executive Summary):
          </p>
          <p className="text-amber-900 dark:text-amber-300 text-sm">
            Is website par mojood tamam tutorials, articles, source code snippets aur guide sirf <strong>taleemi (educational) aur maloomati (informational)</strong> maqasid ke liye hain. Hum kisi qisam ki guaranteed income, get-rich-quick, ya official Google/Flutter endorsement ka dawa nahi karte.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          1. Taleemi Maqasid (Educational Purposes Only)
        </h2>
        <p>
          <strong>{SITE_CONFIG.name}</strong> par shaya hone wali tamam baten mobile app development (Flutter, Firebase, Kotlin) aur modern developer AI tools ko aasan Roman Urdu mein sikhane ke liye hain. 
        </p>
        <p>
          Agarcha hum koshish karte hain ke hamara har code sample 100% accurate, error-free aur tested ho, lekin mukhtalif software dependencies, SDK version updates (jaise Flutter 3.x to 4.x), ya operating systems (Windows, macOS, Linux) ke farq ki wajah se kisi reader ke system par unexpected error aa sakta hai. Is liye reader ko mashwara diya jata hai ke wo production environment mein use karne se pehle thorough test zaroor karein.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          2. Earning Aur Financial Claims Ki Nafi (No Financial Guarantee)
        </h2>
        <p>
          Google AdSense aur ethical blogging ke mutabiq, hum saaf wazeh karte hain:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hum kisi bhi tutorial mein yeh dawa nahi karte ke coding seekhne se aap raton-raat ameer ban jayenge ya lakhoon rupay kamane lagenge.</li>
          <li>Kamyabi ka inhesar sirf aur sirf aapki mehnat, skill practice, problem-solving ability aur real-world projects banane par hai.</li>
          <li>Hum kisi qisam ki &ldquo;online earning schemes&rdquo;, &ldquo;pyramid schemes&rdquo;, ya &ldquo;crypto get-rich&rdquo; ka prachar nahi karte.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          3. Fair Use & Trademarks
        </h2>
        <p>
          &ldquo;Flutter&rdquo;, &ldquo;Dart&rdquo;, &ldquo;Firebase&rdquo;, &ldquo;Android&rdquo;, aur &ldquo;Kotlin&rdquo; Google LLC ya JetBrains ke registered trademarks hain. {SITE_CONFIG.name} ka Google ya kisi aur idaray ke sath koi official partnership ya taalluq nahi hai. Yeh blog ek independent community learning initiative hai.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          4. AI Tools Ka Zimmedarana Istemaal
        </h2>
        <p>
          Hamare &ldquo;AI Tools for Developers&rdquo; section mein Cursor, GitHub Copilot, aur Claude Code ke bare mein bataya gaya hai. Readers ko mutanabbah kiya jata hai ke AI-generated code ko bina review aur security check kiye production systems mein direct deploy na karein.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          5. Contact For Inquiries
        </h2>
        <p>
          Agar aapko is Disclaimer ke mutalliq koi sawal ya shuba hai, to baraye meharbani hamare <a href="/contact">Contact Us</a> page ke zariye Muhammad Zahid se rabta karein.
        </p>

      </article>
    </div>
  );
}
