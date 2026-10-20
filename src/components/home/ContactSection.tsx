'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react';

const enquiryOptions = [
  'Home Charging',
  'Workplace Charging',
  'Public Charging',
  'Fleet Charging',
  'Partnership',
  'Other',
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interestedIn: 'Home Charging',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        setErrorMessage(data.message || 'Submission failed. Please verify your details.');
      }
    } catch {
      setErrorMessage('Network error. Unable to reach server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FFFFFF] text-[#000000] py-32 sm:py-44 overflow-hidden border-b border-[#000000]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Heading, Supporting Narrative, Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#40E0D0]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#000000] uppercase">
                09 — CONTACT
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#000000] leading-[0.95] uppercase">
                LET&apos;S POWER <br />
                <span className="font-semibold text-[#40E0D0]">YOUR NEXT MOVE.</span>
              </h2>

              <div className="space-y-1 text-base sm:text-lg text-[#000000]/80 font-normal leading-relaxed">
                <p>Tell us about your charging requirements.</p>
                <p className="text-[#000000]/60">Our team can help you explore the right solution.</p>
              </div>
            </div>

            {/* Direct Contact info */}
            <div className="pt-8 border-t border-[#000000]/10 space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3 text-[#000000]/80">
                <Mail className="w-4 h-4 text-[#40E0D0]" />
                <span>PARTNERSHIPS@EVION.ENERGY</span>
              </div>
              <div className="flex items-center gap-3 text-[#000000]/80">
                <Phone className="w-4 h-4 text-[#40E0D0]" />
                <span>+1 (800) 480-EVION</span>
              </div>
              <div className="flex items-center gap-3 text-[#000000]/80">
                <MapPin className="w-4 h-4 text-[#40E0D0]" />
                <span>ARCHITECTURAL HEADQUARTERS / CALIFORNIA, USA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#000000] text-[#FFFFFF] border border-[#40E0D0]/30 shadow-2xl">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#40E0D0]/20 border border-[#40E0D0] flex items-center justify-center mx-auto text-[#40E0D0]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#40E0D0] uppercase">
                      ENQUIRY TRANSMITTED
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[#FFFFFF] uppercase">
                      THANK YOU FOR CONNECTING
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FFFFFF]/70 max-w-md mx-auto font-light leading-relaxed">
                      Our infrastructure engineering team has received your specifications and will respond within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          interestedIn: 'Home Charging',
                          location: '',
                          message: '',
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 text-xs font-mono uppercase tracking-wider text-[#FFFFFF] hover:bg-[#40E0D0] hover:text-[#000000] transition-colors cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-3">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#FFFFFF]/70 uppercase">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Elena Vance"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/30 text-sm focus:outline-none focus:border-[#40E0D0] transition-colors"
                        />
                      </div>

                      {/* Business Email */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#FFFFFF]/70 uppercase">
                          BUSINESS EMAIL *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="elena@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/30 text-sm focus:outline-none focus:border-[#40E0D0] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#FFFFFF]/70 uppercase">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/30 text-sm focus:outline-none focus:border-[#40E0D0] transition-colors"
                        />
                      </div>

                      {/* Company Name (optional) */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#FFFFFF]/70 uppercase">
                          COMPANY NAME (OPTIONAL)
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Organization or Property"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/30 text-sm focus:outline-none focus:border-[#40E0D0] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Enquiry Type */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#FFFFFF]/70 uppercase">
                          ENQUIRY TYPE *
                        </label>
                        <select
                          name="interestedIn"
                          value={formData.interestedIn}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-[#FFFFFF]/15 text-[#FFFFFF] text-sm focus:outline-none focus:border-[#40E0D0] transition-colors cursor-pointer"
                        >
                          {enquiryOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#000000] text-[#FFFFFF]">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Location */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#FFFFFF]/70 uppercase">
                          LOCATION *
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="City, Country"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/30 text-sm focus:outline-none focus:border-[#40E0D0] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-wider text-[#FFFFFF]/70 uppercase">
                        MESSAGE *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your estimated vehicle volume, power supply, and timing..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/30 text-sm focus:outline-none focus:border-[#40E0D0] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#40E0D0] text-[#000000] text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-[#FFFFFF] hover:shadow-[0_0_30px_rgba(64,224,208,0.5)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND ENQUIRY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
