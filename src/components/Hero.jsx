import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getHeroText } from "../constants";
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import myPhoto from "../assets/ond_profile.jpg";
import CV from "../public/Osama_Dammag_CV_New.pdf";

const Hero = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const heroText = getHeroText(lang);
  const isArabic = lang === "ar";

  // Avoid SSR issues: only access window in effect or inside event handlers if needed
  // const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
  // For SSR safety, use a default value or a hook for responsive checks if needed
  // Here we use a fallback to false for SSR
  let isDesktop = false;
  if (typeof window !== "undefined") {
    isDesktop = window.innerWidth >= 768;
  }

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative w-full h-screen mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-center max-w-7xl px-4 sm:px-6 md:px-8 gap-0 md:gap-4 bg-primary"
    >
      <div className="relative z-10 text-center md:text-left w-full md:w-1/2 mt-2 md:mt-0 -translate-y-6 md:translate-y-0 order-2 md:order-1 flex flex-col items-center md:items-start justify-center gap-2 max-w-xl">
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
          } mb-1 text-glow`}
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
          className={`text-sm sm:text-lg md:text-xl text-text-secondary max-w-xl text-center ${
            isArabic ? "font-tajawal sm:text-right" : "font-malgun sm:text-left"
          } mb-2`}
        >
          {heroText.passion}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-2 flex flex-col md:flex-row justify-center md:justify-start gap-3"
        >
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className={`modern-btn flex items-center justify-center gap-2 w-56 px-6 py-3 hover-lift glow-animation ${
                isArabic ? "font-tajawal text-right" : "font-preah text-left"
              }`}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              {heroText.contact}
            </motion.button>
          </a>
          <a
            href={CV}
            download={"OsamaDammag_CV"}
            target="_blank"
            className={`flex items-center justify-center gap-2 w-56 px-6 py-3 glass-card hover-lift text-text-primary rounded-full shadow-lg transition duration-300 cursor-pointer ${
              isArabic ? "font-tajawal text-right" : "font-preah text-left"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
            </motion.div>
            {heroText.download}
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 100 }}
        className="relative z-0 mb-10 md:mb-12 w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2"
      >
        <div
          className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] flex items-center justify-center"
          style={
            isDesktop
              ? {
                  right: isArabic ? "auto" : "2.5rem",
                  left: isArabic ? "2.5rem" : "auto",
                }
              : {}
          }
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 w-full h-full rounded-full ond-bg-gradient opacity-35 blur-2xl"
            style={
              isDesktop
                ? {
                    right: isArabic ? "auto" : "2.5rem",
                    left: isArabic ? "2.5rem" : "auto",
                  }
                : {}
            }
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[7.5rem] w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[200px] lg:h-[200px] rounded-full bg-white/70 dark:bg-white/50 blur-xl glow-animation"
            style={
              isDesktop
                ? {
                    left: isArabic ? "auto" : "5rem",
                    right: isArabic ? "5rem" : "auto",
                  }
                : {}
            }
          />
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            src={myPhoto}
            alt="Osama Dammag"
            className="z-10 w-[200px] h-[200px] sm:w:[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-cover object-center rounded-full border-4 border-white shadow-2xl relative top-6 md:top-8 hover-lift neon-glow"
            style={
              isDesktop
                ? {
                    right: isArabic ? "auto" : "1.5rem",
                    left: isArabic ? "1.5rem" : "auto",
                  }
                : {}
            }
          />
        </div>
      </motion.div>

      {/* ⬇️ Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden sm:flex absolute bottom-10 right-1 w-full justify-center items-center z-10"
      >
        <a href="#about">
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

Hero.propTypes = {};

export default Hero;