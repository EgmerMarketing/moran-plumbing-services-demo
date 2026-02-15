import Link from "next/link";
import { COMPANY, SERVICES, LOCATIONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-zinc-800" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold flex items-center justify-center transform rotate-45" aria-hidden="true">
                <span className="text-black font-bold text-xl transform -rotate-45">M</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">MORAN</p>
                <p className="text-gold text-xs tracking-widest">PLUMBING</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm mb-4">{COMPANY.tagline}</p>
            <div className="space-y-2 text-sm">
              <p className="text-zinc-400">
                <span className="text-gold">ROC License:</span> {COMPANY.rocLicense}
              </p>
              <p className="text-zinc-400">
                <span className="text-gold">Hours:</span> {COMPANY.hours}
              </p>
            </div>
          </div>

          {/* Services Navigation */}
          <nav aria-label="Services">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2" role="list">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-zinc-400 hover:text-gold text-sm transition-colors focus:outline-none focus-visible:text-gold focus-visible:underline"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service Areas Navigation */}
          <nav aria-label="Service Areas">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2" role="list">
              {LOCATIONS.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-zinc-400 hover:text-gold text-sm transition-colors focus:outline-none focus-visible:text-gold focus-visible:underline"
                  >
                    {location.city}, {location.state}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <address className="space-y-3 text-sm not-italic">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="block text-gold hover:text-gold-light font-bold text-lg focus:outline-none focus-visible:underline"
                aria-label={`Call us at ${COMPANY.phone}`}
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="block text-zinc-400 hover:text-gold transition-colors break-all focus:outline-none focus-visible:text-gold focus-visible:underline"
                aria-label={`Email us at ${COMPANY.email}`}
              >
                {COMPANY.email}
              </a>
              <p className="text-zinc-400">{COMPANY.address}</p>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-gold transition-colors focus:outline-none focus-visible:text-gold"
                  aria-label="Follow us on Instagram (opens in new tab)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.
            </p>
            <nav aria-label="Footer links" className="flex gap-6 text-sm">
              <Link 
                href="/contact" 
                className="text-zinc-500 hover:text-gold transition-colors focus:outline-none focus-visible:text-gold focus-visible:underline"
              >
                Contact
              </Link>
              <Link 
                href="/blog" 
                className="text-zinc-500 hover:text-gold transition-colors focus:outline-none focus-visible:text-gold focus-visible:underline"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Accessibility Statement */}
      <div className="bg-charcoal border-t border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-zinc-500 text-xs text-center">
            This website strives to meet WCAG 2.1 Level AA accessibility standards. 
            Use the accessibility panel (bottom right) to customize your experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
