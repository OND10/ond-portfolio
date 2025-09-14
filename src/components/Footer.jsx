import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getFooter } from "../constants";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const iconsMap = {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
};

const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const { title, description, socialLinks } = getFooter(lang);

  const navLinks = isArabic
    ? ["الرئيسية", "عني", "شركائي", "خبراتي", "اعمالي", "اراء عني", "تواصل معي"]
    : [
        "Home",
        "About",
        "Partners",
        "Experience",
        "Projects",
        "Testimonials",
        "Contact",
      ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#dddae43b] dark:bg-[#171042a9] text-gray-800 dark:text-gray-300 py-20"
    >
      <div
        className={`container mx-auto px-12 flex flex-col items-center gap-8 text-center ${
          isArabic ? "rtl" : "ltr"
        }`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Quick Links */}
        <div className="w-full mt-12">
          <div className="flex flex-col items-center text-center">
            <h2
              className={`text-base md:text-lg font-bold text-violet-500 mb-4 ${
                isArabic ? "font-malgun" : "font-preah"
              }`}
            >
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h2>
            <ul
              className={`
                flex flex-wrap justify-center items-center 
                gap-3 sm:gap-4 
                text-sm 
                text-gray-600 dark:text-gray-300 
                ${isArabic ? "font-malgun" : "font-preah"}
              `}
            >
              {navLinks.map((label, index) => (
                <li key={index}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="hover:text-violet-500 transition duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Footer Name and Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full">
          <div className={`${isArabic ? "text-right" : "text-left"}`}>
            <h1
              className={`text-2xl font-bold text-violet-500 ${
                isArabic ? "font-malgun" : "font-preah"
              }`}
            >
              {title}
            </h1>
            <p className="text-sm text-gray-400 mt-2">{description}</p>
          </div>
          <div className="flex gap-5 text-xl">
            {socialLinks.map((item, index) => {
              const IconComponent = iconsMap[item.icon];
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-500 transition transform hover:scale-110"
                >
                  {IconComponent && <IconComponent />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

Footer.propTypes = {};

export default Footer;