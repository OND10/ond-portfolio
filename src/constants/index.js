import {
  csharp,
  dotnetcore,
  reactjs,
  tailwind,
  git,
  rts,
  postman,
  university,
  backendIcon,
  integrationIcon,
  consultant,
  contentIcon,
  tabsera,
} from "../assets";

export const getHeroText = (lang) => {
  return lang === "ar"
    ? {
        hello: "مرحبًا، أنا",
        name: "أسامة",
        name2: "دماج",
        passion:
          "مهندس برمجيات مع أكثر من سنتين خبرة في تطوير الويب الحديث باستخدام .NET و. أبني أنظمة قابلة للتوسع باستخدام Clean Architecture وMicroservices وDDD.",
        contact: "تواصل معي",
        download: "تحميل السيرة الذاتية",
      }
    : {
        hello: "Hello, I'm",
        name: "Osama",
        name2: "Dammag",
        passion:
          "Software engineer with 2+ years of modern web development experience using .NET. I build scalable systems with Clean Architecture, Microservices, and DDD.",
        contact: "Contact Me",
        download: "Download CV",
      };
};

export const getNavLinks = (lang) => {
  return [
    { id: "home", title: lang === "ar" ? "الرئيسية" : "Home" },
    { id: "about", title: lang === "ar" ? "عني" : "About" },
    { id: "work", title: lang === "ar" ? "خبراتي" : "Experience" },
    { id: "projects", title: lang === "ar" ? "أعمالي" : "Projects" },
    { id: "packages", title: lang === "ar" ? "حزم NuGet" : "NuGet" },
    { id: "tech", title: lang === "ar" ? "مهاراتي" : "Skills" },
    { id: "contact", title: lang === "ar" ? "تواصل" : "Contact" },
  ];
};

