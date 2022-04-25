// import type { NavbarConfig } from "@vuepress/theme-default";
import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
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
    text: "DBC资讯",
    children: [
      {
        text: "DBC 进展",
        prefix: "/dbc-information/dbc-progress/",
        children: ["2020", "2021-01-01", "2021", "2022-01-01", "2022"],
      },
      {
        text: "DBC AMA",
        prefix: "/dbc-information/dbc-ama/",
        children: [
          "8btc-ama",
          "galaxy-ama",
          "council-ama",
          "dbc-ama-collection",
        ],
      },
      {
        text: "DBC 媒体报道",
        prefix: "/dbc-information/dbc-report/",
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
          "run-archive-node",
          "staking-dbc-and-voting",
          "fast-track",
          "council-proposal",
          "common-questions",
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
