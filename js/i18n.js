// // 国际化功能
// class I18n {
//     constructor() {
//         this.currentLang = 'zh';
//         this.translations = {};
//         // 内置翻译数据作为备选
//         this.builtInTranslations = {
//             zh: {
//                 nav: { home: "首页", about: "关于我", skills: "技能", projects: "项目", resume: "简历", contact: "联系方式" },
//                 hero: { greeting: "你好，我是", headline: "数据科学硕士 | 寻求数据分析师/数据科学家岗位", cta: "联系我", viewProjects: "查看项目" },
//                 about: {
//                     title: "关于我",
//                     intro: "我是一名数据科学专业的硕士研究生，对数据分析和机器学习充满热情。我善于从数据中挖掘价值，将复杂的技术问题转化为可落地的解决方案。研究方向包括数据挖掘、大数据分析、人工智能应用、智慧城市数据科学和大语言模型。",
//                     education: "教育背景",
//                     master: "数据科学硕士 | GPA: 3.69/4.0",
//                     bachelor: "数据科学与大数据技术学士 | GPA: 3.5/5.0, Top 20%",
//                     strengths: "我的优势",
//                     strength1: "数据挖掘与大数据分析",
//                     strength2: "人工智能与机器学习应用",
//                     strength3: "智慧城市数据科学",
//                     strength4: "全栈开发能力"
//                 },
//                 skills: {
//                     title: "专业技能",
//                     technical: "技术技能",
//                     research: "研究兴趣",
//                     tools: "工具",
//                     research1: "数据挖掘和大数据分析",
//                     research2: "人工智能和机器学习应用",
//                     research3: "智慧城市数据科学",
//                     research4: "大语言模型(LLMs)"
//                 },
//                 projects: {
//                     title: "项目经历",
//                     subtitle: "以下是我参与的主要数据分析与机器学习项目",
//                     problem: "问题背景",
//                     data: "数据",
//                     approach: "方法",
//                     outcome: "成果",
//                     contribution: "个人贡献",
//                     ongoing: "进行中"
//                 },
//                 resume: {
//                     title: "简历",
//                     education: "教育背景",
//                     skills: "技能",
//                     programming: "编程语言:",
//                     bigData: "大数据技术:",
//                     visualization: "可视化:",
//                     webDev: "Web开发:",
//                     languages: "语言能力:",
//                     achievements: "荣誉与成就",
//                     download: "下载完整简历 (PDF)"
//                 },
//                 contact: {
//                     title: "联系方式",
//                     email: "邮箱",
//                     phone: "电话",
//                     message: "给我留言",
//                     form: { name: "姓名", email: "邮箱", message: "留言", submit: "发送消息" }
//                 },
//                 footer: { name: "徐瑞莹", rights: "保留所有权利" }
//             },
//             en: {
//                 nav: { home: "Home", about: "About Me", skills: "Skills", projects: "Projects", resume: "Resume", contact: "Contact" },
//                 hero: { greeting: "Hello, I'm", headline: "M.S. in Data Science | Seeking Data Analyst / Data Scientist Position", cta: "Contact Me", viewProjects: "View Projects" },
//                 about: {
//                     title: "About Me",
//                     intro: "I am a Master's student in Data Science with a passion for data analysis and machine learning. I excel at extracting insights from data and transforming complex technical challenges into actionable solutions. My research interests include data mining, big data analysis, AI applications, smart city data science, and large language models.",
//                     education: "Education",
//                     master: "M.S. in Data Science | GPA: 3.69/4.0",
//                     bachelor: "B.S. in Data Science and Big Data Technology | GPA: 3.5/5.0, Top 20%",
//                     strengths: "My Strengths",
//                     strength1: "Data Mining & Big Data Analysis",
//                     strength2: "AI & Machine Learning Applications",
//                     strength3: "Smart City Data Science",
//                     strength4: "Full-Stack Development"
//                 },
//                 skills: {
//                     title: "Professional Skills",
//                     technical: "Technical Skills",
//                     research: "Research Interests",
//                     tools: "Tools",
//                     research1: "Data Mining and Big Data Analysis",
//                     research2: "AI and Machine Learning Applications",
//                     research3: "Smart City Data Science",
//                     research4: "Large Language Models (LLMs)"
//                 },
//                 projects: {
//                     title: "Projects",
//                     subtitle: "Here are my main data analysis and machine learning projects",
//                     problem: "Problem",
//                     data: "Data",
//                     approach: "Approach",
//                     outcome: "Outcome",
//                     contribution: "My Contribution",
//                     ongoing: "Ongoing"
//                 },
//                 resume: {
//                     title: "Resume",
//                     education: "Education",
//                     skills: "Skills",
//                     programming: "Programming Languages:",
//                     bigData: "Big Data Technologies:",
//                     visualization: "Visualization:",
//                     webDev: "Web Development:",
//                     languages: "Languages:",
//                     achievements: "Honors & Achievements",
//                     download: "Download Full Resume (PDF)"
//                 },
//                 contact: {
//                     title: "Contact",
//                     email: "Email",
//                     phone: "Phone",
//                     message: "Send Me a Message",
//                     form: { name: "Name", email: "Email", message: "Message", submit: "Send Message" }
//                 },
//                 footer: { name: "XU Ruiying", rights: "All Rights Reserved" }
//             }
//         };
//     }

