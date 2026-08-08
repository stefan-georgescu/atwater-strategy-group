"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start gap-5 py-7 text-left sm:gap-8"
            >
              <span
                className={`label mt-1.5 w-6 flex-none transition-colors ${
                  isOpen ? "text-accent" : "label-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`display display-3 flex-1 transition-colors ${
                  isOpen ? "text-fg" : "text-fg/80 group-hover:text-fg"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`mt-1 grid h-6 w-6 flex-none place-items-center text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "group-hover:rotate-90"
                }`}
                aria-hidden
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-[400ms] ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="body-sm max-w-2xl pb-8 pl-11 text-pretty sm:pl-14">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
