import { defineSidebarConfig } from "vuepress-theme-hope";

export const zh = defineSidebarConfig({
  "/dbc-introduction/": [
    {
      text: "了解DBC",
      prefix: "/dbc-introduction/",
      children: [
        "dbc-introduction",
        "dbc-applications",
        "dbc-ecology",
        "dbc-profit-trade",
        "dbc-gpu-rent",
        "rent-virtual",
        "dbc-community",
        "dbc-hot-link",
        {
          text: "云平台运营",
          collapsable: true,
          prefix: "cloud-platform-operation/",
          children: ["initial-operation-process", "support-for-cloud-platform"],
        },
      ],
    },
  ],
  "/dbc-democracy/": [
    {
      text: "DBC Democracy",
      prefix: "/dbc-democracy/",
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
  "/dbc-information/": [
    {
      text: "DBC资讯",
      prefix: "/dbc-information/",
      children: [
        {
          text: "DBC 进展",
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
          text: "DBC 媒体报道",
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
  "/council/": [
    {
      text: "议案详情",
      prefix: "/council/",
      children: [
        "2",
        "12",
        "13",
        "15",
        "16", // 16,18,19用相同的链接
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
  ],
  "/staking-model/": [
    {
      text: "StakingModel",
      prefix: "/staking-model/",
      children: [
        "dbc-chain-params",
        "generate-new-account",
        "join-dbc-network",
        "run-archive-node",
        "staking-dbc-and-voting",
        "fast-track",
        "common-questions",
      ],
    },
  ],
  "/onchain-guide/": [
    {
      text: "OnchainGuide",
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
  ],
  "/onchain-api/": [
    {
      text: "OnchainAPI",
      prefix: "/onchain-api/",
      children: ["dbc-rpc-readme", "dbc-rpc", "dbc-storage"],
    },
  ],
  "/gpu-cloud/": [
    {
      text: "部署GPU云平台",
      prefix: "/gpu-cloud/",
      children: ["dbc-gpu-cloud-service"],
    },
  ],
  "/install-update-dbc-node/": [
    {
      text: "安装&升级DBC节点",
      prefix: "/install-update-dbc-node/",
      children: [
        {
          text: "安装和升级DBC节点",
          collapsable: true,
          prefix: "install-update-dbc/",
          children: [
            "install-dbc-compute-node",
            "update-dbc-compute-node",
            "install-update-dbc-client",
            "deploy_image_server"
          ],
        },
        {
          text: "DBC客户端-HTTP请求",
          collapsable: true,
          prefix: "dbc-client-api/",
          children: ["install-tool", "http-request-format", "http-api"],
        },
        {
          text: "创建windows虚拟机使用omniverse",
          collapsable: true,
          prefix: "create-win-machine-omniverse/",
          children: ["create-win-machine-omniverse"],
        },
        {
          text: "DBC监控",
          collapsable: true,
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
