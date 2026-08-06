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
      id="education"
      className={`w-full py-16 sm:py-20 ${isArabic ? "text-right" : "text-left"} bg-primary`}
    >
      <div className="text-center mb-10 px-4">
        <h2
          className={`text-3xl sm:text-5xl font-bold ${isArabic ? "font-tajawal" : "font-preah"
            } text-text-primary`}
        >
          {partners.title}
        </h2>
        <p
          className={`mt-4 text-text-secondary text-base sm:text-lg ${isArabic ? "font-tajawal" : "font-malgun"
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
              className="h-20 sm:h-32 object-contain transition-all duration-500 ease-in-out drop-shadow-xl"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;