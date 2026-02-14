import Link from "next/link";
import { COMPANY, SERVICES, TESTIMONIALS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-charcoal-dark py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-dark opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-charcoal px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-gold text-sm font-medium">24/7 Emergency Service</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Phoenix&apos;s Trusted{" "}
                <span className="text-gold">Family Plumber</span>
              </h1>
              <p className="text-xl text-zinc-300 mb-8">
                {COMPANY.tagline}. From emergency repairs to new construction, we deliver
                exceptional plumbing services with integrity and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="bg-gold text-black font-bold px-8 py-4 rounded text-center hover:bg-gold-dark transition-colors"
                >
                  Call Now: {COMPANY.phone}
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-gold text-gold font-bold px-8 py-4 rounded text-center hover:bg-gold hover:text-black transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-bold">{COMPANY.googleRating}</span>
                  <span className="text-zinc-400">({COMPANY.googleReviews} reviews)</span>
                </div>
                <div className="text-zinc-400">
                  <span className="text-gold">ROC</span> {COMPANY.rocLicense}
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-charcoal py-8 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-gold text-3xl font-bold">24/7</div>
              <div className="text-zinc-400 text-sm">Emergency Service</div>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold">5.0</div>
              <div className="text-zinc-400 text-sm">Google Rating</div>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold">100%</div>
              <div className="text-zinc-400 text-sm">Satisfaction</div>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold">Licensed</div>
              <div className="text-zinc-400 text-sm">ROC {COMPANY.rocLicense}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-gold">Plumbing Services</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From residential repairs to commercial installations, we provide comprehensive
              plumbing solutions for the Phoenix metro area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-charcoal p-6 rounded-lg border border-zinc-800 hover:border-gold transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{service.description}</p>
                <span className="text-gold text-sm font-medium group-hover:underline">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-gold text-black font-bold px-8 py-3 rounded hover:bg-gold-dark transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Phoenix Chooses{" "}
                <span className="text-gold">Moran Plumbing</span>
              </h2>
              <p className="text-zinc-400 mb-8">
                We&apos;re not just here to fix your pipes—we&apos;re here to build relationships.
                When you call Moran Plumbing, you&apos;re calling family.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Family-Owned", desc: "Personal touch, not corporate runaround" },
                  { title: "Full Spectrum Service", desc: "Residential to industrial, we do it all" },
                  { title: "24/7 Availability", desc: "True emergency service when you need it" },
                  { title: "Upfront Pricing", desc: "No surprises, no hidden fees" },
                  { title: "Licensed & Insured", desc: "ROC licensed for your protection" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-charcoal-light rounded-lg p-8 border border-zinc-800">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gold flex items-center justify-center transform rotate-45 mx-auto mb-4">
                  <span className="text-black font-bold text-4xl transform -rotate-45">M</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Ready to Help</h3>
                <p className="text-zinc-400">Call us anytime, day or night</p>
              </div>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="block bg-gold text-black font-bold py-4 rounded text-center text-xl hover:bg-gold-dark transition-colors"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our <span className="text-gold">Customers Say</span>
            </h2>
            <p className="text-zinc-400">Real reviews from real Phoenix homeowners</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="bg-charcoal p-6 rounded-lg border border-zinc-800">
                <div className="flex text-gold mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-zinc-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Need a Plumber in Phoenix?
          </h2>
          <p className="text-black/80 mb-8 text-lg">
            Available 24/7 for emergencies. Call now for fast, reliable service.
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

      {/* Mobile Contact Form */}
      <section className="lg:hidden bg-charcoal-dark py-12">
        <div className="max-w-lg mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
