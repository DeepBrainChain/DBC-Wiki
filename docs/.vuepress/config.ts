import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/DBC-Wiki/",
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

  theme,

  shouldPrefetch: false,
});
