// ملف الإعدادات - يمكنك تعديل هذا الملف من هاتفك بسهولة
const siteConfig = {
    // 1. روابط التواصل (اترك الرابط فارغاً '' لإخفاء الزر)
    contact: {
        whatsapp:"https://wa.me/+994409088198",
        email:"mailto:atscy@email.com",
        github:"https://github.com/atscy",
        linkedin: "atscy",
        twitter: "https://twitter.com/atscy"
    },

    // 2. الخدمات المراد عرضها (true للعرض، false للإخفاء)
    servicesVisibility: {
        awareness: true,        // التوعية بالأمن الرقمي
        securityReview: true,   // مراجعة إعدادات الأمان
        accountProtection: true,// إرشادات حماية الحسابات
        cyberBasics: true,      // أساسيات الأمن السيبراني
        programming: true,      // البرمجة وتطوير الأدوات
        authorizedTesting: true // اختبار أمني مصرح به
    },

    // بيانات الخدمات (عربي وإنجليزي)
    servicesData: [
        {
            id: 'awareness',
            icon: 'fas fa-bullhorn',
            titleAr: 'التوعية بالأمن الرقمي',
            titleEn: 'Digital Security Awareness',
            descAr: 'نشر الوعي حول أحدث التهديدات وكيفية تجنبها.',
            descEn: 'Spreading awareness about latest threats and how to avoid them.'
        },
        {
            id: 'securityReview',
            icon: 'fas fa-search-shield',
            titleAr: 'مراجعة إعدادات الأمان',
            titleEn: 'Security Settings Review',
            descAr: 'تقييم إعدادات الخصوصية والأمان للأجهزة والحسابات الشخصية.',
            descEn: 'Evaluating privacy and security settings for devices and accounts.'
        },
        {
            id: 'accountProtection',
            icon: 'fas fa-user-lock',
            titleAr: 'إرشادات حماية الحسابات',
            titleEn: 'Account Protection Guidelines',
            descAr: 'خطوات عملية لتأمين الحسابات ومنع الاختراقات.',
            descEn: 'Practical steps to secure accounts and prevent hacks.'
        },
        {
            id: 'cyberBasics',
            icon: 'fas fa-laptop-code',
            titleAr: 'أساسيات الأمن السيبراني',
            titleEn: 'Cybersecurity Basics',
            descAr: 'مشاركة المعرفة حول مفاهيم الشبكات والحماية.',
            descEn: 'Sharing knowledge on networking and protection concepts.'
        },
        {
            id: 'programming',
            icon: 'fas fa-terminal',
            titleAr: 'البرمجة وتطوير الأدوات',
            titleEn: 'Programming & Tool Dev',
            descAr: 'تطوير سكربتات وأدوات أمنية بسيطة باستخدام بايثون.',
            descEn: 'Developing simple security scripts and tools using Python.'
        },
        {
            id: 'authorizedTesting',
            icon: 'fas fa-bug',
            titleAr: 'اختبار أمني مصرح',
            titleEn: 'Authorized Security Testing',
            descAr: 'فحص ثغرات أساسي للأنظمة (يتطلب إذن مسبق ومكتوب).',
            descEn: 'Basic vulnerability scanning (Requires prior written permission).'
        }
    ]
};
