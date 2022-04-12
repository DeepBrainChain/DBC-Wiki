import { defineThemeConfig } from "vuepress-theme-hope";
// import * as navbar from "./navbar";
// import * as sidebar from "./sidebar";

import { navbar, sidebar } from "./configs";

export default defineThemeConfig({
  repo: "DeepBrainChain/DBC-Wiki",
  docsDir: "docs",
  docsBranch: "main",
  locales: {
    "/": {
      navbar: navbar.zh,
      sidebar: sidebar.zh,
      selectLanguageName: "简体中文",
      selectLanguageText: "选择语言",

      // page meta
      editLinkText: "在 GitHub 上编辑此页",
      lastUpdatedText: "上次更新",
      contributorsText: "贡献者",
    },
    "/en/": {
      navbar: navbar.en,
      sidebar: sidebar.en,
      selectLanguageName: "English",

      // page meta
      editLinkText: "Edit this page on GitHub",
    },
    "/kr/": {
      navbar: navbar.kr,
      sidebar: sidebar.kr,
      selectLanguageName: "한국어",
      selectLanguageText: "언어 선택",

      // page meta
      editLinkText: "GitHub에서 이 페이지 편집",
      lastUpdatedText: "마지막 업데이트",
      contributorsText: "기부자",
    },
  },

  plugins: {
    comment: {
      type: "giscus",
      comment: false,
      repo: "DeepBrainChain/DBC-Wiki",
      repoId: "R_kgDOGcH1KQ",
      category: "Announcements",
      categoryId: "DIC_kwDOGcH1Kc4COfW-",
    },
  },
});
