"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpStatProps {
  value: string;
  label: string;
}

/**
 * Splits a stat into an animatable prefix, number and suffix.
 *
 * Returns null when the value cannot be counted up: either it holds no number
 * at all, or it holds more than one (a range such as "5 to 7", where animating
 * only the first number would read as a different range mid-flight).
 */
function parseStat(value: string) {
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  if (!m || /\d/.test(m[3])) return null;
  return { prefix: m[1], target: parseInt(m[2], 10), suffix: m[3] };
}

export function CountUpStat({ value, label }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState(() => {
    const parsed = parseStat(value);
    return parsed ? `${parsed.prefix}0${parsed.suffix}` : value;
  });

  useEffect(() => {
    const parsed = parseStat(value);

    // Ranges and non-numeric values render as-is, with no count-up.
    if (!parsed) {
      setDisplayed(value);
      return;
    }

    if (!isInView) return;

    const { prefix, target, suffix } = parsed;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayed(`${prefix}${current.toLocaleString("en-GB")}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <div className="stat-number text-4xl lg:text-5xl font-bold text-white mb-2">
        {displayed}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted max-w-[140px]">
        {label}
      </div>
    </div>
  );
}
