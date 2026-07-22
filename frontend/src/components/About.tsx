"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

const reasons = [
  { title: "Trusted sourcing", text: "Partnered with ethical farms across India for consistent supply." },
  { title: "Export quality", text: "Cleaned, graded and packed to international standards." },
  { title: "Custom packaging", text: "Bulk, retail, private label — tailored to your market." },
  { title: "Reliable logistics", text: "Efficient documentation and worldwide shipping." },
  { title: "Responsive support", text: "Buyer-centric communication from inquiry to delivery." },
];

export function About() {
  return (
    <section id="about" className="section-pad bg-foam py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.22em] text-gold">About us</p>
          <h2 className="font-display mt-3 text-3xl text-ocean md:text-4xl">
            Every shipment represents trust, quality, and India&apos;s agricultural heritage.
          </h2>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden">
            <Image
              src="/images/poster.jpg"
              alt="Dawn ocean shipping horizon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-muted leading-relaxed">
            At Oceanhold Exports, our mission is to connect global markets with premium Indian
            agricultural products while building lasting relationships through reliability,
            transparency, and excellence.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Driven by a vision to make India&apos;s finest natural produce accessible worldwide, we
            deliver products that meet international standards without compromising authenticity
            or freshness. We proudly partner with importers, distributors, wholesalers, and food
            manufacturers across global markets.
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {reasons.map((r, i) => (
          <FadeIn key={r.title} delay={i * 0.06}>
            <div className="border-t-2 border-gold pt-4">
              <h3 className="font-display text-lg text-ocean">{r.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{r.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
