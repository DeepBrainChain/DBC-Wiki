import { defineUserConfig } from "vuepress";
import themeConfig from "./themeConfig";
import { searchPlugin } from "@vuepress/plugin-search";
import { commentPlugin } from "vuepress-plugin-comment2";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  title: "DBC-Wiki",
  lang: "zh-CN",
  description: "这是 DBC-Wiki 站点",
  head: [["link", { rel: "icon", href: "/images/dbc.icon.png" }]],
  base: "/DBC-Wiki/",
  theme: themeConfig,
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
  plugins: [
    componentsPlugin({
      components: ["PDF"],
    }),

    searchPlugin({
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
    }),
    commentPlugin({
      provider: "Giscus",
      comment: false,
      repo: "DeepBrainChain/DBC-Wiki",
      repoId: "R_kgDOGcH1KQ",
      category: "Announcements",
      categoryId: "DIC_kwDOGcH1Kc4COfW-",
    }),
  ],
});
