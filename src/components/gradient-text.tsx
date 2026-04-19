"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  animate = true,
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        "inline-block bg-clip-text text-transparent",
        "bg-gradient-to-r from-[oklch(0.75_0.2_285)] via-[oklch(0.72_0.18_195)] to-[oklch(0.65_0.25_285)]",
        animate && "bg-[length:200%_auto] animate-gradient",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
