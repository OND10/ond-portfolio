import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const CONTACT_EMAIL = "osama.n.dammag@gmail.com";

// Configure via .env (see .env.example) — falls back to existing values so nothing breaks.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_7vazt3k";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_88397af";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "X2fnOumZlkDIo6OV7";

const Contact = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: isArabic
          ? "يرجى ملء جميع الحقول."
          : "Please fill in all fields.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({
        type: "error",
        message: isArabic
          ? "يرجى إدخال بريد إلكتروني صحيح."
          : "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ type: "sending", message: isArabic ? "جارٍ الإرسال..." : "Sending..." });

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Osama",
          from_email: form.email,
          to_email: CONTACT_EMAIL,
          reply_to: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          type: "success",
          message: isArabic
            ? "تم إرسال رسالتك بنجاح! سأرد عليك قريبًا."
            : "Your message was sent successfully! I'll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setStatus({
          type: "error",
          message: isArabic
            ? "تعذر إرسال الرسالة. يرجى المحاولة عبر البريد المباشر أدناه."
            : "Could not send the message. Please use the direct email link below.",
        });
      });
  };

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    isArabic ? "رسالة من ملف الأعمال" : "Portfolio Contact"
  )}&body=${encodeURIComponent(
    `${isArabic ? "الاسم" : "Name"}: ${form.name}\n${isArabic ? "البريد" : "Email"}: ${form.email}\n\n${form.message}`
  )}`;

  const statusStyles =
    status.type === "success"
      ? "bg-green-500/20 text-green-300 border-green-400/40"
      : status.type === "error"
        ? "bg-red-500/20 text-red-300 border-red-400/40"
        : status.type === "sending"
          ? "bg-blue-500/20 text-blue-300 border-blue-400/40"
          : "";

  return (
    <div className="flex flex-col xl:flex-row gap-10 overflow-hidden">
      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-[0.75] glass-card p-5 sm:p-8 rounded-2xl shadow-lg ${
          isArabic ? "text-right font-tajawal" : "text-left font-preah"
        }`}
      >
        <p className="text-text-muted text-[17px]">
          {isArabic ? "ابقى على تواصل" : "Get in touch"}
        </p>
        <h3 className="text-text-primary text-[26px] sm:text-[30px] font-bold">
          {isArabic ? "تواصل معي" : "Contact"}
        </h3>

        {status.type !== "idle" && (
          <div
            className={`mt-4 px-4 py-3 rounded-lg border text-sm leading-relaxed ${statusStyles}`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 sm:mt-12 flex flex-col gap-5 sm:gap-6">
          <label className="flex flex-col">
            <span className="text-text-primary font-medium mb-2">
              {isArabic ? "الاسم" : "Your Name"}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={isArabic ? "ما اسمك؟" : "What's your name?"}
              className="bg-glass text-text-primary px-4 py-3 rounded-md placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-[var(--primary)] transition border border-glass-border w-full"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-text-primary font-medium mb-2">
              {isArabic ? "البريد الإلكتروني" : "Your Email"}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={isArabic ? "ما بريدك الإلكتروني؟" : "What's your email?"}
              className="bg-glass text-text-primary px-4 py-3 rounded-md placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-[var(--primary)] transition border border-glass-border w-full"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-text-primary font-medium mb-2">
              {isArabic ? "رسالتك" : "Your Message"}
            </span>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              placeholder={isArabic ? "ما الذي ترغب في قوله؟" : "What would you like to say?"}
              className="bg-glass text-text-primary px-4 py-3 rounded-md placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-[var(--primary)] transition border border-glass-border w-full resize-y"
            />
          </label>

          <button
            type="submit"
            disabled={status.type === "sending"}
            className="modern-btn font-semibold px-6 py-3 rounded-lg transition shadow-md w-full sm:w-fit sm:self-end disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status.type === "sending"
              ? isArabic ? "جارٍ الإرسال..." : "Sending..."
              : isArabic ? "إرسال" : "Send"}
          </button>

          <p className="text-xs sm:text-sm text-text-muted">
            {isArabic ? "أو" : "Or"}{" "}
            <a
              href={mailtoHref}
              className="underline underline-offset-2 text-[var(--primary)] hover:text-text-primary transition"
            >
              {isArabic ? "أرسل عبر بريدك مباشرة" : "send directly from your email"}
            </a>
          </p>
        </form>
      </motion.div>

      {/* Info panel */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-4 text-center w-full max-w-md py-4 xl:py-0">
          <p className={`text-text-secondary italic text-base sm:text-lg ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}>
            {isArabic ? "لا تتردد في التواصل معي 👋" : "Feel free to reach out 👋"}
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="glass-card hover-lift px-5 py-3 rounded-xl flex items-center justify-center gap-3 text-text-primary hover:border-[var(--primary)] transition w-full sm:w-auto"
          >
            <FaEnvelope className="text-xl shrink-0 text-[var(--primary)]" />
            <span className="text-sm sm:text-base break-all">{CONTACT_EMAIL}</span>
          </a>

          <div className="flex gap-5 text-2xl mt-2">
            <a
              href="https://github.com/OND10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-secondary hover:text-text-primary transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/osama-dammag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary hover:text-text-primary transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
