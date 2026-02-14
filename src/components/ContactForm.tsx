"use client";

import { useState, FormEvent } from "react";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-charcoal rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-zinc-400 mb-4">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <p className="text-gold font-medium">
          For immediate assistance, call{" "}
          <a href={`tel:${COMPANY.phoneRaw}`} className="underline">
            {COMPANY.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-charcoal rounded-lg p-6 sm:p-8">
      <h3 className="text-xl font-bold text-white mb-6">Request a Free Quote</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-charcoal-dark border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-charcoal-dark border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-zinc-400 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-charcoal-dark border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gold"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm text-zinc-400 mb-1">
            Service Needed
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-charcoal-dark border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gold"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-zinc-400 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe your plumbing needs..."
            className="w-full bg-charcoal-dark border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gold resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gold text-black font-bold py-3 rounded hover:bg-gold-dark transition-colors"
        >
          Submit Request
        </button>
        <p className="text-xs text-zinc-500 text-center">
          By submitting, you agree to receive calls and texts about your inquiry.
        </p>
      </div>
    </form>
  );
}
