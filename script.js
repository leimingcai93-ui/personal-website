// Translations
const translations = {
    en: {
        // Navigation
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            contact: 'Contact'
        },
        // Hero Section
        hero: {
            greeting: "Hi, I'm ",
            name: 'Leiming Cai',
            title: 'Software Engineer III at Expedia',
            description: "I build end-to-end solutions across the entire stack—from React frontends and Node.js/Spring Boot backends to Kubernetes infrastructure and deployment pipelines. Passionate about TypeScript/React, reliability engineering, and AI-assisted development, I deliver scalable systems with strong observability and developer productivity in mind.",
            viewWork: 'View My Work',
            getInTouch: 'Get In Touch'
        },
        // About Section
        about: {
            title: 'About Me',
            paragraphs: [
                "Software engineer with experience building developer-facing tooling, reliability guardrails, and large TypeScript/React applications in high-traffic production environments. I focus on safe, observable, and debuggable systems: canary analysis, SLO-driven rollouts, and strong logging/telemetry that help engineers move fast without breaking users.",
                "Recently led the integration of business-metric canary analysis (ACA) into our deployment pipeline, designing brand/product-line-aware routing and alerting, modernizing front-end state management and dialog patterns, and building full-stack personalization features.",
                "I'm excited about AI-assisted coding as a way to amplify developer productivity and would like to work closer to the tools and models themselves."
            ],
            info: {
                location: 'Location',
                locationValue: 'Seattle',
                email: 'Email',
                emailValue: 'leimingcai93@gmail.com',
                education: 'Education',
                educationValue: 'USC - Master of Engineering'
            }
        },
        // Experience Section
        experience: {
            title: 'Experience',
            items: [
                {
                    role: 'Software Engineer III',
                    company: 'Expedia',
                    date: 'Sep 2025 - Present',
                    details: [
                        'Led core parts of the MobX v4 to v6 migration for shopping-pwa, refactoring critical state stores (RoomModel, CurrentHotelStore, MapStore) to use explicit makeObservable patterns',
                        'Built custom hooks (useAfterDialogClosesCallback) that synchronize dialog close behavior with URL/search-param changes, eliminating race conditions',
                        'Led onroad bulkheading solution rollout for Experience API Pricing (EAP), designing Spinnaker pipelines and VirtualService delegation to reduce blast radius',
                        'Improved reliability and latency SLOs by customizing configurations, investigating anomalies, and closing incident follow-ups'
                    ]
                },
                {
                    role: 'Software Engineer II',
                    company: 'Expedia',
                    date: '2023 - Aug 2025',
                    details: [
                        'Implemented bulkheading strategy using Istio service mesh, isolating brand/product-line traffic and reducing cross-blast-radius incidents',
                        'Enabled shadow environment and traffic mirroring for critical services, allowing high-risk changes to be validated against production-like traffic',
                        'Integrated automatic canary analysis (ACA) with key business metrics, enabling data-driven go/no-go decisions',
                        'Improved observability by building focused Datadog dashboards and adding custom headers to enrich Splunk logs',
                        'Developed Member Celebration A/B test on global Nav Bar, driving significant positive lift in conversion rate (CVR)'
                    ]
                },
                {
                    role: 'Software Engineer I',
                    company: 'Expedia',
                    date: '2021 - 2023',
                    details: [
                        'Carried out new A/B test SDK EGTnl adoption at the backend Experience-api Layer',
                        'Updated PDP (Property Details Page) MOD (Member only deal) Messaging Card for Black Friday Campaign',
                        'Implemented new amenity filter with changes across multiple backend services'
                    ]
                },
                {
                    role: 'Test and Reliability Engineer',
                    company: 'Global Communication Semiconductors',
                    date: '2017 - 2021',
                    details: [
                        'Implemented, maintained, and debugged test and data analysis programs using VB6, C, and VBA',
                        'Analyzed and evaluated test results to find root cause of semiconductor failures'
                    ]
                }
            ]
        },
        // Skills Section
        skills: {
            title: 'Skills & Tech Stack',
            categories: {
                languages: 'Languages',
                frameworks: 'Frameworks & Libraries',
                cloud: 'Cloud & DevOps',
                ai: 'AI Tools'
            },
            specializationsTitle: 'Specializations',
            specializations: [
                {
                    title: 'TypeScript & React',
                    description: 'Full-stack development, state management (MobX), custom hooks'
                },
                {
                    title: 'Reliability Engineering',
                    description: 'Canary analysis, SLO-driven rollouts, bulkheading strategies'
                },
                {
                    title: 'Observability',
                    description: 'Custom dashboards, telemetry, structured logging'
                },
                {
                    title: 'Performance',
                    description: 'State management optimization, latency reduction'
                },
                {
                    title: 'AI-Assisted Development',
                    description: 'Claude Code, MCP integration, developer productivity'
                }
            ]
        },
        // Contact Section
        contact: {
            title: 'Get In Touch',
            description: "Interested in discussing software engineering, reliability, or AI-assisted development? I'd love to hear from you.",
            based: 'Based in Seattle'
        },
        // Footer
        footer: {
            copyright: '© 2026 Leiming Cai. Built with care.'
        }
    },
    zh: {
        // Navigation
        nav: {
            about: '关于我',
            experience: '工作经历',
            skills: '技能',
            contact: '联系方式'
        },
        // Hero Section
        hero: {
            greeting: '你好，我是',
            name: '蔡雷鸣',
            title: 'Expedia 软件工程师三级',
            description: '我构建端到端的全栈解决方案——从 React 前端和 Node.js/Spring Boot 后端到 Kubernetes 基础设施和部署管道。热衷于 TypeScript/React、可靠性工程和 AI 辅助开发，我致力于交付具有强大可观测性和开发者生产力的可扩展系统。',
            viewWork: '查看我的工作',
            getInTouch: '联系我'
        },
        // About Section
        about: {
            title: '关于我',
            paragraphs: [
                '软件工程师，拥有构建面向开发者的工具、可靠性保障机制以及在高流量生产环境中运行的大型 TypeScript/React 应用程序的经验。我专注于安全、可观测和可调试的系统：金丝雀分析、SLO 驱动的发布以及强大的日志/遥测功能，帮助工程师快速行动而不影响用户。',
                '最近主导将业务指标金丝雀分析（ACA）集成到我们的部署管道中，设计品牌/产品线感知的路由和告警，现代化前端状态管理和对话框模式，以及构建全栈个性化功能。',
                '我对 AI 辅助编码作为提升开发者生产力的方式感到兴奋，并希望能够更接近工具和模型本身的工作。'
            ],
            info: {
                location: '所在地',
                locationValue: '西雅图',
                email: '邮箱',
                emailValue: 'leimingcai93@gmail.com',
                education: '教育背景',
                educationValue: '南加州大学 - 工程硕士'
            }
        },
        // Experience Section
        experience: {
            title: '工作经历',
            items: [
                {
                    role: '软件工程师三级',
                    company: 'Expedia',
                    date: '2025年9月 - 至今',
                    details: [
                        '主导 shopping-pwa 的 MobX v4 到 v6 迁移的核心部分，重构关键状态存储（RoomModel、CurrentHotelStore、MapStore）以使用显式的 makeObservable 模式',
                        '构建自定义钩子（useAfterDialogClosesCallback），同步对话框关闭行为与 URL/搜索参数变化，消除竞态条件',
                        '主导 Experience API Pricing（EAP）的线上隔离解决方案推出，设计 Spinnaker 管道和 VirtualService 委托以减少爆炸半径',
                        '通过自定义配置、调查异常和关闭事故跟进，提高了可靠性和延迟 SLO'
                    ]
                },
                {
                    role: '软件工程师二级',
                    company: 'Expedia',
                    date: '2023年 - 2025年8月',
                    details: [
                        '使用 Istio 服务网格实施隔离策略，隔离品牌/产品线流量并减少交叉爆炸半径事件',
                        '为关键服务启用影子环境和流量镜像，允许针对类生产流量验证高风险变更',
                        '将自动金丝雀分析（ACA）与关键业务指标集成，实现数据驱动的上线/不上线决策',
                        '通过构建专注的 Datadog 仪表板和添加自定义标头来丰富 Splunk 日志，提高可观测性',
                        '在全局导航栏上开发会员庆典 A/B 测试，显著提升转化率（CVR）'
                    ]
                },
                {
                    role: '软件工程师一级',
                    company: 'Expedia',
                    date: '2021年 - 2023年',
                    details: [
                        '在后端 Experience-api 层实施新的 A/B 测试 SDK EGTnl 采用',
                        '为黑色星期五活动更新 PDP（物业详情页）MOD（仅限会员优惠）消息卡',
                        '实施新的设施过滤器，涉及多个后端服务的更改'
                    ]
                },
                {
                    role: '测试与可靠性工程师',
                    company: 'Global Communication Semiconductors',
                    date: '2017年 - 2021年',
                    details: [
                        '使用 VB6、C 和 VBA 实施、维护和调试测试和数据分析程序',
                        '分析和评估测试结果以找到半导体故障的根本原因'
                    ]
                }
            ]
        },
        // Skills Section
        skills: {
            title: '技能与技术栈',
            categories: {
                languages: '编程语言',
                frameworks: '框架与库',
                cloud: '云与运维',
                ai: 'AI 工具'
            },
            specializationsTitle: '专业领域',
            specializations: [
                {
                    title: 'TypeScript 与 React',
                    description: '全栈开发、状态管理（MobX）、自定义钩子'
                },
                {
                    title: '可靠性工程',
                    description: '金丝雀分析、SLO 驱动的发布、隔离策略'
                },
                {
                    title: '可观测性',
                    description: '自定义仪表板、遥测、结构化日志'
                },
                {
                    title: '性能优化',
                    description: '状态管理优化、延迟降低'
                },
                {
                    title: 'AI 辅助开发',
                    description: 'Claude Code、MCP 集成、开发者生产力'
                }
            ]
        },
        // Contact Section
        contact: {
            title: '联系我',
            description: '有兴趣讨论软件工程、可靠性或 AI 辅助开发吗？我很乐意听到您的声音。',
            based: '常驻西雅图'
        },
        // Footer
        footer: {
            copyright: '© 2026 蔡雷鸣。用心打造。'
        }
    }
};

