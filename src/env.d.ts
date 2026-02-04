/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** 站点 URL，用于 sitemap、canonical、OG 等，如 https://example.com */
  readonly PUBLIC_SITE_URL?: string;
  /** 站点标题（英文） */
  readonly PUBLIC_SITE_TITLE_EN?: string;
  /** 站点标题（中文） */
  readonly PUBLIC_SITE_TITLE_ZH_CN?: string;
  /** 站点描述（英文） */
  readonly PUBLIC_SITE_DESCRIPTION_EN?: string;
  /** 站点描述（中文） */
  readonly PUBLIC_SITE_DESCRIPTION_ZH_CN?: string;
  /** 站点关键词 meta（英文，逗号分隔） */
  readonly PUBLIC_SITE_KEYWORDS_EN?: string;
  /** 站点关键词 meta（中文，逗号分隔） */
  readonly PUBLIC_SITE_KEYWORDS_ZH_CN?: string;
  /** 站点 slogan（英文） */
  readonly PUBLIC_SITE_SLOGAN_EN?: string;
  /** 站点 slogan（中文） */
  readonly PUBLIC_SITE_SLOGAN_ZH_CN?: string;
  /** 默认作者名（博文、meta author） */
  readonly PUBLIC_AUTHOR_NAME?: string;
  /** X (Twitter) 账号，如 @username */
  readonly PUBLIC_X_ACCOUNT?: string;
  /** 同一作者其他主页 URL，JSON 数组字符串，如 ["https://github.com/me"] */
  readonly PUBLIC_SAME_AS_URLS?: string;
  /** 底部「状态」链接（可选，不填则隐藏） */
  readonly PUBLIC_STATUS_URL?: string;
  /** 底部「访问统计」链接（可选，不填则隐藏） */
  readonly PUBLIC_ANALYTICS_URL?: string;
  /** 底部社交链接，JSON 数组，如 [{"name":"GitHub","url":"https://github.com/me","icon":"github"}]，icon 可选: github|x|medium|weibo|kofi|email */
  readonly PUBLIC_SOCIAL_LINKS?: string;
  /** Algolia 站点验证 meta content（可选） */
  readonly PUBLIC_ALGOLIA_SITE_VERIFICATION?: string;
  /** Google Analytics (GA4) 测量 ID */
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  /** Giscus 评论：仓库 owner/repo */
  readonly PUBLIC_GISCUS_REPO?: string;
  readonly PUBLIC_GISCUS_REPO_ID?: string;
  readonly PUBLIC_GISCUS_CATEGORY?: string;
  readonly PUBLIC_GISCUS_CATEGORY_ID?: string;
  /** Algolia 搜索 */
  readonly PUBLIC_ALGOLIA_APP_ID?: string;
  readonly PUBLIC_ALGOLIA_SEARCH_KEY?: string;
  readonly PUBLIC_ALGOLIA_INDEX_NAME?: string;
}
