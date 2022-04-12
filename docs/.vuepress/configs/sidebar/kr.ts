import { defineSidebarConfig } from "vuepress-theme-hope";

export const kr = defineSidebarConfig({
  "/kr/dbc-introduction/": [
    {
      text: "DBC Introduction",
      prefix: "/kr/dbc-introduction/",
      children: [
        "dbc-introduction",
        "dbc-applications",
        "dbc-ecology",
        "dbc-profit-trade",
        "dbc-gpu-rent",
        "rent-virtual",
        "dbc-community",
        "dbc-hot-link",
      ],
    },
  ],
  "/kr/dbc-democracy/": [
    {
      text: "DBC Democracy",
      prefix: "/kr/dbc-democracy/",
      children: [
        "dbc-council",
        "join-council",
        "proposing-referenda",
        "voting-referenda",
        "apply-treasury",
        "dbc-nft",
        "staking-voting",
      ],
    },
  ],
  "/kr/dbc-information/": [
    {
      text: "DBC News",
      prefix: "/kr/dbc-information/",
      children: [
        {
          text: "DBC Progress",
          prefix: "dbc-progress/",
          children: ["2020", "2021-01-01", "2021", "2022-01-01"],
        },
        {
          text: "DBC AMA",
          prefix: "dbc-ama/",
          children: [
            "8btc-ama",
            "galaxy-ama",
            "council-ama",
            "dbc-ama-collection",
          ],
        },
        {
          text: "DBC Report",
          prefix: "dbc-report/",
          children: [
            "dbc-36kr-report",
            "dbc-apnews-report",
            "dbc-asiaone-report",
            "dbc-businessinsider-report",
            "dbc-coindeals-report",
            "dbc-dailyherald-report",
            "dbc-marketscreener",
            "dbc-post-gazette",
            "dbc-theblockbeats-report",
            "dbc-uk-tech-daily",
            "dbc-yahoo-report2",
            "dbc-yahoo-report",
          ],
        },
      ],
    },
  ],
  "/kr/staking-model/": [
    {
      text: "DBC Staking Model",
      prefix: "/kr/staking-model/",
      children: [
        "dbc-chain-params",
        "generate-new-account",
        "join-dbc-network",
        "staking-dbc-and-voting",
        "fast-track",
        "common-questions",
      ],
    },
  ],
  "/kr/onchain-guide/": [
    {
      text: "OnchainGuide",
      prefix: "/kr/onchain-guide/",
      children: [
        "dbc-chain-logic",
        "machine-reward-model",
        "machine-slash-model",
        "unbonding-machine",
        "become-onchain-committee",
        "machine-verification",
        "rent-machine",
        "report-machine-fault",
        "maintain-machine",
        "onchain-errors",
      ],
    },
  ],
  "/kr/onchain-api/": [
    {
      text: "OnchainAPI",
      prefix: "/kr/onchain-api/",
      children: ["dbc-rpc-readme", "dbc-rpc", "dbc-storage"],
    },
  ],
  "/kr/gpu-cloud/": [
    {
      text: "Deploy GPU cloud platform",
      prefix: "/kr/gpu-cloud/",
      children: ["dbc-gpu-cloud-service"],
    },
  ],
  "/kr/install-update-dbc-node/": [
    {
      text: "install and update dbc node",
      prefix: "/kr/install-update-dbc-node/",
      children: [
        {
          text: "Install And Update DBC Node",
          prefix: "install-update-dbc/",
          children: [
            "install-dbc-compute-node",
            "update-dbc-compute-node",
            "install-update-dbc-client",
          ],
        },
        {
          text: "DBC Client - HTTP API",
          prefix: "dbc-client-api/",
          children: ["install-tool", "http-request-format", "http-api"],
        },
        {
          text: "Create wins-machine application omniverse",
          prefix: "create-win-machine-omniverse/",
          children: ["create-win-machine-omniverse"],
        },
        {
          text: "DBC monitor",
          prefix: "dbc-monitor/",
          children: [
            "http-monitor-api",
            "monitoring-items",
            "monitoring-protocol",
          ],
        },
      ],
    },
  ],
});
