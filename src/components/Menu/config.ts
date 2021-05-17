
import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
 
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x372a61ebeb3ff5f36f603eaa4df890b18d36065d',
        
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x372a61ebeb3ff5f36f603eaa4df890b18d36065d',
        
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
    label: 'Village',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SMURF Price-Chart',
        href: 'https://dex.guru/token/0x372a61ebeb3ff5f36f603eaa4df890b18d36065d-bsc',
        
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x372a61ebeb3ff5f36f603eaa4df890b18d36065d',
        
      },
    ],
  },

]

export default config
