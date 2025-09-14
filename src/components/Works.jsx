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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white/60 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-5 sm:w-[360px] w-full shadow-md transition-all duration-300"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-violet-600 hover:bg-violet-700 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow"
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
                    d="M13 16h-1v-4h-1m4-4H8m4-4v16"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3
            className={`text-gray-900 dark:text-white font-bold text-[22px] ${
              isArabic ? "font-tajawal text-right" : "font-preah text-left"
            }`}
          >
            {name}
          </h3>
          <p
            className={`mt-2 text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed ${
              isArabic ? "font-tajawal text-right" : "font-malgun  text-left"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-sm ${tag.color} ${
                isArabic ? "font-tajawal" : "font-preah"
              }`}
            >
              #{tag.name}
            </p>
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