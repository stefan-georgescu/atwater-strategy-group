import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import Wordmark from "@/components/Wordmark";

export const metadata: Metadata = {
  title: "Member Portal",
  description:
    "Secure client portal for Atwater Strategy Group members. Sign in to access your coaching plan, session notes, and resources.",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <main className="relative flex min-h-screen bg-ink">
      {/* Left — brand panel */}
      <aside className="relative hidden w-[46%] flex-col justify-between overflow-hidden border-r border-line p-12 lg:flex xl:p-16">
        <div className="glow-top" aria-hidden />
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="vignette" aria-hidden />
        <div className="bg-grain" aria-hidden />

        <Link href="/" className="relative self-start">
          <Wordmark size="md" />
        </Link>

        <div className="relative max-w-md">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 flex-none bg-gold" aria-hidden />
            <span className="label">Member Portal</span>
          </div>
          <h1 className="display mt-6 text-[2.5rem] leading-[1.06] text-cream xl:text-[3rem]">
            Welcome back to{" "}
            <span className="display-accent">your workspace.</span>
          </h1>
          <p className="body-sm mt-6 max-w-sm text-pretty">
            Sign in to access your coaching plan, session notes, mock interview
            feedback, and curated resources — all in one private workspace.
          </p>

          <ul className="mt-10 flex flex-col border-t border-line">
            {[
              "Your personalized coaching roadmap",
              "Session notes & mentor feedback",
              "Interview prep & modeling resources",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3.5 border-b border-line py-4 text-[0.9rem] text-cream-dim"
              >
                <span className="text-gold" aria-hidden>
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6.2l2.4 2.4L10 3.2"
                      stroke="currentColor"
                      strokeWidth="1.4"
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

        <p className="relative max-w-md text-[0.75rem] leading-relaxed text-muted">
          Confidential workspace for active Atwater Strategy Group members.
          Unauthorized access is prohibited.
        </p>
      </aside>

      {/* Right — login */}
      <section className="relative flex w-full flex-col px-6 py-8 sm:px-10 lg:w-[54%] lg:px-16 xl:px-24">
        <div className="lg:hidden">
          <Link href="/" className="inline-block">
            <Wordmark />
          </Link>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto w-full max-w-sm py-14">
            <span className="label">Secure sign in</span>
            <h2 className="display mt-5 text-[2rem] leading-tight text-cream sm:text-[2.25rem]">
              Welcome back
            </h2>
            <p className="body-sm mt-3">
              Enter your credentials to access the member portal.
            </p>

            <div className="mt-9">
              <LoginForm />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-line pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[0.8125rem] text-cream-dim transition-colors hover:text-cream"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M13 8H3m4-4-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to site
          </Link>
          <span className="label label-muted inline-flex items-center gap-2">
            <LockIcon />
            Encrypted &amp; secure
          </span>
        </div>
      </section>
    </main>
  );
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
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
