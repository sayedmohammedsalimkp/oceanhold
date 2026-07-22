"use client";

import { FadeIn } from "./FadeIn";

const options = [
  {
    title: "Bulk solutions",
    text: "Industrial and wholesale supply prepared for safe international transport.",
  },
  {
    title: "Private label",
    text: "Custom branding and labeling for retail products in destination markets.",
  },
  {
    title: "Custom specifications",
    text: "Packaging tailored to product type, buyer requirements and regulations.",
  },
];

const formats = [
  "Bulk packaging",
  "Retail packaging",
  "Stand-up pouches",
  "Woven PP bags",
  "Kraft paper pouches",
  "Corrugated export cartons",
  "Customized labels",
  "Multi-language labels",
];

export function Packaging() {
  return (
    <section id="packaging" className="section-pad bg-ocean py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.22em] text-gold">Packaging solutions</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-4xl">
            Flexible packaging for global food distribution.
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Every shipment is prepared to maintain product quality through storage and
            international transportation.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {options.map((o, i) => (
            <FadeIn key={o.title} delay={i * 0.08}>
              <div className="border-t border-gold/50 pt-5">
                <h3 className="font-display text-xl text-gold-light">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{o.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {formats.map((f) => (
              <li
                key={f}
                className="border border-white/20 px-3 py-1.5 text-xs tracking-wide text-white/85 uppercase"
              >
                {f}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
