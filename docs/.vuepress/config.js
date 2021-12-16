module.exports = {
  lang: "zh-CN",
  title: "DBC-Wiki",
  description: "这是DBC-Wiki站点",

  head: [["link", { rel: "icon", href: "/images/dbc.icon.png" }]],
  themeConfig: {
    logo: "/images/dbc.icon.png",
    navbar: [
      // NavbarItem
      {
        text: "链上操作说明",
        link: "/onchain-guide",
        children: [
          "/onchain-guide/bonding_machine.md",
          "/onchain-guide/Machine_verification.md",
          "/onchain-guide/machine_online_en.md",
          "/onchain-guide/maintain_machine.md",
        ],
      },
      {
        text: "链上API",
        link: "/onchain-api",
        children: ["/onchain-api/Custom_RPC.md"],
      },

      // NavbarGroup
      {
        text: "Group",
        link: "/onchain-guide",
        children: ["/group/foo.md", "/group/bar.md"],
      },
      // 字符串 - 页面文件路径
      // "/bar/README.md",
    ],
    sidebar: {
      "/onchain-guide/": [
        {
          text: "Guide",
          children: [
            "/onchain-guide/maintain_machine.md",
            "/onchain-guide/bonding_machine.md",
            "/onchain-guide/machine_online_en.md",
            "/onchain-guide/Machine_verification.md",
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          children: ["/reference/cli.md", "/reference/config.md"],
        },
      ],
    },
  },
  base: "/DBC-Wiki/",
};
