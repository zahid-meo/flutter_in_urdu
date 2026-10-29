'use client';

import { useState } from 'react';
import { Send, MessageSquare, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'flutter',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({
          type: 'success',
          text: 'Shukriya! Aapka message direct Muhammad Zahid tak pohanch gaya hai. Jald aapse rabta kiya jayega.',
        });
        setFormData({ name: '', email: '', subject: 'flutter', message: '' });
      } else {
        setStatusMessage({
          type: 'error',
          text: data.error || 'Message send nahi ho saka. Baraye meharbani dobara koshish karein.',
        });
      }
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Internet connection ka masla hai. Kripya check karein.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-sky-600" />
        Message Send Karein
      </h2>

      {statusMessage && (
        <div
          className={`p-4 rounded-xl mb-6 text-sm ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200'
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
            Aapka Naam (Your Full Name) *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ali Ahmed"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. ali@gmail.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
            Topic / Maudhoo (Subject) *
          </label>
          <select
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
          >
            <option value="flutter">Flutter Tutorial Sawal</option>
            <option value="firebase">Firebase Integration Issue</option>
            <option value="kotlin">Kotlin / Android Development</option>
            <option value="ai">AI Developer Tools Query</option>
            <option value="feedback">Website Feedback / Suggestion</option>
            <option value="other">Other / Collaboration</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
            Aapka Message (Details) *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Apna sawal ya message yahan tafseel se likhein..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition shadow-sm cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Bheja ja raha hai...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Message Bhejein</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
