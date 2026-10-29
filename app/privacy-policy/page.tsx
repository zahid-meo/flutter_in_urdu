import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/site-config';
import { ShieldAlert, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Muhammad Zahid',
  description: 'Privacy Policy for Muhammad Zahid tech blog. Information on Google AdSense, cookies, DoubleClick DART cookies, Google Analytics, user data protection and privacy rights.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 28, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3">
          <Lock className="w-3.5 h-3.5 text-sky-600" />
          <span>Legal Document</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy (Nijiyat Ki Policy)
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last Updated: {lastUpdated} | Effective Date: {lastUpdated}
        </p>
      </div>

      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-sm sm:text-base">
        
        <p>
          At <strong>{SITE_CONFIG.name}</strong> (accessible from <a href={SITE_CONFIG.url}>{SITE_CONFIG.url}</a>), hamare visitors ki privacy hamare liye intehai ahem hai. Yeh Privacy Policy document wazeh karta hai ke hamari website par kis qisam ki maloomat collect aur record ki jati hai aur hum use kaise istemaal karte hain.
        </p>
        <p>
          Agar aapke paas hamari privacy policy ke hawale se mazeed koi sawalaat hain ya mazeed wazahat chahiye, to aap bila-jhijak hamare <a href="/contact">Contact Us page</a> ke zariye rabta kar sakte hain.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          1. Consent (Aapki Raza-mandi)
        </h2>
        <p>
          Hamari website istemaal karte hue, aap hamari Privacy Policy se ittefaq karte hain aur iski tamam sharaait ko tasleem karte hain.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          2. Maloomat Jo Hum Collect Karte Hain (Information We Collect)
        </h2>
        <p>
          Jab aap hamari website par visit karte hain, to aam browsing ke dauraan hum aapse koi personal data (jaise CNIC ya sensitive info) nahi mangte. Agar aap contact form ke zariye humse rabta karte hain, to hum yeh maloomat hasil karte hain:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Aapka Naam (Full Name)</li>
          <li>Aapka Email Address</li>
          <li>Aapka bheja gaya message aur error logs ka content</li>
        </ul>
        <p>
          Yeh maloomat sirf aapke sawalat ka jawab dene ke liye istemaal ki jati hai aur kisi teesri party ko farokht (sell) ya share nahi ki jati.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          3. Log Files
        </h2>
        <p>
          {SITE_CONFIG.name} standard log files ka istemaal karta hai. Yeh files visitors ki website par aane ke dauraan basic technical data record karti hain, jaisa ke tamam hosting companies karti hain. Log files mein shamil hain:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Internet Protocol (IP) addresses</li>
          <li>Browser type (e.g. Chrome, Firefox, Safari)</li>
          <li>Internet Service Provider (ISP)</li>
          <li>Date aur time stamp</li>
          <li>Referring / exit pages</li>
          <li>Number of clicks</li>
        </ul>
        <p>
          Yeh information kisi aisi cheez se linked nahi hoti jo personal tor par kisi fard ki shanakht kare. Iska maqsad sirf trends ka jaiza lena, website ko smoothly manage karna, aur user experience ko behtar banana hota hai.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          4. Google Cookies Aur AdSense Advertising
        </h2>
        <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 my-4">
          <p className="font-semibold text-amber-950 dark:text-amber-200 mb-2">
            Zaroori Wazahat: Google DoubleClick DART Cookies
          </p>
          <p className="text-amber-900 dark:text-amber-300 text-sm">
            Google hamari site par ek third-party vendor hai. Google cookies (jinhein DART cookies kaha jata hai) ka istemaal karta hai taake hamari website aur internet par doosri websites ke visitors ko unke interests ke mutabiq ads dikha sake.
          </p>
          <p className="text-amber-900 dark:text-amber-300 text-sm mt-2">
            Visitors DART cookies ke istemaal ko reject ya opt-out kar sakte hain. Iske liye Google Ad aur Content Network Privacy Policy par visit karein: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="underline font-bold">https://policies.google.com/technologies/ads</a>.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          5. Third-Party Privacy Policies
        </h2>
        <p>
          {SITE_CONFIG.name} ki Privacy Policy doosre advertisers ya websites par laagu nahi hoti. Is liye hum aapko mashwara dete hain ke aap in third-party ad servers ki mutalliqah Privacy Policies ko zaroor parhein taake mazeed tafseelat aur opt-out karne ke tareeqay jaan sakein.
        </p>
        <p>
          Aap apne browser settings ke zariye cookies ko disable ya block bhi kar sakte hain. Har browser (Chrome, Edge, Firefox) ki website par cookie management ki tafseelat mojood hoti hain.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          6. Children&apos;s Information (Bachon Ki Hifazat)
        </h2>
        <p>
          Hamari tarjeeh internet istemaal karne wale bachon ki hifazat hai. Hum waldain aur sarparaston se guzarish karte hain ke woh apne bachon ki online sar-garmiyon par nazar rakhein.
        </p>
        <p>
          {SITE_CONFIG.name} jaan boojh kar 13 saal se kam umar ke bachon se koi zaati maloomat (Personally Identifiable Information) jama nahi karta. Agar aapko lagta hai ke aapke bachay ne hamari website par aisi koi maloomat faraham ki hai, to foran rabta karein, hum foran use apne records se mita denge.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          7. CCPA & GDPR Privacy Rights
        </h2>
        <p>
          Hum apne users ke tamam digital huqooq ka ehtaram karte hain. Har user ko yeh haq hasil hai:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Right to access:</strong> Aap humse apne data ki copy maang sakte hain.</li>
          <li><strong>Right to rectification:</strong> Agar koi data ghalat ho to use theek karwa sakte hain.</li>
          <li><strong>Right to erasure:</strong> Aap apna data mukammal tor par delete karwane ki request kar sakte hain.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          8. Rabta Karein (Contact Us)
        </h2>
        <p>
          Is Privacy Policy se mutalliq kisi bhi sawal ke liye aap humse email ke zariye rabta kar sakte hain: <strong>{SITE_CONFIG.author.email}</strong>.
        </p>

      </article>
    </div>
  );
}
