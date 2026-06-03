"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

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
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <Logo />
          <span className="font-display text-xl tracking-tight text-cream sm:text-2xl">
            Atwater{" "}
            <span className="text-cream-dim">Strategy Group</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative px-4 py-2 text-[0.95rem] font-medium tracking-tight transition-colors duration-200 ${
                  isActive ? "text-cream" : "text-cream-dim hover:text-cream"
                }`}
              >
                {l.label}
                <span
                  className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 ${
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

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={site.portalUrl}
            className="group inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-3 text-[0.9rem] font-medium tracking-tight text-cream-dim transition-all hover:border-gold/45 hover:text-cream"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="text-gold"
            >
              <path
                d="M11 5.5V4.2A2.2 2.2 0 0 0 8.8 2H4.2A2.2 2.2 0 0 0 2 4.2v7.6A2.2 2.2 0 0 0 4.2 14h4.6A2.2 2.2 0 0 0 11 11.8v-1.3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 8h8m0 0-2.2-2.2M14.5 8l-2.2 2.2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Portal Login
          </a>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[0.9rem] font-semibold tracking-tight text-ink transition-all hover:bg-gold-bright hover:shadow-[0_0_30px_-6px_rgba(201,169,106,0.7)]"
          >
            Book a call
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
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-cream lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-3.5 text-lg font-medium tracking-tight transition-colors ${
                  isActive
                    ? "bg-ink-raised text-cream"
                    : "text-cream-dim hover:bg-ink-raised hover:text-cream"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                )}
              </a>
            );
          })}
          <a
            href={site.portalUrl}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-cream"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="text-gold"
            >
              <path
                d="M11 5.5V4.2A2.2 2.2 0 0 0 8.8 2H4.2A2.2 2.2 0 0 0 2 4.2v7.6A2.2 2.2 0 0 0 4.2 14h4.6A2.2 2.2 0 0 0 11 11.8v-1.3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 8h8m0 0-2.2-2.2M14.5 8l-2.2 2.2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Portal Login
          </a>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-lg border border-gold/40 bg-gradient-to-b from-gold/20 to-transparent">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3L21 19H3L12 3Z"
          stroke="var(--color-gold-bright)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 9L16 16H8L12 9Z"
          fill="var(--color-gold-bright)"
        />
      </svg>
    </span>
  );
}
