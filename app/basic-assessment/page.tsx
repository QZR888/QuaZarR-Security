import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Basic AI Risk Assessment — From £750",
  description:
    "A full 9-section AI risk assessment across 6 frameworks. Every active compliance failure identified. Clear remediation roadmap delivered in 5–7 working days.",
  openGraph: {
    title: "Basic AI Risk Assessment — QuaZarR Security",
    description: "9 sections. 6 frameworks. Dual expert sign-off. From £750.",
  },
};

const sections = [
  {
    number: "01",
    title: "AI Tool Inventory",
    body: "We document every AI tool in use across your business — by department, by function, and by the data each tool touches. Businesses typically discover tools they weren't aware staff were using.",
  },
  {
    number: "02",
    title: "EU AI Act Risk Classification",
    body: "Each tool in your inventory is classified against the EU AI Act's four-tier risk hierarchy: Unacceptable Risk, High Risk, Limited Risk, Minimal Risk. Prohibited applications are flagged immediately.",
  },
  {
    number: "03",
    title: "OWASP LLM Top 10 (2025) Assessment",
    body: "All 10 vulnerability categories assessed against your current tool usage and deployment. Includes prompt injection, insecure output handling, sensitive data exposure, and training data poisoning risks.",
  },
  {
    number: "04",
    title: "NIST AI RMF & NIST CSF 2.0 Maturity Snapshot",
    body: "A rapid maturity assessment across NIST AI RMF's four functions (GOVERN, MAP, MEASURE, MANAGE) and NIST CSF 2.0's six functions. Establishes your current baseline and identifies the highest-priority gaps.",
  },
  {
    number: "05",
    title: "GRC Posture Overview",
    body: "Governance, Risk, and Compliance assessed and scored across your current AI usage. Identifies structural gaps in oversight, accountability, and control that create organisational exposure.",
  },
  {
    number: "06",
    title: "UK GDPR & DUAA 2025 Compliance Snapshot",
    body: "A targeted review of your AI-related compliance position under UK GDPR and the Data Use and Access Act 2025. Includes lawful basis assessment, DPIA requirement identification, and ADM compliance.",
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
    title: "Dual Sign-Off: CEO & CTO",
    body: "Every Basic Assessment is independently reviewed and signed by our CEO (Rowan Money, commercial delivery and client engagement) and CTO (Govend Abdul-Hameed, technical validation and framework accuracy). Two expert perspectives in one report.",
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
              From £750 · 5–7 Working Days
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.14}>
            <p className="text-[17px] text-light leading-relaxed">
              A full audit of your AI tool usage mapped across six frameworks. Identifies every
              active compliance failure and delivers a clear, prioritised action plan for your
              business.
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

          <AnimatedSection>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-red-dark transition-colors"
              >
                Get Started — From £750
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
