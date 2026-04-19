"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GradientText } from "./gradient-text";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6">
      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.25 285) 0%, transparent 70%)",
            animation: "orb-float-1 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full opacity-15 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.18 195) 0%, transparent 70%)",
            animation: "orb-float-2 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-32 left-1/3 h-[350px] w-[350px] rounded-full opacity-10 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.15 330) 0%, transparent 70%)",
            animation: "orb-float-3 20s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {personalInfo.availability}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <GradientText>{personalInfo.name}</GradientText>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 flex items-center justify-center gap-2 text-lg text-muted-foreground sm:text-xl md:text-2xl"
        >
          <Sparkles size={20} className="text-[oklch(0.72_0.18_195)]" />
          <span className="font-mono font-medium tracking-wide">
            {personalInfo.title}
          </span>
          <Sparkles size={20} className="text-[oklch(0.65_0.25_285)]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/projects"
            className="group flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.25_285)] to-[oklch(0.55_0.25_285)] px-8 text-sm font-medium text-white shadow-lg shadow-[oklch(0.65_0.25_285/20%)] transition-all hover:shadow-xl hover:shadow-[oklch(0.65_0.25_285/30%)] hover:scale-[1.02] active:scale-[0.98]"
          >
            View My Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/contact"
            className="flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-8 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all hover:bg-white/[0.06] hover:text-foreground hover:border-white/20"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/50">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-5 rounded-full border border-white/10"
          >
            <motion.div
              animate={{ y: [2, 12, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-white/30"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
