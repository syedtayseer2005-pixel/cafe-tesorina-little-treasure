import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/gallery-data";

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndexChange]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] bg-espresso/95 backdrop-blur-sm grid place-items-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
        >
          <button
            className="absolute top-4 right-4 grid place-items-center h-11 w-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 md:left-8 grid place-items-center h-11 w-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition"
            onClick={(e) => { e.stopPropagation(); onIndexChange((index! - 1 + items.length) % items.length); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-4 md:right-8 grid place-items-center h-11 w-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition"
            onClick={(e) => { e.stopPropagation(); onIndexChange((index! + 1) % items.length); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-w-[92vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[80vh] max-w-[92vw] object-contain rounded"
            />
            <figcaption className="mt-3 text-center text-cream/70 text-sm">
              {item.alt}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
