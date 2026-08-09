type WordmarkProps = {
  /** "row" places the mark beside the name; "stack" mirrors the logo artwork. */
  orientation?: "row" | "stack";
  size?: "sm" | "md" | "lg";
};

const SIZES = {
  sm: { mark: 40, name: "1.0625rem", sub: "0.5rem" },
  md: { mark: 52, name: "1.375rem", sub: "0.5625rem" },
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
          className="font-sans font-medium uppercase leading-none text-fg-dim"
          style={{ fontSize: s.sub, letterSpacing: "0.28em" }}
        >
          Strategy Group
        </span>
      </span>
    </span>
  );
}

function Mark({ height }: { height: number }) {
  return (
    // Brand mark asset — ascending bars + wake
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/atwater-mark.png"
      alt=""
      aria-hidden
      height={height}
      width={Math.round(height * 1.15)}
      className="brand-mark flex-none object-contain"
      style={{ height, width: "auto" }}
      draggable={false}
    />
  );
}