//     async init() {
//         // 从localStorage获取保存的语言偏好，默认中文
//         const savedLang = localStorage.getItem('language') || 'zh';
//         await this.loadLanguage(savedLang);
//         this.updateUI();
//     }

//     async loadLanguage(lang) {
//         try {
//             const response = await fetch(`lang/${lang}.json`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             this.translations = await response.json();
//             this.currentLang = lang;
//             localStorage.setItem('language', lang);
//             console.log(`Language loaded from file: ${lang}`);
//         } catch (error) {
//             console.warn('Failed to load language file, using built-in translations:', error);
//             // 使用内置翻译作为备选
//             this.translations = this.builtInTranslations[lang] || this.builtInTranslations.zh;
//             this.currentLang = lang;
//             localStorage.setItem('language', lang);
//         }
//     }

//     translate(key) {
//         const keys = key.split('.');
//         let value = this.translations;

//         for (const k of keys) {
//             value = value?.[k];
//         }

//         return value || key;
//     }

//     updateUI() {
//         // 更新所有带有data-i18n属性的元素
//         document.querySelectorAll('[data-i18n]').forEach(element => {
//             const key = element.getAttribute('data-i18n');
//             const translation = this.translate(key);

//             if (translation && translation !== key) {
//                 if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
//                     element.placeholder = translation;
//                 } else {
//                     element.textContent = translation;
//                 }
//             }
//         });

//         // 更新HTML lang属性
//         document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';

//         // 更新语言切换按钮文本
//         const langButton = document.getElementById('langSwitch');
//         if (langButton) {
//             langButton.textContent = this.currentLang === 'zh' ? 'English' : '中文';
//         }

//         console.log(`UI updated to ${this.currentLang}`);
//     }

//     async toggleLanguage() {
//         const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
//         console.log(`Switching from ${this.currentLang} to ${newLang}`);
//         await this.loadLanguage(newLang);
//         this.updateUI();
//     }
// }

