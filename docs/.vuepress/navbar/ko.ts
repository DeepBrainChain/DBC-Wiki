import { navbar } from "vuepress-theme-hope";

export const koNavbar = navbar([
  "/kr",
  {
    text: "DBC Introduction",
    prefix: "/kr/",
    children: [
      "dbc-introduction/dbc-introduction",
      {
        text: "DBC Introduction",
        prefix: "dbc-introduction/",
        children: [
          "dbc-applications",
          "dbc-ecology",
          "dbc-profit-trade",
          "dbc-gpu-rent",
          "rent-virtual",
          "dbc-community",
          "dbc-hot-link",
          "dbc-audit-report",
        ],
      },
      {
        text: "Cloud platform operation",
        prefix: "dbc-introduction/cloud-platform-operation/",
        children: ["initial-operation-process", "support-for-cloud-platform"],
      },
      {
        text: "DBC Democracy",
        prefix: "dbc-democracy/",
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
  },
  {
    text: "DBC AI PublicChain",
    prefix: "/kr/dbc-aipublicchain/",
    children: [
      {
        text: "AI container build",
        prefix: "/dbc-aipublicchain/",
        children: ["docker_build"],
      },
    ],
  },
  {
    text: "Onchain Operate",
    prefix: "/kr/",
    children: [
      {
        text: "Introduction for Joining DBC Network",
        prefix: "staking-model/",
        children: [
          "dbc-chain-params",
          "generate-new-account",
          "join-dbc-network",
	  "dbc-ai-public-chain-pos_en",
          "staking-dbc-and-voting",
          "fast-track",
          "common-questions",
	        "dbc-chain-upgrade",
        ],
      },
      {
        text: "On-chain computing platform",
        prefix: "onchain-guide/",
        children: [
          "dbc-chain-logic",
          "machine-reward-model",
          "machine-slash-model",
          "bonding-machine",
          "unbonding-machine",
          "become-onchain-committee",
          "machine-verification",
          "rent-machine",
          "report-machine-fault",
          "maintain-machine",
          "onchain-errors",
        ],
      },
      {
        text: "Onchain API",
        prefix: "onchain-api/",
        children: ["dbc-rpc-readme", "dbc-rpc", "dbc-storage"],
      },
    ],
  },
  {
    text: "DBC GPU Cloud Service",
    prefix: "/kr/gpu-cloud/",
    children: ["dbc-gpu-cloud-service"],
  },
  {
    text: "Install and upgrade DBC nodes",
    prefix: "/kr/install-update-dbc-node/",
    children: [
      {
        text: "Install And Update DBC Node",
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
      {
        text: "Make image steps (with gpu driver)",
        prefix: "make-image/",
        children: ["make-image-with-gpu-driver"],
      },
    ],
  },
  {
    text: "Diskless Netboot",
    prefix: "/kr/dbc-cloud-cybercafe/",
    children: ["diskless-netboot-server", "diskless-netboot-image"],
  },
]);
