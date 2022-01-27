import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  // NavbarItem
  {
    text: '了解DBC',
    link: '/dbc-introduction',
    children: [
      '/dbc-introduction/dbc-applications',
      {
        text: 'DBC介绍',
        children: [
          '/dbc-introduction/dbc-introduction',
          '/dbc-introduction/dbc-ecology',
          '/dbc-introduction/dbc-gpu-rent',
          '/dbc-introduction/dbc-profit',
          '/dbc-introduction/dbc-trade',
          '/dbc-introduction/dbc-community',
        ],
      },
      {
        text: '社区治理',
        children: [
          '/dbc-democracy/dbc-council',
          '/dbc-democracy/join-council',
          '/dbc-democracy/proposing-referenda',
          '/dbc-democracy/voting-referenda',
          '/dbc-democracy/dbc-nft',
          '/dbc-democracy/apply-treasury',
          '/dbc-democracy/staking-voting',
        ],
      },
    ],
  },
  {
    text: 'DBC资讯',
    link: '/dbc-information',
    children: [
      {
        text: 'DBC 进展',
        children: [
          '/dbc-information/dbc-progress/2020',
          '/dbc-information/dbc-progress/2021-01-01',
          '/dbc-information/dbc-progress/2021',
          '/dbc-information/dbc-progress/2022-01-01',
        ],
      },
      {
        text: 'DBC AMA',
        children: [
          '/dbc-information/dbc-ama/8bit-ama',
          '/dbc-information/dbc-ama/galaxy-ama',
          '/dbc-information/dbc-ama/council-ama',
          '/dbc-information/dbc-ama/dbc-ama-collection',
          '/dbc-information/dbc-ama/dbc-hot-link',
        ],
      },
      {
        text: 'DBC 媒体报道',
        children: [
          '/dbc-information/dbc-report/dbc-36kr-report',
          '/dbc-information/dbc-report/dbc-apnews-report',
          '/dbc-information/dbc-report/dbc-asiaone-report',
          '/dbc-information/dbc-report/dbc-businessinsider-report',
          '/dbc-information/dbc-report/dbc-coindeals-report',
          '/dbc-information/dbc-report/dbc-dailyherald-report',
          '/dbc-information/dbc-report/dbc-marketscreener',
          '/dbc-information/dbc-report/dbc-post-gazette',
          '/dbc-information/dbc-report/dbc-theblockbeats-report',
          '/dbc-information/dbc-report/dbc-uk-tech-daily',
          '/dbc-information/dbc-report/dbc-yahoo-report2',
          '/dbc-information/dbc-report/dbc-yahoo-report',
        ],
      },
    ],
  },
  {
    text: '链上操作说明',
    link: '/staking-model',
    children: [
      {
        text: '参与 DBC 深脑链说明',
        children: [
          '/staking-model/dbc-chain-params',
          '/staking-model/generate-new-account',
          '/staking-model/join-dbc-network',
          '/staking-model/staking-dbc-and-voting',
          '/staking-model/fast-track',
          '/staking-model/common-questions',
        ],
      },
      {
        text: '链上算力平台',
        children: [
          '/onchain-guide/dbc-chain-logic',
          '/onchain-guide/machine-reward-model',
          '/onchain-guide/machine-slash-model',
          '/onchain-guide/bonding-machine',
          '/onchain-guide/become-onchain-committee',
          '/onchain-guide/machine-verification',
          '/onchain-guide/rent-machine',
          '/onchain-guide/maintain-machine',
          '/onchain-guide/onchain-errors',
        ],
      },
      {
        text: '链上API',
        children: [
          '/onchain-api/dbc-rpc-readme',
          '/onchain-api/dbc-rpc',
          '/onchain-api/dbc-storage',
        ],
      },
    ],
  },
  {
    text: '安装&升级DBC节点',
    link: '/install-update-dbc-node',
    children: [
      {
        text: '安装和升级DBC节点',
        link: '/install-update-dbc-node/install-update-dbc/',
        children: [
          '/install-update-dbc-node/install-update-dbc/install-dbc-compute-node',
          '/install-update-dbc-node/install-update-dbc/update-dbc-compute-node',
          '/install-update-dbc-node/install-update-dbc/install-update-dbc-client',
        ],
      },
      {
        text: 'DBC客户端-HTTP请求',
        link: '/install-update-dbc-node/dbc-client-api/',
        children: [
          '/install-update-dbc-node/dbc-client-api/install-tool',
          '/install-update-dbc-node/dbc-client-api/http-request-format',
          '/install-update-dbc-node/dbc-client-api/http-api',
        ],
      },
      {
        text: '创建windows虚拟机使用omniverse',
        children: [
          '/install-update-dbc-node/create-win-machine-omniverse/create-win-machine-omniverse',
        ],
      },
    ],
  },
]
