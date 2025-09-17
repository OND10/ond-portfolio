import { image } from "framer-motion/client";
import {
  csharp,
  dotnetcore,
  playwright,
  reactjs,
  tailwind,
  nodejs,
  git,
  rts,
  p1,
  p2,
  p3,
  threejs,
  dart,
  flutter,
  python,
  postman,
  university,
  backendIcon,
  integrationIcon,
  consultant,
  contentIcon,
  tabsera,
  visual,
} from "../assets";



export const getHeroText = (lang) => {
  return lang === "ar"
    ? {
      hello: "مرحبًا، أنا",
      name: "أسامة",
      name2: "دماج",
      passion:
        "مطور Backend متخصص في .NET و React، أبني حلول قابلة للتوسع باستخدام Clean Architecture و CQRS. أحول الأفكار المعقدة إلى أنظمة فعالة وموثوقة.",
      contact: "تواصل معي",
      download: "تحميل السيرة الذاتية",
    }
    : {
      hello: "Hello, I'm",
      name: "Osama",
      name2: "Dammag",
      passion:
        "Backend Developer specializing in .NET and React, building scalable solutions using Clean Architecture and CQRS. Transforming complex ideas into efficient and reliable systems.",
      contact: "Contact Me",
      download: "Download CV",
    };
};

export const getNavLinks = (lang) => {
  return [
    {
      id: "home",
      title: lang === "ar" ? "الرئيسية" : "Home",
    },
    {
      id: "about",
      title: lang === "ar" ? "عني" : "About",
    },
    {
      id: "education",
      title: lang === "ar" ? "تعليمي" : "Education",
    },
    {
      id: "work",
      title: lang === "ar" ? "خبراتي" : "Experience",
    },
    {
      id: "projects",
      title: lang === "ar" ? "أعمالي" : "Projects",
    },
    {
      id: "testimonials",
      title: lang === "ar" ? "آراء عني" : "Testimonials",
    },
  ];
};

export const getAboutText = (lang) => {
  return {
    subtitle: lang === "ar" ? "نبذة عني" : "About Me",
    ftitle: lang === "ar" ? "من هو" : "Who is ",
    stitle: lang === "ar" ? "أسامة ؟" : "Osama ?",
    description:
      lang === "ar"
        ? `مرحبًا، أنا <span class="text-white font-tajawal font-bold">أسامة دماج</span> مطور Backend مبتدئ مع خبرة سنتين في .NET و React. متخصص في بناء أنظمة قابلة للتوسع باستخدام Clean Architecture و CQRS.

عملت في شركات مختلفة من Visual Soft إلى Tharawat للخدمات المالية، حيث ساهمت في تحسين أداء الأنظمة بنسبة 40% وتقليل أوقات الاستجابة بنسبة 35% من خلال تطبيق أفضل الممارسات في البرمجة.

أنا شغوف بتطوير حلول مبتكرة باستخدام أحدث التقنيات، وأستمتع بتحويل الأفكار المعقدة إلى أنظمة فعالة وموثوقة. دعنا نبتكر معًا.`
        : `Hi, I'm <span class="text-white font-malgun font-bold">Osama Dammag</span> a junior backend developer with 2 years of hands-on experience using .NET and React. I specialize in building scalable systems using Clean Architecture and CQRS.

I've worked with various companies from Visual Soft to Tharawat for Financial Services, where I contributed to improving system performance by 40% and reducing response times by 35% through implementing best programming practices.

I'm passionate about developing innovative solutions using cutting-edge technologies, and I enjoy transforming complex ideas into efficient and reliable systems. Let's innovate together.`,
  };
};

export const getServices = (lang) => [
  {
    title: lang === "ar" ? "مطور .NET" : ".NET Developer",
    icon: backendIcon,
  },
  {
    title: lang === "ar" ? "مطور React" : "React Developer",
    icon: integrationIcon,
  },
  {
    title: lang === "ar" ? "مهندس برمجيات" : "Software Architect",
    icon: consultant,
  },
  {
    title: lang === "ar" ? "مطور API" : "API Developer",
    icon: contentIcon,
  },
];

