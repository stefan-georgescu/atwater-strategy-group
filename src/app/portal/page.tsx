import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Member Portal",
  description:
    "Secure client portal for Atwater Strategy Group members. Sign in to access your coaching plan, session notes, and resources.",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <main className="relative flex min-h-screen bg-[#0a0a0a]">
      <div className="hero-topline" aria-hidden />

      {/* Left — brand panel */}
      <aside className="relative hidden w-[46%] flex-col justify-between overflow-hidden border-r border-gold/10 p-12 lg:flex xl:p-16">
        <div className="hero-aurora" aria-hidden />
        <div className="bg-grid absolute inset-0 opacity-[0.16]" aria-hidden />
        <div className="hero-grain" aria-hidden />

        <a
          href="/"
          className="relative inline-flex items-center gap-3 self-start"
        >
          <Mark />
          <span className="font-display text-2xl tracking-tight text-cream">
            Atwater <span className="text-cream-dim">Strategy Group</span>
          </span>
        </a>

        <div className="relative max-w-md">
          <span className="hero-label" style={{ color: "rgba(201,169,106,0.72)" }}>
            Member Portal
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-cream xl:text-5xl">
            Welcome back to your workspace.
          </h1>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream-dim">
            Sign in to access your coaching plan, session notes, mock interview
            feedback, and curated resources — all in one private workspace.
          </p>

          <ul className="mt-10 flex flex-col gap-3.5 border-t border-gold/10 pt-8">
            {[
              "Your personalized coaching roadmap",
              "Session notes & mentor feedback",
              "Interview prep & modeling resources",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[0.92rem] text-cream-dim"
              >
                <span
                  className="grid h-5 w-5 flex-none place-items-center rounded-full border border-gold/30 text-gold"
                  aria-hidden
                >
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.2l2.2 2.2L9.5 3.6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative max-w-md text-xs leading-relaxed text-muted">
          Confidential workspace for active Atwater Strategy Group members.
          Unauthorized access is prohibited.
        </p>
      </aside>

      {/* Right — login */}
      <section className="relative flex w-full flex-col px-6 py-10 sm:px-10 lg:w-[54%] lg:px-16 xl:px-24">
        <div className="flex items-center justify-between lg:hidden">
          <a href="/" className="inline-flex items-center gap-2.5">
            <Mark />
            <span className="font-display text-xl text-cream">
              Atwater <span className="text-cream-dim">Strategy Group</span>
            </span>
          </a>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto w-full max-w-sm py-12">
            <span
              className="hero-label"
              style={{ color: "rgba(201,169,106,0.72)" }}
            >
              Secure sign in
            </span>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-cream sm:text-4xl">
              Welcome back
            </h2>
            <p className="mt-2.5 text-[0.92rem] text-cream-dim">
              Enter your credentials to access the member portal.
            </p>

            <div className="mt-9">
              <LoginForm />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-line pt-6 text-xs text-muted">
          <a href="/" className="login-link inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M13 8H3m4-4-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to site
          </a>
          <span className="inline-flex items-center gap-1.5">
            <LockIcon />
            Encrypted &amp; secure
          </span>
        </div>
      </section>
    </main>
  );
}

function Mark() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-lg border border-gold/40 bg-gradient-to-b from-gold/20 to-transparent">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3L21 19H3L12 3Z"
          stroke="var(--color-gold-bright)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 9L16 16H8L12 9Z" fill="var(--color-gold-bright)" />
      </svg>
    </span>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="3"
        y="7"
        width="10"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
