"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.15]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ocean-deep text-white"
    >
      {/* Parallax + slow ken burns background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 18, ease: "easeOut" }}
        >
          <Image
            src="/images/hero-v2.png"
            alt="Oceanhold Exports — port and cargo ship at sunrise"
            fill
            priority
            loading="eager"
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="section-pad relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center pb-36 pt-28 text-center md:pb-40"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6 h-28 w-28 md:h-32 md:w-32"
        >
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/logo-mark.png"
              alt="Oceanhold Exports logo"
              fill
              className="object-contain"
              sizes="128px"
              priority
              loading="eager"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="font-display text-5xl leading-none font-semibold tracking-tight text-ocean md:text-7xl"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.35)" }}
        >
          OCEANHOLD
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 flex items-center gap-4"
        >
          <motion.span
            className="h-px origin-right bg-gold md:w-16 w-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          />
          <p className="font-display text-sm tracking-[0.45em] text-gold md:text-base">
            EXPORTS
          </p>
          <motion.span
            className="h-px origin-left bg-gold md:w-16 w-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-5 text-sm tracking-[0.18em] text-ocean uppercase md:text-base"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.4)" }}
        >
          Connecting Oceans. Delivering Trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-gold px-6 py-3 text-sm font-medium text-ocean transition hover:bg-gold-light"
          >
            Partner with us
          </a>
          <a
            href="#products"
            className="border-2 border-ocean bg-white/70 px-6 py-3 text-sm font-medium text-ocean backdrop-blur-[2px] transition hover:bg-white"
          >
            View products
          </a>
        </motion.div>
      </motion.div>

      {/* Soft wave transition into value bar only — does not dim photo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[4.5rem] z-10 overflow-hidden leading-none sm:bottom-[4.25rem]">
        <svg
          className="relative block h-12 w-[200%] animate-[wave-drift_10s_ease-in-out_infinite] md:h-16"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#002147"
            d="M0,40 C180,70 360,10 540,40 C720,70 900,15 1080,42 C1260,70 1380,30 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 bg-ocean">
        <div className="section-pad mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/15 py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:py-5">
          {[
            { label: "Global Reach", icon: "globe" },
            { label: "Quality Assured", icon: "shield" },
            { label: "Trusted Partnerships", icon: "handshake" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.12 }}
              className="flex items-center justify-center gap-3 px-4 py-3"
            >
              <ValueIcon type={item.icon} />
              <span className="text-sm tracking-wide text-gold-light">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueIcon({ type }: { type: string }) {
  const common = "h-6 w-6 stroke-gold-light";
  if (type === "globe") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </svg>
    );
  }
  if (type === "shield") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden>
        <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg className={common} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden>
      <path d="M8 12l-2 1v3l2 1 4-2 4 2 2-1v-3l-2-1" />
      <path d="M8 12V8a2 2 0 012-2h0M16 12V8a2 2 0 00-2-2h0" />
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="7" r="2" />
    </svg>
  );
}
