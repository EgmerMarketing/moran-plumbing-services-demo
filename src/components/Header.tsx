"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header className="bg-charcoal-dark border-b border-zinc-800 sticky top-0 z-50" role="banner">
      {/* Announcement Bar */}
      <div className="bg-gold text-black text-center py-2 text-sm font-medium" role="alert" aria-live="polite">
        <span className="hidden sm:inline">24/7 Emergency Service Available — </span>
        <a 
          href={`tel:${COMPANY.phoneRaw}`} 
          className="font-bold hover:underline focus:underline focus:outline-none"
          aria-label={`Call us at ${COMPANY.phone}`}
        >
          Call {COMPANY.phone}
        </a>
      </div>

      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-dark rounded"
            aria-label={`${COMPANY.name} - Go to homepage`}
          >
            <div className="w-10 h-10 bg-gold flex items-center justify-center transform rotate-45" aria-hidden="true">
              <span className="text-black font-bold text-xl transform -rotate-45">M</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-lg leading-tight">MORAN</p>
              <p className="text-gold text-xs tracking-widest">PLUMBING</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6" role="menubar">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
                role="none"
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-gold transition-colors py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  role="menuitem"
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={item.children ? openDropdown === item.label : undefined}
                >
                  {item.label}
                  {item.children && (
                    <span className="ml-1" aria-hidden="true">▾</span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && openDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 bg-charcoal border border-zinc-700 rounded-lg shadow-xl py-2 min-w-48 mt-1"
                    role="menu"
                    aria-label={`${item.label} submenu`}
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-gold transition-colors focus:outline-none focus-visible:bg-zinc-800 focus-visible:text-gold"
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Phone CTA */}
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="bg-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-gold-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-dark"
              aria-label={`Call ${COMPANY.name} at ${COMPANY.phone}`}
            >
              {COMPANY.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="lg:hidden py-4 border-t border-zinc-800"
            role="menu"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.href} role="none">
                <Link
                  href={item.href}
                  className="block py-2 text-white hover:text-gold transition-colors font-medium focus:outline-none focus-visible:text-gold focus-visible:underline"
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4" role="group" aria-label={`${item.label} links`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-zinc-400 hover:text-gold transition-colors focus:outline-none focus-visible:text-gold focus-visible:underline"
                        onClick={() => setMobileMenuOpen(false)}
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="block mt-4 bg-gold text-black px-4 py-3 rounded font-bold text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              role="menuitem"
              aria-label={`Call ${COMPANY.name} at ${COMPANY.phone}`}
            >
              Call {COMPANY.phone}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
