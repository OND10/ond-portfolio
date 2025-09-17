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
    whileHover={{
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0px 20px 40px rgba(102, 126, 234, 0.3)"
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "tween", duration: 0.3 }}
    className="glass-card hover-lift p-6 shadow-lg transition-transform group"
  >
    <div className="flex items-center gap-4 mb-4">
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center w-16 h-16 rounded-full bg-white/10 border border-glass-border p-2 group-hover:scale-110 transition-transform duration-300"
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>
      <div className="flex-1">
        <motion.h3
          whileHover={{ scale: 1.02 }}
          className={`text-xl font-semibold text-text-primary ${isArabic ? "font-tajawal" : "font-malgun"
            }`}
        >
          {experience.title}
        </motion.h3>
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="text-sm ond-gradient font-medium"
        >
          {experience.company_name}
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="text-xs text-text-muted mt-1"
        >
          {experience.date}
        </motion.p>
      </div>
    </div>
    <ul
      className={`list-disc list-inside space-y-2 text-sm text-text-secondary ${isArabic ? "font-tajawal text-right" : "font-malgun text-left"
        }`}
    >
      {experience.points.map((point, i) => (
        <motion.li
          key={i}
          whileHover={{
            scale: 1.02,
            x: isArabic ? -10 : 10,
            color: "var(--text-primary)"
          }}
          transition={{ duration: 0.2 }}
          className="hover:text-text-primary transition-colors duration-300"
        >
          {point}
        </motion.li>
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
    <section id="work" className="scroll-mt-28 w-full py-20 px-4 bg-primary">
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} ${isArabic ? "font-tajawal" : "font-preah"
            }`}
        >
          {ftitle}
        </h2>
        <p
          className={`${styles.sectionSubText} ${isArabic ? "font-tajawal" : "font-malgun"
            }`}
        >
          {subtitle}
        </p>
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