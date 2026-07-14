import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, MapPin, Clock, Coffee, PawPrint } from "lucide-react";
import { SITE } from "@/lib/site";
import { SIGNATURES } from "@/lib/menu-data";
import { GALLERY } from "@/lib/gallery-data";
import { GalleryGrid } from "@/components/gallery-grid";
import { Lightbox } from "@/components/lightbox";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cafe Tesorina — Little treasure of Parkville, Melbourne" },
      { name: "description", content: "Neighbourhood corner cafe on Morrah Street, Parkville. Rumble coffee, seasonal Mediterranean plates, dog-friendly. Open 7:45am–3pm, seven days." },
      { property: "og:title", content: "Cafe Tesorina — Parkville" },
      { property: "og:description", content: "Little treasure on Morrah Street. Rumble coffee, seasonal plates, seven days." },
    ],
  }),
  component: Home,
});

function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const homeGallery = GALLERY.slice(0, 8);

  return (
    <div>
      <Hero />
      <Coffee_ />
      <MenuPreview />
      <GallerySection items={homeGallery} onOpen={setLightboxIndex} />
      <AboutStory />
      <DogsStrip />
      <VisitSection />
      <Lightbox
        items={homeGallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const doorRotate = useTransform(scrollYProgress, [0, 0.6], [0, -78]);
  const doorOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);
  const insideScale = useTransform(scrollYProgress, [0, 0.6], [1.1, 1]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden grain">
      {/* Interior revealed underneath */}
      <motion.div
        style={reduce ? {} : { scale: insideScale }}
        className="absolute inset-0"
      >
        <img
          src="/images/interior-tiles.jpg"
          alt="Interior of Cafe Tesorina with blue subway tiles and potted plants"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-espresso/40" />
      </motion.div>

      {/* Pink door */}
      <motion.div
        aria-hidden
        initial={reduce ? { rotateY: 0 } : { rotateY: 0 }}
        style={reduce ? {} : { rotateY: doorRotate, opacity: doorOpacity, transformPerspective: 1600, transformOrigin: "left center" }}
        className="absolute inset-0 door-frame"
      >
        <div className="absolute inset-y-8 left-8 right-8 md:inset-y-12 md:left-12 md:right-12 border border-cream/40 rounded-sm" />
        <div className="absolute inset-y-16 left-16 right-16 md:inset-y-24 md:left-24 md:right-24 border border-cream/30 rounded-sm" />
        <div className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 h-16 w-2 rounded-full bg-espresso/40" />
      </motion.div>

      {/* Hero copy */}
      <div className="relative z-10 h-full mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-script text-3xl md:text-4xl text-terracotta-soft"
        >
          little treasure —
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-display text-cream leading-[0.9] text-[15vw] md:text-[10rem] lg:text-[12rem] tracking-tighter"
        >
          Tesorina
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-6 flex flex-wrap items-end gap-8 md:gap-16 text-cream/90"
        >
          <p className="max-w-md text-cream/85 text-base md:text-lg leading-relaxed">
            A neighbourhood corner on Morrah Street, Parkville. Rumble coffee,
            seasonal plates, a dog biscuit on the house. Come in.
          </p>
          <div className="flex flex-col gap-1 text-sm tracking-wider">
            <span className="text-eyebrow text-cream/60">Open today</span>
            <span>{SITE.hours}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta text-espresso px-6 py-3 text-sm font-medium hover:bg-terracotta-soft transition"
          >
            View the menu <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-6 py-3 text-sm hover:bg-cream/10 transition"
          >
            Find us
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] tracking-[0.3em] uppercase">
        scroll to step inside
      </div>
    </section>
  );
}

