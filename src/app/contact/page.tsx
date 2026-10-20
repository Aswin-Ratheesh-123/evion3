import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { FAQSection } from '@/components/home/FAQSection';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Partner With EVION | Talk to Energy Experts',
  description:
    'Get in touch with EVION engineers and commercial partner managers. Deploy EV charging at your commercial property, workplace, or fleet depot.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Hero Header */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b-2 border-[#000000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#40E0D0] border border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest font-bold">
              GET IN TOUCH
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
              PARTNER <br />
              <span className="text-[#40E0D0]">
                WITH EVION.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#000000] font-normal leading-relaxed">
              Whether you are looking to install smart home chargers, host a zero-capex high-speed commercial superhub, or electrify an entire logistics fleet, our technical specialists are ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info Matrix */}
      <section className="py-24 bg-[#FFFFFF] border-b-2 border-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information & Perks */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-[#000000] uppercase tracking-tight">
                  Direct Inquiries & Headquarters
                </h3>
                <p className="text-sm text-[#000000] leading-relaxed">
                  Our enterprise response team guarantees replies within 24 hours. Feel free to reach out directly through any of our channels below.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#40E0D0] border border-[#000000] flex items-center justify-center text-[#000000] shrink-0">
                    <Mail className="w-5 h-5 text-[#000000]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#000000] uppercase font-bold">Enterprise Email</div>
                    <a href="mailto:partners@evion.energy" className="text-sm font-bold text-[#000000] hover:text-[#40E0D0] transition-colors">
                      partners@evion.energy
                    </a>
                    <div className="text-xs text-[#000000] mt-0.5">For business, host & fleet inquiries</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#40E0D0] border border-[#000000] flex items-center justify-center text-[#000000] shrink-0">
                    <Phone className="w-5 h-5 text-[#000000]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#000000] uppercase font-bold">Priority Hotline</div>
                    <a href="tel:+918040001800" className="text-sm font-bold text-[#000000] hover:text-[#40E0D0] transition-colors">
                      +91 (080) 4000-1800
                    </a>
                    <div className="text-xs text-[#000000] mt-0.5">Mon–Sat, 8:00 AM – 8:00 PM IST</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000000] flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#40E0D0] border border-[#000000] flex items-center justify-center text-[#000000] shrink-0">
                    <MapPin className="w-5 h-5 text-[#000000]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#000000] uppercase font-bold">Technology Center</div>
                    <div className="text-sm font-bold text-[#000000]">
                      EVION Energy Labs, Outer Ring Road, Bellandur, Bengaluru 560103
                    </div>
                  </div>
                </div>
              </div>

              {/* SLAs */}
              <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] space-y-3 shadow-sm">
                <div className="text-xs font-mono text-[#000000] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#40E0D0]" />
                  <span>EVION PARTNERSHIP COMMITMENT</span>
                </div>
                <div className="text-xs text-[#000000] space-y-2 font-medium">
                  <p>✓ 100% turnkey civil, electrical and DISCOM grid approvals handled.</p>
                  <p>✓ Transparent monthly revenue settlement direct to your account.</p>
                  <p>✓ 24/7 autonomous cloud diagnostics and 4-hour on-site technician SLA.</p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded FAQ */}
      <FAQSection />
    </div>
  );
}
