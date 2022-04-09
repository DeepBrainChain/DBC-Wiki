import { path } from "@vuepress/utils";
import type { Theme } from "@vuepress/core";
import type { DefaultThemeOptions } from "@vuepress/theme-default";

const commentTheme: Theme<DefaultThemeOptions> = {
  name: "comment-theme",

  // we are extending @vuepress/theme-default
  extends: "@vuepress/theme-default",

  layouts: {
    // we overide the default layout to provide comment service
    Layout: path.resolve(__dirname, "layouts", "Layout.vue"),
  },

  plugins: [
    [
      "vuepress-plugin-comment2",
      {
        type: "giscus",
        comment: true,
        repo: "DeepBrainChain/DBC-Wiki",
        repoId: "R_kgDOGcH1KQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGcH1Kc4COfW-",
      },
    ],
  ],
};

export default commentTheme;
