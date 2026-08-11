import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getHeroText } from "../constants";
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import myPhoto from "../assets/ond_profile.jpg";
import CV from "../public/Osama Nashwan Wazea Dammag - Resume.pdf";

const Hero = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const heroText = getHeroText(lang);
  const isArabic = lang === "ar";

  const heroPoints = lang === "ar"
    ? [
        "خبرة أكثر من سنتين في .NET وAngular وReact",
        "تنفيذ Clean Architecture وMicroservices وDDD",
        "أتمتة CI/CD باستخدام Azure DevOps",
      ]
    : [
        "2+ years of experience in .NET, Angular, and React",
        "Implementing Clean Architecture, Microservices, and DDD",
        "Automating CI/CD using Azure DevOps",
      ];

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative w-full min-h-[90vh] mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-start md:justify-center max-w-7xl px-4 sm:px-6 md:px-8 gap-6 md:gap-10 pt-24 md:pt-0 pb-16 md:pb-0 bg-primary"
    >
      {/* 1) Image - first on mobile, right side on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.3, type: "spring", stiffness: 100 }}
        className="order-1 md:order-2 relative z-0 w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] flex items-center justify-center mx-auto md:mx-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-6 w-full h-full rounded-full ond-bg-gradient opacity-35 blur-2xl md:right-8"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[5.5rem] sm:top-[7rem] w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full bg-white/70 dark:bg-white/50 blur-xl glow-animation md:left-16"
          />
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            src={myPhoto}
            alt="Osama Dammag"
            className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] object-cover object-center rounded-full border-4 border-white shadow-2xl relative z-10"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* 2 + 3) Content then Buttons - second & third on mobile, left side on desktop */}
      <div className="order-2 md:order-1 relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-2 max-w-xl">
        <motion.p
          initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`text-sm sm:text-base text-text-secondary ${
            isArabic ? "font-tajawal" : "font-preah"
          } mb-1 bounce-animation`}
        >
          {heroText.hello}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, type: "spring", stiffness: 100 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary ${
            isArabic ? "font-tajawal" : "font-preah"
          } mb-1 text-glow text-center md:text-start`}
        >
          {heroText.name}
          <span
            className={`ond-gradient ${
              isArabic ? "font-tajawal" : "font-preah"
            } animated-gradient`}
          >
            {" "}
            {heroText.name2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className={`text-sm sm:text-lg md:text-xl text-text-secondary max-w-xl text-center md:text-start ${
            isArabic ? "font-tajawal" : "font-malgun"
          } mb-4 leading-relaxed`}
        >
          {heroText.passion}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={`grid gap-3 max-w-xl mb-6 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {heroPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-text-secondary text-sm sm:text-base leading-6"
            >
              <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-accent shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </motion.ul>

        {/* Buttons - third block on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          dir={isArabic ? "rtl" : "ltr"}
          className="mt-2 flex flex-col sm:flex-row justify-center md:justify-start gap-3 w-full md:w-auto"
        >
          <a href="#contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className={`modern-btn flex items-center justify-center gap-2 w-full sm:w-56 px-6 py-3 hover-lift glow-animation ${
                isArabic ? "font-tajawal" : "font-preah"
              }`}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 shrink-0" />
              {heroText.contact}
            </motion.button>
          </a>
          <a
            href={CV}
            download={"OsamaDammag_CV"}
            target="_blank"
            className={`flex items-center justify-center gap-2 w-full sm:w-56 px-6 py-3 glass-card hover-lift text-text-primary rounded-full shadow-lg transition duration-300 cursor-pointer ${
              isArabic ? "font-tajawal" : "font-preah"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDownTrayIcon className="w-5 h-5 shrink-0" />
            </motion.div>
            {heroText.download}
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden sm:flex absolute bottom-6 right-1 w-full justify-center items-center z-10 pointer-events-none"
      >
        <a href="#about" className="pointer-events-auto">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-[35px] h-[64px] rounded-3xl border-4 ond-gradient flex justify-center items-start p-2 glass-card glow-animation"
          >
            <motion.div
              animate={{ y: [0, 24, 0], scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full ond-bg-gradient mb-1"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
