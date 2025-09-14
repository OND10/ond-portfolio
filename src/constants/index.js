import {
  csharp,
  dotnetcore,
  playwright,
  reactjs,
  tailwind,
  nodejs,
  git,
  rts,
  gdsc,
  ycit,
  p1,
  p2,
  p3,
  threejs,
  dart,
  flutter,
  python,
  postman,
  SU,
  backendIcon,
  integrationIcon,
  consultant,
  contentIcon,
} from "../assets";



export const getHeroText = (lang) => {
  return lang === "ar"
    ? {
        hello: "مرحبًا، أنا",
        name: "حسن",
        name2: "فؤاد",
        passion:
          "مطور تقني أبني حلول ذكية تجمع التقنية، التصميم، والذكاء الاصطناعي، وأحوّل الأفكار إلى واقع رقمي يواكب المستقبل.",
        contact: "تواصل معي",
        download: "تحميل السيرة الذاتية",
      }
    : {
        hello: "Hello, I'm",
        name: "Hasan",
        name2: "Fuaad",
        passion:
          "Tech developer creating smart solutions that blend technology, design, and AI, turning ideas into digital realities that shape the future.",
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
      id: "partners",
      title: lang === "ar" ? "شركائي" : "Partners",
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
    stitle: lang === "ar" ? "حسن ؟" : "Hasan ?",
    description:
      lang === "ar"
        ? `مرحبًا، أنا <span class="text-violet-500 font-tajawal font-bold">حسن فؤاد</span> أخصائي تكنولوجيا معلومات ومطور بخبرة قوية في تطوير الواجهات الخلفية واختبار التكامل وصناعة المحتوى.
عملت مع مجموعة متنوعة من العملاء، من شركات كبرى إلى فرق صغيرة، لمساعدتهم على بناء أنظمة فعالة تخدم المستخدمين بشكل أفضل.

بعيدًا عن البرمجة، نظّمت وساهمت في العديد من الفعاليات المتعلقة بالأعمال وتكنولوجيا المعلومات والذكاء الاصطناعي، لمساعدة الفرق على مواكبة التطورات التقنية المتسارعة.

أنا شغوف بالتقنيات الناشئة، خاصة الذكاء الاصطناعي، وأستمتع ببناء حلول واقعية قابلة للتوسع تُحدث فرقًا حقيقيًا. دعنا نبتكر معًا.`
        : `Hi, I'm <span class="text-violet-500 font-malgun font-bold">Hasan Fuaad</span> an IT Specialist and Developer with a solid background in backend development, integration testing, and content creation.
I’ve worked with a wide range of clients, from major companies to small teams, helping them build and optimize their systems to better serve their users.

Beyond development, I’ve organized and contributed to many events focused on Business, Information Technology, and Artificial Intelligence, helping professionals and teams stay ahead in an ever-evolving tech landscape.

I’m passionate about emerging technologies, especially AI, and I enjoy building scalable, real-world solutions that make a difference. Let’s innovate together.`,
  };
};

export const getServices = (lang) => [
  {
    title: lang === "ar" ? "مطور الواجهة الخلفية" : "Backend Developer",
    icon: backendIcon,
  },
  {
    title:
      lang === "ar" ? "مهندس اختبار التكامل " : "Integration Test Engineer",
    icon: integrationIcon,
  },
  {
    title: lang === "ar" ? "مستشار تقني" : "Tech Consultant",
    icon: consultant  ,
  },
  {
    title: lang === "ar" ? "صانع محتوى" : "Content Creator",
    icon: contentIcon,
  },
];

export const getPartners = (lang) => {
  return {
    title: lang === "ar" ? "شركائي" : "Partners",
    description:
      lang === "ar"
        ? `حيث شاركت رحلتي  <span class="text-violet-500 font-tajawal font-bold">بشغف</span> وتعاونت في مشاريع مؤثرة.`
        : `Where I shared my <span class="text-violet-500 font-malgun font-bold">passionate</span>  journey and collaborated on impactful projects.`,
    logos: [
      { src: SU, alt: "Partner 1" },
      { src: SU, alt: "Partner 2" },
      { src: SU, alt: "Partner 3" },
      { src: SU, alt: "Partner 4" },
      { src: SU, alt: "Partner 5" },
    ],
  };
};

