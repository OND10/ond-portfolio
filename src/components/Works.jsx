import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { styles } from "../styles";
import { getProjects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  live_link,
  isArabic,
}) => {
  const monogram = (name || "P").charAt(0).toUpperCase();

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10 }}
      className="w-full h-full"
    >
      <Tilt
        options={{ max: 15, scale: 1, speed: 450 }}
        className="glass-card hover-lift p-6 w-full h-full shadow-lg transition-all duration-300 group flex flex-col"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="w-14 h-14 shrink-0 rounded-2xl ond-bg-gradient flex items-center justify-center shadow-lg glow-animation">
            <span
              className={`text-2xl font-black text-white ${
                isArabic ? "font-tajawal" : "font-preah"
              }`}
            >
              {monogram}
            </span>
          </div>

          {(source_code_link || live_link) && (
            <div className="flex gap-2">
              {live_link && (
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isArabic ? "الموقع الحي" : "Live Site"}
                  className="w-10 h-10 rounded-full ond-bg-gradient text-white flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <FaExternalLinkAlt className="h-4 w-4" />
                </motion.a>
              )}
              {source_code_link && (
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isArabic ? "عرض الكود" : "View Code"}
                  className="w-10 h-10 rounded-full ond-bg-gradient text-white flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <FaGithub className="h-5 w-5" />
                </motion.a>
              )}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="mt-5 flex-1">
          <motion.h3
            whileHover={{ scale: 1.02 }}
            className={`text-text-primary font-bold text-[22px] ${
              isArabic ? "font-tajawal text-right" : "font-preah text-left"
            }`}
          >
            {name}
          </motion.h3>
          <motion.p
            whileHover={{ scale: 1.01 }}
            className={`mt-3 text-text-secondary text-[15px] leading-relaxed ${
              isArabic ? "font-tajawal text-right" : "font-malgun text-left"
            }`}
          >
            {description}
          </motion.p>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={`${name}-${tag.name}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: tagIndex * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isArabic ? "font-tajawal" : "font-preah"
              } ${
                tag.color === "blue-text-gradient"
                  ? "bg-blue-500/20 text-blue-300"
                  : tag.color === "green-text-gradient"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-pink-500/20 text-pink-300"
              }`}
            >
              {tag.name}
            </motion.span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
  source_code_link: PropTypes.string,
  live_link: PropTypes.string,
  isArabic: PropTypes.bool.isRequired,
};

const Works = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  const projects = getProjects(lang);

  return (
    <section className="bg-primary py-10">
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {isArabic ? "أعمالي" : "My Work"}
        </h2>
      </motion.div>

      <div className={`w-full flex flex-col items-center ${isArabic ? "text-right" : "text-left"}`}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-gray-600 dark:text-gray-300 text-center text-[17px] max-w-3xl leading-relaxed ${
            isArabic ? "font-tajawal" : "font-malgun"
          }`}
        >
          {isArabic
            ? "هذه المشاريع تعكس خبرتي في بناء أنظمة عالية الأداء، وتجارب متعددة المستأجرين، ومنصات واجهات أمامية قوية."
            : "These projects reflect my experience building high-performance systems, multi-tenant architectures, and polished frontend platforms."}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${project.name}-${index}`}
            index={index}
            isArabic={isArabic}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
