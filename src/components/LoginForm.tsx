"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "error";

export default function LoginForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    window.setTimeout(() => setStatus("error"), 1100);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2.5">
        <label htmlFor="email" className="field-label">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@university.edu"
          className="field-input"
          onChange={() => status === "error" && setStatus("idle")}
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="field-label">
            Password
          </label>
          <a
            href="#"
            className="text-[0.78rem] text-accent transition-colors hover:text-navy"
          >
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="••••••••••••"
            className="field-input pr-12"
            onChange={() => status === "error" && setStatus("idle")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-fg-muted transition-colors hover:text-fg"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>

      <label className="flex items-center gap-2.5 text-[0.82rem] text-fg-dim">
        <input
          type="checkbox"
          name="remember"
          className="h-4 w-4 accent-navy"
          defaultChecked
        />
        Keep me signed in
      </label>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          status === "error" ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-live="polite"
      >
        <p className="flex items-start gap-2.5 rounded-[4px] border border-navy-mid/30 bg-navy-wash px-3.5 py-3 text-[0.82rem] leading-relaxed text-fg-dim">
          <span className="mt-0.5 flex-none text-accent" aria-hidden>
            ⓘ
          </span>
          Portal access is reserved for active members. Please check your
          credentials, or contact your advisor for an invitation.
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-lg btn-primary group w-full disabled:cursor-progress disabled:opacity-75"
      >
        {status === "loading" ? (
          <>
            <Spinner />
            Verifying…
          </>
        ) : (
          <>
            Sign in to portal
            <svg
              width="16"
              height="16"
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
          </>
        )}
      </button>

      <p className="text-center text-[0.82rem] text-fg-muted">
        Trouble signing in?{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-accent transition-colors hover:text-navy"
        >
          Contact your advisor
        </a>
      </p>
    </form>
  );
}

function Eye() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M1.5 10S4.5 4.5 10 4.5 18.5 10 18.5 10 15.5 15.5 10 15.5 1.5 10 1.5 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function EyeOff() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M8.2 4.7A7.6 7.6 0 0 1 10 4.5c5.5 0 8.5 5.5 8.5 5.5a14 14 0 0 1-2.2 2.8M4.5 5.9A14 14 0 0 0 1.5 10S4.5 15.5 10 15.5a7.5 7.5 0 0 0 3.4-.8M3 3l14 14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="animate-spin"
      aria-hidden
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
      <path
        d="M14 8a6 6 0 0 0-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
