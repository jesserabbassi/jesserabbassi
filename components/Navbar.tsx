"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Jesser Abbassi home">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sm font-bold text-ivory shadow-card transition group-hover:border-signal/50">
            JA
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-ivory sm:block">
            Jesser Abbassi
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-mist transition hover:text-ivory"
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={profile.github} target="_blank" rel="noreferrer" className="ghost-button">
            GitHub
          </a>
          <a href={profile.cv} className="primary-button" download>
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-ivory md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-ink px-5 py-5 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-ivory"
              >
                {item.label}
              </Link>
            ))}
            <a href={profile.cv} className="primary-button justify-center" download>
              Download CV
            </a>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
