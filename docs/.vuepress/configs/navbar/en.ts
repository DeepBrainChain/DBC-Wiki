import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'DBC Introduction',
    link: '/en/dbc-introduction',
    children: [
      '/en/dbc-introduction/dbc-applications',
      {
        text: 'DBC Introduction',
        children: [
          '/en/dbc-introduction/dbc-introduction',
          '/en/dbc-introduction/dbc-ecology',
          '/en/dbc-introduction/dbc-gpu-rent',
          '/en/dbc-introduction/dbc-profit',
          '/en/dbc-introduction/dbc-trade',
          '/en/dbc-introduction/dbc-community',
        ],
      },
      {
        text: 'DBC Democracy',
        children: [
          '/en/dbc-democracy/dbc-council',
          '/en/dbc-democracy/join-council',
          '/en/dbc-democracy/proposing-referenda',
          '/en/dbc-democracy/voting-referenda',
          '/en/dbc-democracy/dbc-nft',
          '/en/dbc-democracy/apply-treasury',
          '/en/dbc-democracy/staking-voting',
        ],
      },
    ],
  },
  {
    text: 'DBC News',
    link: '/en/dbc-information',
    children: [
      {
        text: 'DBC progress',
        children: [
          '/en/dbc-information/dbc-progress/2020',
          '/en/dbc-information/dbc-progress/2021-01-01',
          '/en/dbc-information/dbc-progress/2021',
          '/en/dbc-information/dbc-progress/2022-01-01',
        ],
      },
      {
        text: 'DBC AMA',
        children: [
          '/en/dbc-information/dbc-ama/8bit-ama',
          '/en/dbc-information/dbc-ama/galaxy-ama',
          '/en/dbc-information/dbc-ama/council-ama',
          '/en/dbc-information/dbc-ama/dbc-ama-collection',
          '/en/dbc-information/dbc-ama/dbc-hot-link',
        ],
      },
      {
        text: 'DBC Report',
        children: [
          '/en/dbc-information/dbc-report/dbc-36kr-report',
          '/en/dbc-information/dbc-report/dbc-apnews-report',
          '/en/dbc-information/dbc-report/dbc-asiaone-report',
          '/en/dbc-information/dbc-report/dbc-businessinsider-report',
          '/en/dbc-information/dbc-report/dbc-coindeals-report',
          '/en/dbc-information/dbc-report/dbc-dailyherald-report',
          '/en/dbc-information/dbc-report/dbc-marketscreener',
          '/en/dbc-information/dbc-report/dbc-post-gazette',
          '/en/dbc-information/dbc-report/dbc-theblockbeats-report',
          '/en/dbc-information/dbc-report/dbc-uk-tech-daily',
          '/en/dbc-information/dbc-report/dbc-yahoo-report2',
          '/en/dbc-information/dbc-report/dbc-yahoo-report',
        ],
      },
    ],
  },
  {
    text: 'Onchain Operate',
    link: '/en/staking-model',
    children: [
      {
        text: 'Introduction for Joining DBC Network',
        children: [
          '/en/staking-model/dbc-chain-params',
          '/en/staking-model/generate-new-account',
          '/en/staking-model/join-dbc-network',
          '/en/staking-model/staking-dbc-and-voting',
          '/en/staking-model/fast-track',
          '/en/staking-model/common-questions',
        ],
      },
      {
        text: 'On-chain computing platform',
        children: [
          '/en/onchain-guide/dbc-chain-logic',
          '/en/onchain-guide/machine-reward-model',
          '/en/onchain-guide/machine-slash-model',
          '/en/onchain-guide/bonding-machine',
          '/en/onchain-guide/unbonding-machine',
          '/en/onchain-guide/become-onchain-committee',
          '/en/onchain-guide/machine-verification',
          '/en/onchain-guide/rent-machine',
          '/en/onchain-guide/report-machine-fault',
          '/en/onchain-guide/maintain-machine',
          '/en/onchain-guide/onchain-errors',
        ],
      },
      {
        text: 'Onchain API',
        children: [
          '/en/onchain-api/dbc-rpc-readme',
          '/en/onchain-api/dbc-rpc',
          '/en/onchain-api/dbc-storage',
        ],
      },
    ],
  },
  {
    text: 'DBC GPU Cloud Service',
    link: '/en/gpu-cloud',
    children: ['/en/gpu-cloud/dbc-gpu-cloud-service'],
  },
  {
    text: 'Install and upgrade DBC nodes',
    // link: "/en/staking-model",
    children: [
      {
        text: 'Install And Update DBC Node',
        // link: "/en/install-and-update-dbc",
        children: [
          '/en/install-and-update-dbc/install-dbc-compute-node',
          '/en/install-and-update-dbc/install-update-dbc-client',
          '/en/install-and-update-dbc/update-dbc-compute-node',
        ],
      },
      {
        text: 'DBC Client - HTTP API',
        // link: "/en/dbc-client-api",
        children: [
          '/en/dbc-client-api/install-tool',
          '/en/dbc-client-api/http-request-format',
          '/en/dbc-client-api/http-api',
          '/en/dbc-client-api/snap-mirror-manage',
        ],
      },
      {
        text: 'Create wins-machine application omniverse',
        children: [
          '/en/install-and-update-dbc/create-win-machine-omniverse/create-win-machine-omniverse',
        ],
      },
    ],
  },
]
