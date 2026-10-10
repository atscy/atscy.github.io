// منطق واجهة المستخدم واللغة
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. تبديل اللغة ---
    const langToggle = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    let currentLang = 'ar'; // اللغة الافتراضية

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // تحديث اتجاه الصفحة والكلاس
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.body.className = currentLang;
        
        // تحديث النص في زر التبديل
        langLabel.textContent = currentLang === 'ar' ? 'EN' : 'AR';

        // تحديث جميع النصوص التي تحتوي على بيانات لغوية
        document.querySelectorAll('[data-ar]').forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });
    });

    // --- 2. القائمة الجانبية للجوال ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. بناء قسم الخدمات ديناميكياً بناءً على config.js ---
    const servicesGrid = document.getElementById('services-grid');
    if (typeof siteConfig !== 'undefined' && siteConfig.servicesData) {
        siteConfig.servicesData.forEach(service => {
            if (siteConfig.servicesVisibility[service.id]) {
                const card = document.createElement('div');
                card.className = 'glass-card text-center';
                card.innerHTML = `
                    <i class="${service.icon} service-icon"></i>
                    <h3 data-ar="${service.titleAr}" data-en="${service.titleEn}">${currentLang === 'ar' ? service.titleAr : service.titleEn}</h3>
                    <p data-ar="${service.descAr}" data-en="${service.descEn}">${currentLang === 'ar' ? service.descAr : service.descEn}</p>
                `;
                servicesGrid.appendChild(card);
            }
        });
    }

    // --- 4. بناء روابط التواصل ديناميكياً ---
    const contactDiv = document.getElementById('contact-links');
    if (typeof siteConfig !== 'undefined' && siteConfig.contact) {
        const c = siteConfig.contact;
        
        if(c.whatsapp) {
            contactDiv.innerHTML += `<a href="${c.whatsapp}" target="_blank" class="btn btn-outline"><i class="fab fa-whatsapp"></i> <span data-ar="واتساب" data-en="WhatsApp">${currentLang==='ar'?'واتساب':'WhatsApp'}</span></a>`;
        }
        if(c.email) {
            contactDiv.innerHTML += `<a href="${c.email}" target="_blank" class="btn btn-outline"><i class="fas fa-envelope"></i> <span data-ar="إيميل" data-en="Email">${currentLang==='ar'?'إيميل':'Email'}</span></a>`;
        }
        if(c.github) {
            contactDiv.innerHTML += `<a href="${c.github}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> <span data-ar="جيت هاب" data-en="GitHub">${currentLang==='ar'?'جيت هاب':'GitHub'}</span></a>`;
        }
        if(c.linkedin) {
            contactDiv.innerHTML += `<a href="${c.linkedin}" target="_blank" class="btn btn-outline"><i class="fab fa-linkedin"></i> <span data-ar="لينكد إن" data-en="LinkedIn">${currentLang==='ar'?'لينكد إن':'LinkedIn'}</span></a>`;
        }
        if(c.twitter) {
            contactDiv.innerHTML += `<a href="${c.twitter}" target="_blank" class="btn btn-outline"><i class="fab fa-twitter"></i> <span data-ar="تويتر" data-en="Twitter">${currentLang==='ar'?'تويتر':'Twitter'}</span></a>`;
        }

        // إذا لم يتم وضع أي رابط
        if(contactDiv.innerHTML.trim() === '') {
            contactDiv.innerHTML = `<p class="note" data-ar="بيانات التواصل غير متوفرة حالياً." data-en="Contact details currently unavailable.">${currentLang==='ar'?'بيانات التواصل غير متوفرة حالياً.':'Contact details currently unavailable.'}</p>`;
        }
    }
});
