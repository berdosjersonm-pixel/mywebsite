"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GradientText } from "./gradient-text";
import { personalInfo } from "@/lib/data";
import { Magnetic } from "./magnetic";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const nameChars = personalInfo.name.split("");

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-20 pb-12 sm:px-12 lg:px-24"
    >
      {/* Premium Background System */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute -top-1/4 -left-1/4 h-[150%] w-[150%] opacity-40 mix-blend-screen blur-[100px]"
        >
          <div
            className="absolute inset-0 animate-pulse-slow"
            style={{
              background: `radial-gradient(circle at 30% 30%, oklch(0.65 0.25 285 / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 70% 60%, oklch(0.72 0.18 195 / 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, oklch(0.7 0.15 330 / 0.1) 0%, transparent 50%)`,
            }}
          />
        </motion.div>
        
        {/* Animated noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-150 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Status & Name */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Large Name with Character Reveal */}
          <h1 className="relative flex flex-wrap text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter text-white font-heading">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotate: 10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={char === " " ? "mr-[0.2em]" : "inline-block origin-bottom-left"}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Right Column: Title & Info (Asymmetrical offset) */}
        <div className="lg:col-span-4 flex flex-col justify-center lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y2 }}
          >
            <div className="mb-6 flex items-center gap-3 text-primary">
              <Sparkles size={24} className="animate-pulse" />
              <span className="font-mono text-xl font-medium tracking-tight sm:text-2xl">
                {personalInfo.title}
              </span>
            </div>
            
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground/80 sm:text-xl lg:max-w-md">
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6">
              <Magnetic strength={0.2}>
                <Link
                  href="/projects"
                  className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-white px-8 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 transition-transform group-hover:translate-x-1"
                  />
                  <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white via-white to-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="group flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
                >
                  Get in Touch
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor: Floating vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1 }}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-180 select-none hidden xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="font-mono text-xs tracking-[1em] uppercase text-white">
          Precision • Purpose • Resonate
        </span>
      </motion.div>

      {/* Scroll indicator - Refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
