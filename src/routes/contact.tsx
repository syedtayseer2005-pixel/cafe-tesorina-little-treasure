import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit — Cafe Tesorina, Parkville" },
      { name: "description", content: "Find Cafe Tesorina on Morrah Street, Parkville VIC. Hours, directions, Instagram and how to say hello." },
      { property: "og:title", content: "Visit Cafe Tesorina" },
      { property: "og:description", content: "Corner of Morrah Street, Parkville. Open 7:45am–3pm, seven days." },
    ],
  }),
  component: ContactPage,
});

const HOURS = [
  ["Monday", "7:45am – 3pm"],
  ["Tuesday", "7:45am – 3pm"],
  ["Wednesday", "7:45am – 3pm"],
  ["Thursday", "7:45am – 3pm"],
  ["Friday", "7:45am – 3pm"],
  ["Saturday", "7:45am – 3pm"],
  ["Sunday", "7:45am – 3pm"],
];

function ContactPage() {
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
          className="mb-16 max-w-3xl"
        >
          <p className="text-eyebrow text-terracotta">Visit</p>
          <h1 className="mt-3 text-display text-6xl md:text-8xl leading-[0.9] text-espresso">
            Come by.<br /><span className="text-script text-terracotta">say hello.</span>
          </h1>
        </motion.header>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="text-eyebrow text-espresso/60 mb-3 flex items-center gap-2"><MapPin className="h-4 w-4 text-terracotta" /> Where</p>
              <p className="text-2xl text-display text-espresso leading-snug">{SITE.address}</p>
              <p className="mt-2 text-espresso/60 text-sm">A street from University of Melbourne, opposite Royal Park, close to the Royal Children's Hospital.</p>
              <a
                href={SITE.directions}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-2 text-terracotta hover:text-espresso transition text-sm"
              >
                Open in Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div>
              <p className="text-eyebrow text-espresso/60 mb-3 flex items-center gap-2"><Clock className="h-4 w-4 text-terracotta" /> Hours</p>
              <ul className="divide-y divide-espresso/10">
                {HOURS.map(([day, h]) => (
                  <li key={day} className="flex justify-between py-2 text-espresso/85">
                    <span>{day}</span>
                    <span className="tabular-nums">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-eyebrow text-espresso/60 mb-1">Say hello</p>
              <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className="flex items-center gap-3 text-espresso hover:text-terracotta transition">
                <Instagram className="h-5 w-5" /> {SITE.instagramHandle}
              </a>
              <p className="flex items-center gap-3 text-espresso/60 text-sm">
                <Phone className="h-5 w-5" /> <span className="italic">Phone — coming soon</span>
              </p>
              <p className="flex items-center gap-3 text-espresso/60 text-sm">
                <Mail className="h-5 w-5" /> <span className="italic">Email — coming soon</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative rounded-sm overflow-hidden shadow-lift aspect-[4/3] md:aspect-square bg-muted">
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
      </div>
    </div>
  );
}
