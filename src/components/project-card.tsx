"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl glass gradient-border",
        "transition-all duration-300"
      )}
    >
      {/* Project color accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[oklch(0.65_0.25_285)] via-[oklch(0.72_0.18_195)] to-[oklch(0.65_0.25_285)] opacity-60 transition-opacity group-hover:opacity-100" />

      <div className="p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-white">
              {project.title}
            </h3>
            {project.featured && (
              <span className="inline-flex items-center rounded-md bg-[oklch(0.65_0.25_285/15%)] px-2 py-0.5 text-xs font-medium text-[oklch(0.75_0.2_285)]">
                Featured
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground hover:scale-110"
                aria-label={`${project.title} GitHub`}
              >
                <GithubIcon />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground hover:scale-110"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-white/10 group-hover:text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
