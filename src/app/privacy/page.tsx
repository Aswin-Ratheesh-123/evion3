import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | EVION Technologies',
  description: 'EVION privacy policy regarding user telemetry, location data, charging sessions, and payment processing.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FFFFFF]">
      <section className="py-16 sm:py-20 bg-[#40E0D0] border-b-2 border-[#000000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#000000] text-xs font-mono text-[#000000] uppercase tracking-widest mb-3 font-bold shadow-sm">
            LEGAL & DATA PROTECTION
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#000000] uppercase">Privacy Policy</h1>
          <p className="text-sm text-[#000000] font-mono font-semibold mt-2">Last Updated: October 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-[#000000] text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-black text-[#000000] uppercase">1. Information We Collect</h2>
          <p className="font-medium">
            When you use EVION charging stations, mobile applications, or corporate portal services, we collect information required to authenticate, monitor, and deliver ultra-fast EV charging safely:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#000000] font-normal">
            <li><strong>Account & Contact Info:</strong> Name, work email address, phone number, and company name.</li>
            <li><strong>Charging Telemetry:</strong> kWh energy dispensed, peak charging kW speed, duration, battery state-of-charge (where supported by vehicle protocol), and connector status.</li>
            <li><strong>Location & Station Data:</strong> Geolocation coordinates when locating stations and active charger node identifiers.</li>
            <li><strong>Payment Information:</strong> Encrypted payment tokens processed securely via PCI-DSS compliant payment gateways. We do not store raw credit card numbers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-black text-[#000000] uppercase">2. How We Use Your Data</h2>
          <p className="font-medium">
            Data collected is strictly utilized to operate and optimize the EVION charging network, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#000000] font-normal">
            <li>Initiating, metering, and invoicing charging sessions.</li>
            <li>Providing real-time bay availability and telemetry through EVION applications.</li>
            <li>Autonomous load balancing to prevent transformer overloads and grid instability.</li>
            <li>Customer support, hardware diagnostics, and warranty dispatch.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-black text-[#000000] uppercase">3. Data Security & Encryption</h2>
          <p className="font-medium">
            All station communications use TLS 1.3 encryption and comply with ISO 15118 security standards. Telemetry transmissions to the EVION Cloud OS are secured with hardware-level cryptographic key pairs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-black text-[#000000] uppercase">4. Contact Privacy Officer</h2>
          <p className="font-medium">
            For any questions or data access requests, please contact our data governance office at <a href="mailto:privacy@evion.energy" className="text-[#000000] hover:text-[#40E0D0] underline font-bold">privacy@evion.energy</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
