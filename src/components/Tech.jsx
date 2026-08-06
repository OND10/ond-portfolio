import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { skillGroups } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  const subtitle = isArabic
    ? "أدوات وتقنيات أعتمد عليها في بناء المشاريع"
    : "The technologies I rely on to build production-ready software";

  return (
    <section id="tech" className="w-full py-10 bg-primary">
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {isArabic ? "مهاراتي" : "My Skills"}
        </h2>
        <p
          className={`mt-4 text-text-secondary text-sm sm:text-base text-center ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {subtitle}
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", "tween", groupIndex * 0.15, 0.5)}
            className="glass-card hover-lift p-6 shadow-lg transition-all duration-300 flex flex-col"
          >
            <h3
              className={`text-text-primary font-bold text-lg mb-5 pb-3 border-b border-glass-border ${
                isArabic ? "font-tajawal text-right" : "font-preah text-left"
              }`}
            >
              <span className="ond-gradient">
                {isArabic ? group.titleAr : group.title}
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-text-secondary bg-white/5 dark:bg-white/10 border border-glass-border hover:text-text-primary hover:border-[var(--primary)] transition-all duration-300 ${
                    isArabic ? "font-tajawal" : "font-preah"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
