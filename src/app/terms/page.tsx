import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Jeani',
  description: 'Jeani Health terms and conditions - the legal agreement governing your use of the Jeani service.',
};

export default function TermsOfService() {
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

      <section className="py-16 md:py-24 px-6 max-md:min-h-[100vh]">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[340px] md:max-w-none md:w-[600px] h-[140px] md:h-[180px] bg-blue-900/30 backdrop-blur-xl border border-blue-400/20 shadow-2xl shadow-blue-900/20 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
              </div>
              <div className="relative z-10 px-6 md:px-8 py-6 md:py-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-cyan-50 leading-tight">
                  Terms & <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Conditions</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-blue-900/20 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="prose prose-invert prose-cyan max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl text-cyan-50 mb-4">Overview</h2>
                <ul className="text-blue-100/90 space-y-2 list-disc pl-5">
                  <li>Jeani provides wellness & performance insights, not medical advice, and not for emergencies.</li>
                  <li>You must be 16+ to use Jeani.</li>
                  <li>We process movement/sensor and related info to run and improve the app with strong confidentiality and security safeguards.</li>
                  <li>If you join a team/organization, we will show you exactly what data is shared before you accept.</li>
                  <li>No liability for personal injury from using the app, to the maximum extent allowed by law.</li>
                  <li>You can export or delete your data as described in our Privacy Notice.</li>
                </ul>
              </div>

              <div className="space-y-8 text-blue-100/90">
                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">1. Who we are</h2>
                  <p>These Terms are between you and Jeani Health LLC, a North Carolina limited liability company, 1702 Woodburn Rd, Durham, NC 27705 ("Jeani," "we," "us"). They govern your use of the Jeani mobile app, firmware, websites, dashboards, APIs, and related services (the "Service").</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">2. Eligibility & account</h2>
                  <p>You must be 16+ to use the Service. You are responsible for your account credentials and for the accuracy of information you provide. If you access the Service through a school, team, club, or employer ("Organization"), additional Organization terms may apply.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">3. Wellness only, no medical advice; not for emergencies</h2>
                  <p>Jeani provides wellness and performance insights. Jeani does not provide medical advice, diagnosis, or treatment and is not a medical device unless we expressly say otherwise following regulatory clearance. Always consult a qualified clinician for medical questions. Do not use Jeani for emergencies; call your local emergency number.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">4. Confidentiality & security (mutual obligations)</h2>
                  <p className="mb-3 font-semibold text-cyan-100">Your confidential information.</p>
                  <p className="mb-4">We treat your personal data and Movement Data, team associations, and other non-public information generated via the Service as Confidential Information and will protect it using at least a reasonable standard of care, including encryption in transit, access controls, logging/monitoring, and least-privilege access. We limit access to personnel and service providers under written confidentiality obligations and need-to-know principles. We do not sell your personal data.</p>

                  <p className="mb-3 font-semibold text-cyan-100">Our confidential information.</p>
                  <p className="mb-4">You agree to keep Jeani non-public materials (e.g., pre-release features, diagnostics tools, security documentation) confidential and not disclose them except as permitted by these Terms.</p>

                  <p className="mb-3 font-semibold text-cyan-100">Incident response.</p>
                  <p>If we become aware of a security incident that materially affects your personal data, we will notify you without undue delay (target within 72 hours) with available details and mitigation steps, subject to legal restrictions.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">5. Data practices (short form)</h2>
                  <p>Data categories, uses, sharing, retention, and your rights are described in the Privacy Policy, which is incorporated by reference. By using the Service, you explicitly consent to the processing of Movement Data and any health-related information you provide for the purposes described.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">6. Organization/Team spaces</h2>
                  <p>When you join an Organization space, designated admins/coaches may view data only within the scope shown to you during the join flow (e.g., weekly movement scores, symptom check-ins, trends). You can leave any time; data shared while a member may remain with that Organization per its policies.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">7. Acceptable use</h2>
                  <p>You agree not to: (a) misuse or interfere with the Service; (b) reverse engineer, copy, or resell except as allowed; (c) upload unlawful or infringing content; (d) attempt to access others' data; or (e) use the Service to profile or discriminate against others.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">8. Intellectual property & license</h2>
                  <p>The Service is owned by Jeani and its licensors. Subject to these Terms, we grant you a limited, revocable, non-transferable license to use the Service for personal wellness purposes (or as permitted by your Organization agreement). You retain ownership of your content; you grant Jeani a worldwide, royalty-free license to host, process, and display it solely to operate and improve the Service.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">9. Feedback</h2>
                  <p>If you provide feedback, you grant Jeani a perpetual, irrevocable license to use it without obligation to you.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">10. Beta features</h2>
                  <p>You may receive early/beta features. They are provided "as is" and may be modified or discontinued. We may collect diagnostics and feedback to improve them.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">11. Subscriptions, trials, and refunds</h2>
                  <p>If you purchase a paid plan: (a) plans auto-renew until canceled in Settings; (b) trials convert to paid unless canceled before trial end; (c) applicable taxes may apply; (d) refunds follow applicable law and our posted policy.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">12. Third-party services & hardware</h2>
                  <p>Jeani may integrate with third-party apps/devices. Jeani is not responsible for third-party terms, privacy practices, or malfunctions. Review their policies before connecting.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">13. Disclaimers</h2>
                  <p className="uppercase">TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." JEANI DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY OF ANY INSIGHTS OR METRICS. JEANI DOES NOT PROVIDE MEDICAL ADVICE AND THE SERVICE IS NOT A SUBSTITUTE FOR A MEDICAL PROFESSIONAL OR EMERGENCY SERVICES.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">14. Assumption of risk & release of liability for injury</h2>
                  <p className="mb-4">You understand that physical activity involves inherent risks. You voluntarily assume all risks arising from your activities and your use of the Service, including decisions you make based on app insights.</p>
                  <p>To the fullest extent permitted by law, you release Jeani Health LLC and its affiliates, officers, employees, and agents from any and all claims and liabilities for personal injury or harm arising out of or related to your use of the Service, including training decisions, technique changes, or activity choices, whether based in contract, tort (including negligence), strict liability, or otherwise. Some jurisdictions do not allow certain releases; if so, this clause applies to the maximum extent allowed.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">15. Indemnification</h2>
                  <p>You agree to defend, indemnify, and hold harmless Jeani and its affiliates from claims, damages, and costs arising out of your misuse of the Service, your content, or your breach of these Terms or applicable law.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">16. Governing law & dispute resolution</h2>
                  <p>These Terms are governed by the laws of the State of North Carolina, excluding conflict-of-law rules.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">17. Changes to the Service and Terms</h2>
                  <p>We may update the Service and these Terms. Material changes will be notified in-app or by email. Continued use after the effective date constitutes acceptance.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">18. Termination</h2>
                  <p>You may stop using the Service at any time. We may suspend or terminate access for breach, risk, or legal reasons. Upon termination, your license ends; Sections intended to survive (e.g., confidentiality, IP, disclaimers, releases, and indemnities) survive.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">19. Contact</h2>
                  <p>Jeani Health LLC<br />
                  1702 Woodburn Rd, Durham, NC 27705<br />
                  <a href="mailto:ewan@jeanihealth.com" className="text-blue-400 hover:text-blue-300 underline">ewan@jeanihealth.com</a></p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
