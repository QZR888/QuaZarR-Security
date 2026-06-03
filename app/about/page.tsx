import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About — The Team Behind QuaZarR Security",
  description:
    "QuaZarR Security was founded to give UK SMBs access to comprehensive AI risk assessments at a price that makes sense. Meet Rowan Money (CEO) and Govend Abdul-Hameed (CTO).",
  openGraph: {
    title: "About — QuaZarR Security",
    description: "Meet the team: Rowan Money (CEO) and Govend Abdul-Hameed (CTO).",
  },
};

const founders = [
  {
    name: "Rowan Money",
    role: "CEO",
    sub: "Client Engagement · Commercial Delivery · Brand",
    bio: [
      "Rowan leads all client relationships, commercial strategy, and business development at QuaZarR Security. With a background spanning entrepreneurship, digital product development, and brand building, he brings a rare combination of strategic clarity and communication precision to every client engagement.",
      "Rowan handles the full client journey — from initial scoping through to report delivery and ongoing relationship management — ensuring every output is positioned clearly, acted on decisively, and followed through completely.",
    ],
  },
  {
    name: "Govend Abdul-Hameed",
    role: "CTO",
    sub: "Technical Delivery · Framework Accuracy · Validation",
    bio: [
      "Govend leads all technical delivery and framework accuracy at QuaZarR Security. His academic background in cybersecurity and professional certifications underpin the technical rigour of every assessment we produce.",
      "Every report that leaves QuaZarR Security carries Govend's independent technical review alongside Rowan's commercial sign-off — a dual-validation model that ensures clients receive both expert perspectives in a single, coordinated output.",
    ],
  },
];

const pillars = [
  {
    title: "The Gap Was Obvious",
    body: "Enterprise AI security consultancies price UK SMBs out of the market. Generalist IT consultants lack the framework depth. We built the product that fills that gap — comprehensive, current, and priced for the businesses that actually need it.",
  },
  {
    title: "Dual Expertise By Design",
    body: "The CEO-CTO sign-off model isn't a nice-to-have — it's structural. Every assessment is reviewed from two distinct expert perspectives before it reaches a client. That's not standard. That's QuaZarR Security.",
  },
  {
    title: "Current By Construction",
    body: "Competitors are still assessing against frameworks that predate the EU AI Act and the Data Use and Access Act 2025. We built our assessment methodology to incorporate the most current legislative landscape from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">The Team</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            {/* DM Sans heading to preserve QuaZarR mixed-case */}
            <h1 className="font-sans font-black text-[clamp(40px,6vw,72px)] tracking-tight text-white mb-6 leading-none">
              <span className="text-red">QuaZarR</span> Security
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              QuaZarR Security was founded on a direct observation: UK SMBs are exposed to
              unprecedented AI-related compliance risk, and the consultancies equipped to address
              it either price them out or talk past them. We built the solution — a comprehensive,
              multi-framework AI risk assessment designed specifically for the businesses that
              need it most.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      {/* Founder cards */}
      <section className="w-full py-24 px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {founders.map(({ name, role, sub, bio }, i) => (
              <AnimatedSection key={name} delay={i * 0.08}>
                <div
                  className="bg-card p-8 h-full"
                  style={{ borderTop: "2px solid #cc0000" }}
                >
                  <SectionLabel className="mb-2">{role}</SectionLabel>
                  <h2 className="font-bebas text-4xl tracking-wide text-white mb-1">{name}</h2>
                  <p className="text-xs text-muted mb-6">{sub}</p>
                  {bio.map((para, j) => (
                    <p key={j} className="text-sm text-light leading-relaxed mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <RedRule className="mb-20" />

          {/* Mission */}
          <div className="text-center mb-12">
            <AnimatedSection className="mb-4">
              <SectionLabel className="flex justify-center">Why We Built This</SectionLabel>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="font-bebas text-[clamp(36px,5vw,56px)] tracking-[0.04em] text-white">
                Purpose-Built for the Gap
              </h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pillars.map(({ title, body }) => (
              <StaggerItem key={title}>
                <div className="bg-card border border-divider p-6 h-full">
                  <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <AnimatedSection>
              <Link
                href="/contact"
                className="inline-block bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-red-dark transition-colors"
              >
                Work with Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
