import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { getProjects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isArabic,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="glass-card hover-lift p-5 sm:w-[360px] w-full shadow-lg transition-all duration-300 group"
      >
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 2 }}
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300" 
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className="ond-bg-gradient text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg transition-transform duration-300 glow-animation"
                title={isArabic ? "عرض الكود" : "View Code"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <motion.h3
            whileHover={{ scale: 1.02 }}
            className={`text-white font-bold text-[22px] ${
              isArabic ? "font-tajawal text-right" : "font-preah text-left"
            }`}
          >
            {name}
          </motion.h3>
          <motion.p
            whileHover={{ scale: 1.01 }}
            className={`mt-2 text-gray-200 text-[15px] leading-relaxed ${
              isArabic ? "font-tajawal text-right" : "font-malgun text-left"
            }`}
          >
            {description}
          </motion.p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
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
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string,
  isArabic: PropTypes.bool.isRequired,
};

const Works = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  const projects = getProjects(lang);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} ${
            isArabic
              ? "font-tajawal text-center sm:text-right"
              : "font-preah text-center sm:text-left"
          }`}
        >
          {isArabic ? "أعمالي" : "My Work"}
        </p>
        <h2
          className={`${styles.sectionHeadText} ${
            isArabic
              ? "font-tajawal text-center sm:text-right"
              : "font-preah text-center sm:text-left"
          }`}
        >
          {isArabic ? "المشاريع" : "Projects"}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-gray-600 dark:text-gray-300 text-[17px] max-w-3xl leading-[30px] ${
            isArabic ? "font-tajawal text-right" : "font-malgun text-left"
          }`}
        >
          {isArabic
            ? "تعرض هذه المشاريع مهاراتي وخبرتي من خلال أمثلة واقعية. كل مشروع يتضمن وصفًا مختصرًا ورابطًا إلى كود المصدر، مما يبرز قدرتي على حل المشكلات والعمل مع تقنيات مختلفة."
            : "These projects showcase my skills and experience through real-world examples. Each project includes a brief description and links to the code repositories, highlighting my ability to solve problems and work with various technologies."}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            isArabic={isArabic}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");