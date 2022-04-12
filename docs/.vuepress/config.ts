// import { defineUserConfig } from "@vuepress/cli";
import { navbar, sidebar } from "./configs";
import { path } from "@vuepress/utils";
// import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

// module.exports = {
export default defineHopeConfig({
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
  // we are using a custom theme adding this plugin
  // theme: path.resolve(__dirname, "./theme"),
  themeConfig,
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
});
