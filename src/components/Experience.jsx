import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { getExperiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { useTranslation } from "react-i18next";

// ExperienceCard component with prop-types
const ExperienceCard = ({ experience, index, isArabic }) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.15, 0.4)}
    whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" }}
    transition={{ type: "tween", duration: 0.3 }}
    className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/20 rounded-xl p-6 shadow-md dark:shadow-lg transition-transform"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="flex justify-center items-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div>
        <h3
          className={`text-xl font-semibold text-gray-800 dark:text-white ${
            isArabic ? "font-tajawal" : "font-malgun"
          }`}
        >
          {experience.title}
        </h3>
        <p className="text-sm text-violet-600 dark:text-violet-300">
          {experience.company_name}
        </p>
      </div>
    </div>
    <ul
      className={`list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-200 ${
        isArabic ? "font-tajawal text-right" : "font-malgun text-left"
      }`}
    >
      {experience.points.map((point, i) => (
        <li
          key={i}
          className="hover:text-violet-700 dark:hover:text-white transition"
        >
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isArabic: PropTypes.bool.isRequired,
};

const Experience = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const experiences = getExperiences(lang);

  const subtitle = experiences[0]?.subtitle || "";
  const ftitle = experiences[0]?.ftitle || "";

  return (
    <section id="work" className="scroll-mt-28 w-full py-20 px-4">
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-center ${
            isArabic ? "font-tajawal" : "font-malgun"
          }`}
        >
          {subtitle}
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {ftitle}
        </h2>
      </motion.div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
            isArabic={isArabic}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience");