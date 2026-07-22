import Image from "next/image";

export function Footer() {
  return (
    <footer className="section-pad bg-ocean-deep py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-4">
          <span className="relative mt-1 h-12 w-12 shrink-0">
            <Image
              src="/images/logo-mark.png"
              alt=""
              fill
              className="object-contain"
              sizes="48px"
            />
          </span>
          <div>
            <p className="font-display text-2xl">OCEANHOLD EXPORTS</p>
            <p className="mt-2 max-w-md text-sm text-white/70">
              Delivering India&apos;s excellence to global markets through uncompromising quality,
              trusted partnerships, and reliable export solutions.
            </p>
          </div>
        </div>
        <p className="text-sm text-gold">Rooted in India. Reaching the World.</p>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-white/40">
        © {new Date().getFullYear()} Oceanhold Exports LLP. All rights reserved.
      </p>
    </footer>
  );
}
