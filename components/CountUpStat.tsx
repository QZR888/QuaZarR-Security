"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpStatProps {
  value: string;
  label: string;
}

export function CountUpStat({ value, label }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState(() => {
    const m = value.match(/^(\D*)([\d]+)(.*)/);
    return m ? `${m[1]}0${m[3]}` : value;
  });

  useEffect(() => {
    if (!isInView) return;

    const m = value.match(/^(\D*)([\d]+)(.*)/);
    if (!m) {
      setDisplayed(value);
      return;
    }

    const [, prefix, numStr, suffix] = m;
    const target = parseInt(numStr, 10);
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
