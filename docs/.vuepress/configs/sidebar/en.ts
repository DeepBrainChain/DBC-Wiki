import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/en/dbc-introduction/": [
    {
      text: "DBC Introduction",
      prefix: "/en/dbc-introduction/",
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
          collapsable: true,
          prefix: "cloud-platform-operation/",
          children: ["initial-operation-process", "support-for-cloud-platform"],
        },
      ],
    },
  ],
  "/en/dbc-democracy/": [
    {
      text: "DBC Democracy",
      prefix: "/en/dbc-democracy/",
      children: [
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

  "/en/dbc-information/": [
    {
      text: "DBC News",
      prefix: "/en/dbc-information/",
      children: [
        {
          text: "DBC Progress",
          collapsable: true,
          prefix: "dbc-progress/",
          children: ["2020", "2021-01-01", "2021", "2022-01-01", "2022"],
        },
        {
          text: "DBC AMA",
          collapsable: true,
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
          collapsable: true,
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
  "/en/staking-model/": [
    {
      text: "DBC Staking Model",
      prefix: "/en/staking-model/",
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
  "/en/onchain-guide/": [
    {
      text: "OnchainGuide",
      prefix: "/en/onchain-guide/",
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
  "/en/onchain-api/": [
    {
      text: "OnchainAPI",
      prefix: "/en/onchain-api/",
      children: ["dbc-rpc-readme", "dbc-rpc", "dbc-storage"],
    },
  ],
  "/en/gpu-cloud/": [
    {
      text: "Deploy GPU cloud platform",
      prefix: "/en/gpu-cloud/",
      children: ["dbc-gpu-cloud-service"],
    },
  ],
  "/en/install-update-dbc-node/": [
    {
      text: "Install & update DBC node",
      prefix: "/en/install-update-dbc-node/",
      children: [
        {
          text: "Install And Update DBC Node",
          collapsable: true,
          prefix: "install-update-dbc/",
          children: [
            "install-dbc-compute-node",
            "update-dbc-compute-node",
            "install-update-dbc-client",
            "deploy_image_server",
          ],
        },
        {
          text: "DBC Client - HTTP API",
          collapsable: true,
          prefix: "dbc-client-api/",
          children: ["install-tool", "http-request-format", "http-api"],
        },
        {
          text: "Create wins-machine application omniverse",
          collapsable: true,
          prefix: "create-win-machine-omniverse/",
          children: ["create-win-machine-omniverse"],
        },
        {
          text: "DBC monitor",
          collapsable: true,
          prefix: "dbc-monitor/",
          children: [
            "http-monitor-api",
            "monitoring-items",
            "monitoring-protocol",
          ],
        },
        {
          text: "Make image steps (with gpu driver)",
          collapsable: true,
          prefix: "make-image/",
          children: ["make-image-with-gpu-driver"],
        },
      ],
    },
  ],
  "/en/dbc-cloud-cybercafe/": [
    {
      text: "Diskless Netboot",
      prefix: "/en/dbc-cloud-cybercafe/",
      children: ["diskless-netboot-server", "diskless-netboot-image"],
    },
  ],
});
