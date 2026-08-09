import { firms } from "@/lib/site";
import FirmLogo from "@/components/FirmLogo";

export default function Marquee() {
  const row = [...firms, ...firms];
  return (
    <div className="ticker-mask relative overflow-hidden py-1">
      <div className="ticker-track flex w-max items-center whitespace-nowrap">
        {row.map((firm, i) => (
          <span key={`${firm.id}-${i}`} className="flex items-center">
            <FirmLogo id={firm.id} name={firm.name} />
            <span
              className="mx-0.5 h-3.5 w-px flex-none bg-line opacity-70"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  );
}
