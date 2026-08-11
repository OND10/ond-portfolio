import { useTranslation } from "react-i18next";
import { getPartners } from "../constants";
import university from "../assets/university.png";

const Partners = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const partners = getPartners(lang);

  return (
    <section
      id="education"
      className={`w-full bg-primary py-16 sm:py-20 lg:py-24 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      {/* Section Header */}
      <div className="mx-auto mb-10 w-full max-w-5xl px-4 text-center sm:mb-14 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl ${
            isArabic ? "font-tajawal" : "font-preah"
          }`}
        >
          {partners.title}
        </h2>

        <p
          className={`mx-auto mt-4 max-w-3xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8 md:text-lg ${
            isArabic ? "font-tajawal" : "font-malgun"
          }`}
          dangerouslySetInnerHTML={{ __html: partners.description }}
        />
      </div>

      {/* Sana'a University Showcase */}
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl backdrop-blur-sm sm:rounded-3xl flex items-center justify-center p-4 sm:p-8">
          <img
            src={university}
            alt={
              isArabic
                ? "جامعة صنعاء - الحكمة يمانية"
                : "Sana'a University - Yemeni Wisdom and Leadership"
            }
            className="h-auto w-auto max-h-[45vh] sm:max-h-[55vh] lg:max-h-[60vh] max-w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
