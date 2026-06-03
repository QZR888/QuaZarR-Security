"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface QuoteFormData {
  firstName: string;
  lastName: string;
  businessName: string;
  jobTitle: string;
  email: string;
  phone?: string;
  sector: string;
  otherSector?: string;
  companySize: string;
  aiToolCount: string;
  tier: string;
  complianceConcern?: string;
  referralSource: string;
}

const sectors = [
  "Recruitment",
  "Legal & Professional Services",
  "Finance & Accounting",
  "HR & People Operations",
  "Accountancy & Tax",
  "Other",
];

interface QuoteFormProps {
  defaultTier?: string;
}

export function QuoteForm({ defaultTier }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    defaultValues: { tier: defaultTier ?? "" },
  });

  const watchSector = watch("sector");

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          form_type: "Quote Request",
          first_name: data.firstName,
          last_name: data.lastName,
          business_name: data.businessName,
          job_title: data.jobTitle,
          email: data.email,
          phone: data.phone ?? "",
          sector: data.sector === "Other" ? data.otherSector : data.sector,
          company_size: data.companySize,
          ai_tool_count: data.aiToolCount,
          tier: data.tier,
          compliance_concern: data.complianceConcern ?? "",
          referral_source: data.referralSource,
          to_email: "hello@quazarrsecurity.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-red bg-[rgba(204,0,0,0.08)] p-6">
        <p className="font-bold text-white mb-1">Quote request received.</p>
        <p className="text-sm text-light">
          Thank you. We'll be in touch within one working day with a scoped recommendation.
        </p>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `bg-card border px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors w-full ${
      hasError ? "border-red" : "border-divider"
    }`;

  const labelClass =
    "text-[10px] font-bold uppercase tracking-[0.1em] text-muted block mb-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-firstName" className={labelClass}>
            First Name <span className="text-red">*</span>
          </label>
          <input
            id="qf-firstName"
            className={inputClass(!!errors.firstName)}
            placeholder="First name"
            {...register("firstName", { required: "Required" })}
          />
          {errors.firstName && <p className="text-xs text-red mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="qf-lastName" className={labelClass}>
            Last Name <span className="text-red">*</span>
          </label>
          <input
            id="qf-lastName"
            className={inputClass(!!errors.lastName)}
            placeholder="Last name"
            {...register("lastName", { required: "Required" })}
          />
          {errors.lastName && <p className="text-xs text-red mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      {/* Business + Title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-business" className={labelClass}>
            Business Name <span className="text-red">*</span>
          </label>
          <input
            id="qf-business"
            className={inputClass(!!errors.businessName)}
            {...register("businessName", { required: "Required" })}
          />
          {errors.businessName && (
            <p className="text-xs text-red mt-1">{errors.businessName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="qf-jobTitle" className={labelClass}>
            Job Title <span className="text-red">*</span>
          </label>
          <input
            id="qf-jobTitle"
            className={inputClass(!!errors.jobTitle)}
            {...register("jobTitle", { required: "Required" })}
          />
          {errors.jobTitle && <p className="text-xs text-red mt-1">{errors.jobTitle.message}</p>}
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-email" className={labelClass}>
            Email Address <span className="text-red">*</span>
          </label>
          <input
            id="qf-email"
            type="email"
            className={inputClass(!!errors.email)}
            {...register("email", {
              required: "Required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
            })}
          />
          {errors.email && <p className="text-xs text-red mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="qf-phone" className={labelClass}>
            Phone <span className="text-subtle">(optional)</span>
          </label>
          <input
            id="qf-phone"
            type="tel"
            className={inputClass(false)}
            {...register("phone")}
          />
        </div>
      </div>

      {/* Sector */}
      <div>
        <label htmlFor="qf-sector" className={labelClass}>
          Sector <span className="text-red">*</span>
        </label>
        <select
          id="qf-sector"
          className={`${inputClass(!!errors.sector)} appearance-none`}
          {...register("sector", { required: "Required" })}
        >
          <option value="">Select sector</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.sector && <p className="text-xs text-red mt-1">{errors.sector.message}</p>}
      </div>
      {watchSector === "Other" && (
        <div>
          <label htmlFor="qf-otherSector" className={labelClass}>
            Please specify
          </label>
          <input
            id="qf-otherSector"
            className={inputClass(false)}
            {...register("otherSector")}
          />
        </div>
      )}

      {/* Company size + AI tool count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-companySize" className={labelClass}>
            Company Size <span className="text-red">*</span>
          </label>
          <select
            id="qf-companySize"
            className={`${inputClass(!!errors.companySize)} appearance-none`}
            {...register("companySize", { required: "Required" })}
          >
            <option value="">Select</option>
            {["1–10", "11–50", "51–200", "200+"].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.companySize && (
            <p className="text-xs text-red mt-1">{errors.companySize.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="qf-aiToolCount" className={labelClass}>
            AI Tools Currently Used <span className="text-red">*</span>
          </label>
          <select
            id="qf-aiToolCount"
            className={`${inputClass(!!errors.aiToolCount)} appearance-none`}
            {...register("aiToolCount", { required: "Required" })}
          >
            <option value="">Select</option>
            {["None", "1–5", "6–15", "15+", "Not Sure"].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.aiToolCount && (
            <p className="text-xs text-red mt-1">{errors.aiToolCount.message}</p>
          )}
        </div>
      </div>

      {/* Tier */}
      <fieldset>
        <legend className={`${labelClass} mb-2`}>
          Which tier are you interested in? <span className="text-red">*</span>
        </legend>
        <div className="flex flex-col gap-2">
          {[
            "Basic AI Risk Assessment",
            "Full AI Security Review",
            "Not Sure — Help Me Decide",
          ].map((t) => (
            <label key={t} className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                value={t}
                className="mt-0.5 accent-red"
                {...register("tier", { required: true })}
              />
              <span className="text-sm text-light">{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Compliance concern */}
      <div>
        <label htmlFor="qf-concern" className={labelClass}>
          Specific compliance concern <span className="text-subtle">(optional)</span>
        </label>
        <textarea
          id="qf-concern"
          rows={3}
          className="bg-card border border-divider px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors resize-none w-full"
          placeholder="Is there a specific compliance concern driving this?"
          {...register("complianceConcern")}
        />
      </div>

      {/* Referral source */}
      <div>
        <label htmlFor="qf-referral" className={labelClass}>
          How did you hear about us? <span className="text-red">*</span>
        </label>
        <select
          id="qf-referral"
          className={`${inputClass(!!errors.referralSource)} appearance-none`}
          {...register("referralSource", { required: "Required" })}
        >
          <option value="">Select</option>
          {["LinkedIn", "Google", "Referral", "Other"].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.referralSource && (
          <p className="text-xs text-red mt-1">{errors.referralSource.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-xs text-red">
          Something went wrong. Please email us directly at hello@quazarrsecurity.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-red text-white text-xs font-bold uppercase tracking-[0.12em] py-4 hover:bg-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Submit Quote Request"}
      </button>

      <p className="text-xs text-subtle text-center">
        We respond to all enquiries within one working day. Your information is handled in
        accordance with UK GDPR.
      </p>
    </form>
  );
}
