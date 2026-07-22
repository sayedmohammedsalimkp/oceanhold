"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const steps = [
  "Product Sourcing",
  "Quality Inspection",
  "Cleaning & Processing",
  "Packaging",
  "Export Documentation",
  "Worldwide Shipping",
];

export function Process() {
  return (
    <section id="process" className="section-pad bg-sand-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.22em] text-gold">Our export process</p>
          <h2 className="font-display mt-3 max-w-xl text-3xl text-ocean md:text-4xl">
            From farm to freight — carefully managed at every stage.
          </h2>
        </FadeIn>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step} delay={i * 0.07}>
              <li className="relative flex gap-4">
                <motion.span
                  className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean text-sm text-white"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 220 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <div className="pt-2">
                  <p className="font-medium text-ocean">{step}</p>
                  {i < steps.length - 1 && (
                    <div className="mt-3 hidden h-px w-16 bg-gold/40 lg:block" />
                  )}
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
