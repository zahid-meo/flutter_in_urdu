import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/site-config';
import { Mail, MapPin, Clock, AlertCircle } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Muhammad Zahid',
  description: 'Muhammad Zahid se contact karein. Flutter tutorials, technical questions, project feedback ya collaboration ke liye message bheinjein.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Hamare Sath Rabta Karein (Contact Us)
        </h1>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Agar aapko kisi tutorial mein error aa raha hai, koi sawal poochna hai, ya feedback share karna hai, to zaroor rabta karein.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
            <h2 className="font-bold text-slate-900 dark:text-white text-base">Direct Channels</h2>
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Official Email</p>
                <a
                  href={`mailto:${SITE_CONFIG.author.email}`}
                  className="text-sm font-medium text-slate-900 dark:text-white hover:text-sky-600 break-all"
                >
                  {SITE_CONFIG.author.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Bahawalpur, Punjab, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Response Time</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  24 se 48 ghanton ke andar
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200 text-xs leading-relaxed flex gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <p>
              <strong>Note:</strong> Agar aapka sawal code bug ke mutalliq hai to kripya error ka screenshot aur stack trace zaroor include karein.
            </p>
          </div>
        </div>

        {/* Contact Form Client Component */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
