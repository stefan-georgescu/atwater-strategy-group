type WordmarkProps = {
  /** Renders the stacked lockup at a larger scale for hero-style placements. */
  size?: "sm" | "md";
};

export default function Wordmark({ size = "sm" }: WordmarkProps) {
  const md = size === "md";
  return (
    <span className="flex items-center gap-3">
      <Mark size={md ? 44 : 38} />
      <span className="flex flex-col gap-[0.3rem]">
        <span
          className={`display leading-none text-cream ${
            md ? "text-[1.5rem]" : "text-[1.25rem]"
          }`}
        >
          Atwater
        </span>
        <span
          className="font-mono uppercase leading-none text-muted"
          style={{
            fontSize: md ? "0.625rem" : "0.5625rem",
            letterSpacing: "0.26em",
          }}
        >
          Strategy Group
        </span>
      </span>
    </span>
  );
}

function Mark({ size }: { size: number }) {
  return (
    <span
      className="grid flex-none place-items-center rounded-[3px] border border-line-strong bg-gradient-to-b from-white/[0.05] to-transparent"
      style={{ height: size, width: size }}
      aria-hidden
    >
      <svg
        width={size * 0.58}
        height={size * 0.58}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3.5 21 19.5H3L12 3.5Z"
          stroke="var(--color-gold)"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M12 9.5 16 16.5H8L12 9.5Z" fill="var(--color-gold-bright)" />
      </svg>
    </span>
  );
}
