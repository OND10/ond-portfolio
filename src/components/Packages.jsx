import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SiNuget } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

import { styles } from "../styles";
import { getPackages } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const PackageCard = ({ index, name, category, description, install, url, isArabic }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    whileHover={{ y: -10 }}
    className="w-full h-full"
  >
    <Tilt
      options={{ max: 15, scale: 1, speed: 450 }}
      className="glass-card hover-lift p-6 sm:p-8 w-full h-full shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center glow-animation">
            <SiNuget className="w-7 h-7 text-blue-400" />
          </div>
          <div className="min-w-0">
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className={`text-text-primary font-bold text-[22px] truncate ${
                isArabic ? "font-tajawal text-right" : "font-preah text-left"
              }`}
            >
              {name}
            </motion.h3>
            <p className={`text-sm text-text-muted ${isArabic ? "font-tajawal text-right" : "font-malgun text-left"}`}>
              {category}
            </p>
          </div>
        </div>
        <motion.a
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.9 }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title="NuGet"
          className="w-10 h-10 shrink-0 rounded-full ond-bg-gradient text-white flex items-center justify-center cursor-pointer shadow-lg"
        >
          <FaExternalLinkAlt className="h-4 w-4" />
        </motion.a>
      </div>

      <motion.p
        whileHover={{ scale: 1.01 }}
        className={`mt-5 flex-1 text-text-secondary text-[15px] leading-relaxed ${
          isArabic ? "font-tajawal text-right" : "font-malgun text-left"
        }`}
      >
        {description}
      </motion.p>

      <div className={`mt-5 ${isArabic ? "text-right" : "text-left"}`}>
        <code className="inline-block max-w-full px-4 py-2 rounded-lg bg-black/40 dark:bg-white/5 border border-glass-border text-text-secondary text-xs sm:text-sm font-mono whitespace-nowrap overflow-x-auto">
          {install}
        </code>
      </div>

      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`modern-btn mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto ${
          isArabic ? "font-tajawal" : "font-preah"
        }`}
      >
        <SiNuget className="w-4 h-4 shrink-0" />
        {isArabic ? "عرض على NuGet" : "View on NuGet"}
      </motion.a>
    </Tilt>
  </motion.div>
);

PackageCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  install: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isArabic: PropTypes.bool.isRequired,
};

const Packages = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const packages = getPackages(lang);

  return (
    <section className="bg-primary py-10">
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {isArabic ? "حزم NuGet" : "NuGet Packages"}
        </h2>
      </motion.div>

      <div className="w-full flex flex-col items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-gray-600 dark:text-gray-300 text-center text-[17px] max-w-3xl leading-relaxed ${
            isArabic ? "font-tajawal" : "font-malgun"
          }`}
        >
          {isArabic
            ? "مكتبات مفتوحة قابلة لإعادة الاستخدام أصدرتها لمنصة .NET لتبسيط المهام المعقدة وتحسين أداء المطورين."
            : "Open, reusable libraries I've published for .NET developers to simplify complex tasks and boost productivity."}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (
          <PackageCard
            key={`package-${pkg.name}`}
            index={index}
            isArabic={isArabic}
            {...pkg}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Packages, "packages");
