import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { personalInfo, socialLinks } from "@/lib/data";
import { Mail, MapPin, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${personalInfo.name}. Available for freelance work, collaboration, and full-time opportunities.`,
};

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon />,
  linkedin: <LinkedinIcon />,
  twitter: <TwitterIcon />,
  mail: <Mail size={20} />,
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-px w-8 bg-gradient-to-r from-[oklch(0.65_0.25_285)] to-transparent" />
              Contact
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
              Have a project in mind, want to collaborate, or just want to say
              hi? I&apos;d love to hear from you.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-3" delay={0.1}>
              <div className="glass rounded-2xl p-8">
                <h2 className="mb-6 text-xl font-semibold">Send a Message</h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal className="lg:col-span-2" delay={0.2}>
              <div className="space-y-6">
                {/* Status Card */}
                <div className="glass rounded-2xl p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium text-emerald-400">
                      {personalInfo.availability}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. Feel free to reach out
                    through any channel below.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04]">
                        <Mail size={16} className="text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04]">
                        <MapPin size={16} className="text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Location
                        </p>
                        <p className="text-sm text-foreground/80">
                          {personalInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Socials
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-muted-foreground transition-all hover:bg-white/[0.05] hover:text-foreground hover:border-white/10"
                      >
                        {iconMap[link.icon]}
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <a
                  href={personalInfo.resumeUrl}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-foreground/80 transition-all hover:bg-white/[0.06] hover:text-foreground hover:border-white/15"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
