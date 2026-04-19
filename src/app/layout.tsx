import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jerson Berdos — Healthcare Coordinator",
    template: "%s | Jerson Berdos",
  },
  description:
    "Personal portfolio of Jerson Berdos — a Healthcare Coordinator crafting digital experiences that resonate with purpose and precision.",
  keywords: [
    "Jerson Berdos",
    "Healthcare Coordinator",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Jerson Berdos" }],
  creator: "Jerson Berdos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jersonberdos.dev",
    siteName: "Jerson Berdos",
    title: "Jerson Berdos — Healthcare Coordinator",
    description:
      "Crafting digital experiences that resonate with purpose and precision.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerson Berdos — Healthcare Coordinator",
    description:
      "Crafting digital experiences that resonate with purpose and precision.",
    creator: "@jersonberdos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[oklch(0.1_0.02_270)]">
        {/* Noise overlay */}
        <div className="noise-overlay" />

        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
