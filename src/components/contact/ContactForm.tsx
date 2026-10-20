'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { Zap, CheckCircle2, AlertCircle, Send, Building2, MapPin, Mail, Phone, User, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/Button';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required (min 2 characters)'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid work email address'),
  phone: z.string().min(8, 'Please enter a valid contact phone number'),
  location: z.string().min(2, 'Location / city is required'),
  interestedIn: z.enum([
    'Home Charging',
    'Business Charging',
    'Commercial & Retail',
    'Fleet Depot',
    'Highway Hub Partnership',
    'General Inquiry',
  ]),
  message: z.string().min(10, 'Please provide more details in your message (min 10 characters)'),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    interestedIn: 'Business Charging',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus('submitting');
    setErrorMessage('');

    const validation = formSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof FormValues] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus('idle');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus('success');
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#40E0D0', '#FFFFFF', '#000000'],
          });
        } catch {}
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Failed to submit form. Please check your inputs.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please try again.');
    }
  };

  return (
    <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#000000] p-6 sm:p-10 shadow-lg relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#40E0D0] border-2 border-[#000000] flex items-center justify-center text-[#000000] mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 text-[#000000]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-[#000000] tracking-tight uppercase">
                Inquiry Received Successfully!
              </h3>
              <p className="text-[#000000] max-w-md mx-auto text-sm leading-relaxed font-medium">
                Thank you, <span className="font-bold underline">{formData.name}</span>. An EVION technical solutions engineer will review your project requirements and connect with you within 24 hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#000000] max-w-md mx-auto text-xs font-mono text-left text-[#000000] space-y-1">
              <div><span className="font-bold">Vertical:</span> {formData.interestedIn}</div>
              <div><span className="font-bold">Email:</span> {formData.email}</div>
              <div><span className="font-bold">Location:</span> {formData.location}</div>
            </div>

            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                setStatus('idle');
                setFormData({
                  name: '',
                  company: '',
                  email: '',
                  phone: '',
                  location: '',
                  interestedIn: 'Business Charging',
                  message: '',
                });
              }}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="border-b border-[#000000]/20 pb-4 mb-6">
              <h3 className="text-2xl font-black text-[#000000] uppercase">Talk to EVION</h3>
              <p className="text-xs text-[#000000] mt-1 font-medium">
                Partner with us for commercial site hosting, fleet electrification, or smart home charging installations.
              </p>
            </div>

            {status === 'error' && (
              <div className="p-4 rounded-2xl bg-[#000000] border-2 border-[#40E0D0] text-[#FFFFFF] text-xs flex items-center gap-2 font-bold">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#40E0D0]" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Row 1: Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#000000] flex items-center gap-1.5 font-bold">
                  <User className="w-3.5 h-3.5 text-[#000000]" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="w-full bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl px-4 py-3 text-sm text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:border-[#40E0D0] focus:ring-4 focus:ring-[#40E0D0]/20 transition-all font-medium"
                />
                {errors.name && <p className="text-[11px] text-[#000000] font-bold">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#000000] flex items-center gap-1.5 font-bold">
                  <Building2 className="w-3.5 h-3.5 text-[#000000]" />
                  <span>Company / Organization</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Nexus Properties"
                  className="w-full bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl px-4 py-3 text-sm text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:border-[#40E0D0] focus:ring-4 focus:ring-[#40E0D0]/20 transition-all font-medium"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#000000] flex items-center gap-1.5 font-bold">
                  <Mail className="w-3.5 h-3.5 text-[#000000]" />
                  <span>Work Email *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl px-4 py-3 text-sm text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:border-[#40E0D0] focus:ring-4 focus:ring-[#40E0D0]/20 transition-all font-medium"
                />
                {errors.email && <p className="text-[11px] text-[#000000] font-bold">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#000000] flex items-center gap-1.5 font-bold">
                  <Phone className="w-3.5 h-3.5 text-[#000000]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl px-4 py-3 text-sm text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:border-[#40E0D0] focus:ring-4 focus:ring-[#40E0D0]/20 transition-all font-medium"
                />
                {errors.phone && <p className="text-[11px] text-[#000000] font-bold">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 3: Location & Solution Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#000000] flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#000000]" />
                  <span>City / Property Location *</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Bengaluru, Mumbai, Delhi NCR"
                  required
                  className="w-full bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl px-4 py-3 text-sm text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:border-[#40E0D0] focus:ring-4 focus:ring-[#40E0D0]/20 transition-all font-medium"
                />
                {errors.location && <p className="text-[11px] text-[#000000] font-bold">{errors.location}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#000000] flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5 text-[#000000]" />
                  <span>Interested In *</span>
                </label>
                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#40E0D0] focus:ring-4 focus:ring-[#40E0D0]/20 transition-all font-medium cursor-pointer"
                >
                  <option value="Home Charging">Home Charging (EVION Home One)</option>
                  <option value="Business Charging">Business & Workplace Charging</option>
                  <option value="Commercial & Retail">Commercial & Retail Real Estate</option>
                  <option value="Fleet Depot">Fleet Depot Electrification</option>
                  <option value="Highway Hub Partnership">Highway Hub Partnership (Zero-Capex)</option>
                  <option value="General Inquiry">General / Press Inquiry</option>
                </select>
              </div>
            </div>

            {/* Message Box */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#000000] flex items-center gap-1.5 font-bold">
                <MessageSquare className="w-3.5 h-3.5 text-[#000000]" />
                <span>Project Details / Message *</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your property, number of parking bays, expected timeline, or any specific electrical questions..."
                required
                className="w-full bg-[#FFFFFF] border-2 border-[#000000] rounded-2xl p-4 text-sm text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:border-[#40E0D0] focus:ring-4 focus:ring-[#40E0D0]/20 transition-all font-medium"
              />
              {errors.message && <p className="text-[11px] text-[#000000] font-bold">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={status === 'submitting'}
              icon={status === 'submitting' ? <Zap className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            >
              {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Partnership Inquiry'}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