export const getExperiences = (lang) => [
  {
    subtitle: lang === "ar" ? "ما فعلته حتى الآن " : "What I have done so far",
    ftitle: lang === "ar" ? "الخبرات العملية" : "Work Experience",
    title:
      lang === "ar" ? "مطور ومختبر برمجيات" : "Developer & Software Tester",
    company_name:
      lang === "ar"
        ? "شركة RTS، مجموعة ثروات للخدمات المالية والاستثمار"
        : "RTS Company, Tharwat for Financial Services & Investment Group",
    icon: rts,
    iconBg: "#383E56",
    date: lang === "ar" ? "2024 - الآن" : "2024 - now",
    points:
      lang === "ar"
        ? [
            "أجريت اختبارات تكامل دقيقة على واجهات برمجة التطبيقات (APIs)، مما ساعد في تحديد المشكلات وحلها لضمان أداء قوي وموثوقية عالية.",
            "طورت واجهات برمجة التطبيقات باستخدام ASP.NET، وتعاونت مع الفرق متعددة التخصصات لتحسين الأداء العام للنظام باستخدام Azure DevOps.",
            "صممت ونفذت واجهات المستخدم باستخدام Flutter، مما ساهم في تجربة سلسة واستجابة عالية عبر منصات متعددة.",
          ]
        : [
            "Conducted rigorous integration testing on system APIs, identifying and resolving issues to ensure robust functionality and performance.",
            "Developed APIs using ASP.NET, and using Azure DevOps. Collaborated closely with crossfunctional teams to optimize API performance and enhance overall system reliability.",
            "Designed and implemented user interfaces using Flutter, contributing to a seamless and responsive user experience across multiple platforms.",
          ],
  },
  {
    title: lang === "ar" ? "قائد فريق ومُتحدث" : "Team Leader & Speaker",
    company_name:
      lang === "ar"
        ? "نادي مطوري Google - جامعة سبأ"
        : "Google Developers Student Club - Saba University",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: lang === "ar" ? "2022 - 2023" : "2022 - 2023",
    points:
      lang === "ar"
        ? [
            "تعاونت مع خبراء من دول الشرق الأوسط لتصميم وتنفيذ العديد من الدورات التعليمية محليًا ودوليًا.",
            "نظّمت سلسلة من الفعاليات والأنشطة التي تركز على أحدث التطورات التقنية، وخلقت منتديات لتبادل المعرفة واستكشاف الاتجاهات الحديثة.",
          ]
        : [
            "Collaborated with experts from diverse Middle Eastern countries to design and implement several educational courses, both locally and internationally.",
            "Organized a series of events and activities focusing on the forefront of technological advancements, creating forums for knowledge exchange and exploration of the latest trends.",
          ],
  },
  {
    title:
      lang === "ar"
        ? "متدرب تقنية معلومات وإداري"
        : "IT Intern & Administration",
    company_name:
      lang === "ar"
        ? "المركز اليمني لتقنية المعلومات في التعليم العالي"
        : "Yemen Center Information Technology in Higher Education",
    icon: ycit,
    iconBg: "#383E56",
    date: lang === "ar" ? "2020 - 2023" : "2020 - 2023",
    points:
      lang === "ar"
        ? [
            "أثناء فترة تدريبي في مركز تقنية المعلومات بالتعليم العالي، طورت مهاراتي الإدارية والبرمجية، وشاركت في مشاريع متعددة مما أظهر قدرتي على التكيف والمساهمة بفعالية.",
          ]
        : [
            "During my stint as a trainee at the Information Technology Center in Higher Education, I fine-tuned both administrative and programming skills. This hands-on experience allowed me to actively participate in various projects across different business areas, showcasing adaptability and contributing meaningfully to each endeavor.",
          ],
  },
];


