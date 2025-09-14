import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { getNavLinks } from "../constants";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import mobileLogo from "../assets/menu.png";

// 📌 دوال قراءة الإعدادات من النظام أو localStorage
const getInitialDarkMode = () => {
  const stored = localStorage.getItem("darkMode");
  if (stored !== null) return stored === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getInitialLang = () => {
  const storedLang = localStorage.getItem("lang");
  if (storedLang) return storedLang;
  return navigator.language.startsWith("ar") ? "ar" : "en";
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const [lang, setLang] = useState(getInitialLang);
  const { i18n } = useTranslation();
  const navLinks = getNavLinks(lang);
  const isArabic = lang === "ar";

  // ✅ تغيير اللغة و تحديث التخزين
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang, i18n]);

  // ✅ تفعيل الوضع الليلي
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // ✅ تغيير الخلفية حسب التمرير
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "enhanced-glass shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="ond-logo text-[26px] font-bold cursor-pointer flex font-mars">
            OND
            <span className="sm:block hidden"></span>
          </p>
        </Link>

        {/* Desktop nav links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "ond-gradient font-semibold"
                    : ""
                } text-sm sm:text-base text-gray-300 cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:scale-105 hover:drop-shadow-md mb-1`}
                onClick={() => setActive(nav.title)}
              >
                <a
                  href={`#${nav.id}`}
                  className={`inline-block ${
                    isArabic ? "font-tajawal text-lg" : "font-preah text-lg"
                  }`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools (Language + Theme + Mobile) */}
        <div className="flex items-center gap-6">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-md active:animate-ping"
            aria-label="Toggle Language"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-md active:animate-spin"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className="sm:hidden flex justify-end items-center relative">
            <button
              onClick={() => setToggle(!toggle)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <img
                src={mobileLogo}
                alt="Mobile Logo"
                className="w-[30px] h-[30px] object-contain transition-transform duration-300 ease-in-out"
                style={{ transform: toggle ? "rotate(90deg)" : "rotate(0deg)" }}
              />
            </button>

            {toggle && (
              <div
                onClick={() => setToggle(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`
                    relative top-0 left-0 w-full py-6 px-4 
                    enhanced-glass shadow-2xl z-50
                    rounded-b-3xl border-b border-white/10
                    animate-slideDown
                  `}
                  dir={lang === "ar" ? "rtl" : "ltr"}
                >
                  <button
                    onClick={() => setToggle(false)}
                    aria-label="Close Menu"
                    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 transition"
                  >
                    ×
                  </button>

                  <ul className="flex flex-col gap-6 text-center tracking-wide">
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.title);
                        }}
                        className={`text-base font-semibold px-6 py-3 rounded-xl transition-all duration-300 ${
                          active === nav.title
                            ? "ond-bg-gradient text-white shadow-lg"
                            : "text-white hover:bg-white/10 hover:text-gray-200"
                        } cursor-pointer select-none`}
                      >
                        <a
                          href={`#${nav.id}`}
                          className={`block ${isArabic ? "font-tajawal" : "font-preah"}`}
                        >
                          {nav.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;