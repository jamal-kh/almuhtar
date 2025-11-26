import {
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter ,
  FaLinkedin,
  FaPalette,
  FaTruck,
  FaStar,
  FaLeaf,
  FaShield,
  FaClock,
  FaTiktok,
} from "react-icons/fa6";

// Site Content Configuration
// جميع محتويات الموقع من نصوص، عناوين، وصور لتسهيل التعديل

export const siteContent = {
  // Header
  header: {
    logo: "@/public/assets/logo.png",
    navItems: [
      { label: "الرئيسية", id: "home" },
      { label: "من نحن", id: "about" },
      { label: "خدماتنا", id: "services" },
      { label: "تصاميمنا", id: "designs" },
      { label: "لماذا نحن", id: "why-us" },
    ],
    ctaButton: "شاهد التصاميم",
  },

  // Hero Section
  hero: {
    title: "حوّل مساحتك",
    subtitle:
      "المختار… حيث يلتقي الذوق الرفيع مع جودة الأثاث",
    buttons: {
      primary: "استكشف المجموعة",
      secondary: "اعرف المزيد",
    },
    imageAlt: "صالة عرض الأثاث الفاخر",
  },

  // About Section
  about: {
    title: "من نحن",
    description1:
      "المختار فريق متخصص في تقديم أجمل حلول الأثاث والتصاميم المنزلية، نحن نجمع بين الجودة و الأناقة و الأسعار المناسبة لأثاث منزلك",
    description2:
      "هدفنا هو تمكينك من تصميم منزل أحلامك بقطع أثاث تعبر عن ذوقك الرفيع",
    mission: {
      title: "رسالتنا",
      description:
        "تصميم وتقديم أثاث يمزج بسلاسة بين الجمال الابداع والاستدامة، مما تميز حياة عملائنا ومساحاتهم.",
    },
    vision: {
      title: "رؤيتنا",
      description:
        "أن نكون الفريق الرائد في تصميم الأثاث المعترف بها للابتكار والحرفية عالية الجودة وإنشاء قطع فريدة تصمد أمام اختبار الزمن.",
    },
  },

  // Services Section
  services: {
    title: "خدماتنا",
    subtitle:
      "حلول شاملة لجميع احتياجات الأثاث الخاصة بك، من التصميم إلى التسليم",
    items: [
      {
        title: "تصميم مخصص",
        description:
          "أثاث مصمم خصيصاً ليتناسب مع أسلوبك ومتطلبات المساحة الخاصة بك.",
        imageAlt: "تصميم أثاث مخصص",
        icon: FaPalette,
      },
      {
        title: "الشحن",
        description:
          "نحن نقوم بشحن البضائع إلى وجهات متعددة حول العالم بكفاءة و موثوقية عالية",
        imageAlt: "توصيل أثاث",
        icon: FaTruck,

      },
      {
        title: "ضمان الجودة",
        description:
          "مواد وحرفية فاخرة مدعومة بضمان الرضا الخاص لدى العميل.",
        imageAlt: "ضمان الجودة",
        icon: FaStar,
      },
    ],
  },

  // Designs Section
  designs: {
    title: "تصاميمنا",
    subtitle: "اكتشف كيف يمكننا مساعدتك في جعل منزلك مميزاً",
    items: [
      {
        title: "مجموعة مطابخ عصرية",
        category: "مطبخ",
        imageAlt: "مطبخ عصرية"
      },
      {
        title: "مجموعة غرف نوم فاخرة",
        category: "غرفة نوم",
        imageAlt: "غرفة نوم فاخرة"
      },
      {
        title: "ديكور مصمم باسلوب كلاسيكي فخم",
        category: "ديكور منزلي",
        imageAlt: "ديكور باسلوب كلاسيكي فخم"
      },
    ],
  },

  // Why Choose Us Section
  // Why Choose Us Section
whyChoose: {
  title: "لماذا تختارنا",
  subtitle: "اكتشف ما يميزنا في عالم تصميم الأثاث الفاخر",
  reasons: [
    {
      title: "جودة فائقة",
      description:
        "نستخدم فقط أفضل المواد ونوظف حرفيين متمرسين لضمان أن كل قطعة تلبي معاييرنا الصارمة.",
      icon: FaStar,
    },
    {
      title: "مواد مستدامة",
      description:
        "ملتزمون بالمسؤولية البيئية، نحصل على مواد صديقة للبيئة ونمارس التصنيع المستدام.",
      icon: FaLeaf,
    },
    {
      title: "ضمان مدى الحياة",
      description:
        "جميع منتجاتنا مدعومة بضمان شامل ودعم مخصص للعملاء.",
      icon: FaShield,
    },
    {
      title: "الالتزام بالوقت",
      description:
        "نحرص على تسليم مشاريعنا في الوقت المحدد مع الحفاظ على أعلى معايير الجودة.",
      icon: FaClock,
    },
  ],
},

  // Footer Content
  footer: {
    companyName: "المختار",
    companyDescription:
      "نحن، بفخر واعتزاز، نقدم لك خلاصة خبرتنا وشغفنا في عالم تصميم الأثاث. مهمتنا هي أن نوفر لك قطعًا فريدة تجمع بين الأصالة والمعاصرة،و تضيف على منزلك لمسة من الأناقة والتميز. نحن نأمل أن يكون اختيارك لنا بداية لعلاقة طويلة ومثمرة، وأن يصبح أثاثنا جزءًا من ذكرياتك الجميلة في مساحة منزلك",
    quickLinks: ["من نحن", "خدماتنا", "تصاميمنا", "لماذا نحن", "اتصل بنا"],
    contact: {
      title: "اتصل بنا",
      phone: "+90 534 893 94 41",
      email: "almuhtarconcept@gmail.com",
    },
    socialLinks: [
      { label: "Facebook", icon: FaFacebook,href: "https://www.facebook.com/share/172ehDXZj7/", color: "bg-blue-600 hover:bg-blue-700"},
      { label: "Instagram",icon: FaInstagram, href: "https://www.instagram.com/almuhtar024concept?igsh=eHQzOGdvbGtkenlm", color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"},
      { label: "X", icon: FaSquareXTwitter,href: "https://x.com/almuhtar024?t=9Dci5DgB6SJKOrboM2dRyQ&s=09", color: "bg-sky-500 hover:bg-sky-600" },
      { label: "LinkedIn", icon: FaLinkedin,href: "https://www.linkedin.com/in/%D8%A7%D9%84%D9%85%D9%8F%D8%AE%D9%92%D8%AA%D9%8E%D8%A7%D8%B1-almuhtar-7a1493387",color: "bg-blue-700 hover:bg-blue-800" },
      { label: "TikTok", icon: FaTiktok,href: "https://www.tiktok.com/@almuhtar_concept?_t=ZS-904gfL5qRcW&_r=1", color: "bg-[#FE2C55] hover:bg-[#e3274c]" },

    ],
    copyright: "© 2024 المختار. جميع الحقوق محفوظة.",
  },
};

export default siteContent;
