import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | EVION',
  description:
    'Learn how EVION handles personal information and privacy when you use our website and submit enquiries.',
};

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-28 sm:pt-36 pb-24 sm:pb-32 bg-[#000000] text-[#FFFFFF] min-h-screen">
      {/* Header Container */}
      <header className="border-b border-white/10 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-[#40E0D0] uppercase tracking-widest mb-6 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#40E0D0]" aria-hidden="true" />
            <span>LEGAL & DATA GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFFFFF] uppercase tracking-tight leading-[1.05]">
            PRIVACY <span className="text-[#40E0D0]">POLICY.</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-gray-400">
            <span>EFFECTIVE DATE: OCTOBER 2026</span>
            <span className="text-white/20" aria-hidden="true">•</span>
            <span>LAST REVIEWED: OCTOBER 21, 2026</span>
            <span className="text-white/20" aria-hidden="true">•</span>
            <span className="text-[#40E0D0]">VERSION 2.4</span>
          </div>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            At EVION Technologies, we design and operate high-performance electric vehicle charging
            infrastructure and intelligent energy platforms. We are committed to transparency in how we
            collect, use, and protect your information when you browse our website, reach out to our team,
            or submit commercial franchise enquiries.
          </p>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-12 sm:space-y-16 text-sm sm:text-base leading-relaxed text-gray-300">

        {/* Section 1: Introduction */}
        <section aria-labelledby="section-intro" className="space-y-4">
          <h2
            id="section-intro"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">01.</span>
            <span>Introduction & Scope</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              This Privacy Policy explains how EVION Technologies Inc. and its operating affiliates
              (&quot;EVION&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) process personal information gathered through our
              website (<Link href="/" className="text-[#40E0D0] underline hover:text-[#FFFFFF] transition-colors">https://evion.energy</Link>),
              digital communications, customer service channels, and commercial franchise partnership enquiry forms.
            </p>
            <p>
              By accessing our website or providing information to us through our web forms, you acknowledge
              the data handling practices described in this document. If you do not agree with any part of
              this policy, we recommend that you refrain from submitting personal details through the website.
            </p>
          </div>
        </section>

        {/* Section 2: Information We Collect */}
        <section aria-labelledby="section-collection" className="space-y-4">
          <h2
            id="section-collection"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">02.</span>
            <span>Information We Collect</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-4">
            <p>
              We adhere strictly to data minimization principles. We only collect personal information that
              is necessary to deliver responsive customer service, process commercial franchise submissions,
              and maintain website security:
            </p>

            <ul className="list-disc pl-6 space-y-2.5 text-gray-300 marker:text-[#40E0D0]">
              <li>
                <strong className="text-[#FFFFFF]">Contact & Identity Information:</strong> Full name, corporate or
                personal email address, telephone number, and company or organizational affiliation when you
                contact us or complete an inquiry form.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Franchise & Partnership Enquiries:</strong> Proposed site location,
                geographic region, property type (retail, highway corridor, commercial workspace, or depot),
                available space (square footage), estimated investment capacity, and specific project timelines.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Communications Data:</strong> Records of questions, feedback,
                specifications, or customer service tickets submitted via our online contact interfaces.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Technical & Usage Data:</strong> Standard server logs captured
                automatically when you visit our website, including internet protocol (IP) address, browser
                type and version, operating system, referring URL, time-stamp of visit, and pages viewed.
              </li>
            </ul>

            <p className="text-xs sm:text-sm text-gray-400 font-mono bg-white/[0.03] border border-white/10 p-4 rounded-xl">
              NOTE: EVION does not collect or process sensitive payment card credentials (credit card numbers, CVVs)
              or personal banking records on this public marketing website.
            </p>
          </div>
        </section>

        {/* Section 3: How We Use Information */}
        <section aria-labelledby="section-usage" className="space-y-4">
          <h2
            id="section-usage"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">03.</span>
            <span>How We Use Information</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              EVION utilizes personal and business information solely for legitimate commercial, operational,
              and security purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 marker:text-[#40E0D0]">
              <li>
                <strong className="text-[#FFFFFF]">Responding to Enquiries:</strong> Answering technical questions,
                delivering hardware brochures, scheduling consultations, and addressing general feedback.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Evaluating Franchise Opportunities:</strong> Assessing applicant
                eligibility, reviewing candidate real estate locations, conducting preliminary grid feasibility
                assessments, and preparing mutual franchise discussions.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Partner Communications:</strong> Providing prospective partners
                with project updates, network expansion plans, and technical specification changes.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Website Operations & Performance:</strong> Diagnosing server
                connectivity issues, monitoring response latency, optimizing load times, and enhancing overall UX.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Infrastructure Security:</strong> Detecting and mitigating cyber
                attacks, spam submissions, automated scraping bots, or unauthorized server access attempts.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Legal & Regulatory Compliance:</strong> Fulfilling statutory
                reporting obligations, record-keeping mandates, and responding to lawful governmental directives.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Cookies and Analytics */}
        <section aria-labelledby="section-cookies" className="space-y-4">
          <h2
            id="section-cookies"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">04.</span>
            <span>Cookies and Local Storage</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              Our website uses strictly necessary technical mechanisms and client-side session storage required
              for basic site navigation, security token validation, and interface preferences (such as remembering
              form state and theme rendering).
            </p>
            <p>
              We do not deploy invasive third-party cross-site advertising networks, nor do we sell behavioral
              profiles to data brokers. You may configure your web browser to block or alert you about cookies;
              however, doing so may cause certain dynamic portions of the website (such as interactive maps or
              application modals) to function sub-optimally.
            </p>
          </div>
        </section>

        {/* Section 5: Sharing of Information */}
        <section aria-labelledby="section-sharing" className="space-y-4">
          <h2
            id="section-sharing"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">05.</span>
            <span>Sharing & Disclosure of Information</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              EVION does not sell, rent, or trade your personal information to third parties for marketing purposes.
              We only share personal data in the following restricted operational circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 marker:text-[#40E0D0]">
              <li>
                <strong className="text-[#FFFFFF]">Authorized Service Providers:</strong> Trusted third-party vendors
                who provide foundational infrastructure services (such as secure cloud hosting, automated email
                dispatch, and database management). These providers are bound by strict contractual confidentiality
                obligations and are prohibited from using your data for any other purpose.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Corporate Affiliates:</strong> Operating entities within the EVION
                corporate group when necessary to fulfill your specific commercial partnership or regional deployment
                request.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Legal Requirements:</strong> Where required by valid subpoenas,
                court orders, regulatory inspections, or applicable statutory laws.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Protection of Rights & Safety:</strong> When disclosure is reasonably
                necessary to investigate fraud, enforce our Terms & Conditions, or protect the security, property, or
                safety of EVION, our clients, or the general public.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: Data Security */}
        <section aria-labelledby="section-security" className="space-y-4">
          <h2
            id="section-security"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">06.</span>
            <span>Data Security</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              We implement comprehensive technical, physical, and administrative safeguards designed to protect
              your personal data against accidental loss, unauthorized access, destruction, alteration, or disclosure.
              All public web traffic and form submissions are encrypted in transit using industry-standard Transport
              Layer Security (TLS 1.3).
            </p>
            <p>
              While we strive to employ robust, modern security architectures, no method of transmission over the
              internet or electronic storage system can guarantee absolute invulnerability. Users transmit information
              at their own reasonable risk.
            </p>
          </div>
        </section>

        {/* Section 7: Data Retention */}
        <section aria-labelledby="section-retention" className="space-y-4">
          <h2
            id="section-retention"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">07.</span>
            <span>Data Retention</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              We retain personal data only for as long as reasonably necessary to fulfill the purposes for which it was
              collected, including satisfying any legal, accounting, dispute-resolution, or regulatory reporting
              requirements.
            </p>
            <p>
              General enquiries are periodically archived and removed once customer requests are fully resolved.
              Commercial franchise submissions may be retained in our partnership management repository for a duration
              commensurate with ongoing commercial evaluation or as required by applicable commercial statutes.
            </p>
          </div>
        </section>

        {/* Section 8: User Rights and Requests */}
        <section aria-labelledby="section-rights" className="space-y-4">
          <h2
            id="section-rights"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">08.</span>
            <span>Your Rights and Data Requests</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              Depending on your jurisdiction and subject to applicable data protection legislation (such as India&apos;s
              Digital Personal Data Protection Act, the GDPR, or relevant state laws), you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 marker:text-[#40E0D0]">
              <li><strong className="text-[#FFFFFF]">Access:</strong> Request confirmation of whether we hold personal information about you and receive a copy.</li>
              <li><strong className="text-[#FFFFFF]">Correction:</strong> Request rectification of inaccurate or incomplete records.</li>
              <li><strong className="text-[#FFFFFF]">Erasure:</strong> Request deletion of your personal data where statutory retention grounds no longer apply.</li>
              <li><strong className="text-[#FFFFFF]">Withdrawal of Consent:</strong> Withdraw consent previously provided for voluntary marketing communications.</li>
            </ul>
            <p>
              To exercise any of these rights, please send a written request to{' '}
              <a href="mailto:privacy@evion.energy" className="text-[#40E0D0] font-bold underline hover:text-[#FFFFFF] transition-colors">
                privacy@evion.energy
              </a>
              . We will verify your identity and respond within thirty (30) days or within the statutory timeframe
              prescribed by applicable law.
            </p>
          </div>
        </section>

        {/* Section 9: Third-Party Services */}
        <section aria-labelledby="section-third-party" className="space-y-4">
          <h2
            id="section-third-party"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">09.</span>
            <span>Third-Party Links & Services</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              Our website may contain hyperlinks to external websites, mapping tools, industry documentation, or social
              networking platforms that are not operated by EVION. If you click on a third-party link, you will be
              directed to that third party&apos;s site.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any
              third-party sites or services. We strongly encourage you to review the privacy statement of every external
              site you visit.
            </p>
          </div>
        </section>

        {/* Section 10: Children's Privacy */}
        <section aria-labelledby="section-children" className="space-y-4">
          <h2
            id="section-children"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">10.</span>
            <span>Children&apos;s Privacy</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              EVION&apos;s website, products, and commercial franchise opportunities are intended exclusively for commercial
              organizations, corporate partners, property hosts, and adult drivers holding valid motor vehicle operating
              licenses.
            </p>
            <p>
              We do not knowingly solicit or collect personal information from individuals under the age of 18. If we
              discover that personal data of a minor has been mistakenly submitted without verified parental or legal
              guardian consent, we will promptly delete such records from our databases.
            </p>
          </div>
        </section>

        {/* Section 11: Policy Updates */}
        <section aria-labelledby="section-updates" className="space-y-4">
          <h2
            id="section-updates"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">11.</span>
            <span>Updates to this Policy</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              We may update this Privacy Policy from time to time to reflect operational modifications, technical upgrades,
              new charging services, or changes in legal regulations.
            </p>
            <p>
              Any changes will be posted on this page with an updated &quot;Last Reviewed&quot; date at the top. We encourage
              visitors to review this page periodically to stay informed about our data protection standards.
            </p>
          </div>
        </section>

        {/* Section 12: Contact Information */}
        <section aria-labelledby="section-contact" className="space-y-4">
          <h2
            id="section-contact"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">12.</span>
            <span>Contact Information</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-4">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices,
              please reach out through any of our verified corporate channels:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#40E0D0] uppercase font-bold">
                  <Mail className="w-4 h-4 text-[#40E0D0]" aria-hidden="true" />
                  <span>Privacy Officer</span>
                </div>
                <a
                  href="mailto:privacy@evion.energy"
                  className="text-sm font-bold text-[#FFFFFF] hover:text-[#40E0D0] transition-colors block"
                >
                  privacy@evion.energy
                </a>
                <p className="text-xs text-gray-400">For personal data access, deletion, or privacy governance queries.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#40E0D0] uppercase font-bold">
                  <Phone className="w-4 h-4 text-[#40E0D0]" aria-hidden="true" />
                  <span>Corporate Hotline</span>
                </div>
                <a
                  href="tel:+918040001800"
                  className="text-sm font-bold text-[#FFFFFF] hover:text-[#40E0D0] transition-colors block"
                >
                  +91 (080) 4000-1800
                </a>
                <p className="text-xs text-gray-400">Monday–Saturday, 8:00 AM – 8:00 PM IST</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 sm:col-span-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#40E0D0] uppercase font-bold">
                  <MapPin className="w-4 h-4 text-[#40E0D0]" aria-hidden="true" />
                  <span>Corporate Headquarters & Technology Center</span>
                </div>
                <div className="text-sm font-bold text-[#FFFFFF]">
                  EVION Technologies Inc. — EVION Energy Labs
                </div>
                <p className="text-xs text-gray-400">
                  Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103, India
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-4 text-xs font-mono">
              <Link
                href="/terms-and-conditions"
                className="inline-flex items-center gap-1.5 text-[#40E0D0] hover:text-[#FFFFFF] underline transition-colors"
              >
                <span>Read Terms & Conditions</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <span className="text-white/20" aria-hidden="true">•</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[#40E0D0] hover:text-[#FFFFFF] underline transition-colors"
              >
                <span>Direct Contact Form</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
