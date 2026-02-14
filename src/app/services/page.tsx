import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description:
    "Comprehensive plumbing services for Phoenix homes and businesses. Residential, commercial, new construction, water heaters, drain cleaning, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-zinc-300">
              From emergency repairs to new construction, we provide comprehensive plumbing
              solutions for the Phoenix metro area. No job is too big or too small.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-charcoal-light p-8 rounded-lg border border-zinc-800 hover:border-gold transition-colors"
              >
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h2>
                <p className="text-zinc-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <span
                      key={i}
                      className="bg-charcoal px-3 py-1 rounded-full text-xs text-zinc-300"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 4 && (
                    <span className="bg-charcoal px-3 py-1 rounded-full text-xs text-gold">
                      +{service.features.length - 4} more
                    </span>
                  )}
                </div>
                <span className="text-gold font-medium group-hover:underline">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose <span className="text-gold">Moran Plumbing</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "clock", title: "24/7 Service", desc: "Emergency service any time" },
              { icon: "badge", title: "Licensed", desc: "ROC #361367" },
              { icon: "star", title: "5.0 Rated", desc: "Top-rated on Google" },
              { icon: "dollar", title: "Fair Pricing", desc: "Upfront, honest quotes" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Need Plumbing Service?</h2>
          <p className="text-black/80 mb-8">
            Contact us today for a free quote. Available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="bg-black text-white font-bold px-8 py-4 rounded hover:bg-zinc-800 transition-colors"
            >
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="border-2 border-black text-black font-bold px-8 py-4 rounded hover:bg-black hover:text-white transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
