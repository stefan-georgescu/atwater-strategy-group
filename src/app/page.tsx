import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Faq from "@/components/Faq";
import Wordmark from "@/components/Wordmark";
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
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
      <div className="wash-top" aria-hidden />
      <div className="bg-grid hero-grid absolute inset-0" aria-hidden />
      <div className="fade-to-white" aria-hidden />

      <div className="shell relative flex flex-col items-center text-center">
        <Reveal immediate>
          <p className="hero-eyebrow">1-on-1 coaching</p>
        </Reveal>

        <Reveal immediate delay={50}>
          <div className="hero-brand mt-7 sm:mt-8">
            <Wordmark orientation="stack" size="lg" />
          </div>
        </Reveal>

        <Reveal immediate delay={110}>
          <h1 className="hero-title mt-9 sm:mt-10 text-balance">
            Finance &amp; Consulting
          </h1>
        </Reveal>

        <Reveal immediate delay={170}>
          <p className="hero-lead mx-auto mt-6 text-pretty">
            Mentors who have sat on the other side of the table — at the banks,
            funds, and firms you&apos;re aiming for.
          </p>
        </Reveal>

        <Reveal immediate delay={230}>
          <div className="mt-9 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-primary group"
            >
              Book your intro call
              <Arrow />
            </a>
            <a href="#approach" className="btn btn-lg btn-outline">
              See how it works
            </a>
          </div>
        </Reveal>

        <Reveal immediate delay={290}>
          <p className="hero-notes mt-7">
            Limited roster
            <span aria-hidden> · </span>
            By application
            <span aria-hidden> · </span>
            Target &amp; non-target welcome
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Firms strip ------------------------------ */

function FirmsStrip() {
  return (
    <section className="border-b border-line bg-surface-sunken py-9">
      <p className="label label-muted mb-7 text-center">
        Our students have landed offers at
      </p>
      <Marquee />
    </section>
  );
}

/* ------------------------------- Approach -------------------------------- */

