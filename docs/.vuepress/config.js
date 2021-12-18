module.exports = {
  lang: "zh-CN",
  title: "DBC-Wiki",
  description: "这是DBC-Wiki站点",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DBC-Wkik",
      description: "欢迎来到DBC-Wiki",
    },
    "/en/": {
      lang: "en-US",
      title: "DBC-Wiki",
      description: "Welcome to DBC-Wiki",
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
          "onchain-guide/dbc_chain_logic",
          "/onchain-guide/generate_new_account",
          "/onchain-guide/bonding_machine",
          "/onchain-guide/Machine_verification",
          "/onchain-guide/maintain_machine",
        ],
      },
      {
        text: "链上API",
        link: "/onchain-api",
        children: [
          "/onchain-api/dbc_rpc_readme",
          "/onchain-api/dbc_rpc",
          "/onchain-api/Custom_RPC",
          "/onchain-api/dbc_storage",
        ],
      },
    ],
    sidebar: {
      "/onchain-guide/": [
        {
          text: "OnchainGuide",
          children: [
            "onchain-guide/dbc_chain_logic",
            "/onchain-guide/generate_new_account",
            "/onchain-guide/bonding_machine",
            "/onchain-guide/Machine_verification",
            "/onchain-guide/maintain_machine",
          ],
        },
      ],
      "/onchain-api/": [
        {
          text: "OnchainAPI",
          children: [
            "/onchain-api/dbc_rpc_readme",
            "/onchain-api/dbc_rpc",
            "/onchain-api/Custom_RPC",
            "/onchain-api/dbc_storage",
          ],
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
