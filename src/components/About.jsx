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
      className="bg-white/10 dark:bg-white/10 border border-violet-500 dark:border-violet-500
                 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 "
    >
      <div className="flex flex-col items-center text-center gap-4 ">
        <img src={icon} alt={title} className="w-20 h-20 object-contain " />
        <h3
          className={`text-black dark:text-gray-200 text-[16px] font-semibold ${
            isArabic
              ? "font-tajawal text-center sm:text-right"
              : "font-preah text-center sm:text-left"
          }`}
        >
          {title}
        </h3>
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
    <>
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
            className={`text-violet-500 ${
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
        className={`bg-white/10 dark:bg-white/10 border border-violet-700 dark:border-violet-700 
    rounded-xl p-8 max-w-6xl min-h-[220px] text-[18px] text-gray-800 dark:text-gray-200 
    leading-[32px] shadow-md backdrop-blur-md text-center sm:text-start`}
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
    </>
  );
};

export default SectionWrapper(About, "about");