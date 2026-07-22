"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

const products = [
  {
    name: "White Sorghum (Jowar)",
    blurb:
      "Wholesome cereal grain for flour milling, breakfast cereals, snacks and food processing. Gluten-free, nutrient-dense, export quality.",
    tags: ["Gluten free", "High fiber", "Multiple grades"],
    image: "/images/products/sorghum.png",
    alt: "White sorghum grains in a wooden bowl",
  },
  {
    name: "Finger Millet (Ragi)",
    blurb:
      "Ancient grain packed with calcium, fiber and minerals. Ideal for health foods, infant nutrition, bakery and wellness brands.",
    tags: ["Calcium rich", "Antioxidants", "≥99% purity"],
    image: "/images/products/ragi.png",
    alt: "Finger millet ragi grains in a ceramic bowl",
  },
  {
    name: "Little Millet",
    blurb:
      "Nutritious, gluten-free ancient grain with mild nutty taste. Perfect for flour, porridge, bakery and ready meals.",
    tags: ["Plant based", "Lab tested", "Custom pack"],
    image: "/images/products/little-millet.png",
    alt: "Little millet grains with wooden scoop",
  },
  {
    name: "Moringa Leaf Powder",
    blurb:
      "Premium Indian Moringa oleifera — hygienically processed to preserve color, aroma and nutrition for nutraceuticals and foods.",
    tags: ["100% natural", "No additives", "Export ready"],
    image: "/images/products/moringa.png",
    alt: "Green moringa leaf powder with fresh leaves",
  },
];

export function Products() {
  return (
    <section id="products" className="section-pad bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.22em] text-gold">Products</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl text-ocean md:text-4xl">
            Premium Indian grains &amp; superfoods for global markets.
          </h2>
          <p className="text-muted mt-4 max-w-2xl">
            Available in bulk quantities with customized packaging options.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <article className="group overflow-hidden border border-ocean/10 bg-white transition hover:border-gold/50">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand-light">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="font-display text-2xl text-ocean">{p.name}</h3>
                  <p className="text-muted mt-3 leading-relaxed">{p.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="bg-sand-light px-3 py-1 text-xs tracking-wide text-ocean uppercase"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
