"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ChevronRight, AlertTriangle, CheckCircle2 } from "lucide-react";

const TOTAL_STEPS = 6;

// ── Risk scoring ───────────────────────────────────────────
const TOOL_WEIGHTS: Record<string, number> = {
  chatgpt: 8,
  copilot: 8,
  gemini: 7,
  grammarly: 5,
  notion: 5,
  hubspot: 6,
  linkedin: 4,
  recruitment: 9,
  legal: 9,
  accounting: 8,
  other: 5,
  none: 0,
};

const SENSITIVE_DATA = ["health", "legal"];
const DATA_WEIGHTS: Record<string, number> = {
  client: 5,
  employee: 6,
  financial: 7,
  health: 12,
  legal: 12,
  confidential: 5,
};

function calcRiskScore(tools: string[], governance: string[], dataTypes: string[]): number {
  const usingTools = tools.length > 0 && !tools.includes("none");
  if (!usingTools) return 15;

  let score = 35;

  const extraToolScore = tools
    .filter((t) => t !== "none")
    .reduce((sum, t) => sum + (TOOL_WEIGHTS[t] ?? 5), 0);
  score += Math.min(extraToolScore, 30);

  const governanceCount = governance.filter((g) => g !== "none").length;
  if (governanceCount === 0) score += 25;
  else if (governanceCount <= 2) score += 12;
  else if (governanceCount <= 3) score += 5;

  const dataScore = dataTypes
    .filter((d) => d !== "none")
    .reduce((sum, d) => sum + (DATA_WEIGHTS[d] ?? 5), 0);
  score += Math.min(dataScore, 25);

  return Math.min(score, 100);
}

function getRiskLevel(score: number): { label: string; colour: string; critical: boolean } {
  if (score >= 61) return { label: "Critical Exposure", colour: "#cc0000", critical: true };
  if (score >= 31) return { label: "Elevated Risk", colour: "#cc0000", critical: false };
  return { label: "Moderate Exposure", colour: "#c97300", critical: false };
}

function generateFindings(
  sector: string,
  tools: string[],
  governance: string[],
  dataTypes: string[]
): string[] {
  const findings: string[] = [];
  const hasNoGov = governance.includes("none") || governance.length === 0;
  const hasChatGPT = tools.includes("chatgpt");
  const hasCopilot = tools.includes("copilot");
  const hasClientData = dataTypes.includes("client");
  const hasHealth = dataTypes.includes("health");
  const hasLegal = dataTypes.includes("legal");
  const hasFinancial = dataTypes.includes("financial");
  const noDPA = !governance.includes("dpa");
  const noPolicy = !governance.includes("policy");
  const noApproval = !governance.includes("approval");

  if (hasChatGPT && (hasClientData || hasHealth || hasLegal) && noDPA) {
    findings.push(
      "No Data Processing Agreement with OpenAI detected. Transferring personal data to ChatGPT without a valid DPA is a direct violation of Article 28 UK GDPR. This is an active compliance failure."
    );
  }
  if (hasCopilot && (hasClientData || hasLegal) && noDPA) {
    findings.push(
      "Microsoft Copilot usage identified alongside personal or privileged data, without a confirmed DPA in place. Microsoft's enterprise licensing does not automatically satisfy GDPR Article 28 obligations."
    );
  }
  if (noPolicy && tools.length > 0 && !tools.includes("none")) {
    findings.push(
      "No staff AI usage policy in place. Your employees are making independent decisions about which AI tools to use with business data — with no oversight, authorisation, or audit trail. This is a governance failure under GRC and NIST AI RMF."
    );
  }
  if (hasHealth) {
    findings.push(
      "Health data is a Special Category under Article 9 UK GDPR. Processing it through any AI tool without explicit legal basis, technical safeguards, and documented justification carries the highest available penalty risk — up to €20 million or 4% of global annual turnover."
    );
  }
  if (hasLegal && tools.some((t) => ["chatgpt", "gemini", "copilot"].includes(t))) {
    findings.push(
      "Legal privileged information is being processed through consumer or commercial AI tools. This creates exposure under both UK GDPR and professional regulatory obligations, and may breach client confidentiality obligations."
    );
  }
  if (noApproval && tools.length > 0 && !tools.includes("none")) {
    findings.push(
      "No AI tool approval process exists before adoption. Shadow AI risk is active: staff are onboarding tools without security review, DPA checks, or authorisation. This is a direct OWASP LLM Top 10 vulnerability (LLM09: Misinformation / Insecure Plugin Design)."
    );
  }
  if (hasNoGov && tools.length >= 2) {
    findings.push(
      "Zero baseline governance controls detected. Without written policy, DPAs, approval processes, or staff training, your organisation has no defensible position in the event of an ICO investigation or AI-related data incident."
    );
  }
  if (hasFinancial && tools.some((t) => ["chatgpt", "gemini", "accounting"].includes(t))) {
    findings.push(
      "Financial records are being processed by AI tools. This creates specific obligations under UK GDPR's accuracy principle (Article 5(1)(d)) and may trigger DPIA requirements under Article 35."
    );
  }

  return findings.slice(0, 5);
}

