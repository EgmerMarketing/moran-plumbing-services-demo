import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, LOCATIONS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Moran Plumbing serves Phoenix, Glendale, Mesa, Tempe, Cave Creek, Flagstaff, and surrounding Arizona communities. Find plumbing services near you.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Service <span className="text-gold">Areas</span>
            </h1>
            <p className="text-xl text-zinc-300">
              Proudly serving the Phoenix metro area and Northern Arizona. Find professional
              plumbing services in your city.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-charcoal-light p-6 rounded-lg border border-zinc-800 hover:border-gold transition-colors"
              >
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {location.city}, {location.state}
                </h2>
                <p className="text-zinc-400 text-sm mb-4">{location.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.neighborhoods.slice(0, 3).map((n, i) => (
                    <span key={i} className="bg-charcoal px-2 py-1 rounded text-xs text-zinc-300">
                      {n}
                    </span>
                  ))}
                </div>
                <span className="text-gold font-medium group-hover:underline">
                  View Services &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Services Available in <span className="text-gold">All Areas</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-charcoal p-4 rounded-lg border border-zinc-800 hover:border-gold transition-colors text-center"
              >
                <span className="text-zinc-300 hover:text-gold transition-colors">
                  {service.shortTitle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Don&apos;t See Your Area?</h2>
          <p className="text-black/80 mb-8">
            Contact us to confirm service availability in your location.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
