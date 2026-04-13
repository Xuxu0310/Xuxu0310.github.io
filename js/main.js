// // 主JavaScript文件
// document.addEventListener('DOMContentLoaded', async () => {
//     // 初始化国际化
//     await i18n.init();

//     // 设置姓名初始文本
//     const userNameElement = document.getElementById('userName');
//     if (userNameElement) {
//         userNameElement.textContent = i18n.currentLang === 'zh' ? '徐瑞莹' : 'XU Ruiying';
//     }

//     // 设置语言切换按钮初始文本
//     const langButton = document.getElementById('langSwitch');
//     if (langButton) {
//         langButton.textContent = i18n.currentLang === 'zh' ? 'English' : '中文';
//     }

//     // 导航栏汉堡菜单
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.nav-menu');

//     if (hamburger && navMenu) {
//         hamburger.addEventListener('click', () => {
//             navMenu.classList.toggle('active');
//             hamburger.classList.toggle('active');
//         });

//         // 点击导航链接后关闭菜单
//         navMenu.querySelectorAll('a').forEach(link => {
//             link.addEventListener('click', () => {
//                 navMenu.classList.remove('active');
//                 hamburger.classList.remove('active');
//             });
//         });
//     }

//     // 语言切换
//     if (langButton) {
//         langButton.addEventListener('click', async () => {
//             await i18n.toggleLanguage();
//             // 更新按钮文本
//             langButton.textContent = i18n.currentLang === 'zh' ? 'English' : '中文';
//             // 更新姓名
//             const userNameElement = document.getElementById('userName');
//             if (userNameElement) {
//                 userNameElement.textContent = i18n.currentLang === 'zh' ? '徐瑞莹' : 'XU Ruiying';
//             }
//         });
//     }

//     // 平滑滚动
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 const navHeight = document.querySelector('.navbar').offsetHeight;
//                 const targetPosition = target.offsetTop - navHeight;
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // 导航栏滚动效果
//     const navbar = document.querySelector('.navbar');
//     let lastScroll = 0;

//     window.addEventListener('scroll', () => {
//         const currentScroll = window.pageYOffset;

//         if (currentScroll > 100) {
//             navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//             navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
//         } else {
//             navbar.style.background = '#ffffff';
//             navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
//         }

//         lastScroll = currentScroll;
//     });

//     // 技能进度条动画
//     const skillBars = document.querySelectorAll('.skill-progress');
//     const observerOptions = {
//         threshold: 0.5,
//         rootMargin: '0px'
//     };

//     const skillObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const width = entry.target.style.width;
//                 entry.target.style.width = '0%';
//                 setTimeout(() => {
//                     entry.target.style.width = width;
//                 }, 100);
//             }
//         });
//     }, observerOptions);

//     skillBars.forEach(bar => skillObserver.observe(bar));

//     // 表单提交
//     const contactForm = document.getElementById('contactForm');
//     if (contactForm) {
//         contactForm.addEventListener('submit', (e) => {
//             e.preventDefault();

//             // 获取表单数据
//             const formData = new FormData(contactForm);
//             const name = formData.get('name');
//             const email = formData.get('email');
//             const message = formData.get('message');

//             // 这里可以添加实际的表单提交逻辑
//             // 例如：发送到后端API或邮件服务

//             // 显示成功消息
//             alert(i18n.currentLang === 'zh'
//                 ? '感谢您的留言！我会尽快回复您。'
//                 : 'Thank you for your message! I will get back to you soon.');

//             // 清空表单
//             contactForm.reset();
//         });
//     }

//     // 添加滚动动画
//     const animateOnScroll = () => {
//         const elements = document.querySelectorAll('.skill-category, .project-card, .achievement-card, .contact-item');

//         elements.forEach(element => {
//             const elementTop = element.getBoundingClientRect().top;
//             const elementBottom = element.getBoundingClientRect().bottom;
//             const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);

//             if (isVisible) {
//                 element.style.opacity = '1';
//                 element.style.transform = 'translateY(0)';
//             }
//         });
//     };

//     // 初始设置元素样式
//     document.querySelectorAll('.skill-category, .project-card, .achievement-card, .contact-item').forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(30px)';
//         element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     });

//     // 添加滚动监听
//     window.addEventListener('scroll', animateOnScroll);
//     animateOnScroll(); // 初始调用一次

//     // 更新活跃导航项
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.nav-menu a');

//     window.addEventListener('scroll', () => {
//         let current = '';

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - 100;
//             const sectionHeight = section.clientHeight;
//             if (window.pageYOffset >= sectionTop) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href') === `#${current}`) {
//                 link.classList.add('active');
//             }
//         });
//     });
// });

// // 添加活跃导航样式
// const style = document.createElement('style');
// style.textContent = `
//     .nav-menu a.active {
//         color: #2563eb;
//         border-bottom: 2px solid #2563eb;
//         padding-bottom: 0.25rem;
//     }
// `;
// document.head.appendChild(style);
// 主JavaScript文件
document.addEventListener('DOMContentLoaded', async () => {
    // 初始化国际化
    await i18n.init();

    // 设置姓名初始文本
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = i18n.currentLang === 'zh' ? '徐瑞莹' : 'XU Ruiying';
    }

    // 设置语言切换按钮初始文本
    const langButton = document.getElementById('langSwitch');
    if (langButton) {
        langButton.textContent = i18n.currentLang === 'zh' ? 'English' : '中文';
    }

    // 导航栏汉堡菜单
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // 点击导航链接后关闭菜单
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // 语言切换
    if (langButton) {
        langButton.addEventListener('click', async () => {
            await i18n.toggleLanguage();
            // 更新按钮文本
            langButton.textContent = i18n.currentLang === 'zh' ? 'English' : '中文';
            // 更新姓名
            const userNameElement = document.getElementById('userName');
            if (userNameElement) {
                userNameElement.textContent = i18n.currentLang === 'zh' ? '徐瑞莹' : 'XU Ruiying';
            }
            // 强制刷新所有翻译（解决部分文字不切换问题）
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const text = key.split('.').reduce((obj, k) => obj && obj[k], i18n.translations[i18n.currentLang]);
                if (text) el.textContent = text;
            });
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // 技能进度条动画
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => skillObserver.observe(bar));

    // 表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 获取表单数据
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // 显示成功消息
            alert(i18n.currentLang === 'zh'
                ? '感谢您的留言！我会尽快回复您。'
                : 'Thank you for your message! I will get back to you soon.');

            // 清空表单
            contactForm.reset();
        });
    }

    // 添加滚动动画
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-category, .project-card, .achievement-card, .contact-item');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);

            if (isVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // 初始设置元素样式
    document.querySelectorAll('.skill-category, .project-card, .achievement-card, .contact-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // 添加滚动监听
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 初始调用一次

    // 更新活跃导航项
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// 添加活跃导航样式
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #2563eb;
        border-bottom: 2px solid #2563eb;
        padding-bottom: 0.25rem;
    }
`;
document.head.appendChild(style);