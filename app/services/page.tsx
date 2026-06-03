import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services — AI Risk Assessments",
  description:
    "Three service tiers: Basic AI Risk Assessment from £750, Full AI Security Review from £2,500, and ongoing Retainer support. Multi-framework coverage, dual expert sign-off.",
};

const basicIncludes = [
  "Complete AI tool inventory",
  "EU AI Act risk classification per tool",
  "OWASP LLM Top 10 — all 10 categories",
  "NIST AI RMF & NIST CSF 2.0 maturity snapshot",
  "GRC posture overview — scored",
  "UK GDPR & DUAA 2025 compliance snapshot",
  "Full risk register with free actions per finding",
  "Remediation roadmap — This Week / 30 Days / 90 Days",
  "Dual sign-off: CEO + CTO",
];

const fullExtras = [
  "MITRE ATLAS adversarial threat mapping",
  "EU AI Act full gap analysis — per tool, per article",
  "NIST AI RMF full 4-function assessment",
  "NIST CSF 2.0 full 6-function maturity assessment",
  "GRC framework scored 1–10 across all three pillars",
  "UK GDPR + DUAA 2025 full 11-article gap analysis",
  "Framework cross-reference matrix — all 7 frameworks",
  "DPA review — all AI tool providers",
  "13-clause Staff AI Usage Policy — ready to issue",
  "90-day roadmap with action owners",
  "90-day reassessment call included",
  "Dual sign-off: CEO + CTO — board ready",
];

const retainerItems = [
  "Quarterly AI risk reassessment",
  "New AI tool vetting before adoption",
  "Policy maintenance as legislation evolves",
  "Incident response advisory support",
  "Framework monitoring and update alerts",
  "Same working-day priority access",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">Service Ladder</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(48px,7vw,80px)] tracking-[0.04em] text-white mb-6">
              What We Deliver
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              Three tiers. Clear deliverables. No ambiguity. Every engagement is mapped against
              7 frameworks and reviewed by both our CEO and CTO before it reaches you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      {/* Three tiers side by side */}
      <section className="w-full py-20 px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {/* Basic */}
          <AnimatedSection>
            <div className="border border-red bg-card p-8 h-full flex flex-col">
              <SectionLabel className="mb-4">Tier 1</SectionLabel>
              <h2 className="font-bebas text-3xl tracking-wide text-white mb-2">
                Basic AI Risk Assessment
              </h2>
              <p className="font-bebas text-4xl text-white tracking-wide leading-none mb-1">£750</p>
              <p className="text-xs text-muted mb-6">5–7 working days</p>
              <p className="text-sm text-light leading-relaxed mb-6 flex-1">
                A full audit of your AI tool usage mapped across six frameworks. Every active
                compliance failure identified. Clear, prioritised action plan.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {basicIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-red shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-xs text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red-dark transition-colors"
              >
                Get Started — From £750
              </Link>
            </div>
          </AnimatedSection>

          {/* Full */}
          <AnimatedSection delay={0.08}>
            <div className="border border-gold bg-card p-8 h-full flex flex-col">
              <SectionLabel className="mb-4 text-gold">Tier 2</SectionLabel>
              <h2 className="font-bebas text-3xl tracking-wide text-white mb-2">
                Full AI Security Review
              </h2>
              <p className="font-bebas text-4xl text-gold tracking-wide leading-none mb-1">£2,500</p>
              <p className="text-xs text-muted mb-6">7–10 working days</p>
              <p className="text-sm text-light leading-relaxed mb-4 flex-1">
                Board-ready. 16-section deep-dive. Everything in Basic expanded to full depth,
                plus MITRE ATLAS, DPA audit, Staff AI Policy, and 90-day reassessment call.
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-2">
                Everything in Basic, plus:
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {fullExtras.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-xs text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center border border-gold text-gold text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-gold hover:text-surface transition-colors"
              >
                Get Started — From £2,500
              </Link>
            </div>
          </AnimatedSection>

          {/* Retainer */}
          <AnimatedSection delay={0.16}>
            <div className="bg-card border border-divider p-8 h-full flex flex-col">
              <SectionLabel className="mb-4 text-muted">Ongoing Support</SectionLabel>
              <h2 className="font-bebas text-3xl tracking-wide text-white mb-2">Retainer</h2>
              <p className="font-bebas text-2xl text-muted tracking-wide leading-none mb-1">
                Scoped Pricing
              </p>
              <p className="text-xs text-muted mb-6">Quarterly cadence</p>
              <p className="text-sm text-light leading-relaxed mb-6 flex-1">
                AI adoption doesn't stop after a single assessment. A retainer keeps your
                compliance posture current as legislation evolves, new tools are adopted, and
                your AI footprint grows.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {retainerItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-muted shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-xs text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="block text-center bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red-dark transition-colors"
                >
                  Request a Proposal
                </Link>
                <Link
                  href="/retainer"
                  className="block text-center border border-divider text-muted text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:border-subtle hover:text-light transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RedRule className="max-w-[1400px] mx-auto px-8" />

      {/* Discovery call */}
      <section className="w-full py-24 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">The Process</SectionLabel>
            <h2 className="font-bebas text-[clamp(36px,4vw,52px)] tracking-[0.04em] text-white mb-6">
              What to Expect
            </h2>
            <p className="text-[16px] text-light leading-relaxed mb-4">
              Every engagement begins with a 20-minute discovery call. No technical knowledge
              required on your side. We map your AI tool usage, data flows, governance position,
              and sector-specific obligations.
            </p>
            <p className="text-[16px] text-light leading-relaxed mb-10">
              From there, we work independently. You receive your report within the stated
              turnaround, walk through it together, and leave with complete clarity on next steps.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="border border-red text-red text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red hover:text-white transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red-dark transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
