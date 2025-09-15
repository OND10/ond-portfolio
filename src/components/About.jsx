import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getServices, getAboutText } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, isArabic }) => (
  <Tilt className="w-full sm:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5, 
        rotateX: 5,
        boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      className="glass-card hover-lift p-6 shadow-lg transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-full ond-bg-gradient p-4 group-hover:scale-110 transition-transform duration-300 glow-animation"
        >
          <img src={icon} alt={title} className="w-full h-full object-contain filter brightness-0 invert" />
        </motion.div>
        <motion.h3
          whileHover={{ scale: 1.05 }}
          className={`text-text-primary text-[16px] font-semibold ${
            isArabic
              ? "font-tajawal text-center sm:text-right"
              : "font-preah text-center sm:text-left"
          }`}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isArabic: PropTypes.bool.isRequired,
};

const About = () => {
  const { i18n } = useTranslation();
  const [services, setServices] = useState(getServices(i18n.language));
  const [aboutText, setAboutText] = useState(getAboutText(i18n.language));
  const lang = i18n.language;
  const isArabic = lang === "ar";

  useEffect(() => {
    const lang = i18n.language;
    setServices(getServices(lang));
    setAboutText(getAboutText(lang));
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <section className="bg-primary py-10">
      <motion.div
        variants={textVariant()}
        className={`text-center sm:text-start `}
      >
        <p
          className={`text-sm text-gray-400 ${
            isArabic
              ? "font-tajawal text-center sm:text-right"
              : "font-preah text-center sm:text-left"
          }`}
        >
          {aboutText.subtitle}
        </p>
        <h2
          className={`text-4xl font-bold text-black dark:text-white ${
            isArabic
              ? "font-tajawal text-center sm:text-right"
              : "font-preah text-center sm:text-left"
          } mt-4 mb-8`}
        >
          {aboutText.ftitle}
          <span
            className={`ond-gradient ${
              isArabic
                ? "font-tajawal text-center sm:text-right"
                : "font-preah text-center sm:text-left"
            } mt-4 mb-8`}
          >
            {" "}
            {aboutText.stitle}
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className={`glass-card hover-lift p-8 max-w-6xl min-h-[220px] text-[18px] text-text-primary 
    leading-[32px] shadow-lg text-center sm:text-start`}
      >
        <div
          className={`${
            isArabic
              ? "font-tajawal text-center sm:text-right"
              : "font-malgun text-center sm:text-left"
          }`}
          dangerouslySetInnerHTML={{ __html: aboutText.description }}
        />
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-12 justify-center ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            {...service}
            isArabic={isArabic}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");