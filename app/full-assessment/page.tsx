import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata = buildMetadata({
  title: "Full AI Risk Review: From £2,500",
  description:
    "The board-ready AI risk and compliance review for UK SMBs. Full framework gap analysis, DPA review, Staff AI Usage Policy and a 90-day reassessment.",
  path: "/full-assessment",
});

const basicIncludes = [
  "Complete AI tool inventory",
  "EU AI Act risk classification (deployer tier)",
  "OWASP LLM Top 10 (2026) assessment",
  "NIST AI RMF maturity snapshot",
  "GRC posture overview",
  "UK GDPR & Data (Use and Access) Act 2025 compliance snapshot",
  "Full risk register with immediate free actions",
  "Prioritised remediation roadmap: This Week / 30 Days / 90 Days",
  "Founder-led delivery from discovery call to report",
  "One-page executive summary with overall risk rating",
  "Transparent 5x5 risk scoring methodology",
  "Equality Act 2010 / EHRC assessment (recruitment clients)",
];

const additionalSections = [
  {
    number: "12",
    title: "EU AI Act Deployer Gap Analysis",
    body: "Per-tool, article-by-article deployer obligation analysis under Regulation 2024/1689. AI literacy (Article 4) applies now; transparency duties from August 2026; high-risk deployer obligations from December 2027. Prohibited uses are flagged immediately. Your readiness position is documented and evidenced at each obligation tier.",
  },
  {
    number: "13",
    title: "NIST AI RMF Full 4-Function Assessment",
    body: "Full deep-dive across GOVERN, MAP, MEASURE, and MANAGE with specific findings, evidence requirements, and remediation recommendations per sub-category. Establishes a documented AI risk management baseline suitable for board reporting.",
  },
  {
    number: "14",
    title: "GRC Framework Scored 1–10",
    body: "Governance, Risk, and Compliance individually scored on a 1–10 scale with specific, evidenced findings per pillar. Suitable for inclusion in board risk reporting.",
  },
  {
    number: "15",
    title: "UK GDPR + Data (Use and Access) Act 2025 Full Gap Analysis",
    body: "Comprehensive compliance review covering lawful basis, data subject rights, controller obligations, automated decision-making, and international transfers. Includes the new Articles 22A to 22D introduced by the Data (Use and Access) Act 2025 (DUAA), in force since 5 February 2026, requiring safeguards for solely automated significant decisions, meaning decisions taken with no meaningful human involvement.",
  },
  {
    number: "16",
    title: "Equality Act 2010 and EHRC Bias Risk Assessment",
    body: "For recruitment and staffing clients. Liability sits under section 55 of the Equality Act 2010 as an employment service-provider, covering both permanent placement and temporary supply. We assess direct discrimination risk in AI drafted job adverts, indirect discrimination risk where an AI screening or ranking rule operates as a provision, criterion or practice, and your position against the assurance steps DSIT published with the ICO, the EHRC, the REC and APSCo. Includes equal opportunities monitoring data segregation, which is where special category data most often leaks into an AI-assisted selection decision.",
  },
  {
    number: "17",
    title: "Framework Cross-Reference Matrix",
    body: "A single matrix mapping every finding across every framework in scope for your sector, simultaneously. Where a gap creates exposure across GDPR, EU AI Act, and the OWASP LLM Top 10 (2026) simultaneously, it's flagged and prioritised accordingly.",
  },
  {
    number: "18",
    title: "DPA Review",
    body: "Up to 10 AI tool providers in your inventory reviewed against a minimum-requirements DPA checklist. Gaps, inadequate clauses, and missing agreements identified. Recommendations for remediation provided.",
  },
  {
    number: "19",
    title: "14-Clause Staff AI Usage Policy",
    body: "A legally-structured, ready-to-issue Staff AI Usage Policy covering: approved tools, data input restrictions, session isolation, automated decision-making and human oversight, output validation, bias and discrimination checks, transparency on AI-generated content, human approval for automated systems, incident reporting, staff training, new tool vetting, and a disciplinary framework. Includes a ready-to-run procedure for handling automated decision-making requests under Articles 22A to 22D (DUAA).",
  },
  {
    number: "20",
    title: "90-Day Roadmap with Action Owners",
    body: "Detailed 90-day implementation plan with named action owners, framework tags, and milestone checkpoints. Suitable for use as a project management document by your internal team.",
  },
  {
    number: "21",
    title: "Delivery Walkthrough + 90-Day Reassessment",
    body: "Includes an extended findings walkthrough call on delivery, plus a 90-day reassessment session to review progress against the roadmap and update your compliance position.",
  },
  {
    number: "22",
    title: "Board-Ready Formatting",
    body: "Full Review reports are formatted for board distribution. Suitable for presentation to directors, investors, or auditors.",
  },
  {
    number: "23",
    title: "Documented Evidence Register",
    body: "This is evidence-based work, not interview-based. Settings are inspected, vendor agreements reviewed, and workflows observed. Every material finding is supported by a documented Evidence Register, so every score can be challenged, verified, and tracked over time.",
  },
  {
    number: "24",
    title: "Regulatory Exposure Explained",
    body: "Every applicable finding is explained against the UK GDPR fine ceilings that apply, up to £17.5 million or 4% of global annual turnover. You understand which regime each gap falls under and why it matters. This is context for prioritising remediation, not a predicted fine or liability figure for your business.",
  },
];

export default function FullAssessmentPage() {
  return (
    <>
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">Tier 2</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(48px,7vw,80px)] tracking-[0.04em] text-white mb-2">
              Full AI Risk Review
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="font-bebas text-3xl tracking-wide text-gold mb-6">
              From £2,500 · 7–10 Working Days
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.14}>
            <p className="text-light max-w-[600px] leading-relaxed">
              Board-ready. Legally structured. Comprehensive. The Full AI Risk Review is a
              deep-dive assessment — everything in the Basic, expanded to full framework
              depth, plus a complete DPA review and a ready-to-issue 14-clause Staff AI
              Usage Policy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      <section className="w-full py-24 px-12 lg:px-20">
        <div className="w-full">

          {/* Basic includes */}
          <AnimatedSection className="mb-12">
            <div className="bg-card border border-divider p-8">
              <SectionLabel className="mb-4">Includes Everything in Basic, Plus:</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {basicIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Additional sections */}
          <AnimatedSection className="mb-8">
            <SectionLabel>Additional Sections in the Full Review</SectionLabel>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {additionalSections.map(({ number, title, body }) => (
              <StaggerItem key={number}>
                <div className="bg-card border-t-2 border-t-gold p-6 h-full">
                  <p className="font-bebas text-4xl text-gold tracking-wide mb-3">{number}</p>
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
            <div className="border border-gold bg-[rgba(201,151,0,0.06)] p-6 max-w-[560px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gold mb-2">
                Turnaround
              </p>
              <p className="text-light">
                7–10 working days from completion of your discovery call.
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
                Get Started — From £2,500
              </Link>
              <Link
                href="/quote"
                className="border border-red text-red text-xs font-bold uppercase tracking-[0.12em] px-6 py-4 hover:bg-red hover:text-white transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="border border-divider text-muted text-xs font-bold uppercase tracking-[0.12em] px-6 py-4 hover:border-subtle hover:text-light transition-colors"
              >
                Compare with Basic
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
