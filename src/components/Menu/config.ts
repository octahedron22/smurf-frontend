
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
    icon: 'IfoIcon',
    href: '/caves',
  },
  {
    label: 'Village',
    icon: 'GroupsIcon',
    href: '/pools',
  },

  {
    label: 'SMURF Price-Chart',
    icon:  'InfoIcon',
    href: 'https://dex.guru/token/0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c-bsc',
    
  },


  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
     
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
        
      },

      {
        label: 'Twitter',
        href: 'https://twitter.com/SmurfMoneyBSC',
        
      },

      {
        label: 'Telegram',
        href: 'https://t.me/SmurfMoneyBSC',
        
      },


    ],
  },

]

export default config
