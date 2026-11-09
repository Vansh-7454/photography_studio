"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  weddingDate: string;
  location: string;
  serviceInterest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  weddingDate?: string;
  location?: string;
  message?: string;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    location: "",
    serviceInterest: "The Shahi Collection (Full Multi-Day Coverage & Cinema)",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const normalizePhone = (raw: string): string => {
    let clean = raw.replace(/[\s\-\(\)\+]/g, "");
    if (clean.startsWith("91") && clean.length > 10) {
      clean = clean.substring(2);
    }
    if (clean.startsWith("0") && clean.length > 10) {
      clean = clean.substring(1);
    }
    return clean;
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    const trimmedName = values.name.trim();
    if (!trimmedName) {
      nextErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2 || trimmedName.length > 60) {
      nextErrors.name = "Name must be between 2 and 60 characters.";
    }

    const normalized = normalizePhone(values.phone);
    const junkPatterns = ["0000000000", "1234567890", "9876543210", "1111111111", "9999999999"];
    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is mandatory.";
    } else if (!/^\d{10}$/.test(normalized)) {
      nextErrors.phone = "Phone number must be exactly 10 digits.";
    } else if (!/^[6-9]/.test(normalized)) {
      nextErrors.phone = "Indian mobile numbers must begin with 6, 7, 8, or 9.";
    } else if (junkPatterns.includes(normalized)) {
      nextErrors.phone = "Please enter a valid personal mobile number.";
    }

    const trimmedEmail = values.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      nextErrors.email = "Please provide your email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email format.";
    }

    if (!values.weddingDate.trim()) {
      nextErrors.weddingDate = "Please share your wedding date or month.";
    }

    if (!values.location.trim()) {
      nextErrors.location = "Please enter the city or venue.";
    }

    if (values.message.length > 1000) {
      nextErrors.message = "Message must not exceed 1000 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-card bg-white border border-soft-sage/40 shadow-card text-center flex flex-col items-center">
        <CheckCircle2 className="w-12 h-12 text-soft-sage mb-3" />
        <h3 className="font-serif text-2xl font-bold text-deep-aubergine mb-1">
          Enquiry Validated
        </h3>
        <p className="text-text-muted text-sm max-w-md mb-6 leading-relaxed">
          Thank you, <strong className="text-deep-aubergine">{values.name.trim()}</strong>. Your wedding dates and venue details are saved.
        </p>
        <div className="p-4 rounded-card bg-warm-ivory border border-border-subtle text-xs text-text-muted text-left w-full max-w-md mb-6 leading-relaxed">
          <p className="font-semibold text-deep-aubergine mb-0.5">Direct Connect:</p>
          Connect directly with our Meerut lead photographer via WhatsApp:
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <Button
            href={`https://wa.me/919897012345?text=Hi%20Rangrez,%20I'm%20${encodeURIComponent(
              values.name.trim()
            )}.%20Inquiring%20for%20wedding%20dates%20on%20${encodeURIComponent(
              values.weddingDate
            )}%20at%20${encodeURIComponent(values.location)}.`}
            variant="marigold"
            className="flex-1"
            external
          >
            Open in WhatsApp
          </Button>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="flex-1"
          >
            Edit Details
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-card bg-white border border-border-subtle shadow-card"
    >
      <div className="mb-5 pb-5 border-b border-border-subtle">
        <h3 className="font-serif text-2xl font-semibold text-deep-aubergine mb-1">
          Check Date Availability
        </h3>
        <p className="text-xs text-text-muted">
          Fill in your details below. We verify our schedule and respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-deep-aubergine mb-1">
            Your Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="e.g. Radhika Sharma"
            className={`w-full h-11 px-3.5 rounded-input text-xs sm:text-sm bg-warm-ivory border ${
              errors.name ? "border-terracotta ring-1 ring-terracotta" : "border-border-subtle"
            } focus:border-deep-aubergine text-deep-aubergine transition-colors`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-[11px] text-terracotta mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-deep-aubergine mb-1">
            10-Digit Mobile Number <span className="text-terracotta">*</span>
          </label>
          <input
            type="tel"
            inputMode="numeric"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="e.g. 9897012345"
            className={`w-full h-11 px-3.5 rounded-input text-xs sm:text-sm bg-warm-ivory border ${
              errors.phone ? "border-terracotta ring-1 ring-terracotta" : "border-border-subtle"
            } focus:border-deep-aubergine text-deep-aubergine transition-colors`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-[11px] text-terracotta mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-deep-aubergine mb-1">
            Email Address <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="e.g. radhika@gmail.com"
            className={`w-full h-11 px-3.5 rounded-input text-xs sm:text-sm bg-warm-ivory border ${
              errors.email ? "border-terracotta ring-1 ring-terracotta" : "border-border-subtle"
            } focus:border-deep-aubergine text-deep-aubergine transition-colors`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-[11px] text-terracotta mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Wedding Date */}
        <div>
          <label htmlFor="weddingDate" className="block text-[11px] font-bold uppercase tracking-wider text-deep-aubergine mb-1">
            Wedding Date / Month <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="weddingDate"
            name="weddingDate"
            value={values.weddingDate}
            onChange={handleChange}
            placeholder="e.g. 18 Dec 2026"
            className={`w-full h-11 px-3.5 rounded-input text-xs sm:text-sm bg-warm-ivory border ${
              errors.weddingDate ? "border-terracotta ring-1 ring-terracotta" : "border-border-subtle"
            } focus:border-deep-aubergine text-deep-aubergine transition-colors`}
            aria-invalid={!!errors.weddingDate}
            aria-describedby={errors.weddingDate ? "weddingDate-error" : undefined}
          />
          {errors.weddingDate && (
            <p id="weddingDate-error" className="text-[11px] text-terracotta mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.weddingDate}</span>
            </p>
          )}
        </div>

        {/* Wedding City & Venue */}
        <div className="sm:col-span-2">
          <label htmlFor="location" className="block text-[11px] font-bold uppercase tracking-wider text-deep-aubergine mb-1">
            Wedding City &amp; Venue <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder="e.g. Meerut Farmhouse / Udaipur Palace / Delhi NCR"
            className={`w-full h-11 px-3.5 rounded-input text-xs sm:text-sm bg-warm-ivory border ${
              errors.location ? "border-terracotta ring-1 ring-terracotta" : "border-border-subtle"
            } focus:border-deep-aubergine text-deep-aubergine transition-colors`}
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? "location-error" : undefined}
          />
          {errors.location && (
            <p id="location-error" className="text-[11px] text-terracotta mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.location}</span>
            </p>
          )}
        </div>

        {/* Service Package */}
        <div className="sm:col-span-2">
          <label htmlFor="serviceInterest" className="block text-[11px] font-bold uppercase tracking-wider text-deep-aubergine mb-1">
            Coverage Framework
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={values.serviceInterest}
            onChange={handleChange}
            className="w-full h-11 px-3.5 rounded-input text-xs sm:text-sm bg-warm-ivory border border-border-subtle focus:border-deep-aubergine text-deep-aubergine transition-colors"
          >
            <option value="The Shahi Collection (Full Multi-Day Coverage & Cinema)">
              The Shahi Collection (3–4 Days Multi-Day &amp; Cinema)
            </option>
            <option value="The Parampara Collection (2-Day Traditional Coverage)">
              The Parampara Collection (2-Day Core Coverage)
            </option>
            <option value="The Utsav Collection (Single-Day Sacred Nuptials)">
              The Utsav Collection (Single-Day Ceremony &amp; Pheras)
            </option>
            <option value="Custom Destination Proposal">
              Custom Destination Wedding Proposal
            </option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-deep-aubergine mb-1">
            Notes / Questions (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            maxLength={1000}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us about the ceremonies (Haldi, Mehendi, Sangeet, Pheras) or anything special you are planning..."
            className="w-full p-3 rounded-input text-xs sm:text-sm bg-warm-ivory border border-border-subtle focus:border-deep-aubergine text-deep-aubergine transition-colors"
          />
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Check Date Availability
      </Button>

      <p className="text-[10.5px] text-text-muted text-center mt-2.5">
        Privacy Note: We never share your phone number or wedding details.
      </p>
    </form>
  );
}
