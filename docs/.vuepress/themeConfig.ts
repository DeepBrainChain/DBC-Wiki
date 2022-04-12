import { defineThemeConfig } from "vuepress-theme-hope";
import { getLocales } from "@mr-hope/vuepress-shared";
// import * as navbar from "./navbar";
// import * as sidebar from "./sidebar";

import { navbar, sidebar } from "./configs";

export default defineThemeConfig({
  repo: "DeepBrainChain/DBC-Wiki",
  docsDir: "docs",
  docsBranch: "main",

  // locales: getLocals() as HopeThemeLocaleConfig,
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
      lang: "ko-KR",

      navbar: navbar.kr,
      sidebar: sidebar.kr,
      selectLanguageName: "한국어",
      selectLanguageText: "언어 선택",

      // page meta
      editLinkText: "GitHub에서 이 페이지 편집",
      lastUpdatedText: "마지막 업데이트",
      contributorsText: "기부자",

      navbarLocales: {
        langName: "ko-KR",
        selectLangText: "Language",
        selectLangAriaLabel: "Select language",
      },

      metaLocales: {
        prev: "Prev",
        next: "Next",
        lastUpdated: "Last update",
        contributors: "Contributors",
        editLink: "Edit this page",
      },

      blogLocales: {
        article: "Articles",
        articleList: "Article List",
        category: "Category",
        tag: "Tags",
        timeline: "Timeline",
        timelineTitle: "Yesterday Once More!",
        all: "All",
        intro: "Personal Intro",
        star: "Star",
        slides: "Slides",
        encrypt: "Encrypted",
      },

      outlookLocales: {
        themeColor: "Theme Color",
        darkmode: "Theme Mode",
        fullscreen: "Full Screen",
      },

      encryptLocales: {
        title: "Please enter password",
        errorHint: "Please enter the correct password!",
      },

      routeLocales: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "404msg": [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links.",
        ],
        back: "Go back",
        home: "Take me home",
      },
    },
  },
  logo: "/images/dbc.icon.png",
  plugins: {
    comment: {
      type: "giscus",
      comment: false,
      repo: "DeepBrainChain/DBC-Wiki",
      repoId: "R_kgDOGcH1KQ",
      category: "Announcements",
      categoryId: "DIC_kwDOGcH1Kc4COfW-",
    },
    readingTime: {
      locales: {
        "/kr/": {
          word: "About $word words",
          less1Minute: "Less than 1 minute",
          time: "About $time min",
        },
      },
    },
  },
});