// Language Management
let currentLang = localStorage.getItem('preferred-language') || 'en';

function updatePageLanguage(lang) {
    const t = translations[lang];
    currentLang = lang;

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = t.nav.about;
    navLinks[1].textContent = t.nav.experience;
    navLinks[2].textContent = t.nav.skills;
    navLinks[3].textContent = t.nav.contact;

    // Update hero section
    document.querySelector('.hero-title').innerHTML =
        `${t.hero.greeting}<span class="highlight">${t.hero.name}</span>`;
    document.querySelector('.hero-subtitle').textContent = t.hero.title;
    document.querySelector('.hero-description').textContent = t.hero.description;
    document.querySelector('.hero-actions .btn-primary').textContent = t.hero.viewWork;
    document.querySelector('.hero-actions .btn-secondary').textContent = t.hero.getInTouch;

    // Update about section
    document.querySelector('#about .section-title').textContent = t.about.title;
    const aboutParagraphs = document.querySelectorAll('.about-content p');
    aboutParagraphs.forEach((p, i) => {
        p.textContent = t.about.paragraphs[i];
    });
    const infoItems = document.querySelectorAll('.info-item');
    infoItems[0].querySelector('.info-label').textContent = t.about.info.location;
    infoItems[0].querySelector('.info-value').textContent = t.about.info.locationValue;
    infoItems[1].querySelector('.info-label').textContent = t.about.info.email;
    infoItems[1].querySelector('.info-value').textContent = t.about.info.emailValue;
    infoItems[2].querySelector('.info-label').textContent = t.about.info.education;
    infoItems[2].querySelector('.info-value').textContent = t.about.info.educationValue;

    // Update experience section
    document.querySelector('#experience .section-title').textContent = t.experience.title;
    const experienceItems = document.querySelectorAll('.timeline-item');
    experienceItems.forEach((item, i) => {
        const exp = t.experience.items[i];
        item.querySelector('.timeline-title').textContent = exp.role;
        item.querySelector('.timeline-company').textContent = exp.company;
        item.querySelector('.timeline-date').textContent = exp.date;
        const detailsLi = item.querySelectorAll('.timeline-details li');
        detailsLi.forEach((li, j) => {
            li.textContent = exp.details[j];
        });
    });

    // Update skills section
    document.querySelector('#skills .section-title').textContent = t.skills.title;
    const skillCategories = document.querySelectorAll('.skill-category-title');
    skillCategories[0].textContent = t.skills.categories.languages;
    skillCategories[1].textContent = t.skills.categories.frameworks;
    skillCategories[2].textContent = t.skills.categories.cloud;
    skillCategories[3].textContent = t.skills.categories.ai;

    document.querySelector('.specializations-title').textContent = t.skills.specializationsTitle;
    const specializations = document.querySelectorAll('.specialization-item');
    specializations.forEach((item, i) => {
        const spec = t.skills.specializations[i];
        item.querySelector('h4').textContent = spec.title;
        item.querySelector('p').textContent = spec.description;
    });

    // Update contact section
    document.querySelector('#contact .section-title').textContent = t.contact.title;
    document.querySelector('.contact-description').textContent = t.contact.description;
    document.querySelectorAll('.contact-method')[2].querySelector('.contact-text').textContent = t.contact.based;

    // Update footer
    document.querySelector('.footer p').textContent = t.footer.copyright;

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferred-language', lang);
}

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    updatePageLanguage(currentLang);

    // Add language toggle listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updatePageLanguage(btn.dataset.lang);
        });
    });
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .hero-actions a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add active state to nav links based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.style.color = '';
                });
                navLink.style.color = 'var(--color-accent)';
            }
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 10px rgba(56, 51, 52, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
