import Link from "next/link";

interface ServiceCardProps {
  tier: "basic" | "full";
  price: string;
  turnaround: string;
  brief: string;
  href: string;
}

export function ServiceCard({ tier, price, turnaround, brief, href }: ServiceCardProps) {
  const isBasic = tier === "basic";
  const accentColour = isBasic ? "border-red" : "border-gold";
  const tagColour = isBasic ? "text-red" : "text-gold";

  return (
    <div
      className={`flex flex-col bg-card border ${accentColour} p-8 h-full`}
    >
      <div className={`text-[10px] font-bold uppercase tracking-[0.12em] mb-4 ${tagColour}`}>
        {isBasic ? "Tier 1" : "Tier 2"}
      </div>

      <h3 className="font-bebas text-3xl tracking-wide text-white mb-1">
        {isBasic ? "Basic AI Risk Assessment" : "Full AI Security Review"}
      </h3>

      <div className={`text-2xl font-bold mb-1 ${isBasic ? "text-white" : "text-gold"}`}>
        {price}
      </div>
      <p className="text-xs text-muted mb-5">{turnaround}</p>

      <p className="text-sm text-light leading-relaxed flex-1 mb-6">{brief}</p>

      <Link
        href={href}
        className={`inline-block text-center text-xs font-bold uppercase tracking-[0.1em] px-6 py-3 border transition-colors ${
          isBasic
            ? "border-red text-red hover:bg-red hover:text-white"
            : "border-gold text-gold hover:bg-gold hover:text-surface"
        }`}
      >
        Learn More
      </Link>
    </div>
  );
}
