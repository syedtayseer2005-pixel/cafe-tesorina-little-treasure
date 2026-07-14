import { motion, useReducedMotion } from "motion/react";
import type { GalleryItem } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";

export function GalleryGrid({
  items,
  onOpen,
}: {
  items: GalleryItem[];
  onOpen: (i: number) => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
      {items.map((item, i) => {
        const dir = i % 2 === 0 ? -40 : 40;
        return (
          <motion.button
            key={item.src + i}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onOpen(i)}
            className={cn(
              "group relative overflow-hidden rounded-md bg-muted",
              item.wide && "col-span-2",
              item.tall && "row-span-2",
            )}
            aria-label={`Open image: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/15 transition-colors" />
            <span className="absolute bottom-3 left-3 right-3 text-left text-cream text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              {item.category}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
