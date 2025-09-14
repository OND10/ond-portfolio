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
    className="glass-card hover-lift p-6 shadow-lg transition-transform group"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="flex justify-center items-center w-20 h-20 rounded-full ond-bg-gradient p-3 group-hover:scale-110 transition-transform duration-300">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-contain filter brightness-0 invert"
        />
      </div>
      <div className="flex-1">
        <h3
          className={`text-xl font-semibold text-white ${
            isArabic ? "font-tajawal" : "font-malgun"
          }`}
        >
          {experience.title}
        </h3>
        <p className="text-sm ond-gradient font-medium">
          {experience.company_name}
        </p>
        <p className="text-xs text-gray-300 mt-1">
          {experience.date}
        </p>
      </div>
    </div>
    <ul
      className={`list-disc list-inside space-y-2 text-sm text-gray-200 ${
        isArabic ? "font-tajawal text-right" : "font-malgun text-left"
      }`}
    >
      {experience.points.map((point, i) => (
        <li
          key={i}
          className="hover:text-white transition-colors duration-300"
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