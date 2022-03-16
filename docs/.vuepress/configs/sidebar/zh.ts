import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/dbc-introduction': [
    {
      text: '了解DBC',
      children: [
        '/dbc-introduction/dbc-introduction',
        '/dbc-introduction/dbc-applications',
        '/dbc-introduction/dbc-ecology',
        '/dbc-introduction/dbc-gpu-rent',
        '/dbc-introduction/dbc-profit',
        '/dbc-introduction/dbc-trade',
        '/dbc-introduction/rentVirtual',
        '/dbc-introduction/dbc-community',
      ],
    },
  ],
  '/dbc-democracy': [
    {
      text: 'DBC Democracy',
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
  '/dbc-information': [
    {
      text: 'DBC资讯',
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
            '/dbc-information/dbc-ama/8btc-ama',
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
  ],
  '/staking-model/': [
    {
      text: 'StakingModel',
      children: [
        '/staking-model/dbc-chain-params',
        '/staking-model/generate-new-account',
        '/staking-model/join-dbc-network',
        '/staking-model/staking-dbc-and-voting',
        '/staking-model/fast-track',
        '/staking-model/common-questions',
      ],
    },
  ],
  '/onchain-guide/': [
    {
      text: 'OnchainGuide',
      children: [
        '/onchain-guide/dbc-chain-logic',
        '/onchain-guide/machine-reward-model',
        '/onchain-guide/machine-slash-model',
        '/onchain-guide/bonding-machine',
        '/onchain-guide/unbonding-machine',
        '/onchain-guide/become-onchain-committee',
        '/onchain-guide/machine-verification',
        '/onchain-guide/rent-machine',
        '/onchain-guide/report-machine-fault',
        '/onchain-guide/maintain-machine',
        '/onchain-guide/onchain-errors',
      ],
    },
  ],
  '/onchain-api/': [
    {
      text: 'OnchainAPI',
      children: [
        '/onchain-api/dbc-rpc-readme',
        '/onchain-api/dbc-rpc',
        '/onchain-api/dbc-storage',
      ],
    },
  ],
  '/gpu-cloud': [
    { text: '部署GPU云平台', children: ['/gpu-cloud/dbc-gpu-cloud-service'] },
  ],
  '/install-update-dbc-node': [
    {
      text: '安装&升级DBC节点',
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
        {
          text: 'DBC监控',
          link: '/install-update-dbc-node/dbc-monitor/',
          children: [
            '/install-update-dbc-node/dbc-monitor/http-monitor-api',
            '/install-update-dbc-node/dbc-monitor/monitoring-items',
            '/install-update-dbc-node/dbc-monitor/monitoring-protocol',
          ],
        },
      ],
    },
  ],
}
