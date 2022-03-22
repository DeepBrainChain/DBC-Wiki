import { navbar, sidebar } from "./configs";

module.exports = {
  lang: "zh-CN",
  title: "DBC-Wiki",
  description: "这是 DBC-Wiki 站点",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DBC-Wiki",
      description: "欢迎来到 DBC-Wiki",
    },
    "/en/": {
      lang: "en-US",
      title: "DBC-Wiki",
      description: "Welcome to DBC-Wiki",
    },
    "/kr/": {
      lang: "ko-KR",
      title: "DBC-Wiki",
      description: "DBC-Wiki에 오신 것을 환영합니다",
    },
  },
  head: [["link", { rel: "icon", href: "/images/dbc.icon.png" }]],
  logo: "/images/dbc.icon.png",
  themeConfig: {
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
  },
  base: "/DBC-Wiki/",
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        isSearchable: (page) => page.path !== "/",
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
          "/kr/": {
            placeholder: "검색",
          },
        },
      },
    ],
  ],
};
