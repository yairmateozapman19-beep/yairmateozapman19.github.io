# astro-i18n-starter-pro

<p align="right"><strong>中文</strong> | <a href="./README.en.md">English</a> </p>

基于 [astro-i18n-starter](https://github.com/naodeng/astro-i18n-starter) 改造的 **Astro 多语言博客模板**，站点与作者等关键信息通过环境变量配置，便于多环境部署与复用到不同站点。

## 示例站点

- [inaodeng.com](https://inaodeng.com)

## 特性

- **Astro 5** + **i18n**（`en` / `zh-cn`）
- **环境变量驱动**：站点 URL、标题、描述、作者、社交链接、状态/统计页等均可在 `.env` 中配置
- **博文**：MDX，支持 tags / series / categories，每篇最多 3 个标签
- **搜索**：本地 `search-index.json` 或 Algolia（可选）
- **评论**：Giscus（可选）
- **统计**：Google Analytics GA4（可选）
- **RSS**、**Sitemap**、**分页**、**分享**（复制链接 / X / 微博 / LinkedIn / Facebook / Instagram）
- **部署**：静态导出，可部署到 Cloudflare Pages/Workers、GitHub Pages 等

## 快速开始

1. **克隆或下载本仓库**

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**
   ```bash
   cp .env.example .env
   ```
   编辑 `.env`，至少设置：
   - `PUBLIC_SITE_URL`：站点完整 URL（如 `https://example.com`）
   - `PUBLIC_SITE_TITLE_EN` / `PUBLIC_SITE_TITLE_ZH_CN`：站点标题
   - `PUBLIC_SITE_DESCRIPTION_EN` / `PUBLIC_SITE_DESCRIPTION_ZH_CN`：站点描述
   - `PUBLIC_AUTHOR_NAME`：默认作者名

   其余变量见 `.env.example` 注释（Giscus、Algolia、GA、社交链接等为可选）。

4. **本地开发**
   ```bash
   npm run dev
   ```

5. **构建**
   ```bash
   npm run build
   ```

6. **预览构建结果**
   ```bash
   npm run preview
   ```

## 项目结构概要

| 路径 | 说明 |
|------|------|
| `src/blog/en/`、`src/blog/zh-cn/` | 博文 MDX，按语言分子目录 |
| `src/consts.ts` | 站点文案与常量；标题/描述/作者等已从 env 读取，其余可在此修改 |
| `src/data/projects.ts` | 项目展示页数据 |
| `src/locales.ts` | 语言列表与默认语言 |
| `.env` / `.env.example` | 环境变量（站点、作者、第三方服务） |

## 博文格式

在 `src/blog/en/` 或 `src/blog/zh-cn/` 下新建 `.mdx`，frontmatter 示例：

```yaml
---
title: "文章标题"
description: "简短描述"
date: 2025-01-01T00:00:00.000Z
updated: 2025-01-15T00:00:00.000Z  # 可选
author: "作者名"  # 可选，不填则用 PUBLIC_AUTHOR_NAME
tags: ["标签1", "标签2"]  # 最多 3 个
series: ["系列名"]  # 可选
categories: ["分类"]  # 可选
---
```

## 部署

- **Cloudflare**：配置 `CLOUDFLARE_API_TOKEN` 等后，使用仓库内 `.github/workflows/deploy-cloudflare.yml` 或本地 `npm run deploy`（需 `wrangler` 已登录）。
- **GitHub Pages**：使用 `.github/workflows/gh-pages.yml`，推送 `main` 即可发布到 `gh-pages` 分支。

构建时请确保 CI 环境中能读取到 `PUBLIC_SITE_URL` 等变量（在 GitHub Actions 的“Settings → Secrets and variables → Actions”中配置，或在 workflow 中注入）。

## 许可

与上游及本模板的许可保持一致（见仓库内 LICENSE 或版权说明）。使用本模板生成的站点内容版权归作者所有。
