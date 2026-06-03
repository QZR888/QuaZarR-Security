interface FrameworkBadgeProps {
  name: string;
  colour?: string;
  fullReviewOnly?: boolean;
}

const colourMap: Record<string, string> = {
  red: "border-red text-red",
  blue: "border-blue-800 text-blue-400",
  navy: "border-blue-900 text-blue-300",
  green: "border-green-900 text-green-400",
  purple: "border-purple-900 text-purple-300",
  grey: "border-divider text-muted",
  amber: "border-amber-800 text-amber-400",
};

export function FrameworkBadge({
  name,
  colour = "grey",
  fullReviewOnly = false,
}: FrameworkBadgeProps) {
  const colours = colourMap[colour] ?? colourMap.grey;
  return (
    <div
      className={`relative border ${colours} bg-card px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] font-sans`}
    >
      {name}
      {fullReviewOnly && (
        <span className="absolute -top-2 -right-2 bg-gold text-surface text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
          Full
        </span>
      )}
    </div>
  );
}