function Coffee_() {
  return (
    <section id="coffee" className="relative bg-cream py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid gap-12 md:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <img
            src="/images/coffee-pour.jpg"
            alt="Espresso pouring from portafilter into a small ceramic cup"
            className="w-full h-[520px] object-cover rounded-sm shadow-lift"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 md:pl-10"
        >
          <p className="text-eyebrow text-terracotta">The coffee</p>
          <h2 className="mt-3 text-display text-5xl md:text-7xl leading-[0.95] text-espresso">
            Roasted a suburb over,<br />
            <span className="text-script text-terracotta text-6xl md:text-8xl">Shadow Boxer</span> in the hopper.
          </h2>
          <p className="mt-6 max-w-lg text-espresso/75 text-lg leading-relaxed">
            Our beans come from Rumble Coffee Roasters in Kensington. The house
            blend is Shadow Boxer — dark chocolate, raspberry, toffee. A rotating
            single origin sits alongside for espresso and batch filter. Full range
            of alt milks, fresh juice, smoothies, and a hot chocolate that's rich
            without being sweet.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-espresso/60">
            <span className="flex items-center gap-2"><Coffee className="h-4 w-4 text-terracotta"/> Espresso · Filter · Batch</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-foliage"/> Oat · Almond · Soy · Lactose-free</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MenuPreview() {
  return (
    <section id="menu" className="bg-cream-warm py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-eyebrow text-terracotta">The menu</p>
            <h2 className="mt-3 text-display text-5xl md:text-7xl leading-[0.95] text-espresso max-w-2xl">
              A short list,<br />done properly.
            </h2>
          </div>
          <Link to="/menu" className="group inline-flex items-center gap-2 text-espresso hover:text-terracotta transition">
            <span className="text-eyebrow">Full menu</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SIGNATURES.map((dish, i) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group bg-card rounded-md overflow-hidden shadow-soft hover:shadow-lift transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-display text-2xl text-espresso">{dish.name}</h3>
                  <span className="text-espresso/80 font-medium">{dish.price}</span>
                </div>
                {dish.tag && (
                  <span className="mt-2 inline-block text-script text-terracotta text-lg">
                    {dish.tag}
                  </span>
                )}
                <p className="mt-3 text-sm text-espresso/70 leading-relaxed">{dish.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection({ items, onOpen }: { items: typeof GALLERY; onOpen: (i: number) => void }) {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-eyebrow text-terracotta">The room</p>
            <h2 className="mt-3 text-display text-5xl md:text-7xl leading-[0.95] text-espresso max-w-xl">
              Pink out front,<br />blue tiles inside.
            </h2>
          </div>
          <Link to="/gallery" className="group inline-flex items-center gap-2 text-espresso hover:text-terracotta transition">
            <span className="text-eyebrow">More photos</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <GalleryGrid items={items} onOpen={onOpen} />
      </div>
    </section>
  );
}

function AboutStory() {
  return (
    <section id="about" className="bg-espresso text-cream py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid gap-12 md:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <img
            src="/images/alex-counter.jpg"
            alt="Alex, owner of Cafe Tesorina, behind the counter"
            loading="lazy"
            className="w-full h-[560px] object-cover rounded-sm"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 md:pl-10"
        >
          <p className="text-eyebrow text-terracotta">Whose place is this</p>
          <h2 className="mt-3 text-display text-5xl md:text-7xl leading-[0.95]">
            Run by Alex,<br />known around here.
          </h2>
          <div className="mt-8 space-y-5 text-cream/80 text-lg leading-relaxed max-w-xl">
            <p>
              Alex has been a Parkville local for years — you might have pulled a
              beer with him at Naughtons Hotel down the road. Tesorina is his own
              corner now. Named for a small Italian word for "little treasure",
              nodding to the family heritage without making a fuss about it.
            </p>
            <p>
              The menu stays small and rotates with the seasons. Every dietary is
              catered for. Waste is kept as low as we can manage. Nothing is
              precious — it's just a good local, run properly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DogsStrip() {
  return (
    <section className="relative bg-terracotta py-16 md:py-24 overflow-hidden grain">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid gap-10 md:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <p className="text-eyebrow text-espresso/70 flex items-center gap-2"><PawPrint className="h-4 w-4" /> Good dogs welcome</p>
          <h2 className="mt-3 text-display text-4xl md:text-6xl leading-[0.95] text-espresso">
            Bring the dog.<br />
            <span className="text-script text-6xl md:text-8xl">the biscuits are on us.</span>
          </h2>
          <p className="mt-6 max-w-xl text-espresso/80 text-lg">
            Water bowl by the door, home-baked dog treats on the counter, and
            plenty of pats. The alfresco seating under the umbrellas is the sunny
            spot.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <img
            src="/images/dog-treats.jpg"
            alt="Two happy dogs outside the cafe with a bowl of home-baked treats"
            loading="lazy"
            className="w-full h-[380px] object-cover rounded-sm shadow-lift"
          />
        </motion.div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-8">
          <div>
            <p className="text-eyebrow text-terracotta">Visit</p>
            <h2 className="mt-3 text-display text-5xl md:text-7xl leading-[0.95] text-espresso">
              Corner of<br />Morrah Street.
            </h2>
          </div>
          <div className="space-y-6 text-espresso/85">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-terracotta mt-1" />
              <div>
                <p className="text-eyebrow text-espresso/60 mb-1">Address</p>
                <p>{SITE.address}</p>
                <p className="text-sm text-espresso/60 mt-1">A street from Uni Melbourne, opposite Royal Park.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-terracotta mt-1" />
              <div>
                <p className="text-eyebrow text-espresso/60 mb-1">Hours</p>
                <p>{SITE.hours}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={SITE.directions}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-espresso text-cream px-6 py-3 text-sm hover:bg-tile transition"
            >
              Get directions <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-espresso/25 text-espresso px-6 py-3 text-sm hover:bg-espresso/5 transition"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="relative rounded-sm overflow-hidden shadow-lift aspect-[4/3] md:aspect-[5/4] bg-muted">
            <iframe
              title="Cafe Tesorina on Google Maps"
              src={SITE.mapEmbed}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
