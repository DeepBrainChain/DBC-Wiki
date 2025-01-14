import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
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
          // collapsable: true,
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

  "/en/dbc-aipublicchain/": [
    {
    text: "DBC AI PublicChain",
    prefix: "/en/dbc-aipublicchain/",
    children: [
      {
        text: "AI container build",
        prefix: "/dbc-aipublicchain/",
        children: ["docker_build"],
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
        {
          text: "Make image steps (with gpu driver)",
          // collapsable: true,
          prefix: "make-image/",
          children: ["make-image-with-gpu-driver"],
        },
      ],
    },
  ],
});
