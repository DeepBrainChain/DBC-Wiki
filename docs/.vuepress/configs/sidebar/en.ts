import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/en/dbc-introduction": [
    {
      text: "DBC Introduction",
      children: [
        "/en/dbc-introduction/",
        "/en/dbc-introduction/dbc-applications",
        "/en/dbc-introduction/dbc-ecology",
        "/en/dbc-introduction/dbc-gpu-rent",
        "/en/dbc-introduction/dbc-profit",
        "/en/dbc-introduction/dbc-trade",
        "/en/dbc-introduction/dbc-community",
      ],
    },
  ],
  "/en/dbc-information": [
    {
      text: "DBC News",
      children: [
        {
          text: "DBC Progress",
          children: [
            "/en/dbc-information/dbc-progress/2020",
            "/en/dbc-information/dbc-progress/2021-01-01",
            "/en/dbc-information/dbc-progress/2021",
            "/en/dbc-information/dbc-progress/2022-01-01",
          ],
        },
        {
          text: "DBC AMA",
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
          text: "DBC Report",
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
  ],
  "/en/dbc-democracy/": [
    {
      text: "DBC Democracy",
      children: [
        "/en/dbc-democracy/",
        "/en/dbc-democracy/dbc-council",
        "/en/dbc-democracy/join-council",
        "/en/dbc-democracy/dbc-nft",
        "/en/dbc-democracy/apply-treasury",
        "/en/dbc-democracy/staking-voting",
      ],
    },
  ],
  "/en/staking-model/": [
    {
      text: "DBC Staking Model",
      children: [
        "/en/staking-model/dbc-chain-params",
        "/en/staking-model/generate-new-account",
        "/en/staking-model/join-dbc-network",
        "/en/staking-model/staking-dbc-and-voting",
        "/en/staking-model/common-questions",
      ],
    },
  ],
  "/en/onchain-guide/": [
    {
      text: "OnchainGuide",
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
  ],
  "/en/onchain-api/": [
    {
      text: "OnchainAPI",
      children: [
        "/en/onchain-api/dbc-rpc-readme",
        "/en/onchain-api/dbc-rpc",
        "/en/onchain-api/dbc-storage",
      ],
    },
  ],
  "/en/install-and-update-dbc/": [
    {
      text: "install-dbc",
      children: [
        "/en/install-and-update-dbc/install-dbc-compute-node",
        "/en/install-and-update-dbc/install-update-dbc-client",
        "/en/install-and-update-dbc/update-dbc-compute-node",
        {
          text: "Create wins-machine application omniverse",
          children: [
            "en/install-and-update-dbc/create-win-machine-omniverse/create-win-machine-omniverse",
          ],
        },
      ],
    },
  ],
  "/en/dbc-client-api/": [
    {
      text: "dbc-http-api",
      children: [
        "/en/dbc-client-api/install-tool",
        "/en/dbc-client-api/http-request-format",
        "/en/dbc-client-api/http-api",
        "/en/dbc-client-api/snap-mirror-manage",
      ],
    },
  ],
};
