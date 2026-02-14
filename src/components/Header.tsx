"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-charcoal-dark border-b border-zinc-800 sticky top-0 z-50">
      <div className="bg-gold text-black text-center py-2 text-sm font-medium">
        <span className="hidden sm:inline">24/7 Emergency Service Available — </span>
        <a href={`tel:${COMPANY.phoneRaw}`} className="font-bold hover:underline">
          Call {COMPANY.phone}
        </a>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold flex items-center justify-center transform rotate-45">
              <span className="text-black font-bold text-xl transform -rotate-45">M</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-lg leading-tight">MORAN</p>
              <p className="text-gold text-xs tracking-widest">PLUMBING</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-gold transition-colors py-2 text-sm font-medium"
                >
                  {item.label}
                  {item.children && <span className="ml-1">▾</span>}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-charcoal border border-zinc-700 rounded-lg shadow-xl py-2 min-w-48 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-gold transition-colors"
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
              className="bg-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-gold-dark transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-800">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-white hover:text-gold transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-zinc-400 hover:text-gold transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
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
              className="block mt-4 bg-gold text-black px-4 py-3 rounded font-bold text-center"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
