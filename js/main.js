(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    window.translations = {

        en: {
            find_location: "Find A Location",
            site_name: "Modern Furniture",
            home: "Home",
            about: "About Us",
            services: "Services",
            products: "Products",
            contact: "Contact Us",
            whatsapp_btn: "Contact WhatsApp",
            slider1_title: "Premium Home Finishing & Interior Design Solutions",
            slider1_desc: "We deliver high-quality interior and exterior finishing services, creating elegant living spaces with modern and customized designs tailored to your lifestyle.",
            slider1_btn1: "Get a Quote",
            slider1_btn2: "Learn More",

            slider2_title: "Creative Landscaping & Home Garden Design",
            slider2_desc: "Transform your outdoor spaces into stunning gardens with professional landscaping, decorative pathways, green areas, and modern irrigation systems.",
            slider2_btn1: "Free Consultation",
            slider2_btn2: "View Products",

            slider3_title: "Decorative Wall Cladding & CNC Panels",
            slider3_desc: "Enhance your interiors with custom CNC wall panels, decorative wall cladding, feature walls, and artistic designs that add elegance and character to any space.",
            slider3_btn1: "Contact Us",
            slider3_btn2: "Our Portfolio",

            slider4_title: "Custom CNC Decorative Panels",
            slider4_desc: "Premium CNC wall panels and partitions crafted with precision to add elegance, creativity, and modern architectural appeal to residential and commercial spaces.",
            slider4_btn1: "Get a Quote",
            slider4_btn2: "View Designs",

            slider5_title: "Modern Kitchen Design & Installation",
            slider5_desc: "Functional and stylish kitchens designed with premium materials, smart storage solutions, and custom layouts tailored to your lifestyle.",
            slider5_btn1: "Free Consultation",
            slider5_btn2: "Explore Kitchens",

            slider6_title: "Luxury Bedroom Furniture & Interiors",
            slider6_desc: "Create a relaxing and sophisticated bedroom with custom wardrobes, elegant furniture, decorative finishes, and modern interior concepts.",
            slider6_btn1: "Contact Us",
            slider6_btn2: "View Collection",

            slider7_title: "Decorative Wall Cladding Solutions",
            slider7_desc: "Transform plain walls into stunning focal points with decorative wall cladding, textured finishes, modern panels, and custom feature wall designs.",
            slider7_btn1: "Start Your Project",
            slider7_btn2: "Our Portfolio",

            slider8_title: "Elegant Living Room Design & Furniture",
            slider8_desc: "Create a welcoming and stylish living space with custom TV units, luxury seating, decorative wall features, modern lighting, and premium furniture designed for comfort and elegance.",
            slider8_btn1: "Get a Free Consultation",
            slider8_btn2: "View Living Rooms",
            about_title: "About Us",
            about_heading: "Modern Furniture - Experts in Home Finishing & Interior Design.",
            about_description: "Modern Furniture is a leading company specializing in home finishing, interior decoration, wall cladding, CNC panels, and custom design solutions. We transform residential spaces into elegant, functional, and modern environments by combining creativity, premium materials, and professional craftsmanship.",
            about_feature_1: "Interior Finishing",
            about_feature_2: "Custom Furniture Design",
            about_feature_3: "Wall Cladding & CNC Panels",
            about_feature_4: "Home & Garden Decoration",
            about_btn: "Discover More",
            about_customers_1: "500+ Satisfied",
            about_customers_2: "Homeowners",
            about_counter_1: "Projects Completed",
            about_counter_2: "Years Of Experience",
            about_counter_3: "Team Members",
            services_title: "Our Services",
            services_heading: "Professional Home Finishing & Interior Design Solutions",

            service_1_title: "Home Finishing",
            service_1_desc: "Complete interior and exterior finishing services with premium materials, modern designs, and high-quality workmanship.",

            service_2_title: "Interior Decoration",
            service_2_desc: "Elegant interior decoration solutions tailored to your lifestyle, combining beauty, comfort, and functionality.",

            service_3_title: "CNC Panels & Wall Cladding",
            service_3_desc: "Custom CNC panels and decorative wall cladding that add luxury, depth, and unique character to your interiors.",

            service_4_title: "Garden & Landscapes",
            service_4_desc: "Creative landscaping and home garden solutions featuring green spaces, decorative pathways, and outdoor living areas.",

            read_more: "Read More",
            view_all_services: "View All Services",
            products_title: "Our Products",
            products_subtitle: "Explore Our Latest Products",

            product1_name: "CNC Wall Panels",
            product1_desc: "Custom CNC decorative wall panels with modern and elegant designs.",

            product2_name: "Wall Cladding",
            product2_desc: "Premium decorative wall cladding solutions for homes and offices.",

            product3_name: "Home Gardens",
            product3_desc: "Beautiful landscaping and garden designs for outdoor living spaces.",

            product4_name: "Cabinets",
            product4_desc: "Custom-built storage cabinets designed for functionality and style.",

            product5_name: "Modern Kitchens",
            product5_desc: "Luxury kitchen designs combining elegance, durability, and comfort.",

            product6_name: "Bedrooms",
            product6_desc: "Comfortable and stylish bedroom furniture tailored to your lifestyle.",

            product7_name: "Living Rooms",
            product7_desc: "Elegant living room interiors designed for comfort and modern living.",
            contact_title: "Contact Us",
            contact_subtitle: "Get In Touch With Us",
            contact_desc: "Contact us today and bring your ideas to life with quality craftsmanship.",

            contact_address_title: "Addresses",
            contact_address_text: "3024 Abu Bakr Al Razi, 8161, Industrial Area, Dammam 32442, Saudi Arabia",

            contact_mobile_title: "Mobile",
            contact_email_title: "Email",

            contact_name: "Your Name",
            contact_email: "Your Email",
            contact_phone: "Your Phone",
            contact_project: "Your Project",
            contact_subject: "Subject",
            contact_message: "Message",

            contact_btn: "Send Message",
            footer_about_title: "About Us",
            footer_about_desc: "We specialize in premium interior finishing, custom furniture, CNC wall panels, decorative wall cladding, modern kitchens, bedrooms, living rooms, wardrobes, and home landscaping solutions.",

            footer_links_title: "Quick Links",

            footer_services_title: "Our Services",

            footer_service_1: "CNC Wall Panels",
            footer_service_2: "Wall Cladding",
            footer_service_3: "Modern Kitchens",
            footer_service_4: "Bedrooms",
            footer_service_5: "Living Rooms",
            footer_service_6: "Home Gardens",

            footer_contact_title: "Contact Information",

            footer_address: "3024 Abu Bakr Al Razi, 8161, Industrial Area, Dammam 32442, Saudi Arabia",

            footer_whatsapp: "WhatsApp Support",

            copyright_text: "All Rights Reserved.",
            copyright_designed: "Designed By",
            about_page_title: "About Us",
            pages: "Pages",
            contact_page_title: "Contact Us",
            // Products Page
            products_page_title: "Our Products",
            breadcrumb_home: "Home",
            breadcrumb_pages: "Pages",
            breadcrumb_products: "Products",
            services_page_title: "Our Services",

            breadcrumb_home: "Home",
            breadcrumb_pages: "Pages",
            breadcrumb_services: "Services",


            services_section_title: "Our Services",
            services_section_desc: "Professional Home Finishing & Interior Design Solutions",

            service_cnc_title: "CNC Panels",
            service_cnc_desc: "Custom CNC decorative panels designed to enhance walls, partitions, and interiors with modern and elegant patterns.",

            service_cladding_title: "Wall Cladding",
            service_cladding_desc: "Premium wall cladding solutions that add texture, style, and a sophisticated appearance to any space.",

            service_kitchen_title: "Modern Kitchens",
            service_kitchen_desc: "Stylish and functional kitchen designs with premium finishes, smart storage, and modern layouts.",

            service_wardrobe_title: "Custom Wardrobes",
            service_wardrobe_desc: "Built-in wardrobes and storage solutions crafted to maximize space while maintaining elegance.",

            service_bedroom_title: "Bedrooms Designs",
            service_bedroom_desc: "Comfortable and luxurious bedroom interiors designed to create a relaxing and elegant atmosphere.",

            service_living_title: "Living Rooms",
            service_living_desc: "Modern living room concepts combining comfort, beauty, and functionality for everyday living.",

            service_garden_title: "Home Gardens",
            service_garden_desc: "Professional landscaping and garden designs that transform outdoor spaces into beautiful retreats.",

            read_more: "Read More",
        },

        ar: {
           find_location: "موقعنا على الخريطة",
           site_name: "مودرن فيرنتشر",
           home: "الرئيسية",
           about: "من نحن",
           services: "خدماتنا",
           products: "منتجاتنا",
           contact: "تواصل معنا",
           whatsapp_btn: "تواصل واتساب",
           slider1_title: "حلول التشطيبات المنزلية والتصميم الداخلي الفاخرة",
            slider1_desc: "نقدم خدمات تشطيبات داخلية وخارجية عالية الجودة لتصميم مساحات معيشية أنيقة وعصرية تناسب أسلوب حياتك.",
            slider1_btn1: "اطلب عرض سعر",
            slider1_btn2: "اعرف المزيد",

            slider2_title: "تصميم الحدائق المنزلية وتنسيق المساحات الخارجية",
            slider2_desc: "حوّل مساحتك الخارجية إلى حديقة مميزة مع خدمات تنسيق الحدائق والممرات وأنظمة الري الحديثة.",
            slider2_btn1: "استشارة مجانية",
            slider2_btn2: "عرض المنتجات",

            slider3_title: "التكسيات الجدارية ولوحات CNC",
            slider3_desc: "أضف لمسة فريدة لمنزلك من خلال التكسيات الجدارية ولوحات CNC المصممة باحترافية عالية.",
            slider3_btn1: "تواصل معنا",
            slider3_btn2: "معرض الأعمال",

            slider4_title: "لوحات CNC ديكورية مخصصة",
            slider4_desc: "تصميم وتصنيع وتركيب لوحات CNC عصرية تضيف لمسة فنية راقية للمنازل والمشاريع التجارية.",
            slider4_btn1: "اطلب عرض سعر",
            slider4_btn2: "عرض التصاميم",

            slider5_title: "تصميم وتركيب المطابخ الحديثة",
            slider5_desc: "مطابخ عملية وعصرية بخامات عالية الجودة وحلول تخزين ذكية تناسب احتياجاتك.",
            slider5_btn1: "استشارة مجانية",
            slider5_btn2: "استكشف المطابخ",

            slider6_title: "غرف نوم فاخرة وأثاث عصري",
            slider6_desc: "نوفر غرف نوم متكاملة بخزائن مخصصة وتشطيبات راقية تمنحك الراحة والأناقة.",
            slider6_btn1: "تواصل معنا",
            slider6_btn2: "عرض الأعمال",

            slider7_title: "حلول التكسيات الجدارية الحديثة",
            slider7_desc: "حوّل الجدران العادية إلى عناصر جمالية مميزة باستخدام أحدث أنواع التكسيات والديكورات.",
            slider7_btn1: "ابدأ مشروعك",
            slider7_btn2: "معرض الأعمال",

            slider8_title: "تصميم وتجهيز غرف المعيشة",
            slider8_desc: "غرف معيشة أنيقة تضم وحدات تلفاز وديكورات وإضاءة وأثاث فاخر يجمع بين الراحة والجمال.",
            slider8_btn1: "استشارة مجانية",
            slider8_btn2: "عرض غرف المعيشة",
            about_title: "من نحن",
            about_heading: "مودرن فيرنتشر - خبراء التشطيبات المنزلية والتصميم الداخلي",
            about_description: "مودرن فيرنتشر شركة متخصصة في التشطيبات المنزلية والديكورات الداخلية والتكسيات الجدارية ولوحات CNC والحلول التصميمية المخصصة. نحول المساحات السكنية إلى بيئات عصرية وأنيقة وعملية من خلال الجمع بين الإبداع والخامات عالية الجودة والتنفيذ الاحترافي.",
            about_feature_1: "التشطيبات الداخلية",
            about_feature_2: "تصميم الأثاث حسب الطلب",
            about_feature_3: "التكسيات الجدارية ولوحات CNC",
            about_feature_4: "تنسيق الحدائق والديكور المنزلي",
            about_btn: "اكتشف المزيد",
            about_customers_1: "+500 عميل سعيد",
            about_customers_2: "من ملاك المنازل",
            about_counter_1: "مشروع مكتمل",
            about_counter_2: "سنة خبرة",
            about_counter_3: "أعضاء الفريق",
            services_title: "خدماتنا",
            services_heading: "حلول احترافية للتشطيبات المنزلية والتصميم الداخلي",

            service_1_title: "التشطيبات المنزلية",
            service_1_desc: "خدمات تشطيب داخلية وخارجية متكاملة باستخدام خامات عالية الجودة وتصاميم عصرية وتنفيذ احترافي.",

            service_2_title: "الديكورات الداخلية",
            service_2_desc: "حلول ديكور داخلية أنيقة مصممة بما يتناسب مع أسلوب حياتك مع تحقيق التوازن بين الجمال والراحة والوظيفة.",

            service_3_title: "لوحات CNC والتكسيات الجدارية",
            service_3_desc: "تصميم وتنفيذ لوحات CNC وتكسيات جدارية فاخرة تضيف لمسة مميزة وعصرية إلى المساحات الداخلية.",

            service_4_title: "تنسيق الحدائق",
            service_4_desc: "تصميم وتنفيذ الحدائق المنزلية والمساحات الخضراء والممرات الخارجية بأساليب مبتكرة وجذابة.",

            read_more: "المزيد",
            view_all_services: "عرض جميع الخدمات",
            products_title: "منتجاتنا",
            products_subtitle: "استكشف أحدث منتجاتنا",

            product1_name: "ألواح CNC",
            product1_desc: "ألواح CNC ديكورية مخصصة بتصاميم عصرية وأنيقة.",

            product2_name: "بدائل الخشب والكسوة الجدارية",
            product2_desc: "حلول كسوة جدارية ديكورية فاخرة للمنازل والمكاتب.",

            product3_name: "الحدائق المنزلية",
            product3_desc: "تصميم وتنسيق حدائق منزلية مميزة للمساحات الخارجية.",

            product4_name: "الخزائن",
            product4_desc: "خزائن مصممة خصيصًا تجمع بين العملية والأناقة.",

            product5_name: "المطابخ الحديثة",
            product5_desc: "تصاميم مطابخ فاخرة تجمع بين الجمال والمتانة والراحة.",

            product6_name: "غرف النوم",
            product6_desc: "أثاث غرف نوم أنيق ومريح مصمم ليتناسب مع أسلوب حياتك.",

            product7_name: "غرف المعيشة",
            product7_desc: "تصاميم غرف معيشة عصرية تجمع بين الراحة والفخامة.",
            contact_title: "تواصل معنا",
            contact_subtitle: "يسعدنا التواصل معك",
            contact_desc: "تواصل معنا اليوم وحوّل أفكارك إلى واقع بأعلى معايير الجودة والاحترافية.",

            contact_address_title: "العنوان",
            contact_address_text: "3024 أبو بكر الرازي، 8161، المنطقة الصناعية، الدمام 32442، المملكة العربية السعودية",

            contact_mobile_title: "الجوال",
            contact_email_title: "البريد الإلكتروني",

            contact_name: "الاسم الكامل",
            contact_email: "البريد الإلكتروني",
            contact_phone: "رقم الجوال",
            contact_project: "نوع المشروع",
            contact_subject: "الموضوع",
            contact_message: "الرسالة",

            contact_btn: "إرسال الرسالة",
            footer_about_title: "من نحن",
            footer_about_desc: "نحن متخصصون في التشطيبات الداخلية الفاخرة، والأثاث المخصص، وألواح CNC الجدارية، وكسوة الجدران الديكورية، والمطابخ الحديثة، وغرف النوم، وغرف المعيشة، وخزائن الملابس، وتنسيق الحدائق المنزلية.",

            footer_links_title: "روابط سريعة",

            footer_services_title: "خدماتنا",

            footer_service_1: "ألواح CNC الجدارية",
            footer_service_2: "كسوة الجدران",
            footer_service_3: "المطابخ الحديثة",
            footer_service_4: "غرف النوم",
            footer_service_5: "غرف المعيشة",
            footer_service_6: "الحدائق المنزلية",

            footer_contact_title: "معلومات التواصل",

            footer_address: "3024 أبو بكر الرازي، 8161، المنطقة الصناعية، الدمام 32442، المملكة العربية السعودية",

            footer_whatsapp: "الدعم عبر واتساب",

            copyright_text: "جميع الحقوق محفوظة.",
            copyright_designed: "تصميم وتطوير",
            about_page_title: "من نحن",
            pages: "الصفحات",
            contact_page_title: "تواصل معنا",
            // Products Page
            products_page_title: "منتجاتنا",
            breadcrumb_home: "الرئيسية",
            breadcrumb_pages: "الصفحات",
            breadcrumb_products: "المنتجات",
            services_page_title: "خدماتنا",

            breadcrumb_home: "الرئيسية",
            breadcrumb_pages: "الصفحات",
            breadcrumb_services: "الخدمات",



            services_section_title: "خدماتنا",
            services_section_desc: "حلول احترافية للتشطيبات المنزلية والتصميم الداخلي",

            service_cnc_title: "ألواح CNC",
            service_cnc_desc: "ألواح CNC ديكورية مخصصة لتجميل الجدران والفواصل والمساحات الداخلية بتصاميم عصرية وأنيقة.",

            service_cladding_title: "التيكسيات الجدارية",
            service_cladding_desc: "حلول متطورة للتيكسيات الجدارية تضيف لمسة جمالية وملمساً فاخراً لأي مساحة.",

            service_kitchen_title: "المطابخ الحديثة",
            service_kitchen_desc: "تصميم وتنفيذ مطابخ عصرية تجمع بين الجمال العملي والتخزين الذكي والخامات الفاخرة.",

            service_wardrobe_title: "خزائن الملابس",
            service_wardrobe_desc: "خزائن ملابس مخصصة وحلول تخزين ذكية للاستفادة القصوى من المساحات.",

            service_bedroom_title: "تصميم غرف النوم",
            service_bedroom_desc: "تصميم غرف نوم فاخرة ومريحة توفر أجواء هادئة وأنيقة.",

            service_living_title: "غرف المعيشة",
            service_living_desc: "تصاميم عصرية لغرف المعيشة تجمع بين الراحة والجمال والوظائف العملية.",

            service_garden_title: "الحدائق المنزلية",
            service_garden_desc: "تنسيق حدائق احترافي يحول المساحات الخارجية إلى أماكن مميزة للاسترخاء والاستمتاع.",

            read_more: "اقرأ المزيد",
        }

    };

    window.applyTranslations = function(lang){

        $('[data-key]').each(function(){

            let key = $(this).data('key');

            if(window.translations[lang] &&
               window.translations[lang][key]){

                let icon = $(this).find('i').first();

                if(icon.length){
                    $(this).html(
                        icon.prop('outerHTML') + ' ' +
                        window.translations[lang][key]
                    );
                }else{
                    $(this).text(
                        window.translations[lang][key]
                    );
                }

                $('[data-key-placeholder]').each(function () {

                    let key = $(this).data('key-placeholder');

                    if(window.translations[lang][key]){
                        $(this).attr('placeholder', window.translations[lang][key]);
                    }

                });
            }

        });

    };


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
            } else {
                $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
            }
        } else {
            $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });



    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    document.addEventListener("DOMContentLoaded", function () {

        const currentLang = document.getElementById("currentLang");

        // اللغة المحفوظة
        let lang = localStorage.getItem("site_lang") || "en";

        currentLang.textContent = (lang === "ar") ? "ع" : "EN";

        document.querySelectorAll(".lang-option").forEach(item => {
            item.addEventListener("click", function(e){
                e.preventDefault();

                let selectedLang = this.dataset.lang;

                localStorage.setItem("site_lang", selectedLang);

                currentLang.textContent =
                    selectedLang === "ar" ? "ع" : "EN";

                location.reload(); // اختياري
            });
        });

    });


    document.addEventListener("DOMContentLoaded", function () {

        const currentLang = localStorage.getItem("lang") || "en";

        function updateLanguage(lang){
            document.getElementById("currentLang").textContent =
                lang === "ar" ? "ع" : "EN";

            document.getElementById("currentLangMobile").textContent =
                lang === "ar" ? "ع" : "EN";

            localStorage.setItem("lang", lang);
        }

        updateLanguage(currentLang);

        document.querySelectorAll(".lang-option").forEach(item => {
            item.addEventListener("click", function(e){
                e.preventDefault();

                const lang = this.dataset.lang;
                updateLanguage(lang);

                // لو عندك ملفات ترجمة حط هنا reload أو change language
                location.reload();
            });
        });

    });

    //Set Language

    window.setLang = function(lang){

        localStorage.setItem('site_lang', lang);

        $('#currentLang').text(lang === 'ar' ? 'ع' : 'EN');
        $('#currentLangMobile').text(lang === 'ar' ? 'ع' : 'EN');

        $('html')
            .attr('lang', lang)
            .attr('dir', lang === 'ar' ? 'rtl' : 'ltr');

        $('body').toggleClass('rtl', lang === 'ar');
        $('body').toggleClass('ltr', lang !== 'ar');

        applyTranslations(lang);
        initHeroCarousel(lang);
        initProjectCarousel(lang);
    };

    $(function(){

        let savedLang = localStorage.getItem('site_lang') || 'en';

        setLang(savedLang);

    });


})(jQuery);

