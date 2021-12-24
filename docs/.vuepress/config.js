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
        link: "/staking-model",
        children: [
          {
            text: "质押DBC",
            link: "/staking-model",
            children: [
              "/staking-model/generate_new_account",
              "/staking-model/join_dbc_network",
              "/staking-model/staking_dbc_and_voting",
            ],
          },
          {
            text: "链上算力平台",
            link: "/onchain-guide",
            children: [
              "/onchain-guide/dbc_chain_logic",
              "/onchain-guide/machine_reward_model",
              "/onchain-guide/machine_slash_model",
              "/onchain-guide/bonding_machine",
              "/onchain-guide/become_onchain_committee",
              "/onchain-guide/machine_verification",
              // "/onchain-guide/rent_machine",
              "/onchain-guide/maintain_machine",
              "/onchain-guide/onchain_errors",
            ],
          },
          {
            text: "链上API",
            link: "/onchain-api",
            children: [
              "/onchain-api/dbc_rpc_readme",
              "/onchain-api/dbc_rpc",
              "/onchain-api/dbc_storage",
            ],
          },
        ],
      },
      {
        text: "安装DBC程序",
        link: "/install_and_update_dbc",
        children: [
          "/install_and_update_dbc/install_update_dbc_client",
          "/install_and_update_dbc/install_dbc_compute_node",
          "/install_and_update_dbc/update_dbc_compute_node",
        ],
      },
      {
        text: "DBC客户端-HTTP请求",
        link: "/dbc_client_api",
        children: [
          "/dbc_client_api/install_tool",
          "/dbc_client_api/http_request_format",
          "/dbc_client_api/http_api",
        ],
      },
    ],
    sidebar: {
      "/staking-model/": [
        {
          text: "StakingModel",
          children: [
            "/staking-model/generate_new_account",
            "/staking-model/join_dbc_network",
            "/staking-model/staking_dbc_and_voting",
          ],
        },
      ],
      "/onchain-guide/": [
        {
          text: "OnchainGuide",
          children: [
            "/onchain-guide/dbc_chain_logic",
            "/onchain-guide/generate_new_account",
            "/onchain-guide/join_dbc_network",
            "/onchain-guide/staking_dbc_and_voting",
            "/onchain-guide/machine_reward_model",
            "/onchain-guide/machine_slash_model",
            "/onchain-guide/bonding_machine",
            "/onchain-guide/become_onchain_committee",
            "/onchain-guide/machine_verification",
            // "/onchain-guide/rent_machine",
            "/onchain-guide/maintain_machine",
            "/onchain-guide/onchain_errors",
          ],
        },
      ],
      "/onchain-api/": [
        {
          text: "OnchainAPI",
          children: [
            "/onchain-api/dbc_rpc_readme",
            "/onchain-api/dbc_rpc",
            "/onchain-api/dbc_storage",
          ],
        },
      ],
      "/install_and_update_dbc/": [
        {
          text: "install-dbc",
          children: [
            "/install_and_update_dbc/install_update_dbc_client",
            "/install_and_update_dbc/install_dbc_compute_node",
            "/install_and_update_dbc/update_dbc_compute_node",
          ],
        },
      ],
      "/dbc_client_api/": [
        {
          text: "dbc-http-api",
          children: [
            "/dbc_client_api/install_tool",
            "/dbc_client_api/http_request_format",
            "/dbc_client_api/http_api",
          ],
        },
      ],
    },
    logo: "/images/dbc.icon.png",
    locales: {
      "/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
      },
      "/en": {
        selectLanguageName: "English",
      },
    },
  },
  base: "/DBC-Wiki/",
};
