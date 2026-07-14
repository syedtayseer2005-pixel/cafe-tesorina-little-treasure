import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES, type GalleryItem } from "@/lib/gallery-data";
import { GalleryGrid } from "@/components/gallery-grid";
import { Lightbox } from "@/components/lightbox";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cafe Tesorina, Parkville" },
      { name: "description", content: "Photos from inside Cafe Tesorina: the pink corner facade, blue tiled interior, coffee, food and neighbourhood." },
      { property: "og:title", content: "Gallery — Cafe Tesorina" },
      { property: "og:description", content: "The room, the coffee, the food and the regulars." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo<GalleryItem[]>(
    () => category === "All" ? GALLERY : GALLERY.filter((g) => g.category === category),
    [category],
  );

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-espresso/70 hover:text-terracotta transition text-eyebrow mb-8">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-eyebrow text-terracotta">Gallery</p>
          <h1 className="mt-3 text-display text-6xl md:text-8xl leading-[0.9] text-espresso">
            A look around.
          </h1>
        </motion.header>

        <div className="flex flex-wrap gap-2 mb-10">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "px-4 py-2 rounded-full text-sm border transition",
                category === c
                  ? "bg-espresso text-cream border-espresso"
                  : "border-espresso/20 text-espresso/70 hover:border-terracotta hover:text-espresso",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <GalleryGrid items={filtered} onOpen={setIndex} />
      </div>
      <Lightbox
        items={filtered}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </div>
  );
}
