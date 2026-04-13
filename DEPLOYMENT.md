# GitHub Pages 部署快速指南

## 快速部署步骤

### 1. 创建GitHub仓库

如果还没有GitHub账号，请先注册：https://github.com

1. 登录GitHub
2. 点击右上角 "+" → "New repository"
3. 仓库名称必须是：`你的用户名.github.io`
   - 例如：如果你的用户名是 `xuruiying`，仓库名就是 `xuruiying.github.io`
4. 选择 "Public"（公开）
5. 点击 "Create repository"

### 2. 上传文件

**最简单的方法：直接拖拽上传**

1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将以下所有文件和文件夹拖拽到上传区域：
   - index.html
   - css 文件夹
   - js 文件夹
   - lang 文件夹
   - assets 文件夹（如果有的话）
   - README.md
3. 在下方 "Commit changes" 输入提交信息，例如："上传个人网站"
4. 点击 "Commit changes" 按钮

### 3. 启用GitHub Pages

1. 在仓库页面，点击 "Settings"（设置）
2. 在左侧菜单中找到 "Pages"
3. 在 "Build and deployment" 部分：
   - Source: 选择 "Deploy from a branch"
   - Branch: 选择 "main"
   - Folder: 选择 "/ (root)"
4. 点击 "Save"

### 4. 访问你的网站

等待 1-3 分钟后，你的网站将在以下地址访问：

```
https://你的用户名.github.io
```

例如：`https://xuruiying.github.io`

### 5. 分享你的网站

现在你可以将这个链接分享给任何人，他们都可以访问你的个人求职网站！

## 常见问题

### Q: 网站显示404错误？

A: 请检查：
1. 仓库名称是否正确（必须是 `用户名.github.io`）
2. 文件是否已成功上传
3. GitHub Pages 是否已启用
4. 等待几分钟让GitHub部署完成

### Q: 样式或图片无法加载？

A: 确保所有文件都已正确上传，特别是 css、js、lang 文件夹。

### Q: 如何更新网站？

A:
1. 在GitHub仓库页面找到要修改的文件
2. 点击文件名进入
3. 点击右上角的铅笔图标编辑
4. 修改后点击 "Commit changes"
5. 等待1-2分钟，GitHub会自动更新

### Q: 如何绑定自定义域名？

A:
1. 在 GitHub Pages 设置页面的 "Custom domain" 输入你的域名
2. 在你的域名服务商处配置DNS解析
3. 等待DNS生效

## 更详细的说明

完整的部署说明请查看 README.md 文件。

## 需要帮助？

如果遇到问题，可以：
1. 查看 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
2. 在GitHub上搜索相关问题的解决方案
3. 联系我：ruiyingxu@ln.hk