export const getAboutText = (lang) => {
  return {
    subtitle: lang === "ar" ? "نبذة عني" : "About Me",
    ftitle: lang === "ar" ? "من هو" : "Who is ",
    stitle: lang === "ar" ? "أسامة ؟" : "Osama ?",
    description:
      lang === "ar"
        ? `مرحبًا، أنا <span class="text-white font-tajawal font-bold">أسامة دماج</span>، مهندس برمجيات وخريج علوم الحاسوب، شغوف ببناء الأنظمة البرمجية الحديثة والقابلة للتوسع، ولدي أكثر من سنتين من الخبرة العملية في تطوير تطبيقات الويب باستخدام .NET وC#.

أركز بشكل أساسي على تطوير الأنظمة الخلفية (Backend) وبناء تطبيقات مؤسسية قوية باستخدام Clean Architecture وDomain-Driven Design (DDD) وMicroservices، مع اهتمام كبير بتصميم الأنظمة، فصل المسؤوليات، قابلية الاختبار والصيانة، وتحقيق أداء موثوق على المدى الطويل.

خلال رحلتي العملية، عملت على أنظمة حقيقية تتضمن Multi-Tenancy وDB-per-Tenant، وأنظمة مالية ومحاسبية، ومعالجة العمليات والمعاملات، وإدارة العملات وأسعار الصرف، بالإضافة إلى تصميم حلول تعتمد على Domain Events وBackground Jobs. كما تعاملت مع تحسين أداء قواعد البيانات والاستعلامات، Redis للتخزين المؤقت، وRabbitMQ وMassTransit لبناء أنظمة تعتمد على الرسائل والأحداث والتواصل غير المتزامن.

أهتم أيضًا بالجانب الهندسي الذي يتجاوز مجرد كتابة الكود. عملت على بناء حزم NuGet قابلة لإعادة الاستخدام، وأتمتة عمليات CI/CD باستخدام Azure DevOps، وتحليل أخطاء الـ pipelines والاستفادة من أدوات الذكاء الاصطناعي للمساعدة في تشخيص المشاكل وتحسين دورة حياة التطوير.

إلى جانب الـ Backend، أعمل على تطوير مهاراتي في بناء واجهات حديثة باستخدام React وTypeScript وNext.js، وأسعى إلى فهم النظام ككل، من تصميم الـ APIs والـ Domain Model وقواعد البيانات، إلى تجربة المستخدم وعمليات النشر والمراقبة.

أؤمن أن كتابة الكود ليست الهدف بحد ذاتها؛ الهدف هو بناء أنظمة واضحة، قابلة للتوسع، سهلة الصيانة، وتستطيع الاستمرار في التطور مع نمو المنتج. أحب تحليل المشاكل المعقدة، فهم السبب الحقيقي وراءها، ثم تصميم حلول هندسية بسيطة وفعالة بدلًا من إضافة المزيد من التعقيد.

طموحي هو الاستمرار في التطور كمهندس برمجيات، والتعمق أكثر في هندسة البرمجيات والأنظمة الموزعة وCloud-Native Architecture، والوصول إلى مستوى Senior Software Engineer قادر على تصميم وبناء أنظمة مؤسسية كبيرة من منظور تقني وهندسي متكامل.

أحب التعلم المستمر، تجربة التقنيات الجديدة، ومشاركة المعرفة، وأبحث دائمًا عن تحديات جديدة تمنحني فرصة لبناء شيء حقيقي، حل مشكلة صعبة، والنمو كمهندس في كل مشروع أعمل عليه.

إذا كنت تبحث عن شخص لا يكتفي بكتابة الكود، بل يهتم بفهم المشكلة، تصميم الحل، تحسين الأداء، وبناء نظام يمكن الاعتماد عليه وتطويره مستقبلًا، فهذا بالضبط النوع من الهندسة الذي أطمح إلى تقديمه.`
        : `Hi, I'm <span class="text-text-primary font-bold">Osama Dammag</span>, a Computer Science graduate and software engineer passionate about building modern, scalable, and maintainable software systems, with more than 2 years of hands-on experience in web development using .NET and C#.

My primary focus is backend engineering and enterprise application development, with a strong interest in Clean Architecture, Domain-Driven Design (DDD), Microservices, distributed systems, and software architecture. I care deeply about separation of concerns, maintainability, testability, performance, and designing systems that can evolve without becoming difficult to understand or maintain.

Throughout my professional journey, I have worked on real-world systems involving Multi-Tenancy and DB-per-Tenant architectures, financial and accounting applications, transaction processing, multi-currency operations, exchange-rate management, Domain Events, and background job processing. I have also worked on performance optimization, database query optimization, Redis caching, and asynchronous communication using RabbitMQ and MassTransit.

I also enjoy working on the engineering side of software development beyond simply writing application code. I have contributed to reusable NuGet packages, automated CI/CD workflows using Azure DevOps, and worked with development pipelines, build failures, logging, and automated troubleshooting workflows. I am particularly interested in how AI can be integrated into engineering workflows to analyze failures, identify root causes, and help developers resolve problems faster.

Although backend engineering is my primary focus, I also work with modern frontend technologies such as React, TypeScript, and Next.js. My goal is not simply to know multiple technologies, but to understand how the different parts of a system work together — from domain modeling and API design to databases, frontend applications, deployment, and operational concerns.

I believe that writing code is not the ultimate goal of software engineering. The real goal is to build systems that are understandable, reliable, scalable, maintainable, and capable of evolving as the business grows. I enjoy breaking down complex problems, understanding their underlying causes, and designing solutions that reduce unnecessary complexity rather than simply adding more code.

My long-term goal is to continue growing as a software engineer and go deeper into software architecture, distributed systems, and cloud-native application design. I am working toward becoming a Senior Software Engineer who can not only implement features, but also reason about architecture, make engineering trade-offs, and design reliable systems at scale.

I am naturally curious and believe strongly in continuous learning. I enjoy exploring new technologies, studying software architecture and engineering principles, experimenting with ideas, and turning what I learn into real projects and practical solutions.

If you are looking for someone who does not simply write code, but cares about understanding the problem, designing the right solution, improving performance, and building software that can be trusted and evolved over time — that is the kind of engineer I am working to become.`,
  };
};

export const getServices = (lang) => [
  {
    title: lang === "ar" ? "مطور .NET" : ".NET Developer",
    icon: backendIcon,
  },
  {
    title: lang === "ar" ? "مهندس برمجيات" : "Software Architect",
    icon: contentIcon,
  },
  {
    title: lang === "ar" ? "مطور Angular/React" : "Frontend Developer",
    icon: integrationIcon,
  },
  {
    title: lang === "ar" ? "مهندس DevOps" : "DevOps Engineer",
    icon: consultant,
  },
];

