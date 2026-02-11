# astro-i18n-starter-pro

<p align="right"><a href="./README.md">中文</a> | <strong>English</strong></p>

An **Astro multi-language blog template** forked from [astro-i18n-starter](https://github.com/psephopaiktes/astro-i18n-starter). Site URL, title, author, and other key info are configured via environment variables for easy multi-environment deployment and reuse across different sites.

## Demo Site

- [inaodeng.com](https://inaodeng.com)

## Features

- **Astro 5** + **i18n** (`en` / `zh-cn`)
- **Environment-driven**: Site URL, title, description, author, social links, status/stats pages, etc. configurable in `.env`
- **Blog posts**: MDX with tags / series / categories; up to 3 tags per post
- **Search**: Local `search-index.json` or Algolia (optional)
- **Comments**: Giscus (optional)
- **Analytics**: Google Analytics GA4 (optional)
- **RSS**, **Sitemap**, **Pagination**, **Share** (copy link / X / Weibo / LinkedIn / Facebook / Instagram)
- **Deploy**: Static export to Cloudflare Pages/Workers, GitHub Pages, etc.

## Quick Start

1. **Clone or download this repo**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set at least:
   - `PUBLIC_SITE_URL`: Full site URL (e.g. `https://example.com`)
   - `PUBLIC_SITE_TITLE_EN` / `PUBLIC_SITE_TITLE_ZH_CN`: Site title
   - `PUBLIC_SITE_DESCRIPTION_EN` / `PUBLIC_SITE_DESCRIPTION_ZH_CN`: Site description
   - `PUBLIC_AUTHOR_NAME`: Default author name

   See `.env.example` for other variables (Giscus, Algolia, GA, social links, etc. are optional).

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Build**
   ```bash
   npm run build
   ```

6. **Preview build**
   ```bash
   npm run preview
   ```

## Project Structure Overview

| Path | Description |
|------|-------------|
| `src/blog/en/`, `src/blog/zh-cn/` | Blog MDX files, organized by language |
| `src/consts.ts` | Site copy and constants; title/description/author read from env, rest editable here |
| `src/data/projects.ts` | Projects page data |
| `src/locales.ts` | Language list and default locale |
| `.env` / `.env.example` | Environment variables (site, author, third-party services) |

## Blog Post Format

Create a `.mdx` under `src/blog/en/` or `src/blog/zh-cn/` with frontmatter like:

```yaml
---
title: "Post Title"
description: "Short description"
date: 2025-01-01T00:00:00.000Z
updated: 2025-01-15T00:00:00.000Z  # optional
author: "Author Name"  # optional; falls back to PUBLIC_AUTHOR_NAME
tags: ["tag1", "tag2"]  # max 3
series: ["Series Name"]  # optional
categories: ["Category"]  # optional
---
```

## Deployment

- **Cloudflare**: After setting `CLOUDFLARE_API_TOKEN` etc., use `.github/workflows/deploy-cloudflare.yml` or run `npm run deploy` locally (requires `wrangler` logged in).
- **GitHub Pages**: Use `.github/workflows/gh-pages.yml`; push to `main` to publish to the `gh-pages` branch.

Ensure CI can read `PUBLIC_SITE_URL` and other variables (e.g. in GitHub Actions “Settings → Secrets and variables → Actions”, or by injecting them in the workflow).

## License

Same as upstream and this template (see LICENSE or copyright in the repo). Content of sites generated from this template is owned by their respective authors.
