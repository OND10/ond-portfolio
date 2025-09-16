import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTestimonials } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";

const FeedbackCard = ({ testimonial, name, designation, company, image, isArabic }) => {
  const truncatedText = testimonial.length > 200 ? testimonial.slice(0, 200) + "..." : testimonial;

  return (
    <div
      className="relative bg-white/20 dark:bg-white/10 border border-violet-400 dark:border-violet-500 
        rounded-3xl shadow-xl backdrop-blur-md p-8 w-[90vw] sm:w-[500px] mx-auto transition duration-300"
    >
      <div className="absolute top-4 left-6 text-5xl text-violet-300 opacity-20 select-none">
        “
      </div>

      <p className={`text-[17px] leading-relaxed mb-6 z-10 relative ${isArabic
        ? "text-right font-tajawal text-gray-900 dark:text-white"
        : "text-left font-preah text-gray-900 dark:text-white"
        }`}>
        {truncatedText}
      </p>

      <div className="flex items-center gap-4 mt-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-4 border-[var(--primary)] shadow-md"
        />
        <div className={`${isArabic ? "text-right font-tajawal" : "text-left font-preah"}`}>
          <p className="text-text-accent font-bold text-md">@{name}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {designation} {isArabic ? "في" : "at"} {company}
          </p>
        </div>
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  testimonial: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isArabic: PropTypes.bool.isRequired,
};

const Feedbacks = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const testimonials = getTestimonials(lang);

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) {
      handleNext();
    } else if (distance < -threshold) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials]);

  return (
    <section className="mt-16 bg-primary py-10">
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center text-center"
      >
        <p className={`${styles.sectionSubText} ${isArabic ? "font-tajawal" : "font-preah"}`}>
        </p>
        <h2 className={`mb-8 ${styles.sectionHeadText} ${isArabic ? "font-tajawal" : "font-preah"}`}>
          {isArabic ? "آراء الآخرين" : "What others say"}
        </h2>
      </motion.div>

      <div
        className="relative mt-10 flex justify-center items-center h-auto min-h-[320px] px-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: isArabic ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isArabic ? -100 : 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute"
          >
            <FeedbackCard
              {...testimonials[currentIndex]}
              isArabic={isArabic}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-20  flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${i === currentIndex
              ? "bg-sky-400 scale-110"
              : "bg-gray-300 dark:bg-gray-600"
              } transition-all`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");