export const getPartners = (lang) => {
  return {
    title: lang === "ar" ? "تعليمي" : "Education",
    description:
      lang === "ar"
        ? `بكالوريوس في  <span style="background:"class="font-tajawal font-bold"> علوم الحاسوب </span>جامعة صنعاء 2025`
        : `Bachelor Degree in<span class="font-malgun font-bold"> Computer Science</span>   Sana'a University 2025`,
    logos: [
      { src: university, alt: "Partner 1" },
      { src: university, alt: "Partner 1" },
      { src: university, alt: "Partner 1" },
    ],
  };
};

export const getExperiences = (lang) => [
  {
    subtitle: lang === "ar" ? "ما فعلته حتى الآن " : "What I have done so far",
    ftitle: lang === "ar" ? "الخبرات العملية" : "Work Experience",
    title: lang === "ar" ? "مهندس برمجيات" : "Software Engineer",
    company_name: lang === "ar" ? "مؤسسة تبصرة" : "Tabsera Foundation",
    icon: tabsera,
    iconBg: "#E6DEDD",
    date: lang === "ar" ? "2024 - الآن" : "2024 - now",
    points:
      lang === "ar"
        ? [
          "أظهرت كفاءة استثنائية في تطوير البرمجيات باستخدام أحدث التقنيات.",
          "طبق RESTful باستخدام Django REST Framework واختبرت APIs باستخدام Swagger و Postman، مما زاد من تغطية الاختبارات إلى 90%.",
          "بناء تطبيقات ويب منظمة جيدًا باستخدام React.",
        ]
        : [
          "Demonstrate exceptional proficiency in software development using the latest technologies.",
          "Applied RESTful using Django REST framework and tested APIs using Swagger and Postman, increasing test coverage to 90%.",
          "Build well-structured web applications using React.",
        ],
  },
  {
    title: lang === "ar" ? "مطور ويب" : "Web Developer",
    company_name: lang === "ar" ? "Visual Soft" : "Visual Soft",
    icon: visual,
    iconBg: "#383E56",
    date: lang === "ar" ? "06/2024 - 08/2024" : "06/2024 - 08/2024",
    points:
      lang === "ar"
        ? [
          "أشرفت على فصل عمليات القراءة والكتابة من خلال دمج CQRS و Clean Architecture، مما أدى إلى تقليل أوقات استجابة الاستعلامات بنسبة 40% وتحسين إنتاجية النظام بنسبة 35%.",
          "صممت ونفذت آليات مصادقة قوية قائمة على JWT، مما عزز أمان المنصة ومكن من استراتيجيات تحديث الرموز المميزة.",
          "استخدمت Git و GitHub لإدارة إصدارات المشروع وتبسيط التعاون الجماعي، مما أدى إلى تقليل تضارب الدمج بنسبة 50%.",
        ]
        : [
          "Orchestrated the decoupling of read and write operations by integrating CQRS and Clean Architecture, leading to a 40% reduction in query response times and improved system throughput by 35%.",
          "Designed and implemented robust JWT-based authentication mechanisms, enhancing platform security and enabling token refresh strategies.",
          "Utilized Git and GitHub to manage project versions and streamline team collaboration, leading to a 50% reduction in merge conflicts.",
        ],
  },
  {
    title: lang === "ar" ? "مطور .NET" : ".NET Developer",
    company_name: lang === "ar" ? "ثروات للخدمات المالية والاستثمار" : "Tharawat for Financial Services & Investment",
    icon: rts,
    iconBg: "#383E56",
    date: lang === "ar" ? "09/2023 - 02/2024" : "09/2023 - 02/2024",
    points:
      lang === "ar"
        ? [
          "أشرفت على إطار عمل .NET Web API معياري يتبع مبادئ Clean Architecture، مما أدى إلى تقليل تكرار الكود بنسبة 40% وزيادة سرعة استجابة التصحيح بنسبة 25%.",
          "طبق مبادئ RESTful و GraphQL واختبرت APIs باستخدام Swagger و Postman، مما زاد من تغطية الاختبارات إلى 90%.",
          "استخدمت مبادئ SOLID ونفذت أنماط التصميم لتعزيز قابلية صيانة الكود وتقليل إعادة الهيكلة بنسبة 35%.",
        ]
        : [
          "Orchestrated a modular .NET Web API framework adhering to Clean Architecture principles, resulting in a 40% decrease in code duplication and a 25% faster debugging response time.",
          "Applied RESTful and GraphQL principles and tested APIs using Swagger and Postman, increasing test coverage to 90%.",
          "Used SOLID principles and implemented design patterns to boost code maintainability and reduce refactoring by 35%.",
        ],
  },
];


