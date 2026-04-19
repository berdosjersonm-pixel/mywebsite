import type { Metadata } from "next";
import { TechStack } from "@/components/tech-stack";
import { ScrollReveal } from "@/components/scroll-reveal";
import { personalInfo, stats } from "@/lib/data";
import { MapPin, Briefcase, Heart, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personalInfo.name} — ${personalInfo.title}. Background, tech stack, and development philosophy.`,
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-gradient-to-r from-[oklch(0.65_0.25_285)] to-transparent" />
              About Me
            </div>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl font-heading">
              Hey, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-1.5 text-sm text-muted-foreground">
                <MapPin size={14} />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-1.5 text-sm text-muted-foreground">
                <Briefcase size={14} />
                {personalInfo.title}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {personalInfo.availability}
              </span>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-2xl p-8">
              <div className="prose prose-invert max-w-none">
                {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="mb-4 text-base leading-relaxed text-muted-foreground last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <p className="mb-1 text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Philosophy */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl font-heading">
              My <span className="gradient-text">Philosophy</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: <Code2 size={24} />,
                title: "Clean Code",
                description:
                  "Code should be readable, maintainable, and elegant. I write code that future developers (including future me) will thank me for.",
                color: "oklch(0.65 0.25 285)",
              },
              {
                icon: <Heart size={24} />,
                title: "User First",
                description:
                  "Every pixel, animation, and interaction is designed with the end user in mind. Great software feels invisible.",
                color: "oklch(0.72 0.18 195)",
              },
              {
                icon: <Briefcase size={24} />,
                title: "Ship Fast",
                description:
                  "Perfection is the enemy of progress. I believe in iterating quickly, shipping often, and continuously improving.",
                color: "oklch(0.7 0.15 330)",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `color-mix(in oklch, ${item.color} 15%, transparent)`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
