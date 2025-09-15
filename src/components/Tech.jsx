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
      } bg-primary`}
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
          className={`mt-4 text-text-secondary text-lg ${
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
            className="glass-card hover-lift w-24 h-24 flex items-center justify-center group glow-animation"
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              boxShadow: "0 0 30px rgba(102, 126, 234, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 50, rotate: -180 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            {tech.icon ? (
              <motion.img
                whileHover={{ scale: 1.3, rotate: 10 }}
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <motion.span
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`text-sm text-text-primary font-bold ${
                  isArabic ? "font-tajawal" : "font-malgun"
                }`}
              >
                {tech.name}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
