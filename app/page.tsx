import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Shield, AlertTriangle, Eye, ArrowRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { CountUpStat } from "@/components/CountUpStat";
import { ServiceCard } from "@/components/ServiceCard";
import { FrameworkBadge } from "@/components/FrameworkBadge";
import { ComparisonTable } from "@/components/ComparisonTable";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "QuaZarR Security | AI Cybersecurity for UK SMBs",
  description:
    "AI risk assessments for UK SMBs in recruitment, legal, finance, HR, and accountancy. Structured assessments against 7 frameworks — OWASP LLM Top 10, EU AI Act, NIST AI RMF, NIST CSF 2.0, GRC, UK GDPR, DUAA 2025. Dual expert sign-off. Delivered within a week from £750.",
  openGraph: {
    title: "QuaZarR Security | AI Cybersecurity for UK SMBs",
    description:
      "Structured AI risk assessments for UK SMBs. 7 frameworks. Dual expert sign-off. From £750.",
    url: "https://quazarrsecurity.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "QuaZarR Security",
  description:
    "AI cybersecurity consultancy providing structured AI risk assessments for UK SMBs.",
  url: "https://quazarrsecurity.com",
  email: "hello@quazarrsecurity.com",
  areaServed: "GB",
  foundingDate: "2026",
};

const stats = [
  { value: "7", label: "Frameworks Assessed Per Engagement" },
  { value: "5", label: "Working Days Turnaround (Basic)" },
  { value: "2", label: "Expert Sign-offs On Every Report" },
  { value: "£750", label: "Starting Price (vs £15k–50k Enterprise)" },
];

const howItWorks = [
  {
    number: "01",
    title: "Discovery Call",
    body: "20 minutes. We map your AI tool usage, data flows, current governance, and compliance position. No technical knowledge required on your side.",
  },
  {
    number: "02",
    title: "Assessment & Report",
    body: "We map your situation against all 7 relevant frameworks. Both our CEO and CTO independently review and sign off before it reaches you.",
  },
  {
    number: "03",
    title: "Delivery & Roadmap",
    body: "You receive a full risk register and prioritised remediation roadmap — broken into This Week, 30 Days, and 90 Days. Immediate free actions included.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    body: "Optional retainer for quarterly reassessment, new AI tool vetting, policy maintenance, and incident response support.",
  },
];

const whyCards = [
  {
    title: "Dual Sign-Off on Every Report",
    body: "Every assessment is independently reviewed by our CEO (client engagement, commercial delivery) and CTO (technical validation, framework accuracy). Two expert perspectives in one report.",
  },
  {
    title: "Current Frameworks — Including DUAA 2025",
    body: "We incorporate the Data Use and Access Act 2025 alongside the EU AI Act. Competitors haven't updated their products to reflect either.",
  },
  {
    title: "Built for SMBs — Not Enterprise",
    body: "Enterprise reports need a legal team to interpret and a six-figure budget to commission. Ours are written for business owners — actionable, plain English, same week.",
  },
  {
    title: "Seven Frameworks, One Report",
    body: "Getting equivalent coverage through separate specialists would cost multiples of our fee. We deliver it as one coordinated, cross-referenced assessment.",
  },
];

