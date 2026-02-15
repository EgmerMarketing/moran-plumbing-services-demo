"use client";

import { useState, FormEvent, useRef } from "react";
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your plumbing needs";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitted(true);
      // Focus on success message for screen readers
      setTimeout(() => {
        successRef.current?.focus();
      }, 100);
    }
  };

  if (submitted) {
    return (
      <div 
        ref={successRef}
        className="bg-charcoal rounded-lg p-8 text-center"
        role="alert"
        aria-live="polite"
        tabIndex={-1}
      >
        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
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
          <a 
            href={`tel:${COMPANY.phoneRaw}`} 
            className="underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            aria-label={`Call us at ${COMPANY.phone}`}
          >
            {COMPANY.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className="bg-charcoal rounded-lg p-6 sm:p-8"
      aria-label="Contact form"
      noValidate
    >
      <h3 className="text-xl font-bold text-white mb-6">Request a Free Quote</h3>
      
      {/* Error Summary for Screen Readers */}
      {Object.keys(errors).length > 0 && (
        <div 
          className="bg-red-900/30 border border-red-500 rounded p-4 mb-4"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-red-400 font-medium mb-2">Please correct the following errors:</p>
          <ul className="list-disc list-inside text-red-300 text-sm">
            {Object.values(errors).map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="contact-name" className="block text-sm text-zinc-400 mb-1">
            Full Name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: "" });
            }}
            className={`w-full bg-charcoal-dark border rounded px-4 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              errors.name ? "border-red-500" : "border-zinc-700 focus:border-gold"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Field */}
          <div>
            <label htmlFor="contact-email" className="block text-sm text-zinc-400 mb-1">
              Email <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              autoComplete="email"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              className={`w-full bg-charcoal-dark border rounded px-4 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                errors.email ? "border-red-500" : "border-zinc-700 focus:border-gold"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="contact-phone" className="block text-sm text-zinc-400 mb-1">
              Phone <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              required
              autoComplete="tel"
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: "" });
              }}
              className={`w-full bg-charcoal-dark border rounded px-4 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                errors.phone ? "border-red-500" : "border-zinc-700 focus:border-gold"
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label htmlFor="contact-service" className="block text-sm text-zinc-400 mb-1">
            Service Needed
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-charcoal-dark border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus:border-gold"
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

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="block text-sm text-zinc-400 mb-1">
            Message <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: "" });
            }}
            placeholder="Describe your plumbing needs..."
            className={`w-full bg-charcoal-dark border rounded px-4 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold resize-none ${
              errors.message ? "border-red-500" : "border-zinc-700 focus:border-gold"
            }`}
          />
          <p id="message-hint" className="sr-only">
            Please describe your plumbing issue or what service you need
          </p>
          {errors.message && (
            <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gold text-black font-bold py-3 rounded hover:bg-gold-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
        >
          Submit Request
        </button>

        {/* Consent Notice */}
        <p className="text-xs text-zinc-500 text-center">
          By submitting, you agree to receive calls and texts about your inquiry.
        </p>
      </div>
    </form>
  );
}
