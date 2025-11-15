'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Support() {
  const [issueDescription, setIssueDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('App Issue Report');
    const body = encodeURIComponent(issueDescription);

    window.location.href = `mailto:stuart@jeanihealth.com?subject=${subject}&body=${body}`;
  };

  return (
    <main
      className="mobile-bg-override"
      style={{
        backgroundImage: "url('/BG-2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      <Navigation />

      <section className="py-16 md:py-24 px-6 max-md:min-h-[100vh] max-md:flex max-md:flex-col max-md:justify-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[340px] md:max-w-none md:w-[600px] h-[180px] md:h-[200px] bg-blue-900/30 backdrop-blur-xl border border-blue-400/20 shadow-2xl shadow-blue-900/20 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
              </div>
              <div className="relative z-10 px-6 md:px-8 py-6 md:py-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-cyan-50 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Support</span>
                </h1>
                <p className="text-base md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed mt-3 md:mt-4">
                  Report any issues you&apos;re experiencing with the app
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 backdrop-blur-md border border-blue-400/20 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="issue" className="block text-lg text-cyan-50 mb-3">
                  Describe the issue
                </label>
                <textarea
                  id="issue"
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  className="w-full h-64 px-4 py-3 bg-slate-900/50 border border-blue-400/30 rounded-xl text-slate-50 placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent resize-none"
                  placeholder="Please describe the issue you're experiencing with the app..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Issue Report
              </button>

              <p className="text-sm text-blue-200/60 mt-4 text-center">
                This will open your email client to send a message to stuart@jeanihealth.com
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