export const getPartners = (lang) => {
  return {
    title: lang === "ar" ? "تعليمي" : "Education",
    description:
      lang === "ar"
        ? `بكالوريوس في <span class="font-tajawal font-bold">علوم الحاسوب</span> من جامعة صنعاء، 2025`
        : `Bachelor of Computer Science from <span class="font-bold">Sana'a University</span>, 2025`,
    logos: [
      { src: university, alt: "Sana'a University" }
    ],
  };
};

export const getExperiences = (lang) => [
  {
    title: lang === "ar" ? "مطور Full Stack" : "Full Stack Developer",
    company_name: "RTS (Real-Time Solutions)",
    icon: rts,
    iconBg: "#383E56",
    date: lang === "ar" ? "مشروع" : "Project-Based",
    points:
      lang === "ar"
        ? [
            "Noqtah POS (noqtah.net): بنيت نظام POS عالي الأداء باستخدام .NET 7 وEF Core مع معمارية متعددة المستأجرين وتدفقات Azure DevOps المؤتمتة.",
            "Jood Platform (jood-stage.rts-ye.com): طورت منصة إدارة التبرعات والخدمات باستخدام .NET 5 وADO.NET لعمليات بيانات عالية الكفاءة، مع Hangfire للمهام الخلفية المعقدة والإشعارات المجدولة.",
            "طبقت مبادئ SOLID لتقديم حلول قابلة للتوسع وقائمة على المشاريع.",
          ]
        : [
            "Noqtah POS (noqtah.net): Built a high-performance POS system with .NET 7 and EF Core, using a robust multi-tenant architecture and automated Azure DevOps workflows.",
            "Jood Platform (jood-stage.rts-ye.com): Developed a donation and service management platform with .NET 5 and ADO.NET for high-efficiency data operations, and Hangfire for complex background tasks and scheduled notifications.",
            "Applied SOLID principles throughout, delivering scalable, project-based solutions.",
          ],
  },
  {
    title: lang === "ar" ? "مهندس برمجيات" : "Software Engineer",
    company_name: lang === "ar" ? "مؤسسة تبصرة" : "Tabsera Foundation",
    icon: tabsera,
    iconBg: "#383E56",
    date: "11/2024 - 11/2025",
    points:
      lang === "ar"
        ? [
            "طبقت مبادئ RESTful باستخدام Django REST framework محققًا تغطية اختبارات بنسبة 90٪.",
            "بنيت مكونات واجهة أمامية سريعة الاستجابة ومنظمة باستخدام React.",
          ]
        : [
            "Applied RESTful principles using Django REST framework, achieving 90% test coverage.",
            "Built responsive, well-structured frontend components using React.",
          ],
  },
];

