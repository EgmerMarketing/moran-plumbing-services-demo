import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, SERVICES } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} Phoenix`,
    description: `${service.description} Professional ${service.shortTitle.toLowerCase()} services in Phoenix, AZ. Call (480) 431-4331 for a free quote.`,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
              <Link href="/services" className="hover:text-gold transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-gold">{service.shortTitle}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {service.title} <span className="text-gold">Phoenix</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="bg-gold text-black font-bold px-8 py-4 rounded text-center hover:bg-gold-dark transition-colors"
              >
                Call {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-gold text-gold font-bold px-8 py-4 rounded text-center hover:bg-gold hover:text-black transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What We <span className="text-gold">Offer</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-charcoal-light p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-gold">&#10003;</span>
                  <span>24/7 emergency service available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">&#10003;</span>
                  <span>Licensed Arizona contractor (ROC {COMPANY.rocLicense})</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">&#10003;</span>
                  <span>Upfront, honest pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">&#10003;</span>
                  <span>Certified technicians</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">&#10003;</span>
                  <span>Fast response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">&#10003;</span>
                  <span>Family-owned and operated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: `How much does ${service.shortTitle.toLowerCase()} cost in Phoenix?`,
                a: `Costs vary based on the specific job requirements. Contact us for a free, no-obligation quote. We offer upfront pricing with no hidden fees.`,
              },
              {
                q: `Do you offer emergency ${service.shortTitle.toLowerCase()} service?`,
                a: `Yes! We provide 24/7 emergency service throughout the Phoenix metro area. Call us anytime at ${COMPANY.phone}.`,
              },
              {
                q: `Are you licensed and insured?`,
                a: `Absolutely. Moran Plumbing is a licensed Arizona contractor (ROC ${COMPANY.rocLicense}) and fully insured for your protection.`,
              },
              {
                q: `What areas do you serve?`,
                a: `We serve Phoenix, Glendale, Mesa, Tempe, Cave Creek, Flagstaff, and surrounding areas. Contact us to confirm service in your area.`,
              },
            ].map((faq, i) => (
              <div key={i} className="bg-charcoal p-6 rounded-lg border border-zinc-800">
                <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                <p className="text-zinc-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Other <span className="text-gold">Services</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-charcoal-light p-6 rounded-lg border border-zinc-800 hover:border-gold transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Need {service.shortTitle} Service?
          </h2>
          <p className="text-black/80 mb-8">
            Contact us today for a free quote. Available 24/7 for emergencies.
          </p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-block bg-black text-white font-bold px-8 py-4 rounded hover:bg-zinc-800 transition-colors"
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </section>
    </>
  );
}