const frameworks = [
  { name: "OWASP LLM Top 10 (2025)", colour: "red" },
  { name: "EU AI Act (2024/1689)", colour: "blue" },
  { name: "NIST AI RMF (AI 100-1)", colour: "navy" },
  { name: "NIST CSF 2.0 (2024)", colour: "green" },
  { name: "GRC Framework", colour: "purple" },
  { name: "UK GDPR", colour: "grey" },
  { name: "Data Use & Access Act 2025", colour: "amber" },
  { name: "MITRE ATLAS", colour: "grey", fullReviewOnly: true },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO — full bleed two-column ── */}
      <section className="relative w-full min-h-screen grid grid-cols-1 xl:grid-cols-2 hero-grid-bg overflow-hidden">
        {/* Left red accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red z-10" aria-hidden="true" />

        {/* Left: copy */}
        <div className="flex flex-col justify-center px-12 lg:px-20 py-24">
          <AnimatedSection delay={0.05}>
            <SectionLabel className="mb-6">AI Cybersecurity Consultancy · UK</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-bebas text-[clamp(56px,7.5vw,100px)] leading-[0.92] tracking-[0.03em] text-white mb-8">
              MOST UK BUSINESSES
              <br />
              USING AI ARE ALREADY
              <br />
              IN BREACH OF{" "}
              <span className="text-red">GDPR.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.18}>
            <p className="text-[18px] text-light leading-relaxed max-w-[580px] mb-10">
              We tell you exactly where — and how to fix it. Structured AI risk assessments for UK
              SMBs in recruitment, legal, finance, HR, and accountancy. Board-ready reports. Dual
              expert sign-off. Delivered within a week.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.24}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-red text-white text-xs font-bold uppercase tracking-[0.14em] px-10 py-4 hover:bg-red-dark transition-colors"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/free-report"
                className="inline-block border border-red text-red text-xs font-bold uppercase tracking-[0.14em] px-10 py-4 hover:bg-red hover:text-white transition-colors"
              >
                Get Your Free Risk Report
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Right: framework panel — full height dark panel */}
        <AnimatedSection
          delay={0.3}
          className="hidden xl:flex flex-col justify-center px-16 py-24"
          style={{ background: "#141414", borderLeft: "1px solid #2e2e2e" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-red mb-8">
            Assessment Coverage — Every Engagement
          </p>
          <div className="flex flex-col divide-y divide-divider mb-10">
            {[
              { label: "OWASP LLM Top 10", detail: "All 10 categories assessed" },
              { label: "EU AI Act 2024/1689", detail: "Full risk classification per tool" },
              { label: "NIST AI RMF", detail: "4-function maturity assessment" },
              { label: "NIST CSF 2.0", detail: "6-function maturity assessment" },
              { label: "GRC Framework", detail: "Governance, Risk & Compliance scored" },
              { label: "UK GDPR + DUAA 2025", detail: "Article-level gap analysis" },
              { label: "MITRE ATLAS", detail: "Full Review only" },
            ].map(({ label, detail }) => (
              <div key={label} className="flex items-center justify-between py-4">
                <span className="text-[15px] font-bold text-white">{label}</span>
                <span className="text-xs text-muted text-right ml-4">{detail}</span>
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-between px-6 py-5"
            style={{ background: "#0a0a0a", border: "1px solid #cc0000" }}
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-1">Starting from</p>
              <p className="font-bebas text-5xl text-red tracking-wide leading-none">£750</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted mb-1">Enterprise equivalent</p>
              <p className="text-sm font-bold text-subtle line-through">£15k – £50k+</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-12 lg:left-20 flex items-center gap-3 text-subtle">
          <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
          <span className="text-[9px] uppercase tracking-[0.15em]">Scroll</span>
        </div>
      </section>

      {/* ── STATS BAR — full bleed 4 columns ── */}
      <section
        className="w-full grid grid-cols-2 lg:grid-cols-4"
        style={{ background: "#141414", borderTop: "1px solid #cc0000", borderBottom: "1px solid #cc0000" }}
        aria-label="Key statistics"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-10 px-8 flex items-center justify-center ${i < stats.length - 1 ? "border-r border-divider" : ""}`}
          >
            <CountUpStat value={s.value} label={s.label} />
          </div>
        ))}
      </section>

      {/* ── PROBLEM STATEMENT — full bleed two columns ── */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="px-12 lg:px-20 py-24">
          <AnimatedSection className="mb-4">
            <SectionLabel>The Problem</SectionLabel>
          </AnimatedSection>
          <AnimatedSection className="mb-10">
            <h2 className="font-bebas text-[clamp(40px,5vw,64px)] tracking-[0.03em] text-white leading-[0.95]">
              The Threat Is Already Inside Your Business
            </h2>
          </AnimatedSection>
          <AnimatedSection className="mb-8">
            <p className="text-[16px] text-light leading-relaxed mb-5">
              AI tools have moved faster than legislation. Your team is using ChatGPT, Copilot,
              Grammarly, and dozens of other AI tools to process client data, write legal documents,
              screen candidates, and manage finances.
            </p>
            <p className="text-[16px] text-light leading-relaxed">
              The question isn't whether you have AI risk exposure. The question is how many active
              GDPR breaches and compliance failures are sitting undetected inside your business
              right now.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="card-accent bg-card p-6">
              <p className="text-light leading-relaxed">
                <strong className="text-white">
                  GDPR fines can reach €20 million or 4% of global annual turnover.
                </strong>{" "}
                The ICO has issued over £50 million in enforcement action since 2019.
                AI-related complaints are rising. The majority of SMBs have no AI governance
                documentation whatsoever.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — threat cards stacked */}
        <div
          className="px-12 lg:px-16 py-24 flex flex-col justify-center gap-6"
          style={{ background: "#141414", borderLeft: "1px solid #2e2e2e" }}
        >
          <AnimatedSection>
            <SectionLabel className="mb-6">Three Active Threats</SectionLabel>
          </AnimatedSection>
          <StaggerContainer className="flex flex-col gap-5">
            {[
              {
                icon: <Eye className="w-6 h-6 text-red" aria-hidden="true" />,
                title: "Shadow AI",
                body: "Staff using personal AI accounts on company data without authorisation or oversight.",
              },
              {
                icon: <Shield className="w-6 h-6 text-red" aria-hidden="true" />,
                title: "GDPR Exposure",
                body: "Transferring personal data to AI providers without valid legal basis or compliant DPAs.",
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-red" aria-hidden="true" />,
                title: "Vendor Risk",
                body: "No visibility into how your AI tool providers store, process, or train on your client data.",
              },
            ].map(({ icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="flex items-start gap-5 bg-surface border border-divider p-6">
                  <div className="shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── HOW IT WORKS — full bleed 4 columns ── */}
      <section className="w-full tech-grid" style={{ borderTop: "1px solid #2e2e2e" }}>
        <div className="px-12 lg:px-20 pt-16 pb-10">
          <AnimatedSection className="mb-3">
            <SectionLabel>The Process</SectionLabel>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-bebas text-[clamp(40px,5vw,64px)] tracking-[0.03em] text-white leading-[0.95]">
              From Call to Clarity in Under a Week
            </h2>
          </AnimatedSection>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid #2e2e2e" }}>
          {howItWorks.map(({ number, title, body }, i) => (
            <AnimatedSection
              key={number}
              delay={i * 0.08}
              className={`px-10 py-12 ${i < howItWorks.length - 1 ? "border-r-0 sm:border-r border-divider" : ""}`}
              style={{ borderTop: "3px solid #cc0000" }}
            >
              <p className="font-bebas text-[72px] text-red tracking-wide leading-none mb-6 opacity-80">
                {number}
              </p>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-white mb-3">
                {title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── SERVICE LADDER — full bleed two columns ── */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2" style={{ borderTop: "1px solid #2e2e2e" }}>
        <div className="px-12 lg:px-20 py-20 flex flex-col">
          <AnimatedSection className="mb-3">
            <SectionLabel>Tier 1</SectionLabel>
          </AnimatedSection>
          <AnimatedSection className="mb-6">
            <h2 className="font-bebas text-[clamp(40px,4vw,60px)] tracking-[0.03em] text-white leading-[0.95]">
              Basic AI Risk Assessment
            </h2>
          </AnimatedSection>
          <AnimatedSection className="mb-6">
            <p className="font-bebas text-5xl text-white tracking-wide leading-none mb-2">£750</p>
            <p className="text-sm text-muted">5–7 working days from discovery call</p>
          </AnimatedSection>
          <AnimatedSection className="flex-1">
            <p className="text-[16px] text-light leading-relaxed mb-8">
              A full audit of your AI tool usage mapped across six frameworks. Every active
              compliance failure identified. Clear remediation roadmap — broken into This Week,
              30 Days, and 90 Days.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/basic-assessment"
                className="border border-red text-red text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red hover:text-white transition-colors"
              >
                See What's Included
              </Link>
              <Link
                href="/contact"
                className="bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red-dark transition-colors"
              >
                Get Started
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div
          className="px-12 lg:px-20 py-20 flex flex-col"
          style={{ background: "#141414", borderLeft: "1px solid #2e2e2e" }}
        >
          <AnimatedSection className="mb-3" delay={0.08}>
            <SectionLabel className="text-gold">Tier 2</SectionLabel>
          </AnimatedSection>
          <AnimatedSection className="mb-6" delay={0.1}>
            <h2 className="font-bebas text-[clamp(40px,4vw,60px)] tracking-[0.03em] text-white leading-[0.95]">
              Full AI Security Review
            </h2>
          </AnimatedSection>
          <AnimatedSection className="mb-6" delay={0.12}>
            <p className="font-bebas text-5xl text-gold tracking-wide leading-none mb-2">£2,500</p>
            <p className="text-sm text-muted">7–10 working days from discovery call</p>
          </AnimatedSection>
          <AnimatedSection className="flex-1" delay={0.14}>
            <p className="text-[16px] text-light leading-relaxed mb-8">
              Board-ready. 16-section deep-dive. Everything in Basic plus MITRE ATLAS threat
              mapping, DPA review, 13-clause Staff AI Policy, and a 90-day reassessment call.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/full-assessment"
                className="border border-gold text-gold text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-gold hover:text-surface transition-colors"
              >
                See What's Included
              </Link>
              <Link
                href="/contact"
                className="bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red-dark transition-colors"
              >
                Get Started
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FRAMEWORKS — full bleed ── */}
      <section
        className="w-full px-12 lg:px-20 py-24"
        style={{ background: "#141414", borderTop: "1px solid #2e2e2e" }}
      >
        <div className="mb-4">
          <AnimatedSection>
            <SectionLabel>Frameworks We Assess Against</SectionLabel>
          </AnimatedSection>
        </div>
        <AnimatedSection className="mb-12">
          <h2 className="font-bebas text-[clamp(40px,5vw,64px)] tracking-[0.03em] text-white leading-[0.95]">
            Seven Frameworks. One Report.
          </h2>
        </AnimatedSection>
        <StaggerContainer className="flex flex-wrap gap-3 mb-12">
          {frameworks.map((f) => (
            <StaggerItem key={f.name}>
              <FrameworkBadge
                name={f.name}
                colour={f.colour}
                fullReviewOnly={f.fullReviewOnly}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <AnimatedSection>
          <p className="text-[16px] text-muted max-w-[800px] leading-relaxed">
            Enterprise consultancies charge £15,000–50,000 for equivalent multi-framework coverage
            and require separate specialists per discipline. We deliver a fully cross-referenced,
            coordinated assessment as one coherent report — reviewed by both our CEO and CTO.
          </p>
        </AnimatedSection>
      </section>

      {/* ── WHY QUAZARR — full bleed 2×2 grid ── */}
      <section className="w-full" style={{ borderTop: "1px solid #2e2e2e" }}>
        <div className="px-12 lg:px-20 pt-16 pb-10">
          <AnimatedSection className="mb-3">
            <SectionLabel>Why QuaZarR Security</SectionLabel>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-bebas text-[clamp(40px,5vw,64px)] tracking-[0.03em] text-white leading-[0.95]">
              Built Different. Priced Fair.
            </h2>
          </AnimatedSection>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid #2e2e2e" }}>
          {whyCards.map(({ title, body }, i) => (
            <AnimatedSection
              key={title}
              delay={i * 0.07}
              className={`px-10 py-12 bg-surface ${i < whyCards.length - 1 ? "border-r border-divider" : ""}`}
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.07em] text-white mb-4 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE — full bleed ── */}
      <section
        className="w-full px-12 lg:px-20 py-24"
        style={{ background: "#141414", borderTop: "1px solid #2e2e2e" }}
      >
        <AnimatedSection className="mb-3">
          <SectionLabel>How We Compare</SectionLabel>
        </AnimatedSection>
        <AnimatedSection className="mb-12">
          <h2 className="font-bebas text-[clamp(40px,5vw,64px)] tracking-[0.03em] text-white leading-[0.95]">
            The Honest Comparison
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <ComparisonTable />
        </AnimatedSection>
      </section>

      {/* ── FINAL CTA — full bleed ── */}
      <section
        className="w-full px-12 lg:px-20 py-28 text-center"
        style={{ background: "#0a0a0a", borderTop: "3px solid #cc0000" }}
      >
        <AnimatedSection>
          <h2 className="font-bebas text-[clamp(44px,6vw,80px)] tracking-[0.03em] text-white mb-6 leading-[0.95]">
            Find Out Where You Stand — For Free
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <p className="text-[17px] text-light leading-relaxed max-w-[680px] mx-auto mb-10">
            Book a 20-minute discovery call. We'll map your AI tool usage and tell you exactly
            where you stand against GDPR and the frameworks that matter. No obligation. Clients
            typically identify at least two active compliance issues they weren't aware of — and
            walk away with immediate free actions they can take the same day.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.14}>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="bg-red text-white text-xs font-bold uppercase tracking-[0.14em] px-10 py-4 hover:bg-red-dark transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/free-report"
              className="border border-red text-red text-xs font-bold uppercase tracking-[0.14em] px-10 py-4 hover:bg-red hover:text-white transition-colors"
            >
              Get Your Free Report
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
