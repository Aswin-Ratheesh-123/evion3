import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Mail, Phone, MapPin, AlertCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | EVION',
  description:
    'Read the terms governing access to and use of the EVION website and its enquiry services.',
};

export default function TermsAndConditionsPage() {
  return (
    <article className="pt-28 sm:pt-36 pb-24 sm:pb-32 bg-[#000000] text-[#FFFFFF] min-h-screen">
      {/* Header Container */}
      <header className="border-b border-white/10 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-[#40E0D0] uppercase tracking-widest mb-6 font-semibold">
            <FileText className="w-3.5 h-3.5 text-[#40E0D0]" aria-hidden="true" />
            <span>TERMS OF SERVICE & USAGE AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFFFFF] uppercase tracking-tight leading-[1.05]">
            TERMS & <span className="text-[#40E0D0]">CONDITIONS.</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-gray-400">
            <span>EFFECTIVE DATE: OCTOBER 2026</span>
            <span className="text-white/20" aria-hidden="true">•</span>
            <span>LAST REVIEWED: OCTOBER 21, 2026</span>
            <span className="text-white/20" aria-hidden="true">•</span>
            <span className="text-[#40E0D0]">VERSION 2.4</span>
          </div>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Welcome to EVION. These Terms &amp; Conditions set forth the legally binding terms and conditions
            governing your access to and use of the EVION website, digital interfaces, informational resources,
            and commercial partner enquiry services.
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
            <span>Introduction & Website Scope</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern access to and use of the website located at{' '}
              <Link href="/" className="text-[#40E0D0] underline hover:text-[#FFFFFF] transition-colors">
                https://evion.energy
              </Link>{' '}
              (the &quot;Website&quot;), operated by EVION Technologies Inc. and its corporate affiliates (&quot;EVION&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p>
              The Website provides information regarding EVION&apos;s 350 kW high-speed electric vehicle charging
              hardware, dynamic energy management software, nationwide hub network, and commercial franchise
              partnership programs.
            </p>
          </div>
        </section>

        {/* Section 2: Acceptance of Terms */}
        <section aria-labelledby="section-acceptance" className="space-y-4">
          <h2
            id="section-acceptance"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">02.</span>
            <span>Acceptance of Terms</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              Please read these Terms carefully before accessing or using the Website. By browsing, accessing,
              submitting forms, or interacting with any portion of the Website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and our companion{' '}
              <Link href="/privacy-policy" className="text-[#40E0D0] underline hover:text-[#FFFFFF] transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              If you do not agree to all of these Terms, you must immediately cease accessing and using the Website.
              If you are accessing the Website on behalf of an entity, corporation, or organization, you represent
              and warrant that you have full legal authority to bind that entity to these Terms.
            </p>
          </div>
        </section>

        {/* Section 3: Website Information & Availability */}
        <section aria-labelledby="section-info" className="space-y-4">
          <h2
            id="section-info"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">03.</span>
            <span>Informational Purposes & Modifications</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              All materials, architectural previews, interactive calculators, network maps, and text displayed on the
              Website are provided solely for general informational, educational, and marketing purposes.
            </p>
            <p>
              EVION makes commercially reasonable efforts to keep Website information current and accurate. However,
              we do not guarantee that content is exhaustive, complete, or free from typographical or technical errors.
              We reserve the right to alter, modify, suspend, or discontinue any feature, content, or service on the
              Website at any time without prior notice or liability.
            </p>
          </div>
        </section>

        {/* Section 4: Franchise & Partnership Enquiries */}
        <section aria-labelledby="section-franchise" className="space-y-4">
          <h2
            id="section-franchise"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">04.</span>
            <span>Franchise &amp; Partnership Enquiries</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-4">
            <p>
              The Website offers digital enquiry forms allowing property hosts, commercial developers, fleet operators,
              and entrepreneurs to express interest in EVION charging franchise programs or site-host models.
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-[#40E0D0]/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#40E0D0] uppercase font-bold tracking-wider">
                <AlertCircle className="w-4 h-4 text-[#40E0D0]" aria-hidden="true" />
                <span>EXPLICIT FRANCHISE ENQUIRY DISCLAIMER</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 marker:text-[#40E0D0]">
                <li>
                  <strong className="text-[#FFFFFF]">No Guarantee of Acceptance:</strong> Submitting a franchise or
                  partnership enquiry does not guarantee acceptance, qualification, or enrollment as an EVION
                  partner, franchisee, or authorized host.
                </li>
                <li>
                  <strong className="text-[#FFFFFF]">No Binding Agreement:</strong> Form submissions or exploratory
                  conversations do not constitute a binding franchise agreement, letter of intent, or contractual
                  commitment by either party.
                </li>
                <li>
                  <strong className="text-[#FFFFFF]">No Outcome or Revenue Guarantees:</strong> EVION does not warrant
                  or guarantee any specific territory reservation, exclusivity, return on investment (ROI), revenue,
                  charging utilization rate, or business outcome based on Website representations or estimates.
                </li>
                <li>
                  <strong className="text-[#FFFFFF]">Due Diligence & Formal Documentation:</strong> Formal partnership
                  is subject to comprehensive technical due diligence, grid capacity clearance, financial verification,
                  and the execution of definitive, written franchise or commercial host agreements signed by authorized
                  officers of EVION.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Business and Technical Information */}
        <section aria-labelledby="section-technical" className="space-y-4">
          <h2
            id="section-technical"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">05.</span>
            <span>Business &amp; Technical Specifications</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              Hardware performance metrics, including but not limited to 350 kW peak dispensing capacity, liquid-cooled
              cable specifications, dynamic load balancing algorithms, and ISO 15118 / OCPP 2.0.1 compliance, represent
              engineering specifications under optimal testing benchmarks.
            </p>
            <p>
              Actual charging speeds and vehicle throughput vary depending on vehicle battery thermal management, vehicle
              acceptance rates, ambient temperature, local utility distribution transformer capacity, and grid conditions.
              Nothing on this Website constitutes an express or implied warranty or product guarantee regarding specific
              charging speeds for any particular vehicle model.
            </p>
          </div>
        </section>

        {/* Section 6: User Responsibilities & Acceptable Use */}
        <section aria-labelledby="section-responsibilities" className="space-y-4">
          <h2
            id="section-responsibilities"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">06.</span>
            <span>User Responsibilities &amp; Acceptable Use</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>When interacting with the Website, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 marker:text-[#40E0D0]">
              <li>Provide accurate, truthful, and complete information in all enquiry and contact forms.</li>
              <li>Not impersonate any individual, company, or entity, or misrepresent your affiliation with any entity.</li>
              <li>Not use the Website for any unlawful, fraudulent, or harmful commercial activity.</li>
              <li>
                Not attempt to gain unauthorized access to our servers, hosting infrastructure, user databases, or private
                telemetry networks.
              </li>
              <li>
                Not deploy automated scrapers, spiders, crawler bots, vulnerability scanners, or denial-of-service
                mechanisms against Website endpoints.
              </li>
              <li>
                Not introduce malicious code, trojans, worms, or other software that damages or interferes with Website
                operations.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7: Intellectual Property Rights */}
        <section aria-labelledby="section-ip" className="space-y-4">
          <h2
            id="section-ip"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">07.</span>
            <span>Intellectual Property Rights</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              All content on the Website—including trade dress, text, graphic illustrations, brand logos, charging
              hardware designs, 3D renderings, UI layouts, software code, icons, audio, and video—is the exclusive
              intellectual property of EVION Technologies Inc. or its content licensors, protected under applicable
              copyright, trademark, and trade secret laws.
            </p>
            <p>
              The &quot;EVION&quot; brand name, logo, turquoise visual motifs, and associated product names are proprietary
              trademarks. You may not reproduce, modify, distribute, create derivative works of, publicly display, or
              commercially exploit any material from this Website without prior written authorization from EVION.
            </p>
          </div>
        </section>

        {/* Section 8: Third-Party Links */}
        <section aria-labelledby="section-links" className="space-y-4">
          <h2
            id="section-links"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">08.</span>
            <span>Third-Party Links &amp; Content</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              The Website may contain links to third-party websites, utilities, mapping providers, automotive resources,
              or industry standards bodies. These external links are provided purely for your reference and convenience.
            </p>
            <p>
              EVION does not control, investigate, monitor, or endorse third-party content. We disclaim any liability for
              any loss, damage, or infringement arising from your reliance on or interaction with third-party sites.
            </p>
          </div>
        </section>

        {/* Section 9: Limitation of Liability */}
        <section aria-labelledby="section-liability" className="space-y-4">
          <h2
            id="section-liability"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">09.</span>
            <span>Limitation of Liability &amp; Disclaimers</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              The Website and its contents are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis,
              without warranties of any kind, whether express, statutory, or implied, including warranties of merchantability,
              fitness for a particular purpose, non-infringement, or uninterrupted availability.
            </p>
            <p>
              To the fullest extent permitted by applicable law, EVION, its officers, directors, employees, affiliates, and
              agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages—including
              loss of profits, goodwill, business opportunity, data, or downtime—resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-300 marker:text-[#40E0D0]">
              <li>Your access to, reliance upon, or inability to access or use the Website;</li>
              <li>Any unauthorized access to our servers or personal data submitted via the Website;</li>
              <li>Any interruption, bug, virus, or technical malfunction transmitted through the Website.</li>
            </ul>
            <p className="text-xs sm:text-sm text-gray-400 font-mono bg-white/[0.03] border border-white/10 p-4 rounded-xl">
              Nothing in these Terms shall limit or exclude any liability that cannot be excluded or limited by mandatory
              applicable statutory consumer protection law.
            </p>
          </div>
        </section>

        {/* Section 10: Changes to the Website or Terms */}
        <section aria-labelledby="section-changes" className="space-y-4">
          <h2
            id="section-changes"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">10.</span>
            <span>Modifications to Terms &amp; Services</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              We reserve the right to revise or replace these Terms at our sole discretion at any time. When changes occur,
              we will update the &quot;Last Reviewed&quot; date at the top of this document.
            </p>
            <p>
              By continuing to browse or use the Website after any revisions become effective, you agree to be bound by the
              updated Terms. If you do not agree to the new terms, your sole remedy is to cease using the Website.
            </p>
          </div>
        </section>

        {/* Section 11: Governing Law & Jurisdiction */}
        <section aria-labelledby="section-law" className="space-y-4">
          <h2
            id="section-law"
            className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight flex items-baseline gap-3"
          >
            <span className="text-xs font-mono text-[#40E0D0] font-bold">11.</span>
            <span>Governing Law &amp; Dispute Resolution</span>
          </h2>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p>
              These Terms, their subject matter, and any non-contractual disputes or claims arising out of or in connection
              with them or the Website shall be governed by and construed in accordance with the laws of India, without
              giving effect to any principles of conflicts of law.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of or related to these Terms or the Website shall be
              instituted exclusively in the competent courts located in Bengaluru, Karnataka, India. Each party irrevocably
              submits to the exclusive jurisdiction of such courts in any such suit, action, or proceeding.
            </p>
            <p className="text-xs font-mono text-gray-400 bg-white/[0.03] border border-white/10 p-3 rounded-lg">
              [CONFIGURABLE FIELD: Governing jurisdiction may be adapted for regional operating entities pursuant to
              formal corporate agreements.]
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
              If you have any questions, legal notices, or feedback regarding these Terms &amp; Conditions, please contact
              our legal and compliance department:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#40E0D0] uppercase font-bold">
                  <Mail className="w-4 h-4 text-[#40E0D0]" aria-hidden="true" />
                  <span>Legal &amp; Compliance Office</span>
                </div>
                <a
                  href="mailto:partners@evion.energy"
                  className="text-sm font-bold text-[#FFFFFF] hover:text-[#40E0D0] transition-colors block"
                >
                  partners@evion.energy
                </a>
                <p className="text-xs text-gray-400">For commercial agreements, legal notices, and compliance queries.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#40E0D0] uppercase font-bold">
                  <Phone className="w-4 h-4 text-[#40E0D0]" aria-hidden="true" />
                  <span>Corporate Line</span>
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
                  <span>Corporate Headquarters &amp; Technology Center</span>
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
                href="/privacy-policy"
                className="inline-flex items-center gap-1.5 text-[#40E0D0] hover:text-[#FFFFFF] underline transition-colors"
              >
                <span>Read Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <span className="text-white/20" aria-hidden="true">•</span>
              <Link
                href="/franchise"
                className="inline-flex items-center gap-1.5 text-[#40E0D0] hover:text-[#FFFFFF] underline transition-colors"
              >
                <span>Franchise Opportunities</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
