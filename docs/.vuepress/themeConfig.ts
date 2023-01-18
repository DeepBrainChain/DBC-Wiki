import { hopeTheme } from "vuepress-theme-hope";
import { navbar, sidebar } from "./configs";

export default hopeTheme({
  repo: "DeepBrainChain/DBC-Wiki",
  docsDir: "docs",
  docsBranch: "main",

  locales: {
    "/": {
      navbar: navbar.zh,
      sidebar: sidebar.zh,

      navbarLocales: {
        selectLangAriaLabel: "简体中文",
        // selectLangText: "选择语言",
        langName: "简体中文",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        contributors: "贡献者",
      },
    },
    "/en/": {
      navbar: navbar.en,
      sidebar: sidebar.en,

      navbarLocales: {
        selectLangAriaLabel: "English",
      },

      // page meta
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/kr/": {
      navbar: navbar.kr,
      sidebar: sidebar.kr,

      navbarLocales: {
        langName: "한국어",
        // selectLangText: "Language",
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
        placeholder: "Please enter password",
        errorHint: "Please enter the correct password!",
      },

      routeLocales: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        notFoundMsg: [
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
});