// ── Step components ────────────────────────────────────────
const stepVariants = {
  enter: { opacity: 0, x: 24 },
  centre: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

function TileGrid({
  options,
  selected,
  onSelect,
  multiSelect = false,
}: {
  options: { id: string; label: string }[];
  selected: string[];
  onSelect: (id: string) => void;
  multiSelect?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
      {options.map(({ id, label }) => {
        const active = selected.includes(id);
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={`p-4 text-left text-sm font-sans border transition-all ${
              active
                ? "border-red bg-[rgba(204,0,0,0.08)] text-white"
                : "border-divider bg-card text-muted hover:border-subtle hover:text-light"
            }`}
            aria-pressed={active}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────
interface EmailData {
  firstName: string;
  email: string;
  businessName: string;
  consent: boolean;
}

export function QuestionnaireForm() {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState<string[]>([]);
  const [otherSector, setOtherSector] = useState("");
  const [tools, setTools] = useState<string[]>([]);
  const [governance, setGovernance] = useState<string[]>([]);
  const [dataTypes, setDataTypes] = useState<string[]>([]);
  const [riskScore, setRiskScore] = useState(0);
  const [findings, setFindings] = useState<string[]>([]);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [animatedScore, setAnimatedScore] = useState(0);

  const { register, handleSubmit, formState: { errors } } = useForm<EmailData>();

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  // Animate gauge on reveal
  useEffect(() => {
    if (step !== 5) return;
    const score = calcRiskScore(tools, governance, dataTypes);
    setRiskScore(score);
    setFindings(generateFindings(sector[0] ?? "", tools, governance, dataTypes));

    let start = 0;
    const duration = 1600;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      start = Math.round(eased * score);
      setAnimatedScore(start);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [step]);

  const toggleTile = (
    value: string,
    current: string[],
    setter: (v: string[]) => void,
    exclusive?: string
  ) => {
    if (exclusive && value === exclusive) {
      setter([exclusive]);
      return;
    }
    const filtered = current.filter((v) => v !== exclusive);
    if (filtered.includes(value)) {
      setter(filtered.filter((v) => v !== value));
    } else {
      setter([...filtered, value]);
    }
  };

  const canContinue = () => {
    if (step === 1) return sector.length > 0;
    if (step === 2) return tools.length > 0;
    if (step === 3) return governance.length > 0;
    if (step === 4) return dataTypes.length > 0;
    return true;
  };

  const onEmailSubmit = async (data: EmailData) => {
    setSubmitStatus("loading");
    const scoreData = calcRiskScore(tools, governance, dataTypes);
    const level = getRiskLevel(scoreData);
    const reportFindings = generateFindings(sector[0] ?? "", tools, governance, dataTypes);
    const findingsText = reportFindings.length > 0
      ? reportFindings.map((f, i) => `${i + 1}. ${f}`).join("\n\n")
      : "No specific findings generated.";
    try {
      await emailjs.send(
        "service_sde7xo9",
        "template_jimmb8c",
        {
          form_type: "Free Report",
          first_name: data.firstName,
          email: data.email,
          business_name: data.businessName,
          sector: sector.join(", "),
          ai_tools: tools.join(", "),
          governance: governance.join(", "),
          data_types: dataTypes.join(", "),
          risk_score: scoreData.toString(),
          risk_level: level.label,
          findings: findingsText,
          to_email: "hello@quazarrsecurity.com",
        },
        "t5yp6bticOrlGpkLr"
      );
      setSubmitStatus("success");
      setStep(6);
    } catch {
      setSubmitStatus("error");
    }
  };

  const sectorOptions = [
    { id: "recruitment", label: "Recruitment" },
    { id: "legal", label: "Legal & Professional Services" },
    { id: "finance", label: "Finance & Accounting" },
    { id: "hr", label: "HR & People Operations" },
    { id: "accountancy", label: "Accountancy & Tax" },
    { id: "other", label: "Other" },
  ];

  const toolOptions = [
    { id: "chatgpt", label: "ChatGPT / OpenAI" },
    { id: "copilot", label: "Microsoft Copilot" },
    { id: "gemini", label: "Google Gemini / Workspace AI" },
    { id: "grammarly", label: "Grammarly" },
    { id: "notion", label: "Notion AI" },
    { id: "hubspot", label: "HubSpot AI" },
    { id: "linkedin", label: "LinkedIn AI features" },
    { id: "recruitment", label: "Recruitment AI tools" },
    { id: "legal", label: "Legal research AI" },
    { id: "accounting", label: "Accounting AI / bookkeeping tools" },
    { id: "other", label: "Other AI tools" },
    { id: "none", label: "None — we don't use AI tools" },
  ];

  const governanceOptions = [
    { id: "policy", label: "A written AI usage policy for staff" },
    { id: "dpa", label: "Data Processing Agreements with all AI vendors" },
    { id: "approval", label: "AI tool approval process before adoption" },
    { id: "training", label: "Staff training on GDPR and AI risks" },
    { id: "review", label: "Regular review of AI tools in use" },
    { id: "none", label: "None of the above" },
  ];

  const dataOptions = [
    { id: "client", label: "Client personal data (names, contact details)" },
    { id: "employee", label: "Employee / candidate personal data" },
    { id: "financial", label: "Financial records or bank details" },
    { id: "health", label: "Health or sensitive personal data" },
    { id: "legal", label: "Legal privileged information" },
    { id: "confidential", label: "Business-confidential data" },
    { id: "none", label: "None of the above" },
  ];

  const toolWarning =
    tools.filter((t) => t !== "none").length >= 3 &&
    "Multiple AI tools in use without a governance framework significantly increases your GDPR and EU AI Act exposure.";

  const govWarning =
    governance.includes("none") &&
    "Without these baseline controls, your business is likely in active breach of UK GDPR.";

  const riskInfo = getRiskLevel(riskScore);
  const gaugeRadius = 80;
  const gaugeCirc = 2 * Math.PI * gaugeRadius;
  const gaugeDash = gaugeCirc - (animatedScore / 100) * gaugeCirc;

  // ── Confirmation screen (step 6 after success) ──
  if (step === 6 && submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center py-16"
      >
        <CheckCircle2 className="w-12 h-12 text-red mx-auto mb-6" aria-hidden="true" />
        <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">
          Your report is on its way.
        </h2>
        <p className="text-light max-w-md mx-auto mb-8">
          We've received your risk profile and will send your personalised free report within one
          working day. One of our team can walk you through your findings live — it takes 20 minutes
          and costs nothing.
        </p>
        <a
          href="/contact"
          className="inline-block bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-red-dark transition-colors"
        >
          Book Your Free Discovery Call
        </a>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      {step <= 5 && (
        <div className="mb-8">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-2">
            <span>Step {step} of 5</span>
            <span>{Math.round(((step - 1) / 4) * 100)}% complete</span>
          </div>
          <div className="h-1 bg-divider w-full">
            <motion.div
              className="h-full bg-red"
              initial={{ width: 0 }}
              animate={{ width: `${((step - 1) / 4) * 100}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* ── Step 1: Sector ── */}
        {step === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="enter"
            animate="centre"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-bebas text-3xl tracking-wide text-white mb-1">
              What sector does your business operate in?
            </h2>
            <TileGrid
              options={sectorOptions}
              selected={sector}
              onSelect={(id) => {
                if (id === sector[0]) setSector([]);
                else setSector([id]);
              }}
            />
            {sector.includes("other") && (
              <input
                className="mt-3 w-full bg-card border border-divider px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none"
                placeholder="Please specify your sector"
                value={otherSector}
                onChange={(e) => setOtherSector(e.target.value)}
              />
            )}
          </motion.div>
        )}

        {/* ── Step 2: Tools ── */}
        {step === 2 && (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="enter"
            animate="centre"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-bebas text-3xl tracking-wide text-white mb-1">
              Which AI tools does your business currently use?
            </h2>
            <p className="text-sm text-muted">Select all that apply.</p>
            <TileGrid
              options={toolOptions}
              selected={tools}
              onSelect={(id) => toggleTile(id, tools, setTools, "none")}
              multiSelect
            />
            {toolWarning && (
              <div className="mt-4 flex items-start gap-3 border-l-4 border-red bg-[rgba(204,0,0,0.08)] p-4">
                <AlertTriangle className="w-4 h-4 text-red shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-light">{toolWarning}</p>
              </div>
            )}
          </motion.div>
        )}

        {/* ── Step 3: Governance ── */}
        {step === 3 && (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="enter"
            animate="centre"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-bebas text-3xl tracking-wide text-white mb-1">
              Does your business have any of the following in place?
            </h2>
            <p className="text-sm text-muted">Select all that currently exist.</p>
            <TileGrid
              options={governanceOptions}
              selected={governance}
              onSelect={(id) => toggleTile(id, governance, setGovernance, "none")}
              multiSelect
            />
            {govWarning && (
              <div className="mt-4 flex items-start gap-3 border-l-4 border-red bg-[rgba(204,0,0,0.08)] p-4">
                <AlertTriangle className="w-4 h-4 text-red shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-light">{govWarning}</p>
              </div>
            )}
          </motion.div>
        )}

        {/* ── Step 4: Data types ── */}
        {step === 4 && (
          <motion.div
            key="step4"
            variants={stepVariants}
            initial="enter"
            animate="centre"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-bebas text-3xl tracking-wide text-white mb-1">
              What types of data do your AI tools process?
            </h2>
            <p className="text-sm text-muted">Select all that apply.</p>
            <TileGrid
              options={dataOptions}
              selected={dataTypes}
              onSelect={(id) => toggleTile(id, dataTypes, setDataTypes, "none")}
              multiSelect
            />
          </motion.div>
        )}

        {/* ── Step 5: Risk reveal ── */}
        {step === 5 && (
          <motion.div
            key="step5"
            variants={stepVariants}
            initial="enter"
            animate="centre"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-bebas text-3xl tracking-wide text-white mb-8 text-center">
              Your Risk Summary
            </h2>

            {/* Gauge */}
            <div className="flex flex-col items-center mb-10">
              <div className={riskInfo.critical ? "animate-pulse-red rounded-full" : ""}>
                <svg
                  viewBox="0 0 192 192"
                  className="w-48 h-48"
                  aria-label={`Risk score: ${animatedScore} — ${riskInfo.label}`}
                >
                  <circle
                    cx="96" cy="96" r={gaugeRadius}
                    fill="none"
                    stroke="#2a2a2a"
                    strokeWidth="14"
                    strokeDasharray={gaugeCirc}
                    strokeDashoffset={gaugeCirc * 0.25}
                    transform="rotate(-90 96 96)"
                  />
                  <circle
                    cx="96" cy="96" r={gaugeRadius}
                    fill="none"
                    stroke={riskInfo.colour}
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={gaugeCirc}
                    strokeDashoffset={gaugeDash}
                    transform="rotate(-90 96 96)"
                  />
                  <text
                    x="96" y="88"
                    textAnchor="middle"
                    className="font-mono text-3xl font-bold"
                    fill="white"
                    fontSize="28"
                    fontFamily="monospace"
                  >
                    {animatedScore}
                  </text>
                  <text
                    x="96" y="108"
                    textAnchor="middle"
                    fill="#999"
                    fontSize="10"
                    fontFamily="sans-serif"
                    fontWeight="700"
                    letterSpacing="2"
                  >
                    /100
                  </text>
                </svg>
              </div>
              <p
                className="mt-2 text-sm font-bold uppercase tracking-[0.1em]"
                style={{ color: riskInfo.colour }}
              >
                {riskInfo.label}
              </p>
            </div>

            {/* Findings */}
            {findings.length > 0 && (
              <div className="flex flex-col gap-4 mb-8">
                {findings.map((finding, i) => (
                  <div key={i} className="card-accent bg-card p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-red mb-2">
                      Finding {i + 1}
                    </p>
                    <p className="text-sm text-light leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="border border-divider bg-card p-5 mb-8">
              <p className="text-sm text-light leading-relaxed">
                This is your surface-level risk profile. Your full free report maps these findings
                against the specific GDPR articles, OWASP LLM vulnerabilities, and EU AI Act
                obligations that apply to your business — with immediate actions you can take this
                week.
              </p>
            </div>

            {/* Email capture */}
            <h3 className="font-bebas text-2xl tracking-wide text-white mb-6">
              Where should we send your free report?
            </h3>
            <form onSubmit={handleSubmit(onEmailSubmit)} noValidate className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="qnf-firstName" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted block mb-1">
                    First Name <span className="text-red">*</span>
                  </label>
                  <input
                    id="qnf-firstName"
                    className={`w-full bg-card border px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors ${
                      errors.firstName ? "border-red" : "border-divider"
                    }`}
                    placeholder="First name"
                    {...register("firstName", { required: "Required" })}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="qnf-email" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted block mb-1">
                    Business Email <span className="text-red">*</span>
                  </label>
                  <input
                    id="qnf-email"
                    type="email"
                    className={`w-full bg-card border px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors ${
                      errors.email ? "border-red" : "border-divider"
                    }`}
                    placeholder="you@yourcompany.com"
                    {...register("email", {
                      required: "Required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                    })}
                  />
                  {errors.email && (
                    <p className="text-xs text-red mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="qnf-business" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted block mb-1">
                  Business Name <span className="text-red">*</span>
                </label>
                <input
                  id="qnf-business"
                  className={`w-full bg-card border px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors ${
                    errors.businessName ? "border-red" : "border-divider"
                  }`}
                  {...register("businessName", { required: "Required" })}
                />
                {errors.businessName && (
                  <p className="text-xs text-red mt-1">{errors.businessName.message}</p>
                )}
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 accent-red"
                  {...register("consent", { required: "You must agree to continue" })}
                />
                <span className="text-xs text-muted leading-relaxed">
                  I agree to receive my free report and occasional AI security insights from QuaZarR
                  Security. You can unsubscribe at any time.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-red">{errors.consent.message}</p>
              )}

              {submitStatus === "error" && (
                <p className="text-xs text-red">
                  Something went wrong. Please email hello@quazarrsecurity.com directly.
                </p>
              )}

              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full bg-red text-white text-xs font-bold uppercase tracking-[0.12em] py-4 hover:bg-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === "loading" ? "Sending..." : "Send Me My Free Report"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      {step < 5 && (
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            disabled={!canContinue()}
            onClick={() => setStep((s) => s + 1)}
            className="flex items-center gap-2 bg-red text-white text-xs font-bold uppercase tracking-[0.1em] px-6 py-3 hover:bg-red-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}
      {step === 5 && (
        <div className="mt-4 text-center">
          {/* email form handles its own submit */}
        </div>
      )}
    </div>
  );
}
