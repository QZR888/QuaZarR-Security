import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata = buildMetadata({
  title: "Basic AI Risk Assessment: From £900",
  description:
    "A structured review of your AI tool usage mapped across five frameworks, with key compliance gaps and a prioritised action plan in 5-7 working days.",
  path: "/basic-assessment",
});

const sections = [
  {
    number: "01",
    title: "AI Tool Inventory",
    body: "We document every AI tool in use across your business — by department, by function, and by the data each tool touches. Businesses typically discover tools they weren't aware staff were using.",
  },
  {
    number: "02",
    title: "EU AI Act Risk Classification",
    body: "Each tool in your inventory is classified against the EU AI Act's four-tier risk hierarchy: Unacceptable Risk, High Risk, Limited Risk, Minimal Risk. As a deployer, you carry distinct obligations at each tier. Prohibited applications are flagged immediately. AI literacy (Article 4) applies now; high-risk deployer obligations are phased in from December 2027.",
  },
  {
    number: "03",
    title: "OWASP LLM Top 10 (2026) Assessment",
    body: "All 10 vulnerability categories assessed against your current tool usage and deployment, using the 2026 edition published on 3 August 2026. Includes prompt injection (LLM01), sensitive information disclosure (LLM02), excessive agency (LLM03), data and model poisoning (LLM05), hidden context exposure (LLM08), and improper output handling (LLM10). The 2026 edition renumbered eight of the ten entries, so findings carry the numbering your auditor or insurer will expect.",
  },
  {
    number: "04",
    title: "NIST AI RMF Maturity Snapshot",
    body: "A rapid maturity assessment across NIST AI RMF's four functions (GOVERN, MAP, MEASURE, MANAGE). Establishes your current baseline and identifies the highest-priority gaps.",
  },
  {
    number: "05",
    title: "GRC Posture Overview",
    body: "Governance, Risk, and Compliance assessed and scored across your current AI usage. Identifies structural gaps in oversight, accountability, and control that create organisational exposure.",
  },
  {
    number: "06",
    title: "UK GDPR & Data (Use and Access) Act 2025 Compliance Snapshot",
    body: "A targeted review of your AI-related compliance position under UK GDPR and the Data (Use and Access) Act 2025 (DUAA). DUAA replaced Article 22 UK GDPR with new Articles 22A to 22D, in force since 5 February 2026, requiring safeguards (notice, representations, human intervention, contest) for solely automated significant decisions, meaning decisions taken with no meaningful human involvement. Includes lawful basis assessment, DPIA requirement identification, and ADM compliance.",
  },
  {
    number: "07",
    title: "Full Risk Register",
    body: "Every identified risk documented with: risk description, relevant framework, severity rating, likelihood, business impact, and the specific immediate action required to remediate. Every finding includes at least one free action you can take this week.",
  },
  {
    number: "08",
    title: "Prioritised Remediation Roadmap",
    body: "All findings organised into three action horizons: This Week (zero-cost immediate actions), 30 Days (quick-win implementations), and 90 Days (strategic compliance investments).",
  },
  {
    number: "09",
    title: "Founder-Led Delivery",
    body: "The person who runs your discovery call is the person who writes your report. No account managers, no handoffs, no junior analysts. You deal directly with the founder of QuaZarR Security from first call to final delivery.",
  },
  {
    number: "10",
    title: "One-Page Executive Summary",
    body: "A board-ready single page presenting your overall risk rating, top three priority findings, and the single most important action to take immediately. Designed to be shared with directors, investors, or compliance leads without requiring them to read the full report.",
  },
  {
    number: "11",
    title: "Transparent 5x5 Risk Scoring Methodology",
    body: "Every risk in your register is scored out of 25 using a defined 5x5 matrix: five likelihood levels multiplied by five impact levels, each with explicit anchors. Scores are never subjective. You receive the scoring matrix alongside every finding so you can challenge, verify, and track changes over time.",
  },
  {
    number: "12",
    title: "Equality Act 2010 & EHRC Assessment",
    body: "For recruitment and staffing clients. We assess your AI-assisted sourcing, screening, and shortlisting tools against the Equality Act 2010 and the EHRC's guidance on AI in recruitment, checking for discriminatory or biased automated decisions, indirect discrimination risk, and the safeguards required before an AI tool influences who you interview or reject.",
  },
];

export default function BasicAssessmentPage() {
  return (
    <>
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">Tier 1</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(48px,7vw,80px)] tracking-[0.04em] text-white mb-2">
              Basic AI Risk Assessment
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="font-bebas text-3xl tracking-wide text-red mb-6">
              From £900 · 5–7 Working Days
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.14}>
            <p className="text-[17px] text-light leading-relaxed">
              A structured review of your AI tool usage mapped across five frameworks (six for
              recruitment clients, including the Equality Act 2010 and EHRC AI guidance).
              Identifies key compliance gaps and delivers a clear, prioritised
              action plan for your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      <section className="w-full py-24 px-12 lg:px-20">
        <div className="w-full">
          <AnimatedSection className="mb-12">
            <SectionLabel>What's Included</SectionLabel>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sections.map(({ number, title, body }) => (
              <StaggerItem key={number}>
                <div className="bg-card border border-divider p-6 h-full">
                  <p className="font-bebas text-4xl text-red tracking-wide mb-3">{number}</p>
                  <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Turnaround box */}
          <AnimatedSection className="mb-12">
            <div className="border border-red bg-[rgba(204,0,0,0.06)] p-6 max-w-[560px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-red mb-2">
                Turnaround
              </p>
              <p className="text-light">
                5–7 working days from completion of your discovery call.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-8">
            <p className="text-xs text-subtle">
              QuaZarR Security provides risk assessment and guidance, not legal advice.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-red-dark transition-colors"
              >
                Get Started — From £900
              </Link>
              <Link
                href="/quote"
                className="border border-red text-red text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-red hover:text-white transition-colors"
              >
                Not Sure? Request a Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
