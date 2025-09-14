import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useTranslation } from "react-i18next";

const Tech = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  const subtitle = isArabic
    ? "ما أستخدمه في بناء المشاريع"
    : "Tools I Use to Build Projects";
  const title = isArabic ? "التقنيات" : "Technologies";

  return (
    <section
      className={`w-full py-20 px-0 overflow-hidden ${
        isArabic ? "text-right" : "text-left"
      } bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]`}
    >
      <div className="text-center mb-12 px-4 ">
        <h2
          className={`text-4xl font-bold ond-gradient ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 text-gray-300 text-lg ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="glass-card hover-lift w-24 h-24 flex items-center justify-center group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {tech.icon ? (
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <span
                className={`text-sm text-white font-bold ${
                  isArabic ? "font-tajawal" : "font-malgun"
                }`}
              >
                {tech.name}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
