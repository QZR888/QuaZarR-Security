import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { InsightCard } from "@/components/InsightCard";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "AI Security Insights",
  description:
    "Regular thinking on AI governance, GDPR enforcement, shadow AI risk, and the evolving UK and EU AI regulatory landscape — direct from LinkedIn.",
  openGraph: {
    title: "AI Security Insights — QuaZarR Security",
    description: "AI governance, GDPR enforcement, shadow AI risk, and UK/EU regulatory intelligence.",
  },
};

export default function InsightsPage() {
  return (
    <>
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">AI Security Insights</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(48px,7vw,80px)] tracking-[0.04em] text-white mb-4">
              What We're Watching
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              Rowan publishes regular thinking on AI governance, GDPR enforcement, shadow AI risk,
              and the evolving UK and EU AI regulatory landscape. Below is our recent content —
              direct from LinkedIn.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      <section className="w-full py-20 px-12 lg:px-20">
        <div className="w-full">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {insights.map((insight) => (
              <StaggerItem key={insight.id}>
                <InsightCard insight={insight} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="text-xs text-subtle text-center mb-16">
            When Rowan publishes new content on LinkedIn, update the{" "}
            <code className="font-mono text-muted">insights</code> array in{" "}
            <code className="font-mono text-muted">lib/insights.ts</code> with the new post URL
            and summary. No CMS required.
          </p>

          <RedRule className="mb-16" />

          {/* LinkedIn CTA */}
          <AnimatedSection className="text-center">
            <SectionLabel className="mb-4 flex justify-center">Follow the Conversation</SectionLabel>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">
              Follow the Conversation on LinkedIn
            </h2>
            <p className="text-light max-w-[480px] mx-auto mb-8 leading-relaxed">
              We publish regular insights on AI governance, GDPR enforcement, and the UK AI
              security landscape on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/quazarr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-red-dark transition-colors"
            >
              Follow Rowan on LinkedIn
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
