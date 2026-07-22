"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="section-pad mx-auto flex max-w-6xl items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative h-10 w-10">
            <Image
              src="/images/logo-mark.png"
              alt=""
              fill
              className="object-contain"
              sizes="40px"
              priority
              loading="eager"
            />
          </span>
          <span className="font-display text-lg tracking-wide text-ocean md:text-xl">
            OCEANHOLD
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ocean/90 transition hover:text-ocean"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="text-ocean md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ocean" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ocean" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="section-pad border-t border-white/10 bg-ocean-deep/95 py-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
