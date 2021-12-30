module.exports = {
  lang: "zh-CN",
  title: "DBC-Wiki",
  description: "这是DBC-Wiki站点",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DBC-Wiki",
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
        text: "了解DBC",
        link: "/dbc-introduction",
        children: [
          "/dbc-introduction/dbc-applications",
          {
            text: "社区治理",
            link: "/dbc-democracy/",
            children: [
              "/dbc-democracy/dbc-council",
              "/dbc-democracy/join-council",
              "/dbc-democracy/dbc-nft",
              "/dbc-democracy/apply-treasury",
              "/dbc-democracy/staking-voting",
            ],
          },
          {
            text: "DBC介绍",
            link: "/dbc-introduction",
            children: [
              "/dbc-introduction/dbc-ecology",
              "/dbc-introduction/dbc-gpu-rent",
              "/dbc-introduction/dbc-profit",
              "/dbc-introduction/dbc-trade",
              "/dbc-introduction/dbc-community",
            ],
          },
          {
            text: "DBC AMA",
            link: "/dbc-introduction/dbc-ama/",
            children: [
              "/dbc-introduction/dbc-ama/8bit-ama",
              "/dbc-introduction/dbc-ama/galaxy-ama",
              "/dbc-introduction/dbc-ama/council-ama",
              "/dbc-introduction/dbc-ama/foreign-ama",
            ],
          },
          {
            text: "DBC 媒体报道",
            link: "/dbc-report/",
            children: [
              "/dbc-report/dbc-36kr-report",
              "/dbc-report/dbc-apnews-report",
              "/dbc-report/dbc-asiaone-report",
              "/dbc-report/dbc-businessinsider-report",
              "/dbc-report/dbc-coindeals-report",
              "/dbc-report/dbc-dailyherald-report",
              "/dbc-report/dbc-marketscreener",
              "/dbc-report/dbc-post-gazette",
              "/dbc-report/dbc-theblockbeats-report",
              "/dbc-report/dbc-uk-tech-daily",
              "/dbc-report/dbc-yahoo-report2",
              "/dbc-report/dbc-yahoo-report",
            ],
          },
        ],
      },
      {
        text: "链上操作说明",
        link: "/staking-model",
        children: [
          {
            text: "参与 DBC 深脑链说明",
            link: "/staking-model",
            children: [
              "/staking-model/generate_new_account",
              "/staking-model/join_dbc_network",
              "/staking-model/staking_dbc_and_voting",
              "/staking-model/common_questions",
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
              "/onchain-guide/rent_machine",
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
          "/dbc_client_api/snap_mirror_manage",
        ],
      },
    ],
    sidebar: {
      "/dbc-introduction": [
        {
          text: "了解DBC",
          children: [
            "/dbc-introduction/",
            "/dbc-introduction/dbc-applications",
            "/dbc-introduction/dbc-ecology",
            "/dbc-introduction/dbc-gpu-rent",
            "/dbc-introduction/dbc-profit",
            "/dbc-introduction/dbc-trade",
            "/dbc-introduction/dbc-community",
          ],
        },
      ],
      "/dbc-democracy/": [
        {
          text: "社区治理",
          children: [
            "/dbc-democracy/",
            "/dbc-democracy/dbc-council",
            "/dbc-democracy/join-council",
            "/dbc-democracy/dbc-nft",
            "/dbc-democracy/apply-treasury",
            "/dbc-democracy/staking-voting",
          ],
        },
      ],
      "/dbc-report": [
        {
          text: "DBC 媒体报道",
          children: [
            "/dbc-report/dbc-36kr-report",
            "/dbc-report/dbc-apnews-report",
            "/dbc-report/dbc-asiaone-report",
            "/dbc-report/dbc-businessinsider-report",
            "/dbc-report/dbc-coindeals-report",
            "/dbc-report/dbc-dailyherald-report",
            "/dbc-report/dbc-marketscreener",
            "/dbc-report/dbc-post-gazette",
            "/dbc-report/dbc-theblockbeats-report",
            "/dbc-report/dbc-uk-tech-daily",
            "/dbc-report/dbc-yahoo-report2",
            "/dbc-report/dbc-yahoo-report",
          ],
        },
      ],
      "/staking-model/": [
        {
          text: "StakingModel",
          children: [
            "/staking-model/",
            "/staking-model/generate_new_account",
            "/staking-model/join_dbc_network",
            "/staking-model/staking_dbc_and_voting",
            "/staking-model/common_questions",
          ],
        },
      ],
      "/onchain-guide/": [
        {
          text: "OnchainGuide",
          children: [
            "/onchain-guide/dbc_chain_logic",
            "/onchain-guide/machine_reward_model",
            "/onchain-guide/machine_slash_model",
            "/onchain-guide/bonding_machine",
            "/onchain-guide/become_onchain_committee",
            "/onchain-guide/machine_verification",
            "/onchain-guide/rent_machine",
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
            "/dbc_client_api/snap_mirror_manage",
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
