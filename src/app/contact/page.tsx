import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Moran Plumbing Services for a free quote. Available 24/7 for emergencies. Call (480) 431-4331 or fill out our online form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="text-xl text-zinc-300">
              Ready to get started? Reach out for a free quote or call us directly for immediate
              assistance. We&apos;re here 24/7 for emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Phone (24/7)</p>
                      <a href={`tel:${COMPANY.phoneRaw}`} className="text-white text-lg font-bold hover:text-gold transition-colors">
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-gold transition-colors break-all">
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Office Location</p>
                      <p className="text-white">{COMPANY.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-light p-6 rounded-lg border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-4">Service Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Emergency Service</span>
                    <span className="text-gold font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Regular Appointments</span>
                    <span className="text-white">Mon-Sat: 7AM-6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Sunday</span>
                    <span className="text-white">Emergency Only</span>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-light p-6 rounded-lg border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-gold transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>{COMPANY.instagram}</span>
                </a>
              </div>

              <div className="bg-charcoal-light p-6 rounded-lg border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-2">Licensed & Insured</h3>
                <p className="text-zinc-400 text-sm">
                  Arizona ROC License: <span className="text-gold">{COMPANY.rocLicense}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-gold py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-2">Plumbing Emergency?</h2>
          <p className="text-black/80 mb-4">Don&apos;t wait. Call us now for immediate assistance.</p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-block bg-black text-white font-bold px-8 py-4 rounded hover:bg-zinc-800 transition-colors text-xl"
          >
            {COMPANY.phone}
          </a>
        </div>
      </section>
    </>
  );
}
