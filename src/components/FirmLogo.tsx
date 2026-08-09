import fs from "fs";
import path from "path";

type FirmLogoProps = {
  id: string;
  name: string;
};

const FIRMS_DIR = path.join(process.cwd(), "public", "firms");

/** Only use assets that read as clear wordmarks at ticker size. */
const LOGO_IDS = new Set([
  "morgan-stanley",
  "bain",
  "bcg",
  "citi",
  "bank-of-america",
  "jefferies",
]);

/** Optical scale so wordmarks share visual weight. */
const LOGO_SCALE: Record<string, number> = {
  "morgan-stanley": 1.0,
  bain: 0.92,
  bcg: 0.95,
  citi: 1.1,
  "bank-of-america": 0.92,
  jefferies: 0.85,
};

function resolveLogo(id: string): string | null {
  if (!LOGO_IDS.has(id)) return null;
  for (const ext of ["svg", "png"] as const) {
    const file = path.join(FIRMS_DIR, `${id}.${ext}`);
    if (fs.existsSync(file) && fs.statSync(file).size > 400) {
      return `/firms/${id}.${ext}`;
    }
  }
  return null;
}

export default function FirmLogo({ id, name }: FirmLogoProps) {
  const src = resolveLogo(id);
  const scale = LOGO_SCALE[id] ?? 1;

  if (!src) {
    return (
      <span className="ticker-logo" title={name}>
        <span className="ticker-logo-wordmark">{name}</span>
      </span>
    );
  }

  return (
    <span className="ticker-logo" title={name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="ticker-logo-img"
        style={{ transform: `scale(${scale})` }}
        loading="lazy"
      />
    </span>
  );
}
