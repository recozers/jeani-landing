import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jeani',
  description: 'Jeani Health privacy policy - how we collect, use, and protect your personal and movement data.',
};

export default function PrivacyPolicy() {
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
                  Privacy <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Policy</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-blue-900/20 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="prose prose-invert prose-cyan max-w-none">
              <p className="text-sm text-blue-200/80 mb-8">Last updated: October 1, 2025</p>

              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl text-cyan-50 mb-4">Summary</h2>
                <ul className="text-blue-100/90 space-y-2 list-disc pl-5">
                  <li>We collect account info, device usage, and movement/sensor data (&quot;Movement Data&quot;) to run and improve Jeani.</li>
                  <li>We apply strong confidentiality and security measures and never sell your personal data.</li>
                  <li>You control Organization/team sharing; we&apos;ll show you exactly what&apos;s shared before you accept.</li>
                  <li>You can request data export or deletion as described below.</li>
                </ul>
              </div>

              <div className="space-y-8 text-blue-100/90">
                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">1. Who we are & scope</h2>
                  <p>This Privacy Policy describes how Jeani Health LLC, a North Carolina limited liability company, 1702 Woodburn Rd, Durham, NC 27705 (&quot;Jeani,&quot; &quot;we,&quot; &quot;us&quot;), processes personal data when you use our mobile app, firmware, websites, dashboards, and related services (the &quot;Service&quot;).</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">2. Age</h2>
                  <p>The Service is intended for individuals 16+. If you are under 16, do not use the Service.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">3. Data we collect</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Account & contact data: name, email, profile details, settings.</li>
                    <li>Device & usage data: device identifiers, OS/app version, events, diagnostics, crash logs.</li>
                    <li>Movement &amp; activity data (&quot;Movement Data&quot;): IMU/sensor signals, derived metrics, training context, symptoms you log.</li>
                    <li>Context & relationships: Organizations/teams you join, your role, coaches/admins associated.</li>
                    <li>Support & feedback: help tickets, surveys, beta feedback, in-app messages.</li>
                    <li>Optional communications: your marketing preferences.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">4. How we collect data</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Directly from you (account sign-up, logs, settings, entries).</li>
                    <li>Automatically from your device (events, performance, sensors with permissions).</li>
                    <li>From Organization administrators, when you join a team space (only within the scope shown to you).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">5. How we use data (purposes)</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Provide, operate, and secure the Service (accounts, syncing, insights, support).</li>
                    <li>Generate wellness/performance insights not constituting medical advice.</li>
                    <li>Improve safety, reliability, and performance (analytics, testing, troubleshooting).</li>
                    <li>Develop new features, models, and algorithms (including de-identified/aggregated statistics).</li>
                    <li>Communicate transactional updates; send marketing only if you opt in.</li>
                    <li>Comply with legal obligations and enforce terms.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">6. Legal bases & consent</h2>
                  <p>Where required, we rely on your consent to process Sensitive Data (Movement Data and any health-related information you provide). We may also rely on performance of a contract, legitimate interests (e.g., security, improvement), and legal obligations. Jeani is generally not a HIPAA &quot;covered entity.&quot; We do not sign BAAs unless separately agreed in writing with an Organization.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">7. Confidentiality & security</h2>
                  <ul className="space-y-2 list-disc pl-5 mb-4">
                    <li>We treat your personal data and Movement Data as Confidential Information.</li>
                    <li>We use encryption in transit, role-based access controls, logging/monitoring, least-privilege access, workforce training, and periodic reviews.</li>
                    <li>We restrict access to personnel and service providers under written confidentiality obligations and need-to-know principles.</li>
                  </ul>
                  <p className="font-semibold text-cyan-100">Incident response.</p>
                  <p>If a security incident materially affects your personal data, we will notify you without undue delay (target within 72 hours) with available details and mitigation steps, subject to law-enforcement needs.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">8. Sharing your data</h2>
                  <p className="mb-3">We share personal data:</p>
                  <ul className="space-y-2 list-disc pl-5 mb-4">
                    <li>At your direction (e.g., joining an Organization). We display exact fields and recipients before you accept.</li>
                    <li>With service providers (cloud, analytics, support) under binding confidentiality and data-protection terms.</li>
                    <li>For legal reasons (compelled by law or to protect rights, safety, security).</li>
                    <li>In business transfers (e.g., merger, acquisition, financing) with continuous protections and required notices.</li>
                  </ul>
                  <p className="font-semibold text-cyan-100">We do not sell your personal data.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">9. Organization/Team spaces</h2>
                  <p>When you join an Organization, designated admins/coaches may view data only within the scope shown to you during the join flow (e.g., weekly movement scores, symptom check-ins, trends). You can leave at any time; data shared while a member may remain available to that Organization per its policies.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">10. International transfers</h2>
                  <p>We may process data in the United States and other countries using appropriate legal transfer mechanisms where required.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">11. Retention</h2>
                  <p>We retain personal data as long as necessary to provide the Service and for legitimate business purposes (security, compliance), then delete or de-identify it. You may request deletion, subject to legal holds and exemptions.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">12. Your choices & rights</h2>
                  <p>Depending on your location, you may have rights to access, correct, delete, or port data; object or restrict certain processing; and withdraw consent. Use in-app tools or contact <a href="mailto:ewan@jeanihealth.com" className="text-blue-400 hover:text-blue-300 underline">ewan@jeanihealth.com</a>. You may manage Organization connections, research invitations, and marketing preferences in Settings.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">13. Cookies / SDKs / analytics</h2>
                  <p>We may use app SDKs and limited cookies on web properties for authentication, analytics, and performance. Manage permissions in your OS/app settings. Third-party tools are used under confidentiality and are not permitted to use your data for their own advertising.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">14. Third parties & links</h2>
                  <p>Third-party services you connect are governed by their own terms and privacy policies. Review them before connecting.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">15. Changes to this Policy</h2>
                  <p>We may update this Policy. Material changes will be notified in-app or by email. Continued use after the effective date indicates acceptance.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl text-cyan-50 mb-3">16. Contact</h2>
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
