import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Moran family - your trusted Phoenix plumbers since 2025. Family-owned, community-focused, and dedicated to exceptional service.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-gold">Moran Plumbing</span>
            </h1>
            <p className="text-xl text-zinc-300">
              Family-owned and operated in North Phoenix. We&apos;re not just plumbers—we&apos;re
              your neighbors, dedicated to serving the Arizona community with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Moran Plumbing Services was founded in September 2025 with a simple mission:
                  to provide Phoenix-area residents and businesses with honest, reliable plumbing
                  services they can trust.
                </p>
                <p>
                  As a family-owned business based in North Phoenix, we understand the importance
                  of building lasting relationships with our customers. When you call us, you&apos;re
                  not just getting a plumber—you&apos;re getting a partner who cares about your
                  home as much as you do.
                </p>
                <p>
                  We believe that no job is too big or too small. Whether it&apos;s a midnight
                  emergency or a new construction project, our team brings the same level of
                  dedication and expertise to every job.
                </p>
              </div>
            </div>
            <div className="bg-charcoal-light p-8 rounded-lg border border-zinc-800">
              <div className="text-center">
                <div className="w-24 h-24 bg-gold flex items-center justify-center transform rotate-45 mx-auto mb-6">
                  <span className="text-black font-bold text-5xl transform -rotate-45">M</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Moran Plumbing Services</h3>
                <p className="text-gold mb-4">Established {COMPANY.established}</p>
                <p className="text-zinc-400 text-sm">
                  Licensed Arizona Contractor<br />
                  ROC {COMPANY.rocLicense}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our <span className="text-gold">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                desc: "We pride ourselves on honesty in every interaction. No hidden fees, no unnecessary upsells—just straightforward service.",
              },
              {
                title: "Family",
                desc: "We treat every customer like family. Your home and your trust matter to us, and we work to earn both every day.",
              },
              {
                title: "Community",
                desc: "We're proud to serve the amazing Arizona community. Our success is built on the relationships we've made.",
              },
              {
                title: "Excellence",
                desc: "We hold ourselves to the highest standards. Our certified technicians deliver quality work, every time.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-charcoal p-6 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-bold text-gold mb-3">{value.title}</h3>
                <p className="text-zinc-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-charcoal py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why <span className="text-gold">Choose Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "24/7",
                label: "Emergency Service",
                desc: "Plumbing emergencies don't wait. Neither do we. Call us anytime, day or night.",
              },
              {
                stat: "5.0",
                label: "Google Rating",
                desc: "Our customers love us. Check out our reviews and see why Phoenix trusts Moran Plumbing.",
              },
              {
                stat: "100%",
                label: "Satisfaction Guarantee",
                desc: "We're not happy until you're happy. We stand behind every job we do.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">{item.stat}</div>
                <div className="text-white font-medium mb-2">{item.label}</div>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl text-white font-light italic mb-6">
            &ldquo;At Moran Plumbing Services, we&apos;re not just here to fix your pipes—we&apos;re
            here to build a relationship. When you call us, you&apos;re calling family.&rdquo;
          </blockquote>
          <p className="text-gold font-medium">— The Moran Family</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Ready to Experience the Difference?</h2>
          <p className="text-black/80 mb-8">
            Contact us today and see why Phoenix families choose Moran Plumbing.
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
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
