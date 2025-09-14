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
      } bg-gradient-to-b from-[#f4f4f8] to-[#eaeaf0] dark:from-[#1a103d] dark:to-[#12092b]`}
    >
      <div className="text-center mb-12 px-4 ">
        <h2
          className={`text-4xl font-bold text-violet-500 dark:text-white  ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 text-gray-800 dark:text-gray-300 text-lg ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-8  ">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="w-24 h-24 flex items-center justify-center backdrop-blur-md bg-white/60 dark:bg-white/10 border-2 border-violet-500 dark:border-violet-400 rounded-xl shadow-md dark:shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {tech.icon ? (
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
            ) : (
              <span
                className={`text-sm text-gray-700 dark:text-white ${
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
