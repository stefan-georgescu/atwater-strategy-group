import { firms } from "@/lib/site";

export default function Marquee() {
  const row = [...firms, ...firms];
  return (
    <div className="marquee-mask relative overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {row.map((firm, i) => (
          <span
            key={`${firm}-${i}`}
            className="font-display text-xl tracking-tight text-cream-dim/70 transition-colors hover:text-cream sm:text-2xl"
          >
            {firm}
          </span>
        ))}
      </div>
    </div>
  );
}
