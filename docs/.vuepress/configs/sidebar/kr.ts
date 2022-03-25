import type { SidebarConfig } from "@vuepress/theme-default";

export const kr: SidebarConfig = {
  "/kr/dbc-introduction": [
    {
      text: "DBC Introduction",
      children: [
        "/kr/dbc-introduction/dbc-introduction",
        "/kr/dbc-introduction/dbc-applications",
        "/kr/dbc-introduction/dbc-ecology",
        "/kr/dbc-introduction/dbc-gpu-rent",
        "/kr/dbc-introduction/dbc-profit-trade",
        "/kr/dbc-introduction/rent-virtual",
        "/kr/dbc-introduction/dbc-community",
      ],
    },
  ],
  "/kr/dbc-democracy": [
    {
      text: "DBC Democracy",
      children: [
        "/kr/dbc-democracy/dbc-council",
        "/kr/dbc-democracy/join-council",
        "/kr/dbc-democracy/proposing-referenda",
        "/kr/dbc-democracy/voting-referenda",
        "/kr/dbc-democracy/dbc-nft",
        "/kr/dbc-democracy/apply-treasury",
        "/kr/dbc-democracy/staking-voting",
      ],
    },
  ],
  "/kr/dbc-information": [
    {
      text: "DBC News",
      children: [
        {
          text: "DBC Progress",
          children: [
            "/kr/dbc-information/dbc-progress/2020",
            "/kr/dbc-information/dbc-progress/2021-01-01",
            "/kr/dbc-information/dbc-progress/2021",
            "/kr/dbc-information/dbc-progress/2022-01-01",
          ],
        },
        {
          text: "DBC AMA",
          children: [
            "/kr/dbc-information/dbc-ama/8btc-ama",
            "/kr/dbc-information/dbc-ama/galaxy-ama",
            "/kr/dbc-information/dbc-ama/council-ama",
            "/kr/dbc-information/dbc-ama/dbc-ama-collection",
            "/kr/dbc-information/dbc-ama/dbc-hot-link",
          ],
        },
        {
          text: "DBC Report",
          children: [
            "/kr/dbc-information/dbc-report/dbc-36kr-report",
            "/kr/dbc-information/dbc-report/dbc-apnews-report",
            "/kr/dbc-information/dbc-report/dbc-asiaone-report",
            "/kr/dbc-information/dbc-report/dbc-businessinsider-report",
            "/kr/dbc-information/dbc-report/dbc-coindeals-report",
            "/kr/dbc-information/dbc-report/dbc-dailyherald-report",
            "/kr/dbc-information/dbc-report/dbc-marketscreener",
            "/kr/dbc-information/dbc-report/dbc-post-gazette",
            "/kr/dbc-information/dbc-report/dbc-theblockbeats-report",
            "/kr/dbc-information/dbc-report/dbc-uk-tech-daily",
            "/kr/dbc-information/dbc-report/dbc-yahoo-report2",
            "/kr/dbc-information/dbc-report/dbc-yahoo-report",
          ],
        },
      ],
    },
  ],
  "/kr/staking-model/": [
    {
      text: "DBC Staking Model",
      children: [
        "/kr/staking-model/dbc-chain-params",
        "/kr/staking-model/generate-new-account",
        "/kr/staking-model/join-dbc-network",
        "/kr/staking-model/staking-dbc-and-voting",
        "/kr/staking-model/fast-track",
        "/kr/staking-model/common-questions",
      ],
    },
  ],
  "/kr/onchain-guide/": [
    {
      text: "OnchainGuide",
      children: [
        "/kr/onchain-guide/dbc-chain-logic",
        "/kr/onchain-guide/machine-reward-model",
        "/kr/onchain-guide/machine-slash-model",
        "/kr/onchain-guide/unbonding-machine",
        "/kr/onchain-guide/become-onchain-committee",
        "/kr/onchain-guide/machine-verification",
        "/kr/onchain-guide/rent-machine",
        "/kr/onchain-guide/report-machine-fault",
        "/kr/onchain-guide/maintain-machine",
        "/kr/onchain-guide/onchain-errors",
      ],
    },
  ],
  "/kr/onchain-api/": [
    {
      text: "OnchainAPI",
      children: [
        "/kr/onchain-api/dbc-rpc-readme",
        "/kr/onchain-api/dbc-rpc",
        "/kr/onchain-api/dbc-storage",
      ],
    },
  ],
  "/kr/gpu-cloud": [
    {
      text: "Deploy GPU cloud platform",
      children: ["/en/gpu-cloud/dbc-gpu-cloud-service"],
    },
  ],
  "/kr/install-update-dbc-node": [
    {
      text: "Install And Update DBC Node",
      children: [
        "/kr/install-update-dbc-node/install-update-dbc/install-dbc-compute-node",
        "/kr/install-update-dbc-node/install-update-dbc/update-dbc-compute-node",
        "/kr/install-update-dbc-node/install-update-dbc/install-update-dbc-client",
      ],
    },
    {
      text: "DBC Client - HTTP API",
      link: "/kr/install-update-dbc-node/dbc-client-api/",
      children: [
        "/kr/install-update-dbc-node/dbc-client-api/install-tool",
        "/kr/install-update-dbc-node/dbc-client-api/http-request-format",
        "/kr/install-update-dbc-node/dbc-client-api/http-api",
      ],
    },
    {
      text: "Create wins-machine application omniverse",
      children: [
        "/kr/install-update-dbc-node/create-win-machine-omniverse/create-win-machine-omniverse",
      ],
    },
    {
      text: "DBC monitor",
      link: "/kr/install-update-dbc-node/dbc-monitor/",
      children: [
        "/kr/install-update-dbc-node/dbc-monitor/http-monitor-api",
        "/kr/install-update-dbc-node/dbc-monitor/monitoring-items",
        "/kr/install-update-dbc-node/dbc-monitor/monitoring-protocol",
      ],
    },
  ],
};