export const getProjects = (lang) => [
  {
    name: lang === "ar" ? "منصة التجارة الإلكترونية" : "E-commerce Platform",
    description:
      lang === "ar"
        ? "منصة تجارة إلكترونية قابلة للتوسع صُممت بمعمارية الخدمات المصغرة وDomain-Driven Design (DDD). كل خدمة تتبع Vertical Slice Architecture وClean Architecture، وتتواصل عبر Ocelot API Gateway وAzure Service Bus للأحداث، مع دفع آمن عالمي عبر Stripe."
        : "A scalable e-commerce platform designed with a Microservices Architecture and Domain-Driven Design (DDD). Each service follows Vertical Slice Architecture and Clean Architecture, communicating through an Ocelot API Gateway and event-driven messaging on Azure Service Bus, with Stripe handling secure global payments.",
    tags: [
      { name: "Microservices", color: "blue-text-gradient" },
      { name: "DDD", color: "green-text-gradient" },
      { name: "VSA", color: "pink-text-gradient" },
      { name: "Azure Service Bus", color: "blue-text-gradient" },
      { name: "Stripe", color: "green-text-gradient" },
    ],
    source_code_link: "https://github.com/OND10/e-commerce_platform",
    live_link: "",
  },
  {
    name: lang === "ar" ? "منصة Mansory" : "Mansory Platform",
    description:
      lang === "ar"
        ? "منصة Full-stack لتوصيل محتوى عالي الأداء. تتضمن روبوت محادثة ذكيًا مخصصًا عبر Easy-Peasy API مُدرّب على بيانات Mansory الخاصة لدعم العملاء آليًا، مع حاويات Docker ونشر مؤتمت على Hostinger باستخدام سجلات صور مخصصة."
        : "Full-stack platform delivering high-performance content delivery. It integrates a custom AI chatbot via the Easy-Peasy API, trained on proprietary Mansory data for automated support. The whole ecosystem is containerized with Docker and deployed on Hostinger using custom image registries.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "ASP.NET Core", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
      { name: "Hostinger", color: "blue-text-gradient" },
      { name: "AI Integration", color: "green-text-gradient" },
    ],
    source_code_link: "",
    live_link: "https://www.mansooriplatform.com/",
  },
  {
    name:
      lang === "ar"
        ? "تطبيق Malabi (حجز الملاعب)"
        : "Malabi App (Sports Booking)",
    description:
      lang === "ar"
        ? "تطبيق Flutter لحجز الملاعب الرياضية الخاصة والعامة. الواجهة تستخدم GetX لإدارة الحالة مع فصل نظيف عبر MVC، والواجهة الخلفية API قابلة للتوسع بـ .NET 8 مبنية على مبادئ Clean Architecture لنقاط نهاية آمنة."
        : "Flutter-based mobile app for booking private and public sports stadiums. The frontend uses GetX for state management with a clean MVC separation, while the backend is a scalable .NET 8 API built on Clean Architecture principles exposing secure endpoints.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "GetX", color: "green-text-gradient" },
      { name: ".NET 8", color: "pink-text-gradient" },
      { name: "Clean Architecture", color: "blue-text-gradient" },
    ],
    source_code_link: "https://github.com/OND10/stadiumReservationApi",
    live_link: "",
  },
  {
    name: lang === "ar" ? "نظام نقاط البيع Noqtah" : "Noqtah POS",
    description:
      lang === "ar"
        ? "نظام POS عالي الأداء باستخدام .NET 7 وEF Core، مع معمارية متعددة المستأجرين قوية وتدفقات عمل مؤتمتة عبر Azure DevOps."
        : "High-performance POS system built with .NET 7 and EF Core, featuring a robust multi-tenant architecture and automated workflows via Azure DevOps.",
    tags: [
      { name: ".NET 7", color: "blue-text-gradient" },
      { name: "EF Core", color: "green-text-gradient" },
      { name: "Multi-tenancy", color: "pink-text-gradient" },
      { name: "Azure DevOps", color: "blue-text-gradient" },
    ],
    source_code_link: "",
    live_link: "https://www.noqtah.net/",
  },
  {
    name: lang === "ar" ? "منصة Jood" : "Jood Platform",
    description:
      lang === "ar"
        ? "منصة إدارة التبرعات والخدمات باستخدام .NET 5 وADO.NET لعمليات بيانات عالية الكفاءة، مع Hangfire لتشغيل المهام الخلفية المعقدة والإشعارات المجدولة."
        : "Donation and service management platform using .NET 5 and ADO.NET for high-efficiency data operations, with Hangfire powering complex background tasks and scheduled notifications.",
    tags: [
      { name: ".NET 5", color: "blue-text-gradient" },
      { name: "ADO.NET", color: "green-text-gradient" },
      { name: "Hangfire", color: "pink-text-gradient" },
    ],
    source_code_link: "",
    live_link: "https://jood-stage.rts-ye.com:5304/",
  },
  {
    name:
      lang === "ar"
        ? "مدونة OND Dev Blog (CodePulse)"
        : "OND Dev Blog (CodePulse)",
    description:
      lang === "ar"
        ? "منصة تدوين حديثة مبنية بـ Angular وASP.NET Core، مع مصادقة JWT وإنشاء محتوى عبر Markdown وإدارة صور سحابية."
        : "Modern blogging platform built with Angular and ASP.NET Core, featuring JWT authentication, Markdown-based content creation, and cloud-based image management.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "ASP.NET Core", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "Markdown", color: "blue-text-gradient" },
    ],
    source_code_link: "https://github.com/OND10/OND-Dev-Blog",
    live_link: "",
  },
  {
    name:
      lang === "ar" ? "نظام LMS - مشروع التخرج" : "LMS - Graduation Project",
    description:
      lang === "ar"
        ? "نظام إدارة تعلم كامل المكدس باستخدام Laravel (الواجهة الخلفية) وReact (الواجهة الأمامية)، مع مصادقة Sanctum وتكامل بحث Algolia وتحديد معدل مخصص."
        : "Full-stack Learning Management System using Laravel (backend) and React (frontend), featuring Sanctum authentication, Algolia search integration, and custom rate limiting.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Sanctum", color: "pink-text-gradient" },
      { name: lang === "ar" ? "بحث" : "Algolia", color: "blue-text-gradient" },
    ],
    source_code_link: "https://github.com/OND10",
    live_link: "",
  },
];

