"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/data";
import { ScrollReveal } from "./scroll-reveal";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Dev Tools",
  ai: "AI & Vibe",
};

const categoryColors: Record<string, string> = {
  frontend: "oklch(0.65 0.25 285)",
  backend: "oklch(0.72 0.18 195)",
  tools: "oklch(0.75 0.15 145)",
  ai: "oklch(0.7 0.15 330)",
};

export function TechStack() {
  const categories = ["frontend", "backend", "tools", "ai"] as const;

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((category, catIdx) => (
            <ScrollReveal key={category} delay={catIdx * 0.1}>
              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: categoryColors[category] }}
                  />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {categoryLabels[category]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                        className={cn(
                          "inline-flex cursor-default items-center gap-2 rounded-xl",
                          "border border-white/5 bg-white/[0.03] px-3.5 py-2",
                          "text-sm font-medium text-foreground/80",
                          "transition-all hover:bg-white/[0.06] hover:border-white/10"
                        )}
                      >
                        <span className="text-base">{skill.icon}</span>
                        {skill.name}
                      </motion.div>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
