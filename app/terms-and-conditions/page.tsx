import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/site-config';
import { FileCheck, AlertTriangle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Muhammad Zahid',
  description: 'Terms and Conditions for using Muhammad Zahid tech blog and programming tutorials platform.',
};

export default function TermsPage() {
  const lastUpdated = 'October 28, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3">
          <FileCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>User Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Terms & Conditions (Sharaait-o-Zawabit)
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-sm sm:text-base">
        
        <p>
          Khush-Aamdeed! <strong>{SITE_CONFIG.name}</strong> (<a href={SITE_CONFIG.url}>{SITE_CONFIG.url}</a>) par aane ka shukriya. Yeh website istemaal kar ke aap darj zail Terms and Conditions ki pabandi karne ke paband hain. Agar aap in sharaait se muttafiq nahi hain, to baraye meharbani is site ka istemaal na karein.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          1. Intellectual Property Rights (Malikana Huqooq)
        </h2>
        <p>
          Siwaye iske ke mukhalfat mein koi wazahat ho, is website par mojood tamam original articles, text explanations, tutorial guidelines aur visual layout Muhammad Zahid ki intellectual property hain.
        </p>
        <p>
          <strong>Code Snippets & Examples:</strong> Tutorials ke andar faraham kiye gaye tamam open-source code snippets (Dart, Kotlin, Firebase code) MIT License ke mutabiq hain. Aap inhein apne personal, educational ya commercial projects mein freely copy aur use kar sakte hain.
        </p>
        <p>
          Lekin hamare <em>mukammal articles ko lafz-ba-lafz copy karke kisi doosri website, blog ya social media page par baghair ijazat aur attribution ke shaya karna sakht mana hai</em>.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          2. Educational Use (Taleemi Maqasid)
        </h2>
        <p>
          Hamari website par mojood tamam tutorials sirf educational aur knowledge-sharing ke maqsad se shaya kiye jate hain. Hum koshish karte hain ke latest framework versions aur best practices share karein, lekin technology ke roz badalte nature ki wajah se software dependencies ya packages kisi waqt change ho sakte hain.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          3. User Conduct (Users Ka Kirdaar)
        </h2>
        <p>
          Hamari website istemaal karte waqt users par darj zail pabandiyan aaid hoti hain:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Koi aisi activity na karna jo website ke server ya security ko nuqsan pohanchaye (e.g. DDoS, vulnerability probing).</li>
          <li>Contact form ke zariye spam, promotional links ya ghalat alfaz ka istemaal na karna.</li>
          <li>Kisi qisam ke automated web scraping bots ka be-daregh istemaal na karna jo hosting bandwidth ko mutassir kare.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          4. Disclaimer of Warranties (Zamanat Ki Adam-Mojoodgi)
        </h2>
        <p>
          Yeh website &ldquo;AS IS&rdquo; aur &ldquo;AS AVAILABLE&rdquo; ki bunyad par faraham ki jati hai. Muhammad Zahid is baat ki koi qanooni guarantee ya warranty nahi deta ke website hamesha error-free, uninterrupted ya 100% bug-free chalegi.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          5. Limitation of Liability (Zimmedari Ki Hadd)
        </h2>
        <p>
          Kisi bhi soorat mein {SITE_CONFIG.name} ya iska founder kisi aise nuqsan (jismein data loss, hardware failure ya project deadline issues shamil hain) ka zimmedar nahi hoga jo hamare tutorials ke istemaal ya ghalat istemaal ki wajah se paish aaye. Production mein code deploy karne se pehle apni testing zaroor karein.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          6. External Links (Bairooni Links)
        </h2>
        <p>
          Hamari website par official documentations (Flutter.dev, Firebase Console, GitHub, Android Developers) ke bairooni links mojood ho sakte hain. Hum in bairooni sites ke content ya policies ke zimmedar nahi hain.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          7. Sharaait Mein Tabdeeli (Changes to Terms)
        </h2>
        <p>
          Hum kisi bhi waqt in Terms & Conditions ko update karne ka haq rakhte hain. Nai sharaait is page par post hone ke foran baad naafiz-ul-amal hongi.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          8. Contact Info
        </h2>
        <p>
          Agar aapko in Terms & Conditions ke baare mein koi sawal hai to hamare <a href="/contact">Contact Page</a> ya email <strong>{SITE_CONFIG.author.email}</strong> par rabta karein.
        </p>

      </article>
    </div>
  );
}
