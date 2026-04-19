"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projects, projectCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/magnetic";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-gradient-to-r from-[oklch(0.65_0.25_285)] to-transparent" />
              Portfolio
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl font-heading">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
              A collection of projects I&apos;ve built — from AI-powered apps to
              developer tools. Each one represents a unique challenge and
              learning experience.
            </p>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="mb-10 flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <Magnetic key={cat.id} strength={0.1}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "relative rounded-lg px-4 py-2 text-sm font-medium transition-all",
                      activeCategory === cat.id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                    )}
                  >
                    {activeCategory === cat.id && (
                      <motion.div
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-lg glass"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                </Magnetic>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
