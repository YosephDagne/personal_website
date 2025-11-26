"use client";

import { useState } from "react";
import { toast } from "react-toastify";

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
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

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
        toast.success(result.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send. Try again.");
      }
    } catch {
      toast.error("Network error. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-16 py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-orange-500">
          Get in Touch
        </h1>
        <div className="h-1 w-24 bg-linear-to-r from-purple-500 to-orange-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
        {/* Left Side Info */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2  lg:p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-orange-500">
            Let&apos;s Talk
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m currently available for new freelance or full-time
            projects. Send a message and let&apos;s build something awesome
            together!
          </p>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6 mt-4">
            <ContactCard
              Icon={Mail}
              label="Email"
              value="josefdagne5@gmail.com"
            />
            <ContactCard Icon={Phone} label="Phone" value="+251 925 857 810" />
            <ContactCard
              Icon={MapPin}
              label="Location"
              value="Addis Ababa, Ethiopia"
            />
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
              Find me online
            </h3>

            <div className="flex flex-wrap gap-4">
              <SocialLink
                href="https://x.com/JosefDagne2127"
                Icon={Twitter}
                label="Twitter"
              />
              <SocialLink
                href="https://www.instagram.com/josdagn/"
                Icon={Instagram}
                label="Instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/in/yosef-dagne-469396347/"
                Icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/YosephDagne"
                Icon={Github}
                label="GitHub"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="w-full lg:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
        >
          <div className="space-y-6">
            <InputField
              label="Your Name"
              name="name"
              type="text"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />

            <InputField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />

            <div>
              <label className="block text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-40 px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 text-lg font-medium rounded-lg bg-linear-to-r from-purple-600 to-orange-500 text-white shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-orange-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                            Reusable Child Components                       */
/* -------------------------------------------------------------------------- */

const ContactCard = ({ Icon, label, value }: ContactCardProps) => (
  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50">
      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
        {value}
      </p>
    </div>
  </div>
);

const SocialLink = ({ href, Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 hover:shadow-md rounded-lg transition"
  >
    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-300" />
    <span className="text-sm text-gray-800 dark:text-gray-200">{label}</span>
  </a>
);

const InputField = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
}: InputFieldProps) => (
  <div>
    <label className="block text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
      {label}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>
);

export default Contact;
