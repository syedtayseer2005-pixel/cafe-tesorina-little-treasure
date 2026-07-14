import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Instagram } from "lucide-react";
import { PRIMARY_NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/85 backdrop-blur-md border-b border-espresso/10"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="text-display text-2xl md:text-[28px] leading-none text-espresso">
              Tesorina
            </span>
            <span className="text-script text-lg text-terracotta -translate-y-0.5 hidden sm:inline">
              cafe
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {PRIMARY_NAV.map((link) => {
              const active =
                link.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-4 py-2 text-sm text-espresso/80 hover:text-espresso transition-colors"
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute left-4 right-4 -bottom-0.5 h-px bg-terracotta origin-left transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Cafe Tesorina on Instagram"
              className="ml-3 grid place-items-center h-10 w-10 rounded-full border border-espresso/15 text-espresso/70 hover:text-espresso hover:border-terracotta hover:bg-terracotta/10 transition"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-11 w-11 rounded-full border border-espresso/15 text-espresso"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-terracotta"
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center h-full gap-6 text-cream px-8 pt-16"
            >
              {PRIMARY_NAV.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    className="text-display text-5xl leading-none"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 inline-flex items-center gap-2 text-sm tracking-widest uppercase"
              >
                <Instagram className="h-4 w-4" /> {SITE.instagramHandle}
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 text-center text-cream/80 text-xs tracking-widest uppercase"
              >
                {SITE.hours}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
