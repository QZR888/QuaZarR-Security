"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone?: string;
  sector: string;
  preferredContact: string;
  message?: string;
}

const sectors = [
  "Recruitment",
  "Legal & Professional Services",
  "Finance & Accounting",
  "HR & People Operations",
  "Accountancy & Tax",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: { preferredContact: "Email" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      await emailjs.send(
        "service_sde7xo9",
        "template_wfe73ab",
        {
          form_type: "Contact",
          first_name: data.firstName,
          last_name: data.lastName,
          business_name: data.businessName,
          email: data.email,
          phone: data.phone ?? "",
          sector: data.sector,
          preferred_contact: data.preferredContact,
          message: data.message ?? "",
          to_email: "hello@quazarrsecurity.com",
        },
        "t5yp6bticOrlGpkLr"
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
        <p className="font-bold text-white mb-1">Message received.</p>
        <p className="text-sm text-light">
          We'll respond within one working day. If you'd like to speak sooner, email us directly at{" "}
          <a
            href="mailto:hello@quazarrsecurity.com"
            className="text-red underline underline-offset-2"
          >
            hello@quazarrsecurity.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="cf-firstName" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
            First Name <span className="text-red">*</span>
          </label>
          <input
            id="cf-firstName"
            className={`bg-card border px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors ${
              errors.firstName ? "border-red" : "border-divider"
            }`}
            placeholder="First name"
            {...register("firstName", { required: "Required" })}
          />
          {errors.firstName && (
            <p className="text-xs text-red">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cf-lastName" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
            Last Name <span className="text-red">*</span>
          </label>
          <input
            id="cf-lastName"
            className={`bg-card border px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors ${
              errors.lastName ? "border-red" : "border-divider"
            }`}
            placeholder="Last name"
            {...register("lastName", { required: "Required" })}
          />
          {errors.lastName && (
            <p className="text-xs text-red">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Business */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-businessName" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
          Business Name <span className="text-red">*</span>
        </label>
        <input
          id="cf-businessName"
          className={`bg-card border px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors ${
            errors.businessName ? "border-red" : "border-divider"
          }`}
          placeholder="Your business name"
          {...register("businessName", { required: "Required" })}
        />
        {errors.businessName && (
          <p className="text-xs text-red">{errors.businessName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-email" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
          Business Email <span className="text-red">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          className={`bg-card border px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors ${
            errors.email ? "border-red" : "border-divider"
          }`}
          placeholder="you@yourcompany.com"
          {...register("email", {
            required: "Required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
          })}
        />
        {errors.email && <p className="text-xs text-red">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-phone" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
          Phone <span className="text-subtle">(optional)</span>
        </label>
        <input
          id="cf-phone"
          type="tel"
          className="bg-card border border-divider px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors"
          placeholder="+44 7700 000000"
          {...register("phone")}
        />
      </div>

      {/* Sector */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-sector" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
          Sector <span className="text-red">*</span>
        </label>
        <select
          id="cf-sector"
          className={`bg-card border px-4 py-3 text-sm text-white focus:border-red focus:outline-none transition-colors appearance-none ${
            errors.sector ? "border-red" : "border-divider"
          }`}
          {...register("sector", { required: "Required" })}
        >
          <option value="">Select sector</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.sector && <p className="text-xs text-red">{errors.sector.message}</p>}
      </div>

      {/* Preferred contact */}
      <fieldset className="flex flex-col gap-2">
        <legend className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-1">
          Preferred Contact Method <span className="text-red">*</span>
        </legend>
        <div className="flex flex-wrap gap-4">
          {["Email", "Phone", "Video call"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value={method}
                className="accent-red"
                {...register("preferredContact", { required: true })}
              />
              <span className="text-sm text-light">{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-message" className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
          Message <span className="text-subtle">(optional)</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          className="bg-card border border-divider px-4 py-3 text-sm text-white placeholder-subtle focus:border-red focus:outline-none transition-colors resize-none"
          placeholder="Tell us briefly what's prompted you to get in touch..."
          {...register("message")}
        />
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
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-subtle text-center">
        We respond to all enquiries within one working day. Your information is handled in
        accordance with UK GDPR.
      </p>
    </form>
  );
}
