module.exports = {
  lang: "zh-CN",
  title: "DBC-Wiki",
  description: "这是DBC-Wiki站点",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DBC-Wkik",
      description: "Vue 驱动的静态网站生成器",
    },
    "/en/": {
      lang: "en-US",
      title: "DBC-Wiki",
      description: "Vue-powered Static Site Generator",
    },
  },
  head: [["link", { rel: "icon", href: "/images/dbc.icon.png" }]],
  themeConfig: {
    navbar: [
      // NavbarItem
      {
        text: "链上操作说明",
        link: "/onchain-guide",
        children: [
          "/onchain-guide/generate_new_account.md",
          "/onchain-guide/bonding_machine.md",
          "/onchain-guide/Machine_verification.md",
          "/onchain-guide/maintain_machine.md",
        ],
      },
      {
        text: "链上API",
        link: "/onchain-api",
        children: ["/onchain-api/Custom_RPC.md"],
      },
    ],
    sidebar: {
      "/onchain-guide/": [
        {
          text: "OnchainGuide",
          children: [
            "/onchain-guide/generate_new_account.md",
            "/onchain-guide/maintain_machine.md",
            "/onchain-guide/bonding_machine.md",
            "/onchain-guide/Machine_verification.md",
          ],
        },
      ],
      "/onchain-api/": [
        {
          text: "OnchainAPI",
          children: ["/onchain-api/Custom_RPC.md"],
        },
      ],
    },
    logo: "/images/dbc.icon.png",
    locales: {
      "/": {
        selectLanguageName: "简体中文",
      },
      "/en": {
        selectLanguageName: "English",
      },
    },
  },
  base: "/DBC-Wiki/",
};
