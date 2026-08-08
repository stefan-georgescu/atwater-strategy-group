type WordmarkProps = {
  /** "row" places the mark beside the name; "stack" mirrors the logo artwork. */
  orientation?: "row" | "stack";
  size?: "sm" | "md" | "lg";
};

const SIZES = {
  sm: { mark: 38, name: "1.0625rem", sub: "0.5rem" },
  md: { mark: 50, name: "1.375rem", sub: "0.5625rem" },
  lg: { mark: 96, name: "2.25rem", sub: "0.75rem" },
} as const;

export default function Wordmark({
  orientation = "row",
  size = "sm",
}: WordmarkProps) {
  const s = SIZES[size];
  const stacked = orientation === "stack";

  return (
    <span
      className={
        stacked
          ? "flex flex-col items-center gap-4"
          : "flex items-center gap-3.5"
      }
    >
      <Mark height={s.mark} />
      <span
        className={`flex flex-col ${stacked ? "items-center gap-2" : "gap-1.5"}`}
      >
        <span
          className="display leading-none"
          style={{
            fontSize: s.name,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Atwater
        </span>
        <span
          className="h-px w-full bg-line-strong"
          style={{ marginBlock: "0.05rem" }}
          aria-hidden
        />
        <span
          className="font-sans uppercase leading-none text-fg-dim"
          style={{ fontSize: s.sub, letterSpacing: "0.3em" }}
        >
          Strategy Group
        </span>
      </span>
    </span>
  );
}

/* Inlined rather than loaded from public/atwater-mark.svg so the darkest
   shapes and the negative-space wake can follow the surrounding surface,
   letting one mark sit on both white and inverted navy bands. */
function Mark({ height }: { height: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 132 100"
      fill="none"
      className="flex-none overflow-visible"
      aria-hidden
    >
      <path d="M28 44 L54 35 L50 76 L24 76 Z" fill="#A9C4E0" />
      <path d="M60 30 L90 19 L86 76 L56 76 Z" fill="#5B87BC" />
      <path d="M96 13 L130 1 L126 80 L92 80 Z" className="fill-fg" />
      <path
        d="M0 72 C42 70 86 55 132 26 L132 34 C86 62 42 78 0 82 Z"
        className="fill-surface"
      />
      <path
        d="M0 82 C42 80 86 64 132 34 C86 68 42 84 0 86 Z"
        className="fill-fg"
      />
      <path d="M0 84 H44 V86 H0 Z" className="fill-fg" />
      <path d="M12 88.5 H50 V91 H12 Z" fill="#A9C4E0" />
      <path d="M17 93 H45 V95.5 H17 Z" fill="#A9C4E0" />
      <path d="M22 97.5 H40 V100 H22 Z" fill="#A9C4E0" />
    </svg>
  );
}
