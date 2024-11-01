import { sidebar } from "vuepress-theme-hope";

export const koSidebar = sidebar({
  "/ko/dbc-introduction/": [
    {
      text: "DBC Introduction",
      prefix: "/ko/dbc-introduction/",
      children: [
        "dbc-introduction",
        "dbc-applications",
        "dbc-ecology",
        "dbc-profit-trade",
        "dbc-gpu-rent",
        "rent-virtual",
        "dbc-community",
        "dbc-hot-link",
        "dbc-audit-report",
        {
          text: "Cloud platform operation",
          // collapsable: true,
          prefix: "cloud-platform-operation/",
          children: ["initial-operation-process", "support-for-cloud-platform"],
        },
      ],
    },
  ],
  "/ko/dbc-democracy/": [
    {
      text: "DBC Democracy",
      prefix: "/ko/dbc-democracy/",
      children: [
        "council-outreach-proposal",
        "dbc-council-establishment-notice",
        "treasury-usage",
        "dbc-council",
        "join-council",
        "council-meeting-procedures",
        "proposing-referenda",
        "voting-referenda",
        "apply-treasury",
        "dbc-nft",
        "staking-voting",
      ],
    },
  ],
  "/ko/dbc-information/": [
    {
      text: "DBC News",
      prefix: "/ko/dbc-information/",
      children: [
        {
          text: "DBC Progress",
          // collapsable: true,
          prefix: "dbc-progress/",
          children: ["2020", "2021-01-01", "2021", "2022-01-01", "2022"],
        },
        {
          text: "DBC AMA",
          // collapsable: true,
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
          // collapsable: true,
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
  "/ko/staking-model/": [
    {
      text: "DBC Staking Model",
      prefix: "/ko/staking-model/",
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
  "/ko/onchain-guide/": [
    {
      text: "OnchainGuide",
      prefix: "/ko/onchain-guide/",
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
  "/ko/onchain-api/": [
    {
      text: "OnchainAPI",
      prefix: "/ko/onchain-api/",
      children: ["dbc-rpc-readme", "dbc-rpc", "dbc-storage"],
    },
  ],
  "/ko/gpu-cloud/": [
    {
      text: "Deploy GPU cloud platform",
      prefix: "/ko/gpu-cloud/",
      children: ["dbc-gpu-cloud-service"],
    },
  ],
  "/ko/install-update-dbc-node/": [
    {
      text: "install and update dbc node",
      prefix: "/ko/install-update-dbc-node/",
      children: [
        {
          text: "Install And Update DBC Node",
          // collapsable: true,
          prefix: "install-update-dbc/",
          children: [
            "install-dbc-compute-node",
            "update-dbc-compute-node",
            "install-update-dbc-client",
            "dbc-bare-metal-node",
            "deploy_image_server",
          ],
        },
        {
          text: "DBC Client - HTTP API",
          // collapsable: true,
          prefix: "dbc-client-api/",
          children: ["install-tool", "http-request-format", "http-api"],
        },
        {
          text: "Create wins-machine application omniverse",
          // collapsable: true,
          prefix: "create-win-machine-omniverse/",
          children: ["create-win-machine-omniverse"],
        },
        {
          text: "DBC monitor",
          // collapsable: true,
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
  "/ko/dbc-cloud-cybercafe/": [
    {
      text: "디스크가 없는 넷부팅",
      prefix: "/ko/dbc-cloud-cybercafe/",
      children: ["diskless-netboot-server", "diskless-netboot-image"],
    },
  ],
});