function Approach() {
  return (
    <section id="approach" className="section-y relative">
      <div className="shell">
        <SectionHead
          index="01"
          eyebrow="What we do"
          title={
            <>
              Recruiting is a process.
              <br />
              We run it <span className="display-accent">like a deal.</span>
            </>
          }
          lead="Most students lose because they prepare alone, late, and without a map. We give you a partner who has been through the gauntlet — and a system that leaves nothing to chance. No cohorts. No recorded courses. Just you, a mentor, and a plan engineered around your seat."
        />

        <div className="grid-hairline mt-16 grid sm:grid-cols-3">
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
            <Reveal key={item.title} delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col gap-4 bg-white p-8 transition-colors duration-300 hover:bg-surface-sunken lg:p-10">
                <span className="label tnum">{`0${i + 1}`}</span>
                <h3 className="display display-3">{item.title}</h3>
                <p className="body-sm text-pretty">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Story --------------------------------- */

const AXIS_MAX = 300;
const GRIDLINES = [0, 100, 200, 300];

/* Light-to-dark ascent, echoing the panels in the logo. */
const BAR_FILLS = ["bg-navy-pale", "bg-navy-light", "bg-navy"];

function Story() {
  return (
    <section
      id="story"
      className="section-y relative border-t border-line bg-surface-sunken"
    >
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <div>
              <SectionEyebrow index="02">Our story</SectionEyebrow>
              <h2 className="display display-2 mt-6 text-balance">
                Three years.{" "}
                <span className="display-accent">
                  One of the largest in the space.
                </span>
              </h2>
              <p className="prose-lead mt-7 text-pretty">{story.intro}</p>

              <dl className="mt-10 grid grid-cols-3 border-y border-line">
                {[
                  { label: "Offer rate", value: "~90%" },
                  { label: "Offers to date", value: "300+" },
                  { label: "Growth since year one", value: "6×" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={cx(
                      "flex flex-col-reverse justify-end gap-3 border-line py-6",
                      i === 0 ? "pr-5" : "border-l px-5",
                    )}
                  >
                    <dt className="label label-muted leading-relaxed">
                      {item.label}
                    </dt>
                    <dd className="figure text-[1.75rem] text-navy-mid">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <figure className="panel p-6 shadow-[0_24px_60px_-40px_rgba(14,41,66,0.4)] sm:p-8">
              <figcaption className="flex items-center justify-between border-b border-line pb-5">
                <span className="display text-[1.0625rem]">Offers secured</span>
                <span className="label label-muted">Cumulative</span>
              </figcaption>

              <div className="relative mt-8 h-56 sm:h-64">
                {GRIDLINES.map((v) => (
                  <div
                    key={v}
                    className="absolute inset-x-0 flex translate-y-1/2 items-center gap-3"
                    style={{ bottom: `${(v / AXIS_MAX) * 100}%` }}
                    aria-hidden
                  >
                    <span className="label label-muted tnum w-6 flex-none text-right">
                      {v}
                    </span>
                    <span
                      className={`h-px flex-1 ${
                        v === 0 ? "bg-line-strong" : "bg-line"
                      }`}
                    />
                  </div>
                ))}

                <div className="absolute inset-y-0 left-9 right-0 flex items-end gap-4 sm:gap-7">
                  {story.growth.map((g, i) => {
                    const pct = (g.offers / AXIS_MAX) * 100;
                    const isLast = i === story.growth.length - 1;
                    return (
                      <div key={g.year} className="relative h-full flex-1">
                        <span
                          className="figure absolute inset-x-0 text-center text-[1.125rem]"
                          style={{ bottom: `calc(${pct}% + 0.65rem)` }}
                        >
                          {g.offers}
                          {isLast ? "+" : ""}
                        </span>
                        <div
                          className={cx(
                            "bar-grow absolute inset-x-0 bottom-0 mx-auto w-full max-w-[4.5rem] rounded-t-[2px]",
                            BAR_FILLS[i] ?? "bg-navy",
                          )}
                          style={{
                            height: `${pct}%`,
                            transitionDelay: `${260 + i * 150}ms`,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex gap-4 pl-9 sm:gap-7">
                {story.growth.map((g) => (
                  <span
                    key={g.year}
                    className="label label-muted flex-1 text-center"
                  >
                    {g.year}
                  </span>
                ))}
              </div>

              <p className="body-sm mt-7 border-t border-line pt-5 text-pretty">
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
    <section className="section-y relative border-t border-line">
      <div className="shell">
        <SectionHead
          index="03"
          eyebrow="How we do it"
          title={
            <>
              A four-phase path from where you are to{" "}
              <span className="display-accent">where you&apos;re going.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-x-8 gap-y-12 border-t border-line md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="h-full">
              <div className="group relative flex h-full flex-col pt-7">
                <span
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-navy-mid transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="flex items-baseline justify-between gap-4">
                  <span className="figure text-[2.75rem] text-navy-pale transition-colors duration-500 group-hover:text-navy-light">
                    {`0${i + 1}`}
                  </span>
                  <span className="label">{p.eyebrow}</span>
                </div>
                <h3 className="display display-3 mt-6">{p.title}</h3>
                <p className="body-sm mt-3.5 text-pretty">{p.body}</p>
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
    <section className="section-y relative border-t border-line bg-surface-sunken">
      <div className="shell">
        <SectionHead
          index="04"
          eyebrow="What's included"
          title={
            <>
              Every part of recruiting,{" "}
              <span className="display-accent">covered.</span>
            </>
          }
          lead="From your first technical question to your final superday, every engagement is end-to-end. Nothing is outsourced to a video course — you get hands-on reps with experts who do this for a living."
        />

        <div className="grid-hairline mt-16 grid sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80} className="h-full">
              <div className="group flex h-full flex-col gap-4 bg-white p-8">
                <span className="grid h-10 w-10 place-items-center rounded-[3px] border border-line-strong text-navy-mid transition-colors duration-300 group-hover:border-navy-mid group-hover:bg-navy-wash">
                  <CheckIcon />
                </span>
                <h3 className="display display-3 mt-1">{item.title}</h3>
                <p className="body-sm text-pretty">{item.desc}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={160} className="h-full">
            <div className="flex h-full flex-col justify-center gap-3 bg-navy-wash p-8">
              <p className="display text-[1.5rem] leading-tight">
                All 1-on-1.
                <br />
                <span className="display-accent">All bespoke.</span>
              </p>
              <p className="body-sm text-pretty">
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
    <section id="results" className="band-deep section-y relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-accent" aria-hidden />
            <span className="label">05 / The results</span>
            <span className="h-px w-7 bg-accent" aria-hidden />
          </div>
          <h2 className="display display-2 mt-6 text-balance">
            Numbers earned,{" "}
            <span className="display-accent">one student at a time.</span>
          </h2>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 70}
              className={cx(
                "border-line",
                i % 2 === 1 && "border-l",
                i >= 2 && "border-t lg:border-t-0",
                i > 0 && "lg:border-l",
              )}
            >
              <div className="flex h-full flex-col-reverse items-center justify-end gap-4 px-5 py-10 text-center">
                <dt className="meta max-w-[13rem] text-fg-dim">{s.label}</dt>
                <dd className="figure text-[3rem] sm:text-[3.75rem]">
                  {s.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <div className="mt-16 grid lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className={cx(
                "h-full border-line",
                i > 0 && "border-t lg:border-t-0 lg:border-l",
              )}
            >
              <figure
                className={cx(
                  "flex h-full flex-col justify-between py-9",
                  i === 0 ? "lg:pt-0 lg:pr-9" : "lg:px-9 lg:pt-0",
                  i === 2 && "lg:pr-0",
                )}
              >
                <div>
                  <span
                    className="display block text-[2.75rem] leading-none text-accent-soft/60"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-1 text-[1.0625rem] leading-[1.7] text-pretty text-fg">
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-line-strong font-mono text-[0.6875rem] text-fg-dim">
                    {t.name.replace(/[^A-Z]/g, "")}
                  </span>
                  <span>
                    <span className="block text-[0.875rem] font-medium text-fg">
                      {t.name}
                    </span>
                    <span className="meta mt-0.5 block text-accent">
                      {t.detail}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 text-center text-[0.75rem] leading-relaxed text-fg-muted">
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
    <section id="tracks" className="section-y relative">
      <div className="shell">
        <SectionHead
          index="06"
          eyebrow="Our specialty"
          title={
            <>
              Four seats. <span className="display-accent">Total focus.</span>
            </>
          }
          lead="We don't try to be everything to everyone. We specialize in the four most competitive paths — investment banking, private equity, asset management, and MBB consulting — and we go deep on each."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80} className="h-full">
              <div className="panel panel-hover group flex h-full flex-col p-7">
                <div className="flex items-start justify-between">
                  <span className="label tnum label-muted">{`0${i + 1}`}</span>
                  <span
                    className="h-px w-7 bg-navy-mid transition-all duration-500 ease-out group-hover:w-12"
                    aria-hidden
                  />
                </div>
                <h3 className="display mt-6 text-[1.375rem] leading-tight">
                  {t.name}
                </h3>
                <p className="body-sm mt-3.5 text-pretty">{t.desc}</p>
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
    <section
      id="global"
      className="section-y relative border-t border-line bg-surface-sunken"
    >
      <div className="shell">
        <SectionHead
          index="07"
          eyebrow="Global reach"
          title={
            <>
              Rooted in the US.
              <br />
              <span className="display-accent">Winning worldwide.</span>
            </>
          }
          lead="The US is our home market and primary focus — but recruiting is global, and so are we. We've helped students land offers across Europe and Asia, navigating each region's timelines, formats, and firms."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {regions.map((r, i) => {
            const primary = r.tag === "Primary focus";
            return (
              <Reveal key={r.name} delay={i * 90} className="h-full">
                <div
                  className={cx(
                    "relative flex h-full flex-col overflow-hidden rounded-[4px] p-7",
                    primary
                      ? "border border-navy-mid/45 bg-navy-wash"
                      : "panel panel-hover",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="display text-[1.375rem]">{r.name}</h3>
                    <span
                      className={cx(
                        "label whitespace-nowrap rounded-full px-2.5 py-1.5",
                        primary
                          ? "bg-navy text-white"
                          : "border border-line label-muted",
                      )}
                    >
                      {r.tag}
                    </span>
                  </div>
                  <p className="figure mt-7 text-[1.75rem] text-navy-mid">
                    {r.offers}
                  </p>
                  <p className="body-sm mt-3.5 text-pretty">{r.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Mentors -------------------------------- */

function Mentors() {
  return (
    <section id="mentors" className="section-y relative border-t border-line">
      <div className="shell">
        <SectionHead
          index="08"
          eyebrow="The mentors"
          title={
            <>
              Coached by people who&apos;ve{" "}
              <span className="display-accent">done the job.</span>
            </>
          }
          lead="Our mentors are active and former practitioners from bulge brackets, elite boutiques, megafunds, top asset managers, and MBB firms. To protect their current roles, identities stay private until you're matched — the pedigree is real, the names come later."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {mentors.map((m, i) => (
            <Reveal key={m.role} delay={i * 90} className="h-full">
              <div className="panel panel-hover flex h-full flex-col p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-[3px] border border-line-strong bg-navy-wash text-navy-mid">
                    <AnonIcon />
                  </span>
                  <div>
                    <p className="label label-muted">Verified mentor</p>
                    <h3 className="display mt-2.5 text-[1.125rem] leading-snug">
                      {m.role}
                    </h3>
                  </div>
                </div>
                <p className="body-sm mt-6 text-pretty">{m.background}</p>
                <div className="mt-auto flex flex-col gap-2 border-t border-line pt-5">
                  <p className="label label-muted">Focus</p>
                  <p className="body-sm">{m.focus}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-9 text-[0.75rem] leading-relaxed text-fg-muted">
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
    <section className="relative px-6 py-6 lg:px-10">
      <div className="band-deep relative mx-auto max-w-6xl overflow-hidden rounded-[4px] px-6 py-16 text-center sm:px-16 sm:py-20">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -bottom-44 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-navy-light/30 blur-[110px]"
          aria-hidden
        />

        <Reveal className="relative">
          <span className="label">Your move</span>
          <h2 className="display display-2 mx-auto mt-6 max-w-3xl text-balance">
            The recruiting clock is{" "}
            <span className="display-accent">already running.</span>
          </h2>
          <p className="prose-lead mx-auto mt-6 max-w-xl text-pretty">
            We take on a limited number of students each cycle. Book a free
            intro call and we&apos;ll tell you honestly whether we can get you
            there.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-primary group w-full sm:w-auto"
            >
              Book your intro call
              <Arrow />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-[0.875rem] text-fg-dim underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
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
    <section id="faq" className="section-y relative">
      <div className="shell max-w-3xl">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-navy-mid" aria-hidden />
            <span className="label">09 / Questions</span>
            <span className="h-px w-7 bg-navy-mid" aria-hidden />
          </div>
          <h2 className="display display-2 mt-6 text-balance">
            The <span className="display-accent">honest</span> answers.
          </h2>
        </Reveal>
        <div className="mt-14">
          <Faq />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="band-deep relative">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Wordmark size="md" />
            <p className="body-sm mt-7 text-pretty">
              {site.tagline}{" "}
              Elite 1-on-1 coaching for the world&apos;s most competitive
              finance roles.
            </p>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-outline group mt-7"
            >
              Book your intro call
              <Arrow />
            </a>
          </div>

          <div>
            <p className="label label-muted">Explore</p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {[
                { href: "#approach", label: "Approach" },
                { href: "#results", label: "Results" },
                { href: "#tracks", label: "Tracks" },
                { href: "#mentors", label: "Mentors" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label label-muted">Get started</p>
            <ul className="mt-5 flex flex-col gap-3.5">
              <li>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Book a call
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="footer-link">
                  {site.email}
                </a>
              </li>
              <li>
                <Link href={site.portalUrl} className="footer-link">
                  Member portal
                </Link>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="max-w-4xl text-[0.75rem] leading-relaxed text-fg-muted">
            {site.disclaimer}
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="label label-muted">
              © {new Date().getFullYear()} {site.name}
            </p>
            <p className="label label-muted">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Icons -------------------------------- */

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

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5 19.5c0-3.6 3.1-6 7-6s7 2.4 7 6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------ Small helpers ---------------------------- */

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function SectionEyebrow({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-7 flex-none bg-navy-mid" aria-hidden />
      <span className="label tnum">
        {index} / {children}
      </span>
    </div>
  );
}

function SectionHead({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <div
      className={`grid gap-8 ${
        lead ? "lg:grid-cols-2 lg:items-end lg:gap-16" : "max-w-3xl"
      }`}
    >
      <Reveal>
        <div>
          <SectionEyebrow index={index}>{eyebrow}</SectionEyebrow>
          <h2 className="display display-2 mt-6 text-balance">{title}</h2>
        </div>
      </Reveal>
      {lead && (
        <Reveal delay={110}>
          <p className="prose-lead text-pretty lg:pb-1">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
