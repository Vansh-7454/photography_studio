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
    serviceInterest: "The Shahi Heirloom Collection (Photography & Cinema)",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const normalizePhone = (raw: string): string => {
    // Strip spaces, dashes, brackets, leading +91 or 0
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

    // 1. Name: 2 to 60 characters trimmed
    const trimmedName = values.name.trim();
    if (!trimmedName) {
      nextErrors.name = "Please enter your full name.";
    } else if (trimmedName.length < 2 || trimmedName.length > 60) {
      nextErrors.name = "Name must be between 2 and 60 characters.";
    }

    // 2. Phone: mandatory, exactly 10 digits, starts with 6,7,8,9, no junk
    const normalized = normalizePhone(values.phone);
    const junkPatterns = ["0000000000", "1234567890", "9876543210", "1111111111", "9999999999"];
    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is mandatory.";
    } else if (!/^\d{10}$/.test(normalized)) {
      nextErrors.phone = "Phone number must be exactly 10 digits (digits only).";
    } else if (!/^[6-9]/.test(normalized)) {
      nextErrors.phone = "Indian mobile numbers must begin with 6, 7, 8, or 9.";
    } else if (junkPatterns.includes(normalized)) {
      nextErrors.phone = "Please enter a valid personal mobile number.";
    }

    // 3. Email: format check
    const trimmedEmail = values.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      nextErrors.email = "Please provide your email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email format (e.g. name@domain.com).";
    }

    // 4. Wedding Date
    if (!values.weddingDate.trim()) {
      nextErrors.weddingDate = "Please share your prospective wedding date or month.";
    }

    // 5. Location
    if (!values.location.trim()) {
      nextErrors.location = "Please enter the city or venue (e.g. Meerut, Udaipur, Delhi).";
    }

    // 6. Message: up to 1000 characters
    if (values.message.length > 1000) {
      nextErrors.message = "Message must not exceed 1000 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Per Rule 24: Since nothing is stored or sent to backend, state so clearly!
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
      <div className="p-8 sm:p-10 rounded-card bg-ivory-surface border border-peacock-teal/30 shadow-card text-center flex flex-col items-center">
        <CheckCircle2 className="w-14 h-14 text-peacock-teal mb-4" />
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-royal-indigo mb-2">
          Enquiry Details Validated
        </h3>
        <p className="text-text-muted text-sm sm:text-base max-w-lg mb-6 leading-relaxed">
          Thank you, <strong className="text-royal-indigo">{values.name.trim()}</strong>. Your details have been verified according to studio booking standards.
        </p>
        <div className="p-4 rounded-lg bg-warm-ivory border border-border-subtle text-xs text-text-muted text-left w-full max-w-md mb-6 leading-relaxed">
          <p className="font-semibold text-royal-indigo mb-1">Demonstration Notice:</p>
          As this is a pure static production build, no personal data has been transmitted or saved to an external database. To connect immediately with our booking team in Meerut, please tap below:
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <Button
            href={`https://wa.me/919897012345?text=Namaste%20Rangrez,%20I%20am%20${encodeURIComponent(
              values.name.trim()
            )}.%20Inquiring%20for%20wedding%20on%20${encodeURIComponent(
              values.weddingDate
            )}%20at%20${encodeURIComponent(values.location)}.`}
            variant="marigold"
            className="flex-1"
            external
          >
            Send via WhatsApp
          </Button>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="flex-1"
          >
            Edit Form
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-8 sm:p-10 rounded-card bg-ivory-surface border border-border-subtle shadow-card"
    >
      <div className="mb-6 pb-6 border-b border-border-subtle">
        <h3 className="font-serif text-2xl font-bold text-royal-indigo mb-1">
          Check Studio Availability
        </h3>
        <p className="text-xs sm:text-sm text-text-muted">
          Kindly complete each field. We verify our production schedule before confirming client consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-royal-indigo mb-1.5">
            Full Name <span className="text-sindoor-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="e.g. Radhika Sharma"
            className={`w-full h-12 px-4 rounded-input text-sm bg-warm-ivory border ${
              errors.name ? "border-sindoor-red ring-1 ring-sindoor-red" : "border-border-subtle"
            } focus:border-royal-indigo text-royal-indigo placeholder:text-text-muted/60 transition-colors`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-sindoor-red mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-royal-indigo mb-1.5">
            10-Digit Mobile Number <span className="text-sindoor-red">*</span>
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
            className={`w-full h-12 px-4 rounded-input text-sm bg-warm-ivory border ${
              errors.phone ? "border-sindoor-red ring-1 ring-sindoor-red" : "border-border-subtle"
            } focus:border-royal-indigo text-royal-indigo placeholder:text-text-muted/60 transition-colors`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-sindoor-red mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-royal-indigo mb-1.5">
            Email Address <span className="text-sindoor-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="e.g. radhika@gmail.com"
            className={`w-full h-12 px-4 rounded-input text-sm bg-warm-ivory border ${
              errors.email ? "border-sindoor-red ring-1 ring-sindoor-red" : "border-border-subtle"
            } focus:border-royal-indigo text-royal-indigo placeholder:text-text-muted/60 transition-colors`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-sindoor-red mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Wedding Date */}
        <div>
          <label htmlFor="weddingDate" className="block text-xs font-bold uppercase tracking-wider text-royal-indigo mb-1.5">
            Wedding Date / Month <span className="text-sindoor-red">*</span>
          </label>
          <input
            type="text"
            id="weddingDate"
            name="weddingDate"
            value={values.weddingDate}
            onChange={handleChange}
            placeholder="e.g. 18 December 2026"
            className={`w-full h-12 px-4 rounded-input text-sm bg-warm-ivory border ${
              errors.weddingDate ? "border-sindoor-red ring-1 ring-sindoor-red" : "border-border-subtle"
            } focus:border-royal-indigo text-royal-indigo placeholder:text-text-muted/60 transition-colors`}
            aria-invalid={!!errors.weddingDate}
            aria-describedby={errors.weddingDate ? "weddingDate-error" : undefined}
          />
          {errors.weddingDate && (
            <p id="weddingDate-error" className="text-xs text-sindoor-red mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.weddingDate}</span>
            </p>
          )}
        </div>

        {/* Wedding Location / Venue */}
        <div className="sm:col-span-2">
          <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-royal-indigo mb-1.5">
            Wedding City &amp; Venue <span className="text-sindoor-red">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder="e.g. Meerut Farmhouse / Jagmandir Palace Udaipur"
            className={`w-full h-12 px-4 rounded-input text-sm bg-warm-ivory border ${
              errors.location ? "border-sindoor-red ring-1 ring-sindoor-red" : "border-border-subtle"
            } focus:border-royal-indigo text-royal-indigo placeholder:text-text-muted/60 transition-colors`}
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? "location-error" : undefined}
          />
          {errors.location && (
            <p id="location-error" className="text-xs text-sindoor-red mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.location}</span>
            </p>
          )}
        </div>

        {/* Service Package Interest */}
        <div className="sm:col-span-2">
          <label htmlFor="serviceInterest" className="block text-xs font-bold uppercase tracking-wider text-royal-indigo mb-1.5">
            Coverage Collection of Interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={values.serviceInterest}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-input text-sm bg-warm-ivory border border-border-subtle focus:border-royal-indigo text-royal-indigo transition-colors"
          >
            <option value="The Shahi Heirloom Collection (Photography & Cinema)">
              The Shahi Heirloom Collection (3-4 Days Royal Coverage & Cinema)
            </option>
            <option value="The Parampara Classic (2-Day Essential Coverage)">
              The Parampara Classic (2-Day Traditional Coverage)
            </option>
            <option value="The Utsav Intimate Collection (Single-Day Pheras)">
              The Utsav Intimate Collection (Single-Day Sacred Nuptials)
            </option>
            <option value="Custom Destination Proposal">
              Custom Destination Proposal
            </option>
          </select>
        </div>

        {/* Message / Ritual Details */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-royal-indigo mb-1.5">
            Tell Us About Your Celebrations (Optional, up to 1000 chars)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us about the ceremonies (Haldi, Sangeet, Pheras), the vibe you envision, and what matters most to your families..."
            className="w-full p-4 rounded-input text-sm bg-warm-ivory border border-border-subtle focus:border-royal-indigo text-royal-indigo placeholder:text-text-muted/60 transition-colors"
          />
          {errors.message && (
            <p className="text-xs text-sindoor-red mt-1">{errors.message}</p>
          )}
          <span className="text-[11px] text-text-muted block text-right mt-1">
            {values.message.length} / 1000 characters
          </span>
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Verify &amp; Submit Availability Request
      </Button>

      <p className="text-[11px] text-text-muted text-center mt-3 leading-normal">
        Privacy Note: We respect your privacy. No data is stored or shared without prior written consent.
      </p>
    </form>
  );
}

