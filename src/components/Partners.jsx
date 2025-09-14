import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { getPartners } from "../constants";

const Partners = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const [partners, setPartners] = useState(getPartners(lang));

  useEffect(() => {
    setPartners(getPartners(i18n.language));
  }, [i18n.language]);

  return (
    <section
      id="partners"
      className={`w-full py-20 ${
        isArabic ? "text-right" : "text-left"
      } bg-[#dddae43b] dark:bg-[#171042a9]`}
    >
      <div className="text-center mb-10 px-4">
        <h2
          className={`text-5xl font-bold ${
            isArabic ? "font-tajawal" : "font-preah"
          } text-violet-500 dark:text-white`}
        >
          {partners.title}
        </h2>
        <p
          className={`mt-4 text-gray-800 dark:text-gray-300 text-lg ${
            isArabic ? "font-tajawal" : "font-malgun"
          }`}
          dangerouslySetInnerHTML={{ __html: partners.description }}
        />
      </div>

      <Marquee speed={60} gradient={false}>
        {partners.logos.map((logo, index) => (
          <div key={index} className="mx-6 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-24 sm:h-36 object-contain transition-all duration-500 ease-in-out drop-shadow-xl"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;