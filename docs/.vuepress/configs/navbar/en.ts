// import type { NavbarConfig } from "@vuepress/theme-default";
import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  {
    text: "DBC Introduction",
    prefix: "/en/",
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
    text: "DBC News",
    prefix: "/en/dbc-information/",
    children: [
      {
        text: "DBC progress",
        prefix: "dbc-progress/",
        children: ["2020", "2021-01-01", "2021", "2022-01-01", "2022"],
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
  {
    text: "Onchain Operate",
    prefix: "/en/",
    children: [
      {
        text: "Introduction for Joining DBC Network",
        prefix: "staking-model/",
        children: [
          "dbc-chain-params",
          "generate-new-account",
          "join-dbc-network",
          "staking-dbc-and-voting",
          "fast-track",
          "common-questions",
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
    prefix: "/en/gpu-cloud/",
    children: ["dbc-gpu-cloud-service"],
  },
  {
    text: "Install and upgrade DBC nodes",
    prefix: "/en/install-update-dbc-node/",
    children: [
      {
        text: "Install And Update DBC Node",
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
]);
