import {
  csharp,
  dotnetcore,
  reactjs,
  tailwind,
  git,
  rts,
  p1,
  p2,
  p3,
  threejs,
  dart,
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
          "مهندس برمجيات مع أكثر من سنتين خبرة في تطوير الويب الحديث باستخدام .NET وAngular وReact. أبني أنظمة قابلة للتوسع باستخدام Clean Architecture وMicroservices وDDD.",
        contact: "تواصل معي",
        download: "تحميل السيرة الذاتية",
      }
    : {
        hello: "Hello, I'm",
        name: "Osama",
        name2: "Dammag",
        passion:
          "Software engineer with 2+ years of modern web development experience using .NET, Angular, and React. I build scalable systems with Clean Architecture, Microservices, and DDD.",
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
        ? `مرحبًا، أنا <span class="text-white font-tajawal font-bold">أسامة دماج</span> خريج علوم الحاسوب مع أكثر من سنتين خبرة عملية في تطوير الويب الحديث باستخدام .NET وAngular وReact. أركز على بناء تطبيقات مؤسسية قابلة للتوسع باستخدام Clean Architecture وDDD وMicroservices.

عملت على أنظمة متعددة المستأجرين والتطوير الخلفي عالي الأداء، وشاركت في بناء حزم NuGet قابلة لإعادة الاستخدام وأتمتة CI/CD باستخدام Azure DevOps.

أحب بناء حلول قابلة للصيانة وتعزيز الأداء باستخدام أدوات حديثة وممارسات برمجة قوية. دعنا نصنع تجربة رقمية ممتازة معًا.`
        : `Hi, I'm <span class="text-white font-malgun font-bold">Osama Dammag</span>, a Computer Science graduate with over 2 years of hands-on experience in modern web development using .NET, Angular, and React. I focus on building enterprise-grade applications with Clean Architecture, DDD, and Microservices.

I have worked on multi-tenant systems and high-performance backend solutions, and I’ve contributed to reusable NuGet packages and automated CI/CD workflows using Azure DevOps.

I enjoy crafting maintainable solutions and improving performance with modern tools and strong engineering practices. Let’s build an exceptional digital experience together.`,
  };
};

export const getServices = (lang) => [
  {
    title: lang === "ar" ? "مطور .NET" : ".NET Developer",
    icon: backendIcon,
  },
  {
    title: lang === "ar" ? "مطور Angular/React" : "Frontend Developer",
    icon: integrationIcon,
  },
  {
    title: lang === "ar" ? "مهندس DevOps" : "DevOps Engineer",
    icon: consultant,
  },
  {
    title: lang === "ar" ? "مهندس برمجيات" : "Software Architect",
    icon: contentIcon,
  },
];

export const getPartners = (lang) => {
  return {
    title: lang === "ar" ? "تعليمي" : "Education",
    description:
      lang === "ar"
        ? `بكالوريوس في <span class="font-tajawal font-bold">علوم الحاسوب</span> من جامعة صنعاء، 2025`
        : `Bachelor of Computer Science from Sana'a University, 2025`,
    logos: [
      { src: university, alt: "Sana'a University" },
      { src: university, alt: "Sana'a University" },
      { src: university, alt: "Sana'a University" },
    ],
  };
};

export const getExperiences = (lang) => [
  {
    subtitle: lang === "ar" ? "ما فعلته حتى الآن" : "What I have done so far",
    ftitle: lang === "ar" ? "الخبرات العملية" : "Work Experience",
    title: lang === "ar" ? "مطور .NET" : ".NET Developer",
    company_name: lang === "ar" ? "ثروات للخدمات المالية والاستثمار" : "Tharawat for Financial Services & Investment",
    icon: tabsera,
    iconBg: "#E6DEDD",
    date: lang === "ar" ? "07/2025 - الآن" : "07/2025 - Present",
    points:
      lang === "ar"
        ? [
            "طورت واجهات برمجة تطبيقات .NET 8 وGraphQL باستخدام Clean Architecture مع Azure DevOps.",
            "صممت حلولًا مالية متعددة المستأجرين مع مكتبات قابلة لإعادة الاستخدام وتعاملات آمنة.",
            "أدرت خطوط CI/CD وآليات التحقق الآلي في Azure DevOps لتحسين استقرار النشر.",
          ]
        : [
            "Built .NET 8 and GraphQL APIs using Clean Architecture with Azure DevOps.",
            "Designed multi-tenant financial solutions with reusable service libraries and secure transaction flows.",
            "Managed CI/CD pipelines and automated validation in Azure DevOps to improve deployment stability.",
          ],
  },
  {
    title: lang === "ar" ? "مطور Full Stack" : "Full Stack Developer",
    company_name: lang === "ar" ? "RTS (Real-Time Solutions)" : "RTS (Real-Time Solutions)",
    icon: rts,
    iconBg: "#383E56",
    date: lang === "ar" ? "مشروع" : "Project-Based",
    points:
      lang === "ar"
        ? [
            "طورت واجهات إدارة ومؤشرات أداء باستخدام .NET 7 وEF Core وADO.NET وReact.",
            "طبقت عمليات خلفية مجدولة باستخدام Hangfire وإدارة بيانات متعددة المستأجرين.",
            "أتمت نشر المشاريع باستخدام Azure DevOps وحسنت عمليات المراجعة المشتركة للكود.",
          ]
        : [
            "Built admin dashboards and performance tools using .NET 7, EF Core, ADO.NET, and React.",
            "Implemented scheduled background jobs with Hangfire and multi-tenant data management.",
            "Automated deployments with Azure DevOps and improved collaborative code review workflows.",
          ],
  },
  {
    title: lang === "ar" ? "مهندس برمجيات" : "Software Engineer",
    company_name: lang === "ar" ? "مؤسسة تبصرة" : "Tabsera Foundation",
    icon: visual,
    iconBg: "#383E56",
    date: lang === "ar" ? "11/2024 - 11/2025" : "11/2024 - 11/2025",
    points:
      lang === "ar"
        ? [
            "أسست إطار عمل Web API باستخدام .NET وClean Architecture لتقليل تكرار الكود.",
            "نفذت واجهات RESTful وGraphQL ووفرت التوثيق عبر Swagger وPostman.",
            "حسنت قابلية الصيانة بمبادئ SOLID وأنماط تصميم موجهة للمهام المؤسسية.",
          ]
        : [
            "Established a Web API framework using .NET and Clean Architecture to reduce code duplication.",
            "Delivered RESTful and GraphQL interfaces with documentation through Swagger and Postman.",
            "Improved maintainability with SOLID principles and enterprise design patterns.",
          ],
  },
];


