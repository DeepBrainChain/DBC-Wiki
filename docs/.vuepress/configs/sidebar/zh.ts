import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
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
  "/dbc-information": [
    {
      text: "DBC资讯",
      children: [
        {
          text: "DBC AMA",
          link: "/dbc-information/dbc-ama/",
          children: [
            "/dbc-information/dbc-ama/8bit-ama",
            "/dbc-information/dbc-ama/galaxy-ama",
            "/dbc-information/dbc-ama/council-ama",
            "/dbc-information/dbc-ama/foreign-ama",
            "/dbc-information/dbc-ama/dbc-ama-collection",
            "/dbc-information/dbc-ama/dbc-hot-link",
          ],
        },
        {
          text: "DBC 媒体报道",
          link: "/dbc-information/dbc-report/",
          children: [
            "/dbc-information/dbc-report/dbc-36kr-report",
            "/dbc-information/dbc-report/dbc-apnews-report",
            "/dbc-information/dbc-report/dbc-asiaone-report",
            "/dbc-information/dbc-report/dbc-businessinsider-report",
            "/dbc-information/dbc-report/dbc-coindeals-report",
            "/dbc-information/dbc-report/dbc-dailyherald-report",
            "/dbc-information/dbc-report/dbc-marketscreener",
            "/dbc-information/dbc-report/dbc-post-gazette",
            "/dbc-information/dbc-report/dbc-theblockbeats-report",
            "/dbc-information/dbc-report/dbc-uk-tech-daily",
            "/dbc-information/dbc-report/dbc-yahoo-report2",
            "/dbc-information/dbc-report/dbc-yahoo-report",
          ],
        },
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
  "/staking-model/": [
    {
      text: "StakingModel",
      children: [
        "/staking-model/dbc-chain-params",
        "/staking-model/generate-new-account",
        "/staking-model/join-dbc-network",
        "/staking-model/staking-dbc-and-voting",
        "/staking-model/common-questions",
      ],
    },
  ],
  "/onchain-guide/": [
    {
      text: "OnchainGuide",
      children: [
        "/onchain-guide/dbc-chain-logic",
        "/onchain-guide/machine-reward-model",
        "/onchain-guide/machine-slash-model",
        "/onchain-guide/bonding-machine",
        "/onchain-guide/become-onchain-committee",
        "/onchain-guide/machine-verification",
        "/onchain-guide/rent-machine",
        "/onchain-guide/maintain-machine",
        "/onchain-guide/onchain-errors",
      ],
    },
  ],
  "/onchain-api/": [
    {
      text: "OnchainAPI",
      children: [
        "/onchain-api/dbc-rpc-readme",
        "/onchain-api/dbc-rpc",
        "/onchain-api/dbc-storage",
      ],
    },
  ],
  "/install-update-dbc-node": [
    {
      text: "安装&升级DBC节点",
      children: [
        {
          text: "安装和升级DBC节点",
          link: "/install-update-dbc-node/install-update-dbc/",
          children: [
            "/install-update-dbc-node/install-update-dbc/install-dbc-compute-node",
            "/install-update-dbc-node/install-update-dbc/update-dbc-compute-node",
            "/install-update-dbc-node/install-update-dbc/install-update-dbc-client"       
          ]
        },
        {
          text: "DBC客户端-HTTP请求",
          link: "/install-update-dbc-node/dbc-client-api/",
          children: [
            "/install-update-dbc-node/dbc-client-api/install-tool",
            "/install-update-dbc-node/dbc-client-api/http-request-format",
            "/install-update-dbc-node/dbc-client-api/http-api"
          ]
        },
        {
          text: "创建windows虚拟机使用omniverse",
          link: "/install-update-dbc-node/create-win-machine-omniverse/",
          children: [
            "/install-update-dbc-node/create-win-machine-omniverse/create-win-machine-omniverse",
          ]
        }
      ]
    }
  ]
};
