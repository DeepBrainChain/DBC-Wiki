import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
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
        "dbc-audit-report",
        {
          text: "云平台运营",
          // collapsable: true,
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
  "/dbc-aipublicchain/": [
    {
      text: "DBC AI公链",
      prefix: "/dbc-aipublicchain/",
      children: [
        {
        text: "AI容器制作",
        prefix: "/dbc-aipublicchain",
        children: ["docker_build"],
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
          text: "DBC客户端-HTTP请求",
          // collapsable: true,
          prefix: "dbc-client-api/",
          children: ["install-tool", "http-request-format", "http-api"],
        },
        {
          text: "创建windows虚拟机使用omniverse",
          // collapsable: true,
          prefix: "create-win-machine-omniverse/",
          children: ["create-win-machine-omniverse"],
        },
        {
          text: "DBC监控",
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
  "/dbc-cloud-cybercafe/": [
    {
      text: "无盘网络启动",
      prefix: "/dbc-cloud-cybercafe/",
      children: ["diskless-netboot-server", "diskless-netboot-image"],
    },
  ],
});