// // 创建全局实例
// const i18n = new I18n();
// 中英文翻译配置
const i18n = {
    currentLang: 'zh',
    translations: {
        zh: {
            title: {
                zh: "个人求职网站 | Data Scientist Portfolio"
            },
            nav: {
                home: "首页",
                about: "关于我",
                skills: "技能",
                projects: "项目",
                resume: "简历",
                contact: "联系方式"
            },
            hero: {
                greeting: "你好，我是",
                headline: "数据科学硕士 | 寻求数据分析师/数据科学RA岗位",
                cta: "联系我",
                viewProjects: "查看项目"
            },
            about: {
                title: "关于我",
                intro: "目前就读于岭南大学数据科学专业，预计2026年8月毕业。我善于从数据中挖掘价值，将复杂的技术问题转化为可落地的解决方案。",
                education: "教育背景",
                uniMaster: "岭南大学",
                master: "数据科学硕士 | GPA: 3.69/4.0",
                uniBachelor: "河南工业大学",
                bachelor: "数据科学与大数据技术学士 | GPA: 3.5/5.0, Top 20%",
                strengths: "我的优势",
                strength1: "数据分析与机器学习",
                strength2: "数据可视化与商业智能",
                strength3: "全栈开发能力",
                strength4: "学习能力强，快速掌握新技术",
                achievement1: "2024校级优秀毕业论文",
                achievement2: "蓝桥杯三等奖",
                achievement2Desc: "第13届全国软件信息技术大赛Python类别省级三等奖",
                achievement3: "优秀学生干部",
                achievement3Desc: "2023校级优秀班干部、2022校级优秀共青团干部",
                thesis: "珠宝租赁系统设计与实现",
                ielts: "雅思6.0",
                cet: "通过CET-4和CET-6"
            },
            skills: {
                title: "专业技能",
                technical: "技术技能",
                research: "研究兴趣",
                tools: "工具",
                python: "Python",
                java: "Java",
                sql: "SQL",
                c: "C",
                springBoot: "Spring Boot",
                research1: "数据挖掘和大数据分析",
                research2: "人工智能和机器学习应用",
                research3: "智慧城市数据科学",
                research4: "大语言模型(LLMs)"
            },
            tools: {
                hadoop: "Hadoop",
                tableau: "Tableau",
                echarts: "ECharts",
                vue: "Vue.js",
                springBoot: "Spring Boot",
                latex: "LaTeX",
                mysql: "MySQL",
                kettle: "Kettle"
            },
            projects: {
                title: "项目经历",
                subtitle: "以下是我参与的主要数据分析与机器学习项目",
                problem: "问题背景",
                data: "数据",
                approach: "方法",
                outcome: "成果",
                contribution: "个人贡献",
                ongoing: "进行中",
                proj1: "本科毕业论文：基于Hadoop的珠宝租赁系统设计与实现",
                proj2: "音乐网站项目（科大讯飞指导）",
                proj3: "全球航班数据可视化系统",
                proj4: "在研项目：基于机器学习的ECG异常自动分类研究",
                proj1Desc1: "针对珠宝租赁行业快速增长的需求，解决珠宝供需双方灵活匹配的问题，提高行业管理效率和服务质量。",
                proj1Desc2: "使用MySQL进行数据存储和管理，依托Hadoop平台完成大规模数据处理和分析，为租赁业务提供数据支持。",
                proj1Desc3: "前端使用JavaScript和Vue.js构建界面，后端基于Hadoop平台进行数据处理，MySQL存储数据。完成系统需求分析、架构设计、编码实现和测试部署。",
                proj1Desc4: "荣获2024年校级优秀毕业论文。系统实现管理员和用户两大模块：管理员管理用户、珠宝、租赁、公告，查看租赁数据统计；用户可出租或租赁珠宝。",
                proj1Desc5: "独立完成整个系统的需求分析、架构设计、编码实现和测试部署。设计并实现前后端功能模块，完成数据库设计和Hadoop数据处理流程。",
                proj2Desc1: "构建一站式音乐服务生态系统，实现音乐资源的统一管理、个性化推荐和用户社区互动。",
                proj2Desc2: "基于用户行为数据和音乐元数据，使用MySQL数据库存储用户信息、歌曲数据、收藏记录等。",
                proj2Desc3: "采用前后端分离架构：前端使用Vue生态实现组件化交互界面，后端通过Spring Boot和MyBatis构建数据接口层。",
                proj2Desc4: "成功构建完整音乐网站平台，实现个人信息管理、歌曲收藏、歌曲播放下载、管理员设置等核心功能。",
                proj2Desc5: "完成前后端架构搭建、Vue项目初始化、Vuex全局状态管理配置、Spring Boot后端项目搭建、MySQL数据库交互和接口设计，以及核心功能模块开发。",
                proj3Desc1: "解决航空运营数据多源异构、可视化程度低的问题，实现全球航班运行状态的可视化展示和实时感知。",
                proj3Desc2: "基于FlightAware网站的全球航班数据集和机场地理数据集，通过MapReduce进行分布式数据清洗，Kettle实现ETL。",
                proj3Desc3: "使用MapReduce进行分布式数据清洗，Kettle实现数据ETL(Extract, Transform, Load)，ECharts作为可视化引擎构建Web前端展示层。",
                proj3Desc4: "通过可视化大屏展示延迟区域机场数量、延迟率、全球航班准点率、航班次数和飞行时间分布等图表，实现全球航班数据的统计分析。",
                proj3Desc5: "完成数据清洗、ETL流程设计、前端可视化界面开发，实现多维度航班数据可视化展示。",
                proj4Desc1: "研究心电图(ECG)异常的自动分类方法，针对典型心脏异常如左心室肥大(LVH)进行神经网络模型性能测试。",
                proj4Desc2: "12导联ECG数据，通过基线漂移去除和R波峰值检测实现心跳分割，标准化为64样本序列，生成患者平均心跳特征。",
                proj4Desc3: "完成数据预处理、心跳分割、线性插值标准化、错误样本识别与消除，目前正在测试神经网络模型对左心室肥大(LVH)的分类性能。",
                proj4Desc4: "已完成数据预处理、心跳分割和标准化，正在测试针对LVH的神经网络分类模型性能。",
                proj4Desc5: "独立完成数据预处理流程设计、心跳分割算法实现、神经网络模型构建与测试。"
            },
            resume: {
                title: "简历",
                titleText: "数据科学硕士 | 数据分析师",
                education: "教育背景",
                skills: "技能",
                programming: "编程语言",
                bigData: "大数据技术",
                visualization: "可视化",
                webDev: "Web开发",
                languages: "语言能力",
                achievements: "荣誉与成就",
                download: "下载完整简历 (PDF)",
                ielts: "雅思6.0",
                cetPass: "通过CET-4和CET-6",
                award1: "2024年校级优秀毕业论文",
                award2: "第13届蓝桥杯全国软件信息技术大赛三等奖（Python类别，省级，2023）",
                award3: "2023年校级优秀班干部",
                award4: "2022年校级优秀共青团干部"
            },
            contact: {
                title: "联系方式",
                email: "邮箱",
                phone: "电话",
                github: "GitHub",
                githubUrl: "[Your GitHub URL]",
                message: "给我留言",
                form: {
                    name: "姓名",
                    email: "邮箱",
                    message: "留言",
                    submit: "发送消息"
                }
            },
            footer: {
                name: "徐瑞莹",
                rights: "保留所有权利"
            }
        },
        en: {
            title: {
                zh: "Data Scientist Portfolio | Personal Website"
            },
            nav: {
                home: "Home",
                about: "About",
                skills: "Skills",
                projects: "Projects",
                resume: "Resume",
                contact: "Contact"
            },
            hero: {
                greeting: "Hi, I'm",
                headline: "Master of Data Science | Seeking Data Analyst / Data Science RA Position",
                cta: "Contact Me",
                viewProjects: "View Projects"
            },
            about: {
                title: "About Me",
                intro: "Currently studying Data Science at Lingnan University, expected to graduate in August 2026. I excel at extracting value from data and translating complex technical problems into actionable solutions.",
                education: "Education",
                uniMaster: "Lingnan University",
                master: "MSc in Data Science | GPA: 3.69/4.0",
                uniBachelor: "Henan University of Technology",
                bachelor: "BSc in Data Science and Big Data Technology | GPA: 3.5/5.0, Top 20%",
                strengths: "My Strengths",
                strength1: "Data Analysis & Machine Learning",
                strength2: "Data Visualization & BI",
                strength3: "Full-Stack Development",
                strength4: "Fast learner, quick mastery of new technologies",
                achievement1: "2024 Excellent Graduation Thesis",
                achievement2: "Lanqiao Cup Third Prize",
                achievement2Desc: "13th National Software & IT Contest Python Provincial Third Prize",
                achievement3: "Outstanding Student Leader",
                achievement3Desc: "2023 Outstanding Class Leader, 2022 Outstanding Youth League Leader",
                thesis: "Jewelry Rental System Design & Implementation",
                ielts: "IELTS 6.0",
                cet: "Passed CET-4 & CET-6"
            },
            skills: {
                title: "Professional Skills",
                technical: "Technical Skills",
                research: "Research Interests",
                tools: "Tools",
                python: "Python",
                java: "Java",
                sql: "SQL",
                c: "C",
                springBoot: "Spring Boot",
                research1: "Data Mining & Big Data Analysis",
                research2: "AI & Machine Learning Applications",
                research3: "Smart City Data Science",
                research4: "Large Language Models (LLMs)"
            },
            tools: {
                hadoop: "Hadoop",
                tableau: "Tableau",
                echarts: "ECharts",
                vue: "Vue.js",
                springBoot: "Spring Boot",
                latex: "LaTeX",
                mysql: "MySQL",
                kettle: "Kettle"
            },
            projects: {
                title: "Projects",
                subtitle: "Key data analysis and machine learning projects I've participated in",
                problem: "Problem",
                data: "Data",
                approach: "Approach",
                outcome: "Outcome",
                contribution: "Contribution",
                ongoing: "Ongoing",
                proj1: "Undergraduate thesis:Hadoop-based Jewelry Rental System Design & Implementation",
                proj2: "Music Website Project (iFLYTEK Guidance)",
                proj3: "Global Flight Data Visualization System",
                proj4: "Ongoing research projects: ECG Abnormality Classification Research Based on Machine Learning",
                proj1Desc1: "Address the growing demand in the jewelry rental industry, solve the problem of flexible matching between supply and demand, and improve industry efficiency.",
                proj1Desc2: "Use MySQL for data storage and Hadoop for large-scale data processing to support rental business operations.",
                proj1Desc3: "Frontend with JavaScript & Vue.js, backend with Hadoop & MySQL. Completed system analysis, design, development, testing and deployment.",
                proj1Desc4: "Won 2024 Excellent Graduation Thesis. System includes admin & user modules for user, jewelry, rental management and data statistics.",
                proj1Desc5: "Independently completed full system development including architecture design, frontend/backend coding, database design and deployment.",
                proj2Desc1: "Build an all-in-one music service ecosystem for unified music management, personalized recommendations and user community interaction.",
                proj2Desc2: "Use MySQL to store user info, music data and favorites based on user behavior and music metadata.",
                proj2Desc3: "Frontend & backend separation: Vue.js for UI, Spring Boot + MyBatis for API services.",
                proj2Desc4: "Successfully built a full-featured music platform with user management, favorites, playback, download and admin functions.",
                proj2Desc5: "Completed architecture setup, Vue project initialization, Vuex config, Spring Boot backend, MySQL integration and core module development.",
                proj3Desc1: "Solve the problem of heterogeneous aviation data and low visualization, realize real-time global flight status visualization.",
                proj3Desc2: "Use global flight/airport datasets from FlightAware, MapReduce for distributed cleaning, Kettle for ETL.",
                proj3Desc3: "MapReduce for data cleaning, Kettle for ETL, ECharts for visualization dashboard development.",
                proj3Desc4: "Visual dashboard showing delayed airports, delay rates, on-time performance, flight counts and time distribution analytics.",
                proj3Desc5: "Completed data cleaning, ETL design, frontend visualization and multi-dimensional flight data analysis.",
                proj4Desc1: "Research automatic ECG abnormality classification, test neural network models for typical cardiac conditions like LVH.",
                proj4Desc2: "12-lead ECG data with baseline removal, R-peak detection, heartbeat segmentation and 64-sample standardization.",
                proj4Desc3: "Completed preprocessing, segmentation, standardization, outlier removal; testing NN models for LVH classification.",
                proj4Desc4: "Finished data preprocessing & segmentation; currently testing neural network classification performance for LVH.",
                proj4Desc5: "Independently designed preprocessing pipelines, implemented segmentation algorithms, and built/tested ML models."
            },
            resume: {
                title: "Resume",
                titleText: "Master of Data Science | Data Analyst",
                education: "Education",
                skills: "Skills",
                programming: "Programming",
                bigData: "Big Data",
                visualization: "Visualization",
                webDev: "Web Dev",
                languages: "Languages",
                achievements: "Awards",
                download: "Download Full Resume (PDF)",
                ielts: "IELTS 6.0",
                cetPass: "Passed CET-4 & CET-6",
                award1: "2024 Excellent Graduation Thesis",
                award2: "13th Lanqiao Cup Python Provincial Third Prize (2023)",
                award3: "2023 Outstanding Class Leader",
                award4: "2022 Outstanding Youth League Leader"
            },
            contact: {
                title: "Contact",
                email: "Email",
                phone: "Phone",
                github: "GitHub",
                githubUrl: "[Your GitHub URL]",
                message: "Send Message",
                form: {
                    name: "Name",
                    email: "Email",
                    message: "Message",
                    submit: "Send"
                }
            },
            footer: {
                name: "Ruiying Xu",
                rights: "All rights reserved"
            }
        }
    },

    async init() {
        const saved = localStorage.getItem('lang') || 'zh';
        this.currentLang = saved;
        this.updatePage();
    },

    async toggleLanguage() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('lang', this.currentLang);
        this.updatePage();
    },

    updatePage() {
        document.documentElement.lang = this.currentLang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.getTranslation(key);
            if (text) el.textContent = text;
        });
    },

    getTranslation(key) {
        return key.split('.').reduce((obj, k) => obj && obj[k], this.translations[this.currentLang]);
    }
};