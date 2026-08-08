"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import Wordmark from "@/components/Wordmark";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#story", label: "Our Story" },
  { href: "#results", label: "Results" },
  { href: "#tracks", label: "Tracks" },
  { href: "#mentors", label: "Mentors" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-[4.5rem] items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Wordmark />
        </a>

        <div className="hidden items-center lg:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative px-3.5 py-2 text-[0.875rem] font-medium tracking-[-0.005em] transition-colors duration-200 ${
                  isActive ? "text-cream" : "text-cream-dim hover:text-cream"
                }`}
              >
                {l.label}
                <span
                  className={`pointer-events-none absolute inset-x-3.5 bottom-0 h-px origin-left bg-gold transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden
                />
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={site.portalUrl}
            className="btn btn-md btn-quiet gap-1.5 text-[0.8125rem]"
          >
            <LockIcon />
            Portal
          </Link>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md btn-primary group"
          >
            Book a call
            <Arrow />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-cream lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Reading progress */}
      <div
        className="h-px origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-bright transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-[400ms] lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="shell flex flex-col py-4">
          {links.map((l, i) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 border-b border-line py-4 transition-colors ${
                  isActive ? "text-cream" : "text-cream-dim"
                }`}
              >
                <span className="label label-muted w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display display-3">{l.label}</span>
                {isActive && (
                  <span className="ml-auto h-1 w-1 rounded-full bg-gold" aria-hidden />
                )}
              </a>
            );
          })}
          <div className="mt-5 flex flex-col gap-2.5 pb-2">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-lg btn-primary"
            >
              Book your intro call
              <Arrow />
            </a>
            <Link
              href={site.portalUrl}
              onClick={() => setOpen(false)}
              className="btn btn-lg btn-outline gap-2"
            >
              <LockIcon />
              Member portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="3.25"
        y="7"
        width="9.5"
        height="6.75"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M5.6 7V5.1a2.4 2.4 0 0 1 4.8 0V7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
