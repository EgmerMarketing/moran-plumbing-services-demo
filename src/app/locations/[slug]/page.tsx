import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, LOCATIONS, SERVICES } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: `Plumber ${location.city} AZ`,
    description: `Professional plumbing services in ${location.city}, Arizona. 24/7 emergency service, drain cleaning, water heaters, and more. Call (480) 431-4331.`,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const otherLocations = LOCATIONS.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
              <Link href="/locations" className="hover:text-gold transition-colors">
                Service Areas
              </Link>
              <span>/</span>
              <span className="text-gold">{location.city}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Plumber in <span className="text-gold">{location.city}, {location.state}</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8">{location.description}</p>
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

      {/* Services in this area */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Plumbing Services in <span className="text-gold">{location.city}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-charcoal-light p-6 rounded-lg border border-zinc-800 hover:border-gold transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Neighborhoods We <span className="text-gold">Serve</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {location.neighborhoods.map((neighborhood, i) => (
              <div key={i} className="bg-charcoal p-4 rounded-lg border border-zinc-800 text-center">
                <span className="text-zinc-300">{neighborhood}</span>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 text-center mt-6">
            Don&apos;t see your neighborhood? We likely serve your area too!{" "}
            <Link href="/contact" className="text-gold hover:underline">
              Contact us
            </Link>{" "}
            to confirm.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Your Trusted <span className="text-gold">{location.city} Plumber</span>
              </h2>
              <p className="text-zinc-300 mb-6">
                When you need a plumber in {location.city}, Moran Plumbing is here to help.
                We&apos;re a family-owned company that treats every customer like family.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 Emergency Service",
                  "Licensed Arizona Contractor",
                  "Fast Response Times",
                  "Upfront, Honest Pricing",
                  "100% Satisfaction Guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <span className="text-gold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-charcoal-light p-8 rounded-lg border border-zinc-800 text-center">
              <div className="w-20 h-20 bg-gold flex items-center justify-center transform rotate-45 mx-auto mb-4">
                <span className="text-black font-bold text-4xl transform -rotate-45">M</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Call Now</h3>
              <p className="text-zinc-400 mb-4">Available 24/7 for {location.city}</p>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="block bg-gold text-black font-bold py-4 rounded text-xl hover:bg-gold-dark transition-colors"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Other <span className="text-gold">Service Areas</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="group bg-charcoal p-6 rounded-lg border border-zinc-800 hover:border-gold transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {l.city}, {l.state}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2">{l.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Need a Plumber in {location.city}?
          </h2>
          <p className="text-black/80 mb-8">
            Contact us today for a free quote. We&apos;re available 24/7 for emergencies.
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
