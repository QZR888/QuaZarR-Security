import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CookiebotDeclaration } from "@/components/CookiebotDeclaration";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "How QuaZarR Security uses cookies on quazarrsecurity.com, what data is collected, and how you can review or change your preferences at any time.",
  path: "/cookie-policy",
});

const sections = [
  {
    title: "What Are Cookies",
    body: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, improve performance, and provide information to site owners. Cookies cannot run programs or deliver viruses to your device.",
  },
  {
    title: "Who We Are",
    body: "QuaZarR Security is the data controller for this website. If you have any questions about how we use cookies, contact us at hello@quazarrsecurity.com.",
  },
  {
    title: "Managing Your Preferences",
    body: "You can withdraw or change your cookie consent at any time by clicking the button below. You can also control cookies through your browser settings. Note that disabling certain cookies may affect how the site functions.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-6 flex justify-center">Legal</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(40px,6vw,72px)] tracking-[0.04em] text-white mb-6 leading-none">
              Cookie Policy
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              This policy explains what cookies are set on{" "}
              <span className="text-white font-medium">quazarrsecurity.com</span>, why we use
              them, and how you can manage your preferences.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.14}>
            <p className="text-xs text-muted mt-6">Last updated: June 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      <section className="w-full py-24 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">

          {/* Info cards */}
          <div className="flex flex-col gap-6 mb-16">
            {sections.map(({ title, body }, i) => (
              <AnimatedSection key={title} delay={i * 0.06}>
                <div className="bg-card border border-divider p-6" style={{ borderTop: "2px solid #cc0000" }}>
                  <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-white mb-3">
                    {title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{body}</p>
                  {title === "Managing Your Preferences" && (
                    <CookiePreferencesButton />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <RedRule className="mb-16" />

          {/* Cookiebot auto-declaration */}
          <AnimatedSection className="mb-16">
            <SectionLabel className="mb-4">Cookie Declaration</SectionLabel>
            <h2 className="font-bebas text-[clamp(28px,4vw,44px)] tracking-[0.04em] text-white mb-8">
              Cookies in Use on This Site
            </h2>
            <div className="bg-card border border-divider p-6 text-sm text-muted">
              <CookiebotDeclaration />
            </div>
          </AnimatedSection>

          {/* Back link */}
          <AnimatedSection className="text-center">
            <Link
              href="/"
              className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-red border border-red px-8 py-4 hover:bg-red hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
