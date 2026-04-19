// ── Types ──────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "ai";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ── Personal Info ─────────────────────────────────────────

export const personalInfo = {
  name: "Jerson Berdos",
  title: "Vibe Coder Specialist",
  tagline: "Crafting digital experiences that resonate with purpose and precision.",
  bio: `I'm a passionate developer who thrives at the intersection of creativity and technology. 
With a deep love for clean code and beautiful interfaces, I transform complex problems into 
elegant solutions that users love.

My approach to development is what I call "vibe coding" — building software that doesn't just 
work, but feels right. Every interaction, every animation, every pixel is intentional, 
creating digital experiences that resonate on a deeper level.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
projects, and sharing knowledge with the developer community.`,
  email: "hello@jersonberdos.dev",
  location: "Remote · Worldwide",
  availability: "Available for freelance & full-time",
  resumeUrl: "#",
};

// ── Social Links ──────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/jersonberdos", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/jersonberdos", icon: "linkedin" },
  { name: "Twitter", url: "https://x.com/jersonberdos", icon: "twitter" },
  { name: "Email", url: "mailto:hello@jersonberdos.dev", icon: "mail" },
];

// ── Skills ────────────────────────────────────────────────

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "TypeScript", icon: "📘", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Framer Motion", icon: "🎬", category: "frontend" },
  { name: "Vue.js", icon: "💚", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "GraphQL", icon: "◈", category: "backend" },
  { name: "REST APIs", icon: "🔌", category: "backend" },
  { name: "Prisma", icon: "△", category: "backend" },

  // Tools
  { name: "Git", icon: "🔀", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "Vercel", icon: "▲", category: "tools" },
  { name: "Figma", icon: "🎯", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Linux", icon: "🐧", category: "tools" },

  // AI
  { name: "OpenAI API", icon: "🤖", category: "ai" },
  { name: "LangChain", icon: "🔗", category: "ai" },
  { name: "Cursor AI", icon: "✨", category: "ai" },
  { name: "Prompt Eng.", icon: "💡", category: "ai" },
];

// ── Projects ──────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "vibe-dashboard",
    title: "Vibe Dashboard",
    description: "A real-time analytics dashboard with AI-powered insights and beautiful data visualizations.",
    longDescription: "Built with Next.js 14, featuring server components, real-time WebSocket data streaming, and AI-powered anomaly detection. The glassmorphic UI provides an immersive data exploration experience.",
    tags: ["Next.js", "TypeScript", "WebSocket", "AI", "D3.js"],
    category: "web",
    liveUrl: "https://vibe-dashboard.vercel.app",
    githubUrl: "https://github.com/jersonberdos/vibe-dashboard",
    featured: true,
  },
  {
    id: "neural-notes",
    title: "Neural Notes",
    description: "An AI-enhanced note-taking app with semantic search, auto-tagging, and smart linking.",
    longDescription: "A full-stack application using React, Node.js, and OpenAI embeddings for intelligent note organization. Features include real-time collaboration, markdown support, and knowledge graph visualization.",
    tags: ["React", "Node.js", "OpenAI", "PostgreSQL", "Prisma"],
    category: "ai",
    liveUrl: "https://neural-notes.app",
    githubUrl: "https://github.com/jersonberdos/neural-notes",
    featured: true,
  },
  {
    id: "pixel-forge",
    title: "Pixel Forge",
    description: "A collaborative design-to-code tool that transforms Figma designs into production React components.",
    longDescription: "Leverages computer vision and LLMs to analyze design files and generate clean, accessible React/Tailwind code. Supports component detection, responsive layouts, and theme extraction.",
    tags: ["Python", "React", "Computer Vision", "Tailwind"],
    category: "ai",
    githubUrl: "https://github.com/jersonberdos/pixel-forge",
    featured: true,
  },
  {
    id: "flow-state",
    title: "Flow State",
    description: "A developer productivity suite with Pomodoro timer, task management, and focus analytics.",
    longDescription: "Built as a PWA with offline support, featuring ambient soundscapes, deep work tracking, and integration with GitHub/Linear for automatic task syncing.",
    tags: ["Vue.js", "PWA", "IndexedDB", "Web Audio API"],
    category: "web",
    liveUrl: "https://flow-state.dev",
    githubUrl: "https://github.com/jersonberdos/flow-state",
    featured: false,
  },
  {
    id: "cli-wizard",
    title: "CLI Wizard",
    description: "A beautiful terminal UI framework for building interactive CLI tools with animations.",
    longDescription: "An npm package that provides React-like components for terminal UIs, including spinners, progress bars, tables, and forms — all with smooth animations and theming support.",
    tags: ["Node.js", "TypeScript", "Terminal", "npm"],
    category: "tools",
    githubUrl: "https://github.com/jersonberdos/cli-wizard",
    featured: false,
  },
  {
    id: "spectrum-ui",
    title: "Spectrum UI",
    description: "An open-source component library with 50+ accessible, animated UI components for React.",
    longDescription: "A comprehensive design system built on Radix UI primitives with Tailwind CSS styling. Includes dark mode, RTL support, and comprehensive Storybook documentation.",
    tags: ["React", "Radix UI", "Tailwind", "Storybook"],
    category: "tools",
    liveUrl: "https://spectrum-ui.dev",
    githubUrl: "https://github.com/jersonberdos/spectrum-ui",
    featured: false,
  },
];

// ── Stats ─────────────────────────────────────────────────

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Open Source Contributions", value: "100+" },
  { label: "Cups of Coffee", value: "∞" },
];

// ── Categories ────────────────────────────────────────────

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "ai", label: "AI / ML" },
  { id: "tools", label: "Dev Tools" },
];

// ── Navigation ────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
