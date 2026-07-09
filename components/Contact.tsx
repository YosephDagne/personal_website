"use client";

import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import {
  ContactCardProps,
  SocialLinkProps,
  InputFieldProps,
} from "@/types/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ----------------------------- Validation -------------------------------- */
  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};

    // Name — required, at least 2 chars, letters & spaces only
    const nameTrimmed = formData.name.trim();
    if (!nameTrimmed) {
      e.name = "Your name is required.";
    } else if (nameTrimmed.length < 2) {
      e.name = "Name must be at least 2 characters.";
    } else if (!/^[A-Za-z\s'-]+$/.test(nameTrimmed)) {
      e.name = "Name may only contain letters, spaces, hyphens, or apostrophes.";
    }

    // Email — required, valid format
    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      e.email = "Your email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailTrimmed)) {
      e.email = "Please enter a valid email address.";
    }

    // Phone — required, digits/spaces/+/-/() only, 7–15 digits
    const phoneTrimmed = formData.phone.trim();
    const digitsOnly = phoneTrimmed.replace(/\D/g, "");
    if (!phoneTrimmed) {
      e.phone = "Your phone number is required.";
    } else if (!/^[+\d\s\-().]+$/.test(phoneTrimmed)) {
      e.phone = "Phone number contains invalid characters.";
    } else if (digitsOnly.length < 7) {
      e.phone = "Phone number must have at least 7 digits.";
    } else if (digitsOnly.length > 15) {
      e.phone = "Phone number must have no more than 15 digits.";
    }

    // Subject — required, 3–100 chars
    const subjectTrimmed = formData.subject.trim();
    if (!subjectTrimmed) {
      e.subject = "Subject is required.";
    } else if (subjectTrimmed.length < 3) {
      e.subject = "Subject must be at least 3 characters.";
    } else if (subjectTrimmed.length > 100) {
      e.subject = "Subject must be under 100 characters.";
    }

    // Message — required, 10–2000 chars
    const messageTrimmed = formData.message.trim();
    if (!messageTrimmed) {
      e.message = "Your message is required.";
    } else if (messageTrimmed.length < 10) {
      e.message = "Message must be at least 10 characters.";
    } else if (messageTrimmed.length > 2000) {
      e.message = "Message must be under 2000 characters.";
    }

    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    const submissionData = {
      ...formData,
      access_key: "96e914f2-7fc3-4512-ab68-69a3b85508ee",
    };

    try {
      const result = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      }).then((res) => res.json());

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center gap-12 sm:gap-16 py-16 sm:py-24 bg-transparent text-gray-100"
    >
      {/* Title */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
  Get in Touch
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl relative z-10">
        {/* Left Side Info */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2 p-8 bg-white/2 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-400">
            Let&apos;s Talk
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            I&apos;m currently available for new freelance or full-time
            projects. Send a message and let&apos;s build something awesome
            together!
          </p>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4 mt-2">
            <ContactCard
              Icon={MapPin}
              label="Address"
              value="Addis Ababa, Ethiopia"
            />
            <ContactCard
              Icon={Mail}
              label="Email"
              value="josefdagne5@gmail.com"
              href="mailto:josefdagne5@gmail.com"
            />
            <ContactCard
              Icon={Linkedin}
              label="LinkedIn"
              value="Yosef Dagne"
              href="https://www.linkedin.com/in/yosef-dagne-469396347/"
            />
            <ContactCard
              Icon={Github}
              label="GitHub"
              value="YosephDagne"
              href="https://github.com/YosephDagne"
            />
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          noValidate
          className="w-full lg:w-1/2 bg-white/2 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10 flex flex-col justify-between gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              label="Your Name"
              name="name"
              type="text"
              value={formData.name}
              placeholder="Enter Your Name"
              error={errors.name}
              onChange={handleChange}
            />

            <InputField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter Your Email"
              error={errors.email}
              onChange={handleChange}
            />

            <div className="md:col-span-2">
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                placeholder="Enter Your Phone Number"
                error={errors.phone}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <InputField
                label="Subject"
                name="subject"
                type="text"
                value={formData.subject}
                placeholder="Enter Subject"
                error={errors.subject}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold tracking-wide mb-2 text-indigo-400">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full h-40 px-5 py-3 rounded-lg bg-white/2 border text-white placeholder-gray-600 focus:outline-none resize-none transition-all duration-300 ${
                  errors.message
                    ? "border-red-500/60 focus:border-red-500"
                    : "border-white/10 focus:border-indigo-500/50"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <span>⚠</span> {errors.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-600 text-right">
                {formData.message.length}/2000
              </p>
            </div>
          </div>

          {submitStatus === "success" && (
            <p className="text-sm text-green-400 text-center font-medium">
              ✅ Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-sm text-red-400 text-center font-medium">
              ❌ Failed to send. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 text-sm sm:text-base font-semibold rounded-lg bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                            Reusable Child Components                       */
/* -------------------------------------------------------------------------- */

const ContactCard = ({ Icon, label, value, href }: ContactCardProps & { href?: string }) => {
  const content = (
    <>
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <div>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-base font-semibold text-white mt-0.5">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 bg-white/2 border border-white/5 hover:border-indigo-500/20 hover:bg-white/4 rounded-xl shadow-sm transition-all duration-300 group cursor-pointer w-full"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white/2 border border-white/5 rounded-xl shadow-sm transition-all w-full">
      {content}
    </div>
  );
};

const SocialLink = ({ href, Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    className="flex items-center justify-center w-12 h-12 bg-white/2 border border-white/10 hover:border-indigo-500/30 hover:bg-white/8 rounded-full transition-all duration-300 group"
  >
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
  </a>
);

const InputField = ({
  label,
  name,
  type,
  value,
  placeholder,
  error,
  onChange,
}: InputFieldProps) => (
  <div>
    <label className="block text-sm font-bold tracking-wide mb-2 text-indigo-400">
      {label}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full px-5 py-4 rounded-lg bg-white/2 border text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${
        error
          ? "border-red-500/60 focus:border-red-500"
          : "border-white/10 focus:border-indigo-500/50"
      }`}
    />
    {error && (
      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
        <span>⚠</span> {error}
      </p>
    )}
  </div>
);

export default Contact;