export const getPackages = (lang) => [
  {
    name: "OnMapper",
    category: "Object Mapper",
    description:
      lang === "ar"
        ? "مخطط كائنات خفيف وعالي الأداء لمنصة .NET. يوفر انعكاسًا محسنًا مع تخزين مؤقت، ودعمًا للتسلسلات الهرمية المتداخلة المعقدة، وواجهة برمجة غير متزامنة بالكامل. يطبق نمط Result للتعامل القوي مع الأخطاء."
        : "A high-performance, lightweight object mapper for .NET. Features optimized reflection with caching, support for nested complex hierarchies, and a fully asynchronous API. Implements the Result pattern for robust error handling.",
    install: "dotnet add package OnMapper",
    url: "https://www.nuget.org/packages/OnMapper",
  },
  {
    name: "OnTube",
    category: "YouTube Interface",
    description:
      lang === "ar"
        ? "مكتبة واجهات لمنصة .NET 6.0+ تبسط تحويل فيديوهات YouTube إلى صوت وتنزيلها بدقات مختلفة."
        : "An interface library for .NET 6.0+ that simplifies YouTube video-to-audio conversion and downloading across various resolutions.",
    install: "dotnet add package OnTube",
    url: "https://www.nuget.org/packages/OnTube",
  },
];

export const skillGroups = [
  {
    title: "Backend & Architecture",
    titleAr: "الواجهة الخلفية والمعمارية",
    skills: [
      ".NET Core",
      ".NET 6/7/8",
      "EF Core",
      "Microservices",
      "DDD",
      "Clean Architecture",
      "VSA",
      "CQRS",
      "GraphQL",
      "Multi-tenancy",
      "ADO.NET",
      "Django REST",
    ],
  },
  {
    title: "Frontend",
    titleAr: "الواجهة الأمامية",
    skills: [
      "Angular",
      "React (Vite)",
      "Next.js",
      "TanStack Router",
      "ShadCN",
      "Material UI",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    titleAr: "البنية التحتية و DevOps",
    skills: [
      "Azure DevOps (CI/CD)",
      "Docker",
      "Hangfire",
      "SQL Server",
      "Git/GitHub",
      "App Services",
      "Ocelot Gateway",
      "RabbitMQ",
    ],
  },
  {
    title: "Tools & Testing",
    titleAr: "الأدوات والاختبار",
    skills: ["XUnit", "Moq", "Postman", "Swagger", "JWT", "Azure Service Bus"],
  },
];

export const getFooter = (lang) => {
  return {
    title:
      lang === "ar" ? "أسامة دماج | ملف الأعمال" : "Osama Dammag | Portfolio",
    description:
      lang === "ar"
        ? "© 2026 كل الحقوق محفوظة ل أسامة دماج"
        : "© 2026 All rights reserved to Osama Dammag",
    socialLinks: [
      { icon: "FaGithub", link: "https://github.com/OND10" },
      { icon: "FaLinkedin", link: "https://www.linkedin.com/in/osama-dammag" },
      { icon: "FaEnvelope", link: "mailto:osama.n.dammag@gmail.com" },
    ],
  };
};

export { csharp, dotnetcore, reactjs, tailwind, git, postman };
