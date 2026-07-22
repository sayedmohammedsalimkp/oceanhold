"use client";

import { FadeIn } from "./FadeIn";

const certs = [
  { name: "FSSAI", detail: "FSSAI Certified" },
  { name: "APEDA", detail: "APEDA Registered" },
  { name: "Spices Board", detail: "Member — Spices Board of India" },
];

const docs = [
  {
    title: "Certificate of Origin (COO)",
    text: "Confirms the product’s country of origin.",
  },
  {
    title: "Phytosanitary Certificate",
    text: "Certifies the shipment is pest and disease free.",
  },
  {
    title: "Certificate of Analysis",
    text: "Laboratory test report verifying product quality.",
  },
  {
    title: "Fumigation Certificate",
    text: "Provided when required by the importing country.",
  },
];

export function Quality() {
  return (
    <section id="quality" className="section-pad bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.22em] text-gold">Quality &amp; certifications</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl text-ocean md:text-4xl">
            Committed to internationally recognized standards.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {certs.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.08}>
              <div className="bg-sand-light px-6 py-8 text-center">
                <p className="font-display text-2xl text-ocean">{c.name}</p>
                <p className="text-muted mt-2 text-sm">{c.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <h3 className="font-display mt-16 text-2xl text-ocean">Shipment documentation</h3>
          <p className="text-muted mt-2 max-w-2xl">
            Every shipment is backed by complete, accurate and internationally accepted
            documentation for smooth and secure trade.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {docs.map((d, i) => (
            <FadeIn key={d.title} delay={0.05 + i * 0.06}>
              <div className="flex gap-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <p className="font-medium text-ocean">{d.title}</p>
                  <p className="text-muted mt-1 text-sm">{d.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
