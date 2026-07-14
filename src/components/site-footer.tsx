import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Clock } from "lucide-react";
import { PRIMARY_NAV, SITE } from "@/lib/site";
import { NewsletterForm } from "./newsletter-form";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-cream mt-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <div>
            <p className="text-eyebrow text-cream/60">Est. on the corner</p>
            <h3 className="text-display text-5xl mt-2">Cafe Tesorina</h3>
            <p className="text-script text-2xl text-terracotta">little treasure</p>
          </div>
          <p className="text-cream/70 max-w-sm text-sm leading-relaxed">
            A neighbourhood cafe on Morrah Street, Parkville. Rumble coffee, seasonal
            plates, dog biscuits on the house. Seven days.
          </p>
        </div>

        <div className="md:col-span-3 space-y-3 text-sm">
          <p className="text-eyebrow text-cream/60 mb-4">Wander in</p>
          {PRIMARY_NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block text-cream/90 hover:text-terracotta transition"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-cream/90 hover:text-terracotta transition"
          >
            <Instagram className="h-4 w-4" /> {SITE.instagramHandle}
          </a>
        </div>

        <div className="md:col-span-4 space-y-6 text-sm">
          <div>
            <p className="text-eyebrow text-cream/60 mb-3">Find us</p>
            <p className="flex items-start gap-2 text-cream/90">
              <MapPin className="h-4 w-4 mt-0.5 text-terracotta" />
              {SITE.address}
            </p>
            <p className="flex items-start gap-2 text-cream/90 mt-2">
              <Clock className="h-4 w-4 mt-0.5 text-terracotta" />
              {SITE.hours}
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Cafe Tesorina. Made with care in Parkville.</p>
          <p>Beans by Rumble Coffee Roasters, Kensington.</p>
        </div>
      </div>
    </footer>
  );
}
