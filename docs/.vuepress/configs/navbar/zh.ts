import type { NavbarConfig } from "@vuepress/theme-default";

export const zh: NavbarConfig = [
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
    ],
  },
  {
    text: "DBC资讯",
    link: "/dbc-information",
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
  {
    text: "链上操作说明",
    link: "/staking-model",
    children: [
      {
        text: "参与 DBC 深脑链说明",
        children: [
          "/staking-model/dbc-chain-params",
          "/staking-model/generate-new-account",
          "/staking-model/join-dbc-network",
          "/staking-model/staking-dbc-and-voting",
          "/staking-model/common-questions",
        ],
      },
      {
        text: "链上算力平台",
        link: "/onchain-guide",
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
      {
        text: "链上API",
        link: "/onchain-api",
        children: [
          "/onchain-api/dbc-rpc-readme",
          "/onchain-api/dbc-rpc",
          "/onchain-api/dbc-storage",
        ],
      },
    ],
  },
  {
    text: "安装DBC程序",
    link: "/install-and-update-dbc",
    children: [
      "/install-and-update-dbc/install-dbc-compute-node",
      "/install-and-update-dbc/install-update-dbc-client",
      "/install-and-update-dbc/update-dbc-compute-node",
    ],
  },
  {
    text: "DBC客户端-HTTP请求",
    link: "/dbc-client-api",
    children: [
      "/dbc-client-api/install-tool",
      "/dbc-client-api/http-request-format",
      "/dbc-client-api/http-api",
      "/dbc-client-api/snap-mirror-manage",
    ],
  },
];
