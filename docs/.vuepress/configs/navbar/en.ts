import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "了解DBC",
    link: "/en/dbc-introduction",
    children: [
      "/en/dbc-introduction/dbc-applications",
      {
        text: "社区治理",
        link: "/en/dbc-democracy/",
        children: [
          "/en/dbc-democracy/dbc-council",
          "/en/dbc-democracy/join-council",
          "/en/dbc-democracy/dbc-nft",
          "/en/dbc-democracy/apply-treasury",
          "/en/dbc-democracy/staking-voting",
        ],
      },
      {
        text: "DBC介绍",
        link: "/en/dbc-introduction",
        children: [
          "/en/dbc-introduction/dbc-ecology",
          "/en/dbc-introduction/dbc-gpu-rent",
          "/en/dbc-introduction/dbc-profit",
          "/en/dbc-introduction/dbc-trade",
          "/en/dbc-introduction/dbc-community",
        ],
      },
    ],
  },
  {
    text: "DBC资讯",
    link: "/en/dbc-information",
    children: [
      {
        text: "DBC AMA",
        link: "/en/dbc-information/dbc-ama/",
        children: [
          "/en/dbc-information/dbc-ama/8bit-ama",
          "/en/dbc-information/dbc-ama/galaxy-ama",
          "/en/dbc-information/dbc-ama/council-ama",
          "/en/dbc-information/dbc-ama/foreign-ama",
          "/en/dbc-information/dbc-ama/dbc-ama-collection",
          "/en/dbc-information/dbc-ama/dbc-hot-link",
        ],
      },
      {
        text: "DBC 媒体报道",
        link: "/en/dbc-information/dbc-report/",
        children: [
          "/en/dbc-information/dbc-report/dbc-36kr-report",
          "/en/dbc-information/dbc-report/dbc-apnews-report",
          "/en/dbc-information/dbc-report/dbc-asiaone-report",
          "/en/dbc-information/dbc-report/dbc-businessinsider-report",
          "/en/dbc-information/dbc-report/dbc-coindeals-report",
          "/en/dbc-information/dbc-report/dbc-dailyherald-report",
          "/en/dbc-information/dbc-report/dbc-marketscreener",
          "/en/dbc-information/dbc-report/dbc-post-gazette",
          "/en/dbc-information/dbc-report/dbc-theblockbeats-report",
          "/en/dbc-information/dbc-report/dbc-uk-tech-daily",
          "/en/dbc-information/dbc-report/dbc-yahoo-report2",
          "/en/dbc-information/dbc-report/dbc-yahoo-report",
        ],
      },
    ],
  },
  {
    text: "链上操作说明",
    link: "/en/staking-model",
    children: [
      {
        text: "参与 DBC 深脑链说明",
        children: [
          "/en/staking-model/dbc-chain-params",
          "/en/staking-model/generate-new-account",
          "/en/staking-model/join-dbc-network",
          "/en/staking-model/staking-dbc-and-voting",
          "/en/staking-model/common-questions",
        ],
      },
      {
        text: "链上算力平台",
        link: "/en/onchain-guide",
        children: [
          "/en/onchain-guide/dbc-chain-logic",
          "/en/onchain-guide/machine-reward-model",
          "/en/onchain-guide/machine-slash-model",
          "/en/onchain-guide/bonding-machine",
          "/en/onchain-guide/become-onchain-committee",
          "/en/onchain-guide/machine-verification",
          "/en/onchain-guide/rent-machine",
          "/en/onchain-guide/maintain-machine",
          "/en/onchain-guide/onchain-errors",
        ],
      },
      {
        text: "链上API",
        link: "/en/onchain-api",
        children: [
          "/en/onchain-api/dbc-rpc-readme",
          "/en/onchain-api/dbc-rpc",
          "/en/onchain-api/dbc-storage",
        ],
      },
    ],
  },
  {
    text: "安装DBC程序",
    link: "/en/install-and-update-dbc",
    children: [
      "/en/install-and-update-dbc/install-dbc-compute-node",
      "/en/install-and-update-dbc/install-update_dbc-client",
      "/en/install-and-update-dbc/update-dbc-compute-node",
    ],
  },
  {
    text: "DBC客户端-HTTP请求",
    link: "/en/dbc-client-api",
    children: [
      "/en/dbc-client-api/install-tool",
      "/en/dbc-client-api/http-request-format",
      "/en/dbc-client-api/http-api",
      "/en/dbc-client-api/snap-mirror-manage",
    ],
  },
];
