import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";

const schema = z.string().trim().email("Please enter a valid email").max(255);

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setState("loading");
    setTimeout(() => {
      setState("done");
      toast.success("You're on the list — see you soon.");
    }, 500);
  };

  return (
    <div>
      <p className="text-eyebrow text-cream/60 mb-3">Stay in the loop</p>
      {state === "done" ? (
        <div className="flex items-center gap-2 text-terracotta text-sm">
          <Check className="h-4 w-4" /> You're on the list.
        </div>
      ) : (
        <form onSubmit={submit} className="flex items-center gap-2 border-b border-cream/25 focus-within:border-terracotta transition pb-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            aria-label="Email address"
            className="bg-transparent flex-1 outline-none text-cream placeholder:text-cream/40 text-sm"
          />
          <button
            type="submit"
            disabled={state === "loading"}
            aria-label="Subscribe"
            className="grid place-items-center h-8 w-8 rounded-full bg-terracotta text-espresso hover:bg-terracotta-soft transition disabled:opacity-50"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
