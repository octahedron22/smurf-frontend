
import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //  label: 'BLZD to xBLZD',
  //  icon: 'TradeIcon',
  //  href: '/xBLZD',
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
        
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
        
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/caves',
  },
  {
    label: 'Blizzard',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SMURF Price-Chart',
        href: 'https://dex.guru/token/0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c-bsc',
        
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
        
      },
    ],
  },

]

export default config
