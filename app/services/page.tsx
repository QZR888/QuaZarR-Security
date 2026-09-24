import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = buildMetadata({
  title: "Services: AI Risk and Compliance Assessments",
  description:
    "Three tiers of AI risk and compliance review for UK SMBs: Basic from £900, Full AI Risk Review from £2,500, and an ongoing monthly retainer.",
  path: "/services",
});

const basicIncludes = [
  "Complete AI tool inventory",
  "EU AI Act risk classification (deployer tier)",
  "OWASP LLM Top 10 (2026): all 10 categories",
  "NIST AI RMF maturity snapshot",
  "GRC posture overview: scored",
  "UK GDPR & Data (Use and Access) Act 2025 compliance snapshot",
  "Full risk register with free quick-win actions where available",
  "Remediation roadmap: This Week / 30 Days / 90 Days",
  "Founder-led delivery from discovery call to report",
  "One-page executive summary with overall risk rating",
  "Transparent 5x5 risk scoring methodology",
];

const fullExtras = [
  "EU AI Act deployer gap analysis: per tool, per article",
  "NIST AI RMF full 4-function assessment",
  "GRC framework scored 1 to 10 across all three pillars",
  "UK GDPR + Data (Use and Access) Act 2025 full gap analysis",
  "Framework cross-reference matrix: every framework in scope",
  "Documented Evidence Register for every material finding",
  "Regulatory exposure explained against UK GDPR fine ceilings",
  "DPA review: up to 10 AI tool providers",
  "14-clause Staff AI Usage Policy + ADM procedure (Articles 22A to 22D)",
  "90-day roadmap with action owners",
  "Extended findings walkthrough on delivery, plus 90-day reassessment session",
];

const retainerItems = [
  "Quarterly AI risk reassessment against standing risk register",
  "Up to 3 tool vettings per quarter (verdict within 5 working days)",
  "Policy updates within 10 working days of regulatory change",
  "Written regulatory alerts",
  "2 advisory hours per quarter",
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
            <p className="text-[17px] text-light leading-relaxed mb-8">
              Three tiers. Clear deliverables. No ambiguity. Every engagement is mapped against
              the frameworks relevant to your sector and tier.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <div className="card-accent bg-card px-6 py-5 text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red mb-2">
                Assessed against OWASP LLM Top 10 (2026)
              </p>
              <p className="text-[15px] text-light leading-relaxed">
                OWASP published the 2026 edition on 3 August 2026 and renumbered eight of the ten
                entries. All six of our report templates were migrated and verified against it
                before this page went live. You receive a report that is current on the day it
                lands, with findings numbered the way your auditor, insurer or enterprise customer
                will expect from now on.
              </p>
            </div>
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
              <p className="font-bebas text-4xl text-white tracking-wide leading-none mb-1">£900</p>
              <p className="text-xs text-muted mb-6">5 to 7 working days</p>
              <p className="text-sm text-light leading-relaxed mb-6 flex-1">
                A structured review of your AI tool usage mapped across five frameworks, six for
                recruitment clients including the Equality Act 2010. Key compliance gaps
                identified. Clear, prioritised action plan.
              </p>
              <ul className="flex flex-col gap-2 mb-4">
                {basicIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-red shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-xs text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-red mb-2">
                For recruitment clients:
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-red shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-xs text-light">
                    Equality Act 2010 / EHRC AI bias assessment
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red-dark transition-colors"
              >
                Get Started: From £900
              </Link>
            </div>
          </AnimatedSection>

          {/* Full */}
          <AnimatedSection delay={0.08}>
            <div className="border border-gold bg-card p-8 h-full flex flex-col">
              <SectionLabel className="mb-4 text-gold">Tier 2</SectionLabel>
              <h2 className="font-bebas text-3xl tracking-wide text-white mb-2">
                Full AI Risk Review
              </h2>
              <p className="font-bebas text-4xl text-gold tracking-wide leading-none mb-1">£2,500</p>
              <p className="text-xs text-muted mb-6">7 to 10 working days</p>
              <p className="text-sm text-light leading-relaxed mb-4 flex-1">
                Board-ready deep-dive. Everything in Basic expanded to full depth, plus
                DPA review, Staff AI Policy, and 90-day reassessment call.
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-2">
                Everything in Basic, plus:
              </p>
              <ul className="flex flex-col gap-2 mb-4">
                {fullExtras.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-xs text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gold mb-2">
                For recruitment clients:
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-xs text-light">
                    Equality Act 2010 / EHRC AI bias assessment
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center border border-gold text-gold text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-gold hover:text-surface transition-colors"
              >
                Get Started: From £2,500
              </Link>
            </div>
          </AnimatedSection>

          {/* Retainer */}
          <AnimatedSection delay={0.16}>
            <div className="bg-card border border-divider p-8 h-full flex flex-col">
              <SectionLabel className="mb-4 text-muted">Ongoing Support</SectionLabel>
              <h2 className="font-bebas text-3xl tracking-wide text-white mb-2">Retainer</h2>
              <p className="font-bebas text-4xl text-white tracking-wide leading-none mb-1">£395</p>
              <p className="text-xs text-muted mb-6">Per month · billed monthly · 12-month term</p>
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

        <AnimatedSection delay={0.24}>
          <p className="text-xs text-subtle leading-relaxed max-w-[1400px] mx-auto mt-10">
            What we don't do: penetration testing, red teaming, vulnerability scanning or incident
            response, and no emergency or same-day response service. Our work is not legal advice
            and does not guarantee compliance.
          </p>
        </AnimatedSection>
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
              Every engagement begins with a 30 to 45 minute discovery call. No technical knowledge
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
