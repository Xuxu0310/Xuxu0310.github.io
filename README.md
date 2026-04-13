# 个人求职网站 - 徐瑞莹

这是一个基于HTML/CSS/JavaScript的个人求职网站，支持中英文切换，符合课程要求文档的所有规定。

## 网站内容

网站包含以下6个必需部分：

1. **Home/Headline** - 求职定位和关键标签
2. **About Me** - 自我介绍、教育背景、个人优势
3. **Skills** - 技术技能、研究兴趣、工具
4. **Projects** - 4个真实项目经历
   - 基于Hadoop的珠宝租赁系统（毕业论文）
   - 音乐网站项目
   - 全球航班数据可视化系统
   - 基于机器学习的ECG异常自动分类研究（进行中）
5. **Resume** - 在线简历展示和下载
6. **Contact** - 联系方式

## 功能特性

✅ 完整的6个部分，符合课程要求
✅ 中英文一键切换
✅ 响应式设计，支持移动端
✅ 平滑滚动和动画效果
✅ 专业的设计风格

## 本地预览

直接在浏览器中打开 `index.html` 文件即可查看网站效果。

## 部署到GitHub Pages

### 步骤1：创建GitHub仓库

1. 登录GitHub账号
2. 点击右上角 "+" 号，选择 "New repository"
3. 仓库名称设置为：`yourusername.github.io`（将yourusername替换为你的GitHub用户名）
4. 选择 "Public"
5. 点击 "Create repository"

### 步骤2：上传文件到GitHub

**方法1：使用Git命令行**

```bash
# 在项目目录下打开命令行
cd e:\test

# 初始化git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Personal portfolio website"

# 关联远程仓库（将yourusername替换为你的GitHub用户名）
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# 推送到GitHub
git push -u origin main
```

**方法2：使用GitHub Desktop**

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录你的GitHub账号
3. 点击 "File" > "Add Local Repository"
4. 选择项目文件夹 `e:\test`
5. 点击 "Publish repository"
6. 仓库名称设置为：`yourusername.github.io`
7. 点击 "Publish repository"

**方法3：直接上传**

1. 在GitHub仓库页面点击 "uploading an existing file"
2. 将所有项目文件拖拽到上传区域
3. 点击 "Commit changes"

### 步骤3：启用GitHub Pages

1. 进入GitHub仓库页面
2. 点击 "Settings"
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 部分：
   - Branch: 选择 "main"
   - Folder: 选择 "/ (root)"
5. 点击 "Save"
6. 等待几分钟后，你的网站将在 `https://yourusername.github.io` 上线

### 步骤4：验证网站

1. 访问 `https://yourusername.github.io`
2. 检查所有功能是否正常
3. 测试中英文切换
4. 测试移动端响应式布局

## 文件结构

```
e:\test\
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   ├── main.js        # 主逻辑
│   └── i18n.js        # 国际化逻辑
├── lang/
│   ├── en.json        # 英文文本
│   └── zh.json        # 中文文本
├── assets/            # 资源文件夹（简历PDF等）
└── README.md          # 说明文档
```

## 需要补充的信息

- [ ] GitHub用户名和仓库地址
- [ ] GitHub个人主页链接
- [ ] 简历PDF文件（可选）

## 技术栈

- **前端**: HTML5, CSS3, JavaScript
- **样式**: 响应式设计, CSS Grid, Flexbox
- **国际化**: 自定义i18n方案
- **部署**: GitHub Pages

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 联系方式

- 邮箱: ruiyingxu@ln.hk
- 电话: +86 18638708882 / +852 84955232

## 许可证

MIT License

---

© 2024 徐瑞莹. All Rights Reserved.
