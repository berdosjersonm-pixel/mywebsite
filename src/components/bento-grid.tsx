"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Zap,
  Globe,
  GitFork,
  Coffee,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";
import { personalInfo, stats, skills, projects } from "@/lib/data";

// ── Individual Bento Card ─────────────────────────────────

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

function BentoCard({ className, children, delay = 0 }: BentoCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -2, scale: 1.005 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "group relative overflow-hidden rounded-2xl glass gradient-border",
          "transition-all duration-300",
          className
        )}
      >
        {children}
      </motion.div>
    </ScrollReveal>
  );
}

// ── Bento Grid ────────────────────────────────────────────

export function BentoGrid() {
  const featuredProject = projects.find((p) => p.featured);
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const aiSkills = skills.filter((s) => s.category === "ai");

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              At a{" "}
              <span className="gradient-text">Glance</span>
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground">
              A quick overview of who I am, what I do, and what drives me.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* About Card — spans 2 rows */}
          <BentoCard className="row-span-2 p-6" delay={0}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.65_0.25_285/15%)]">
                  <Code2 size={20} className="text-[oklch(0.65_0.25_285)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">About Me</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {personalInfo.tagline} I specialize in building modern web
                  applications with a focus on performance, accessibility, and
                  delightful user experiences.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.72_0.18_195)] transition-colors hover:text-[oklch(0.82_0.14_195)]"
              >
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </BentoCard>

          {/* Stats Card */}
          <BentoCard className="p-6" delay={0.1}>
            <div className="flex h-full flex-col justify-between">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.72_0.18_195/15%)]">
                <Zap size={20} className="text-[oklch(0.72_0.18_195)]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Tech Stack Card */}
          <BentoCard className="p-6" delay={0.15}>
            <div className="flex h-full flex-col">
              <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                Frontend Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Featured Project Card — spans 2 columns */}
          <BentoCard className="p-6 sm:col-span-2" delay={0.2}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Globe
                    size={16}
                    className="text-[oklch(0.65_0.25_285)]"
                  />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold">
                  {featuredProject?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {featuredProject?.description}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                  {featuredProject?.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-[oklch(0.72_0.18_195)] transition-colors hover:text-[oklch(0.82_0.14_195)]"
                >
                  View all →
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* AI / Vibe Card */}
          <BentoCard className="p-6" delay={0.25}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.7_0.15_330/15%)]">
                  <Sparkles
                    size={20}
                    className="text-[oklch(0.7_0.15_330)]"
                  />
                </div>
                <h3 className="mb-1 text-sm font-semibold">
                  AI & Vibe Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/80"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* More Stats */}
          <BentoCard className="p-6" delay={0.3}>
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <GitFork size={16} className="text-muted-foreground" />
                <span className="text-sm font-semibold text-muted-foreground">
                  Open Source
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.slice(2).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* CTA Card */}
          <BentoCard className="p-6" delay={0.35}>
            <div className="flex h-full flex-col items-center justify-center text-center">
              <Coffee
                size={28}
                className="mb-3 text-[oklch(0.72_0.18_195)]"
              />
              <p className="mb-3 text-sm text-muted-foreground">
                Let&apos;s build something amazing together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[oklch(0.65_0.25_285)] to-[oklch(0.55_0.25_285)] px-5 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[oklch(0.65_0.25_285/20%)] hover:scale-105 active:scale-95"
              >
                Say Hello
                <ArrowRight size={14} />
              </Link>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
