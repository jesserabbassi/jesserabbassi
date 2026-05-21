"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ExternalLink, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const visuals = project.images?.length ? project.images : project.image ? [project.image] : [];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (visuals.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % visuals.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [visuals.length]);

  useEffect(() => {
    setActiveImage(0);
  }, [project.slug]);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group premium-panel h-full overflow-hidden"
    >
      <div className="relative min-h-60 overflow-hidden bg-white/[0.03]">
        {visuals.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={visuals[activeImage]}
                initial={{ opacity: 0.3, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={visuals[activeImage]}
                  alt={`${project.title} project preview ${activeImage + 1}`}
                  width={1200}
                  height={760}
                  className="h-full min-h-60 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </motion.div>
            </AnimatePresence>

            {visuals.length > 1 ? (
              <div className="absolute bottom-4 right-4 z-10 flex gap-2 rounded-full border border-white/10 bg-ink/70 px-3 py-2 backdrop-blur">
                {visuals.map((visual, index) => (
                  <button
                    key={visual}
                    type="button"
                    aria-label={`Show ${project.title} preview ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === activeImage ? "bg-ivory" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </>
        ) : (
          <div className="grid h-full min-h-60 place-items-center p-8 text-center">
            <div>
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-lg bg-signal/10 text-signal">
                <ArrowUpRight size={24} />
              </div>
              <p className="font-display text-xl font-semibold text-ivory">{project.title}</p>
              <p className="mt-2 text-sm leading-6 text-mist">{project.category}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>

      <div className="flex flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-signal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-signal">
            {project.category}
          </span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-ivory">{project.title}</h3>

        <div className="mt-5 grid gap-3 text-sm leading-6 text-mist">
          <p>
            <span className="font-semibold text-ivory">Problem: </span>
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-ivory">Solution: </span>
            {project.solution}
          </p>
          <p>
            <span className="font-semibold text-ivory">Impact: </span>
            {project.impact}
          </p>
        </div>

        <ul className="mt-5 grid gap-3">
          {project.features.slice(0, compact ? 3 : 4).map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-6 text-mist">
              <Check className="mt-1 shrink-0 text-signal" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-medium text-mist"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/projects#${project.slug}`} className="ghost-button">
            Case study
            <ArrowUpRight size={16} />
          </Link>
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="ghost-button">
              {link.label.toLowerCase().includes("github") ? <Github size={16} /> : <ExternalLink size={16} />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
