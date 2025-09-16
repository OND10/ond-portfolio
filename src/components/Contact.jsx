import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_7vazt3k",
        "template_88397af",
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        "X2fnOumZlkDIo6OV7"
      )
      .then(() => {
        setLoading(false);
        alert(isArabic ? "تم الإرسال بنجاح!" : "Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert(isArabic ? "حدث خطأ، حاول مرة أخرى." : "Something went wrong. Please try again.");
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-[0.75] glass-card p-8 rounded-2xl shadow-lg ${isArabic ? "text-right font-tajawal" : "text-left font-preah"}`}
      >
        <p className="text-gray-400 text-[17px]">
          {isArabic ? "ابقى على تواصل" : "Get in touch"}
        </p>
        <h3 className="text-text-primary text-[30px] font-bold">
          {isArabic ? "تواصل معي" : "Contact"}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6"
        >
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
              className="bg-glass text-text-primary px-4 py-3 rounded-md placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-[var(--primary)] transition border border-glass-border"
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
              className="bg-glass text-text-primary px-4 py-3 rounded-md placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-[var(--primary)] transition border border-glass-border"
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
              className="bg-glass text-text-primary px-4 py-3 rounded-md placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-[var(--primary)] transition border border-glass-border"
            />
          </label>

          <button
            type="submit"
            className="modern-btn font-semibold px-6 py-3 rounded-lg transition shadow-md w-fit self-end"
          >
            {loading ? (isArabic ? "جارٍ الإرسال..." : "Sending...") : (isArabic ? "إرسال" : "Send")}
          </button>
        </form>
      </motion.div>

      {/* Placeholder for visual or 3D Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[70px] h-[20px] flex items-center justify-center"
      >
        <div className={`text-gray-400 italic ${isArabic ? "font-tajawal" : "font-preah"}`}>
          {isArabic ? "لا تتردد في التواصل معي 👋" : "Feel free to reach out 👋"}
        </div>
      </motion.div>
    </div>
  );
};

Contact.propTypes = {};

export default SectionWrapper(Contact, "contact");