import { firms } from "@/lib/site";

export default function Marquee() {
  const row = [...firms, ...firms];
  return (
    <div className="ticker-mask relative overflow-hidden">
      <div className="ticker-track flex w-max items-center whitespace-nowrap">
        {row.map((firm, i) => (
          <span key={`${firm}-${i}`} className="flex items-center">
            <span className="ticker-item px-6">{firm}</span>
            <span className="h-2.5 w-px flex-none bg-line-strong" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