export const getProjects = (lang) => [
  {
    name: lang === "ar" ? "سمارت بنك" : "Smart Bank",
    description:
      lang === "ar"
        ? "سمارت بنك هو تطبيق بلغة C# يُبسط العمليات المصرفية، ويُمكن من إدارة الحسابات بكفاءة وإجراء المعاملات المالية بسهولة."
        : "Smart Bank is a C# application that simplifies banking operations, enabling efficient account management and seamless financial transactions.",
    tags: [
      {
        name: "SmartBank",
        color: "blue-text-gradient",
      },
      {
        name: lang === "ar" ? "سي شارب" : "Csharp",
        color: "green-text-gradient",
      },
      {
        name: lang === "ar" ? "البرمجة الكائنية" : "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/hasanfuaad/SmartBank-opp",
  },
  {
    name: lang === "ar" ? "نظام المستشفى" : "Hospital",
    description:
      lang === "ar"
        ? "نظام المستشفى هو تطبيق بسيط بلغة C# يُساعد على تسهيل العمليات داخل المستشفيات من خلال إدارة سجلات المرضى والمواعيد والموظفين بكفاءة."
        : "Hospital System is a small C# application designed to streamline hospital operations, managing patient records, appointments, and staff efficiently.",
    tags: [
      {
        name: "Hospital",
        color: "blue-text-gradient",
      },
      {
        name: lang === "ar" ? "سي شارب" : "Csharp",
        color: "green-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/hasanfuaad/Hospital-System",
  },
  {
    name: lang === "ar" ? "شركة eBusiness" : "eBusiness Company",
    description:
      lang === "ar"
        ? "موقع شركة eBusiness تم بناؤه باستخدام قالب مجاني مع HTML وCSS وJavaScript، لتوفير حضور إلكتروني فعال وجذاب بصريًا."
        : "eBusiness is a company website built using a free template, leveraging HTML, CSS and JavaScript, to create a functional and visually appealing online presence.",
    tags: [
      {
        name: "eBusiness",
        color: "blue-text-gradient",
      },
      {
        name: lang === "ar" ? "HTML" : "HTML",
        color: "green-text-gradient",
      },
      {
        name: lang === "ar" ? "CSS" : "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/hasanfuaad/eBusiness-Company-Website",
  },
];


const technologies = [
  {
    name: "CSHARP",
    icon: csharp,
  },
  {
    name: "DOTNETCORE",
    icon: dotnetcore,
  },
  {
    name: "PLAYWRIGHT",
    icon: playwright,
  },
  {
    name: "DART",
    icon: dart,
  },
  {
    name: "FLUTTER",
    icon: flutter,
  },

  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "adobexd",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",    
  },
  {
    name: "github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "azuredevops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  },
];

export const getTestimonials = (lang) => Array.from({ length: 8 }, () => ({
  testimonial: lang === "ar"
    ? "حسن شخص شغوف، ذو خبرة ومهارات عالية. لقد حظيت بفرصة العمل معه، وكان دائمًا يبهرني بخبرته. قدرته على حل المشكلات وتفانيه تعكس التزامه القوي بالتطور الشخصي. استمتعت كثيرًا بالعمل معه وأوصي به بشدة لأي مشروع أو فريق."
    : "Hasan is a passionate, experienced, and highly skilled professional. I’ve had the pleasure of working with him, and his expertise consistently impressed me. His problem-solving abilities and dedication reflect a strong commitment to personal growth. I thoroughly enjoyed collaborating with Hasan and highly recommend him for any project or team.",
  name: "Ahmad Alrai",
  designation: lang === "ar" ? "مطور فل ستاك" : "full-stack developer",
  company: "RTS",
  image: "https://ahmadalrai.com/_next/image?url=%2FintroImg.jpg&w=256&q=95",
}));

export const getFooter = (lang) => {
  return {
    title: lang === "ar" ? "حسن فؤاد | ملف الأعمال" : "Hasan Fuaad | Portfolio",
    description:
      lang === "ar" ? "© 2025 كل الحقوق محفوظة ل حسن فؤاد" : "© 2025 All rights reserved to Hasan Fuaad",
    socialLinks: [
      { icon: "FaGithub", link: "https://github.com/hasanfuaad" },
      { icon: "FaYoutube", link: "https://www.youtube.com/@hasanfuaad" },
      { icon: "FaLinkedin", link: "https://www.linkedin.com/in/hasan-fuaad-3591a918b/" },
      { icon: "FaFacebook", link: "https://www.facebook.com/hasan.fuaad.7/" },
      { icon: "FaInstagram", link: "https://www.instagram.com/hasan_fuaad/#" },
    ],
  };
};

export { technologies };
