import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { MENU } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cafe Tesorina, Parkville" },
      { name: "description", content: "Seasonal Mediterranean-leaning menu at Cafe Tesorina. Breakfast, all day, boards, sandwiches and coffee. Rumble beans." },
      { property: "og:title", content: "Menu — Cafe Tesorina" },
      { property: "og:description", content: "A short seasonal menu, all dietaries catered for." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 bg-cream min-h-screen">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-espresso/70 hover:text-terracotta transition text-eyebrow mb-8">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-eyebrow text-terracotta">Our menu</p>
          <h1 className="mt-3 text-display text-6xl md:text-8xl leading-[0.9] text-espresso">
            Small.<br /> Seasonal. <span className="text-script text-terracotta text-6xl md:text-8xl">Made properly.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-espresso/70 text-lg leading-relaxed">
            The menu changes with what's good. All dietaries catered for — ask the
            counter if you're unsure. Prices are indicative. <span className="italic">(v) vegetarian</span>.
          </p>
        </motion.header>

        <div className="space-y-20 md:space-y-28">
          {MENU.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="mb-10 pb-4 border-b border-espresso/15">
                <h2 className="text-display text-4xl md:text-5xl text-espresso">{section.title}</h2>
                {section.note && (
                  <p className="mt-2 text-espresso/60 text-sm max-w-xl">{section.note}</p>
                )}
              </div>
              <ul className="grid gap-8 md:gap-10 md:grid-cols-2">
                {section.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
                    className="flex gap-6"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-display text-xl md:text-2xl text-espresso">{item.name}</h3>
                        {item.dietary?.includes("v") && (
                          <span className="text-xs text-foliage font-medium">(v)</span>
                        )}
                        <span className="flex-1 border-b border-dashed border-espresso/20 translate-y-[-4px]" />
                        <span className="text-espresso/80 font-medium tabular-nums">{item.price}</span>
                      </div>
                      {item.tag && (
                        <span className="text-script text-terracotta text-lg">{item.tag}</span>
                      )}
                      <p className="mt-2 text-espresso/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-espresso/15 text-center">
          <p className="text-script text-terracotta text-3xl">Come hungry.</p>
          <p className="mt-2 text-espresso/60 text-sm">Open 7:45am – 3pm, seven days.</p>
        </div>
      </div>
    </div>
  );
}
