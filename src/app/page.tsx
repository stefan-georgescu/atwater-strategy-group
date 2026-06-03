import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Faq from "@/components/Faq";
import {
  site,
  stats,
  story,
  pillars,
  tracks,
  regions,
  mentors,
  included,
  testimonials,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <Hero />
        <FirmsStrip />
        <Approach />
        <Story />
        <Process />
        <Included />
        <Results />
        <Tracks />
        <Global />
        <Mentors />
        <Cta />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-28 sm:py-36 lg:pt-48 lg:pb-40">
      <div className="hero-topline" aria-hidden />
      <div className="hero-aurora" aria-hidden />
      <div className="bg-grid absolute inset-0 opacity-[0.18]" aria-hidden />
      <div className="hero-vignette" aria-hidden />
      <div className="hero-grain" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        <Reveal>
          <span className="hero-label inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.04] px-4 py-2 backdrop-blur-sm">
            <span className="hero-ping" aria-hidden />
            300+ offers at the world&apos;s top firms
          </span>
        </Reveal>

        <Reveal delay={60}>
          <p className="hero-label mt-7">The 1-on-1 edge for</p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="hero-title mt-5 text-balance">
            <span className="hero-title-line hero-shimmer">High Finance</span>
            <span className="hero-title-line hero-shimmer">
              &amp; Management Consulting
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-[35rem] text-base leading-[1.7] text-cream-dim text-balance sm:text-[1.0625rem]">
            We pair ambitious students with mentors who have sat on the other
            side of the table — at the banks, funds, and firms you&apos;re
            aiming for. Fully bespoke. Relentlessly prepared. Built to turn
            long-shot dreams into signed offers.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:items-center">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-primary group w-full sm:w-auto"
            >
              Book your intro call
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#approach"
              className="btn-hero btn-hero-secondary w-full sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="hero-label mt-5 text-[0.625rem] text-muted">
            Limited roster · By application · Target &amp; non-target welcome
          </p>
        </Reveal>

        <Reveal delay={340}>
          <dl className="mt-16 flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-12 gap-y-8 border-t border-gold/10 pt-10 sm:gap-x-16">
            {[
              { value: "300+", label: "Offers secured" },
              { value: "~90%", label: "Offer rate" },
              { value: "50+", label: "Top firms" },
              { value: "1:1", label: "Always bespoke" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <dt className="hero-stat-value">{s.value}</dt>
                <dd className="hero-stat-label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Firms strip ------------------------------ */

function FirmsStrip() {
  return (
    <section className="border-y border-line bg-ink-soft/50 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.22em] text-muted">
          Our students have landed offers at
        </p>
        <Marquee />
      </div>
    </section>
  );
}

/* ------------------------------- Approach -------------------------------- */

function Approach() {
  return (
    <section id="approach" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
                Recruiting is a process.
                <br />
                We run it like a deal.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-cream-dim">
              Most students lose because they prepare alone, late, and without a
              map. We give you a partner who has been through the gauntlet — and a
              system that leaves nothing to chance. No cohorts. No recorded
              courses. Just you, a mentor, and a plan engineered around your seat.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {[
            {
              title: "Fully 1-on-1",
              body: "Private sessions, no group calls. Your mentor knows your story, your gaps, and your timeline cold.",
            },
            {
              title: "Practitioner mentors",
              body: "Coached by people currently in IB, PE, S&T, and hedge funds — not career counselors.",
            },
            {
              title: "Outcome obsessed",
              body: "Every session ends with a deliverable. We measure progress in reps, offers, and seats.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col gap-3 bg-ink-soft p-8">
                <span className="font-display text-sm text-gold">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl text-cream">{item.title}</h3>
                <p className="text-sm leading-relaxed text-cream-dim">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Story --------------------------------- */

function Story() {
  const maxOffers = Math.max(...story.growth.map((g) => g.offers));
  return (
    <section
      id="story"
      className="relative border-t border-line bg-ink-soft/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionEyebrow>Our story</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
                Three years. One of the largest in the space.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cream-dim">
                {story.intro}
              </p>

              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                    Offer rate
                  </dt>
                  <dd className="font-display text-3xl text-gradient-gold">
                    ~90%
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                    Offers to date
                  </dt>
                  <dd className="font-display text-3xl text-gradient-gold">
                    300+
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                    Growth since year one
                  </dt>
                  <dd className="font-display text-3xl text-gradient-gold">
                    6×
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <figure className="rounded-2xl border border-line bg-ink p-8">
              <figcaption className="mb-6 flex items-baseline justify-between">
                <span className="font-display text-lg text-cream">
                  Offers secured
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-muted">
                  Cumulative
                </span>
              </figcaption>
              <div className="flex h-64 items-end gap-5">
                {story.growth.map((g, i) => {
                  const height = Math.max(22, (g.offers / maxOffers) * 100);
                  return (
                    <div
                      key={g.year}
                      className="flex flex-1 flex-col items-center justify-end gap-3"
                    >
                      <span className="font-display text-2xl text-cream">
                        {g.offers}
                        {i === story.growth.length - 1 ? "+" : ""}
                      </span>
                      <Reveal
                        delay={200 + i * 160}
                        className="flex w-full justify-center"
                      >
                        <div
                          className="w-full max-w-[64px] origin-bottom rounded-t-lg bg-gradient-to-t from-gold/40 to-gold-bright shadow-[0_0_30px_-10px_rgba(201,169,106,0.8)]"
                          style={{ height: `${height * 1.9}px` }}
                        />
                      </Reveal>
                      <span className="text-xs text-muted">{g.year}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-cream-dim">
                From 50 offers in our first cycle to nearly 300 last year — we
                grow because our students keep winning.
              </p>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Process -------------------------------- */

function Process() {
  return (
    <section className="relative border-t border-line bg-ink-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>How we do it</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            A four-phase path from where you are to where you&apos;re going.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="h-full">
              <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-ink p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-5xl text-cream/10 transition-colors group-hover:text-gold/30">
                    0{i + 1}
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-gold">
                    {p.eyebrow}
                  </span>
                </div>
                <h3 className="font-display text-xl text-cream">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Included -------------------------------- */

function Included() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionEyebrow>What&apos;s included</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
                Every part of recruiting, covered.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-cream-dim">
              From your first technical question to your final superday, every
              engagement is end-to-end. Nothing is outsourced to a video course —
              you get hands-on reps with experts who do this for a living.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90} className="h-full">
              <div className="group flex h-full flex-col gap-3 bg-ink-soft p-8 transition-colors hover:bg-ink-raised">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-gold/30 bg-gradient-to-b from-gold/15 to-transparent text-gold transition-colors group-hover:text-gold-bright">
                  <CheckIcon />
                </span>
                <h3 className="mt-2 font-display text-xl text-cream">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream-dim">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={180} className="h-full">
            <div className="flex h-full flex-col justify-center gap-2 bg-gradient-to-br from-gold/15 to-transparent p-8">
              <p className="font-display text-2xl text-cream">
                All 1-on-1.
                <br />
                All bespoke.
              </p>
              <p className="text-sm text-cream-dim">
                Sequenced around your school, timeline, and target seat.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Results -------------------------------- */

function Results() {
  return (
    <section id="results" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow center>The results</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Numbers earned, one student at a time.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="bg-ink-soft p-8 text-center">
                <div className="font-display text-5xl text-gradient-gold sm:text-6xl">
                  {s.value}
                </div>
                <p className="mt-3 text-sm text-cream-dim">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-ink-soft p-7">
                <div>
                  <span
                    className="font-display text-5xl leading-none text-gold/40"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote className="-mt-4 text-cream-dim leading-relaxed">
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <div className="font-display text-cream">{t.name}</div>
                  <div className="text-sm text-gold">{t.detail}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Student identities abbreviated to protect privacy. Outcomes reflect
          individual results and are not guarantees.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------- Tracks -------------------------------- */

function Tracks() {
  return (
    <section
      id="tracks"
      className="relative border-t border-line bg-ink-soft/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Our specialty</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Four seats. Total focus.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream-dim">
            We don&apos;t try to be everything to everyone. We specialize in the
            four most competitive paths — investment banking, private equity,
            asset management, and MBB consulting — and we go deep on each.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 90} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-ink p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_60px_-30px_rgba(201,169,106,0.6)]">
                <div className="mb-5 h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                <h3 className="font-display text-2xl text-cream">{t.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                  {t.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Global -------------------------------- */

function Global() {
  return (
    <section id="global" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionEyebrow>Global reach</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
                Rooted in the US.
                <br />
                Winning worldwide.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-cream-dim">
              The US is our home market and primary focus — but recruiting is
              global, and so are we. We&apos;ve helped students land offers across
              Europe and Asia, navigating each region&apos;s timelines, formats,
              and firms.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {regions.map((r, i) => (
            <Reveal key={r.name} delay={i * 100} className="h-full">
              <div
                className={`group flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  r.tag === "Primary focus"
                    ? "border-gold/40 bg-gradient-to-br from-gold/12 to-transparent"
                    : "border-line bg-ink-soft hover:border-gold/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-cream">{r.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] ${
                      r.tag === "Primary focus"
                        ? "bg-gold/20 text-gold-bright"
                        : "border border-line text-muted"
                    }`}
                  >
                    {r.tag}
                  </span>
                </div>
                <p className="mt-5 font-display text-3xl text-gradient-gold">
                  {r.offers}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                  {r.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Mentors -------------------------------- */

function Mentors() {
  return (
    <section id="mentors" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionEyebrow>The mentors</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
                Coached by people who&apos;ve done the job.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-cream-dim">
              Our mentors are active and former practitioners from bulge brackets,
              elite boutiques, megafunds, top asset managers, and MBB firms. To
              protect their current roles, identities stay private until
              you&apos;re matched — the pedigree is real, the names come later.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {mentors.map((m, i) => (
            <Reveal key={m.role} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-ink-soft p-7">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 flex-none place-items-center rounded-full border border-gold/30 bg-gradient-to-b from-gold/20 to-transparent text-gold-bright">
                    <AnonIcon />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                      Verified mentor
                    </p>
                    <h3 className="font-display text-lg leading-tight text-cream">
                      {m.role}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-cream-dim">
                  {m.background}
                </p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">
                    Focus
                  </p>
                  <p className="mt-1 text-sm text-cream-dim">{m.focus}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted">
          Mentor identities are kept anonymous to protect their active roles and
          firm relationships. Backgrounds are verified during onboarding.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------- CTA ---------------------------------- */

function Cta() {
  return (
    <section className="relative px-6 py-16 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gold/25 bg-ink-raised px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="absolute inset-0 radial-spotlight" aria-hidden />
        <div
          className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]"
          aria-hidden
        />
        <Reveal className="relative">
          <SectionEyebrow center>Your move</SectionEyebrow>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            The recruiting clock is already running.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream-dim">
            We take on a limited number of students each cycle. Book a free intro
            call and we&apos;ll tell you honestly whether we can get you there.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition-all hover:bg-gold-bright hover:shadow-[0_0_40px_-8px_rgba(201,169,106,0.8)] sm:w-auto"
            >
              Book your intro call
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          </a>
          <a
              href={`mailto:${site.email}`}
              className="text-sm text-cream-dim transition-colors hover:text-cream"
            >
              or email {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center">
          <SectionEyebrow center>Questions</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            The honest answers.
          </h2>
        </Reveal>
        <div className="mt-12">
          <Faq />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft/60">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-gold/40 bg-gradient-to-b from-gold/20 to-transparent">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L21 19H3L12 3Z"
                    stroke="var(--color-gold-bright)"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="M12 9L16 16H8L12 9Z" fill="var(--color-gold-bright)" />
                </svg>
              </span>
              <span className="font-display text-xl text-cream">
                {site.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.tagline} Elite 1-on-1 coaching for the world&apos;s most
              competitive finance roles.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Explore
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#approach" className="text-cream-dim hover:text-cream">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="#results" className="text-cream-dim hover:text-cream">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#tracks" className="text-cream-dim hover:text-cream">
                    Tracks
                  </a>
                </li>
                <li>
                  <a href="#mentors" className="text-cream-dim hover:text-cream">
                    Mentors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Get started
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
                    className="text-cream-dim hover:text-cream"
                  >
                    Book a call
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-cream-dim hover:text-cream"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-cream-dim hover:text-cream">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-muted">
            {site.disclaimer}
          </p>
          <p className="mt-4 text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Icons -------------------------------- */

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 19.5c0-3.6 3.1-6 7-6s7 2.4 7 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------ Small helpers ---------------------------- */

function SectionEyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-8 bg-gold" />
      <span className="text-xs uppercase tracking-[0.22em] text-gold">
        {children}
      </span>
    </div>
  );
}
