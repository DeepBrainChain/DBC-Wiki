import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "了解DBC",
    children: [
      {
        text: "DBC介绍",
        prefix: "/dbc-introduction/",
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
        text: "云平台运营",
        prefix: "/dbc-introduction/cloud-platform-operation/",
        children: ["initial-operation-process", "support-for-cloud-platform"],
      },
      {
        text: "社区治理",
        prefix: "/dbc-democracy/",
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
    text: "DBC AI公链",
    children: [
      {
        text: "AI容器制作",
        prefix: "/dbc-aipublicchain/",
        children: [
          "docker_build",
          "Deeplink-Long-term-rental-document_zh",
        ],
      },
      {
        text: "EVM Token转回Substrate地址",
        prefix: "/dbc-aipublicchain/",
        children: [
          "EVMtoSubstrate",
        ],
      },
    ],
  },
  {
    text: "DBC议案",
    prefix: "/council/",
    children: [
      "2",
      "12",
      "13",
      "15",
      "16",
      "17",
      "22",
      "23",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
  },
  {
    text: "链上操作说明",
    children: [
      {
        text: "参与 DBC 深脑链说明",
        prefix: "/staking-model/",
        children: [
          "dbc-chain-params",
          "generate-new-account",
          "join-dbc-network",
	  "dbc-ai-public-chain-pos",
          "run-archive-node",
          "staking-dbc-and-voting",
          "fast-track",
          "council-proposal",
          "common-questions",
	        "dbc-chain-upgrade",
        ],
      },
      {
        text: "链上算力平台",
        prefix: "/onchain-guide/",
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
        text: "链上API",
        prefix: "/onchain-api/",
        children: ["dbc-rpc-readme", "dbc-rpc", "dbc-storage"],
      },
    ],
  },
  {
    text: "部署GPU云平台",
    prefix: "/gpu-cloud/",
    children: ["dbc-gpu-cloud-service"],
  },
  {
    text: "安装&升级DBC节点",
    prefix: "/install-update-dbc-node/",
    children: [
      {
        text: "安装和升级DBC节点",
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
        text: "DBC客户端-HTTP请求",
        prefix: "dbc-client-api/",
        children: ["install-tool", "http-request-format", "http-api"],
      },
      {
        text: "创建windows虚拟机使用omniverse",
        children: ["create-win-machine-omniverse/create-win-machine-omniverse"],
      },
      {
        text: "DBC监控",
        prefix: "dbc-monitor/",
        children: [
          "http-monitor-api",
          "monitoring-items",
          "monitoring-protocol",
        ],
      },
    ],
  },
]);
