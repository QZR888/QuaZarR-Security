import type { Insight } from "@/lib/insights";
import { ArrowUpRight } from "lucide-react";

interface InsightCardProps {
  insight: Insight;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <article className="flex flex-col bg-card border-t-2 border-t-red p-6 h-full">
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-red">
          {insight.topic}
        </span>
        <span className="text-xs text-muted shrink-0">{formatDate(insight.date)}</span>
      </div>

      <h3 className="text-[17px] font-bold text-white leading-snug mb-3 font-sans">
        {insight.title}
      </h3>

      <p className="text-sm text-light leading-relaxed flex-1 mb-5">{insight.excerpt}</p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-divider">
        <span className="text-xs text-muted">{insight.author}</span>
        <a
          href={insight.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-bold text-red uppercase tracking-wider hover:text-red-dark transition-colors"
          aria-label={`Read "${insight.title}" on LinkedIn`}
        >
          Read on LinkedIn
          <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