export const getProjects = (lang) => [
  {
    name: lang === "ar" ? "نظام نقاط البيع Noqtah" : "Noqtah POS",
    description:
      lang === "ar"
        ? "نظام POS عالي الأداء باستخدام .NET 7 وEF Core مع معماريات متعددة المستأجرين وتدفقات Azure DevOps المؤتمتة."
        : "High-performance POS system built with .NET 7 and EF Core, featuring multi-tenant architecture and automated Azure DevOps workflows.",
    tags: [
      { name: ".NET 7", color: "blue-text-gradient" },
      { name: "EF Core", color: "green-text-gradient" },
      { name: "Azure DevOps", color: "pink-text-gradient" },
    ],
    image: p1,
    source_code_link: "https://github.com/osamadammag",
  },
  {
    name: lang === "ar" ? "منصة Jood" : "Jood Platform",
    description:
      lang === "ar"
        ? "منصة إدارة التبرعات والخدمات باستخدام .NET 5 وADO.NET، مع مهام خلفية مجدولة عبر Hangfire."
        : "Donation and service management platform built with .NET 5 and ADO.NET, including scheduled background tasks using Hangfire.",
    tags: [
      { name: ".NET 5", color: "blue-text-gradient" },
      { name: "ADO.NET", color: "green-text-gradient" },
      { name: "Hangfire", color: "pink-text-gradient" },
    ],
    image: p2,
    source_code_link: "https://github.com/osamadammag",
  },
  {
    name: lang === "ar" ? "تطبيق Malabi" : "Malabi App",
    description:
      lang === "ar"
        ? "تطبيق Flutter لحجز الملاعب باستخدام GetX وClean Architecture، مع Backend .NET 8 لنقاط النهاية الآمنة والقابلة للتوسع."
        : "Stadium booking Flutter app using GetX and Clean Architecture, backed by scalable .NET 8 endpoints.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: ".NET 8", color: "green-text-gradient" },
      { name: "GetX", color: "pink-text-gradient" },
    ],
    image: p3,
    source_code_link: "https://github.com/osamadammag",
  },
  {
    name: lang === "ar" ? "مدونة CodePulse" : "CodePulse Dev Blog",
    description:
      lang === "ar"
        ? "منصة تدوين React/Angular وASP.NET Core مع مصادقة JWT وإدارة محتوى Markdown متكاملة."
        : "Dev blog platform built with Angular and ASP.NET Core, featuring JWT authentication and integrated Markdown content management.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "ASP.NET Core", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
    ],
    image: threejs,
    source_code_link: "https://github.com/osamadammag",
  },
  {
    name: lang === "ar" ? "نظام LMS" : "LMS Graduation Project",
    description:
      lang === "ar"
        ? "نظام إدارة تعلم كامل المكدس باستخدام Laravel وReact، مع مصادقة Sanctum وAlgolia للبحث."
        : "Full-stack LMS using Laravel and React, with Sanctum authentication and Algolia search.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: lang === "ar" ? "بحث" : "Search", color: "pink-text-gradient" },
    ],
    image: dart,
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
    name: "EF Core",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Microservices",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
  },
  {
    name: "DDD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Azure DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
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
    name: "JWT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Django REST",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg",
  },
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
      { icon: "FaGithub", link: "https://github.com/osamadammag" },
      { icon: "FaLinkedin", link: "https://www.linkedin.com/in/osama-dammag" },
      { icon: "FaEnvelope", link: "mailto:osama.n.dammag@gmail.com" },
    ],
  };
};

export { technologies };
