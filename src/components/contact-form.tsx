"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with real API later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Open mailto as fallback
    const subject = encodeURIComponent(
      `Message from ${formData.name} via Portfolio`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:hello@jersonberdos.dev?subject=${subject}&body=${body}`,
      "_self"
    );

    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="group relative">
        <input
          type="text"
          id="contact-name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder=" "
          className={cn(
            "peer w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 pt-6 pb-2 text-sm text-foreground",
            "placeholder-transparent outline-none transition-all",
            "focus:border-[oklch(0.65_0.25_285/40%)] focus:bg-white/[0.05]",
            "focus:ring-2 focus:ring-[oklch(0.65_0.25_285/15%)]"
          )}
        />
        <label
          htmlFor="contact-name"
          className="pointer-events-none absolute left-4 top-2 text-xs font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[oklch(0.72_0.18_195)]"
        >
          Name
        </label>
      </div>

      {/* Email */}
      <div className="group relative">
        <input
          type="email"
          id="contact-email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder=" "
          className={cn(
            "peer w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 pt-6 pb-2 text-sm text-foreground",
            "placeholder-transparent outline-none transition-all",
            "focus:border-[oklch(0.65_0.25_285/40%)] focus:bg-white/[0.05]",
            "focus:ring-2 focus:ring-[oklch(0.65_0.25_285/15%)]"
          )}
        />
        <label
          htmlFor="contact-email"
          className="pointer-events-none absolute left-4 top-2 text-xs font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[oklch(0.72_0.18_195)]"
        >
          Email
        </label>
      </div>

      {/* Message */}
      <div className="group relative">
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder=" "
          className={cn(
            "peer w-full resize-none rounded-xl border border-white/8 bg-white/[0.03] px-4 pt-6 pb-2 text-sm text-foreground",
            "placeholder-transparent outline-none transition-all",
            "focus:border-[oklch(0.65_0.25_285/40%)] focus:bg-white/[0.05]",
            "focus:ring-2 focus:ring-[oklch(0.65_0.25_285/15%)]"
          )}
        />
        <label
          htmlFor="contact-message"
          className="pointer-events-none absolute left-4 top-2 text-xs font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[oklch(0.72_0.18_195)]"
        >
          Message
        </label>
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white transition-all",
          status === "sent"
            ? "bg-emerald-600"
            : "bg-gradient-to-r from-[oklch(0.65_0.25_285)] to-[oklch(0.55_0.25_285)] shadow-lg shadow-[oklch(0.65_0.25_285/20%)] hover:shadow-xl hover:shadow-[oklch(0.65_0.25_285/30%)]",
          (status === "sending" || status === "sent") &&
            "cursor-not-allowed opacity-80"
        )}
      >
        {status === "idle" && (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
        {status === "sending" && (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        )}
        {status === "sent" && (
          <>
            <CheckCircle2 size={16} />
            Sent!
          </>
        )}
        {status === "error" && (
          <>
            <Send size={16} />
            Try Again
          </>
        )}
      </motion.button>
    </form>
  );
}