export const getProjects = (lang) => [
  {
    name: lang === "ar" ? "نظام إدارة التعلم" : "Learning Management System",
    description:
      lang === "ar"
        ? "منصة LMS كاملة المكدس لجامعة صنعاء. Backend: Laravel مع Clean Code و Service/Repository pattern. Frontend: React مع Vite و TanStack Router. ميزات: إدارة الطلاب، المدرسين، الخطط الدراسية، التقييمات والمتابعة."
        : "Full-stack LMS platform for Sana'a University. Backend: Laravel with Clean Code, Service/Repository pattern, Sanctum authentication. Frontend: React with Vite, TanStack Router, and ShadCN UI. Features: Student management, instructors, study plans, grading, and tracking.",
    tags: [
      {
        name: "LMS",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/osamadammag",
  },
  {
    name: lang === "ar" ? "تطبيق التجارة الإلكترونية" : "E-commerce App",
    description:
      lang === "ar"
        ? "منصة تجارة إلكترونية باستخدام .NET MVC. ميزات: قوائم المنتجات، سلة التسوق، عملية الدفع، وتوليد رموز QR ديناميكية لكل منتج. تطبيق معمارية MVC وضمان تكامل Backend/Frontend."
        : "E-commerce platform using .NET MVC. Features: Product listings, shopping cart, checkout workflow, and dynamic QR code generation for each product. Applied MVC architecture and ensured backend/frontend integration.",
    tags: [
      {
        name: "E-commerce",
        color: "blue-text-gradient",
      },
      {
        name: ".NET MVC",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/osamadammag",
  },
  {
    name: lang === "ar" ? "تطبيق مالابي" : "Malabi App",
    description:
      lang === "ar"
        ? "تطبيق Flutter للهواتف المحمولة لحجز الملاعب الرياضية الخاصة والعامة. استخدام GetX لإدارة الحالة ومعمارية MVC للفصل النظيف. Backend: .NET 8 مع Clean Architecture يعرض نقاط نهاية آمنة وقابلة للتوسع."
        : "Flutter-based mobile app for booking private/public sports stadiums. Used GetX for state management and MVC architecture for clean separation. Backend: .NET 8 with Clean Architecture exposing secure, scalable endpoints.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: ".NET 8",
        color: "green-text-gradient",
      },
      {
        name: "GetX",
        color: "pink-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/osamadammag",
  },
];


const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET Core",
    icon: dotnetcore,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  {
    name: "JWT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Postgre Sql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Swagger",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Azure DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  },
  {
    name: "Axios",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
  },
  {
    name: "Django-rest-framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg"
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  }

];

export const getTestimonials = (lang) => Array.from({ length: 2 }, () => ({
  testimonial: lang === "ar"
    ? "اسامة شخص شغوف، ذو خبرة ومهارات عالية. لقد حظيت بفرصة العمل معه، وكان دائمًا يبهرني بخبرته. قدرته على حل المشكلات وتفانيه تعكس التزامه القوي بالتطور الشخصي. استمتعت كثيرًا بالعمل معه وأوصي به بشدة لأي مشروع أو فريق."
    : "Osama is a passionate, experienced, and highly skilled professional. I’ve had the pleasure of working with him, and his expertise consistently impressed me. His problem-solving abilities and dedication reflect a strong commitment to personal growth. I thoroughly enjoyed collaborating with Osama and highly recommend him for any project or team.",
  name: "Test",
  designation: lang === "ar" ? "مطور فل ستاك" : "full-stack developer",
  company: "None",
  image: "",
  // image: "https://ahmadalrai.com/_next/image?url=%2FintroImg.jpg&w=256&q=95",
}));

export const getFooter = (lang) => {
  return {
    title: lang === "ar" ? "أسامة دماج | ملف الأعمال" : "Osama Dammag | Portfolio",
    description:
      lang === "ar" ? "© 2025 كل الحقوق محفوظة ل أسامة دماج" : "© 2025 All rights reserved to Osama Dammag",
    socialLinks: [
      { icon: "FaGithub", link: "https://github.com/OND10" },
      { icon: "FaLinkedin", link: "https://www.linkedin.com/in/osama-dammag" },
      { icon: "FaTwitter", link: "https://twitter.com/osamadammag" },
      { icon: "FaEnvelope", link: "mailto:osama.dammag@gmail.com" },
    ],
  };
};

export { technologies };
