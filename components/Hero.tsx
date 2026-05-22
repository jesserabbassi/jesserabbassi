"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Github, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { heroMetrics, profile } from "@/lib/data";

const stack = ["ASP.NET Core", "React", "PostgreSQL", "Docker", "Python AI/ML", "Unity"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-28 md:px-8 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/10 px-4 py-2 text-sm font-medium text-signal">
            <CheckCircle2 size={16} />
            Available for freelance projects
          </div>

          <p className="eyebrow">Full-Stack & Game Developer</p>
          <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-[1.04] text-ivory md:text-6xl">
            I build product-grade platforms with secure systems and polished UX.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-mist md:text-lg">
            I help teams turn complex ideas into fast, maintainable web products and interactive
            experiences using ASP.NET Core, React, PostgreSQL, Docker, AI integrations, Unity, and
            gameplay-aware interaction design.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/projects" className="primary-button group">
              View case studies
              <ArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} />
            </Link>
            <a href={profile.github} target="_blank" rel="noreferrer" className="ghost-button">
              <Github size={18} />
              GitHub
            </a>
            <Link href="/contact" className="ghost-button">
              <Mail size={18} />
              Contact
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-sm text-mist">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
              >
                <strong className="font-display text-2xl text-ivory">{metric.value}</strong>
                <p className="mt-1 text-sm leading-6 text-mist">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="premium-panel overflow-hidden p-4">
            <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-copper" />
                <span className="h-3 w-3 rounded-full bg-signal" />
                <span className="h-3 w-3 rounded-full bg-violet" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-mist">client-ready stack</span>
            </div>

            <div className="grid gap-4 pt-5">
              {[
                ["Secure backend", "JWT, roles, clean REST APIs", "live"],
                ["Business dashboards", "Admin flows and decision views", "pro"],
                ["AI integrations", "Prediction, chatbot, automation", "smart"]
              ].map(([title, subtitle, badge], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.24 + index * 0.1 }}
                  className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-signal/35 hover:bg-white/[0.065]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-signal/10 text-signal">
                    <Sparkles size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ivory">{title}</p>
                    <p className="truncate text-sm text-mist">{subtitle}</p>
                  </div>
                  <span className="rounded-full bg-ivory px-3 py-1 text-xs font-bold text-ink">{badge}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/images/kawi-niveau.png"
                alt="KawiNiveau product dashboard preview"
                width={1200}
                height={760}
                priority
                className="aspect-[16/10] object-cover opacity-90"
              />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-ink/90 p-5 shadow-card backdrop-blur-xl md:-left-8 md:right-auto md:w-72"
          >
            <p className="font-semibold text-ivory">Built for clients who need more than a template.</p>
            <p className="mt-2 text-sm leading-6 text-mist">Product thinking, clean architecture, and interfaces that sell the work.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
