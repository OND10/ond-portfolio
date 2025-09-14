import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getHeroText } from "../constants";
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import myPhoto from "../assets/photo.png";
import CV from "../public/HasanFuaad_CV.pdf";

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
      className="relative w-full h-screen mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-center max-w-7xl px-4 sm:px-6 md:px-8 gap-0 md:gap-4"
    >
      <div className="relative z-10 text-center md:text-left w-full md:w-1/2 mt-2 md:mt-0 -translate-y-6 md:translate-y-0 order-2 md:order-1 flex flex-col items-center md:items-start justify-center gap-2 max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-sm sm:text-base text-gray-400 ${
            isArabic ? "font-tajawal" : "font-preah"
          } mb-1`}
        >
          {heroText.hello}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white ${
            isArabic ? "font-tajawal" : "font-preah"
          } mb-1`}
        >
          {heroText.name}
          <span
            className={`ond-gradient ${
              isArabic ? "font-tajawal" : "font-preah"
            }`}
          >
            {" "}
            {heroText.name2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={`text-sm sm:text-lg md:text-xl text-gray-300 max-w-xl text-center ${
            isArabic ? "font-tajawal sm:text-right" : "font-malgun sm:text-left"
          } mb-2`}
        >
          {heroText.passion}
        </motion.p>

        <div className="mt-2 flex flex-col md:flex-row justify-center md:justify-start gap-3">
          <a href="#contact">
            <button
              className={`modern-btn flex items-center justify-center gap-2 w-56 px-6 py-3 hover-lift ${
                isArabic ? "font-tajawal text-right" : "font-preah text-left"
              }`}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              {heroText.contact}
            </button>
          </a>
          <a
            href={CV}
            download={"OsamaDammag_CV"}
            target="_blank"
            className={`flex items-center justify-center gap-2 w-56 px-6 py-3 glass-card hover-lift text-white rounded-full shadow-lg transition duration-300 cursor-pointer ${
              isArabic ? "font-tajawal text-right" : "font-preah text-left"
            }`}
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            {heroText.download}
          </a>
        </div>
      </div>

      <div className="relative z-0 mb-10 md:mb-12 w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
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
          <div
            className="absolute top-8 w-full h-full rounded-full ond-bg-gradient opacity-35 blur-2xl float-animation"
            style={
              isDesktop
                ? {
                    right: isArabic ? "auto" : "2.5rem",
                    left: isArabic ? "2.5rem" : "auto",
                  }
                : {}
            }
          />
          <div
            className="absolute top-[7.5rem] w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] rounded-full bg-white opacity-60 blur-xl pulse-glow"
            style={
              isDesktop
                ? {
                    left: isArabic ? "auto" : "5rem",
                    right: isArabic ? "5rem" : "auto",
                  }
                : {}
            }
          />
          <img
            src={myPhoto}
            alt="Osama Dammag"
            className="z-10 w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] object-contain object-center rounded-full border-4 border-white shadow-2xl relative top-8 hover-lift neon-glow"
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
      </div>

      {/* ⬇️ Scroll Down Indicator */}
      <div className="hidden sm:flex absolute bottom-10 right-1 w-full justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 ond-gradient flex justify-center items-start p-2 glass-card">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full ond-bg-gradient mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

Hero.propTypes = {};

export default Hero;