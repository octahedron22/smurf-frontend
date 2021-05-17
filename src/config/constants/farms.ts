import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'WIKI-BUSD LP v2',
    lpAddresses: {
      97: '',
      56: '0xE0323b608ef2D08af20eC3238Bfd8E38359A4B2C',
    },
    tokenSymbol: 'WIKI',
    tokenAddresses: {
      97: '',     
      56: '0x372a61EBEB3fF5f36f603eAa4dF890b18d36065D',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    lpSymbol: 'WIKI-BNB LP v2',
    lpAddresses: {
      97: '',
      56: '0x221d6349788909b9e996246091aa41b275793207',      
    },
    tokenSymbol: 'WIKI',
    tokenAddresses: {
      97: '',
      56: '0x372a61EBEB3fF5f36f603eAa4dF890b18d36065D',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 24,
    
    lpSymbol: 'WIKI-SHRIMP LP v2',
    lpAddresses: {
      97: '',
      56: '0x586c6b6c80c74b75a2c0d898749b1f59d6a9f88f', // WIKI-SHRIMP LP
    },
    tokenSymbol: 'SHRIMP',
    tokenAddresses: {
      97: '',
      56: '0x62ee12e4fe74a815302750913c3c796bca23e40e',
    },
    quoteTokenSymbol: QuoteToken.WIKI,
    quoteTokenAdresses: contracts.cake,
  },

  {
    pid: 25,    
    
    lpSymbol: 'sWIKI-BUSD LP v2',
    lpAddresses: {
      97: '',
      56: '0xc3c29259dfb2b3d66d4e2e9b057015b3e1ea1d5e', // sWIKI-BUSD LP
    },
    tokenSymbol: 'sWIKI',
    tokenAddresses: {
      97: '',     
      56: '0x8bde81029eda5e7381794c0df7ed65e6bb9005e0',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 18,
    
    lpSymbol: 'WIKI-JAGUAR LP v2',
    lpAddresses: {
      97: '',
      56: '0x9F6669c552878876dB865065fEDDF7b313Ae9dE1', // WIKI-JAGUAR LP
    },
    tokenSymbol: 'JAGUAR',
    tokenAddresses: {
      97: '',
      56: '0x4a3524936db5c310d852266033589d3f6f30ba5d',
    },
    quoteTokenSymbol: QuoteToken.WIKI,
    quoteTokenAdresses: contracts.cake,
  },
  
  {
    pid: 19,
    
    lpSymbol: 'WIKI-PANTHER LP v2',
    lpAddresses: {
      97: '',
      56: '0x9cd5ea61e38379819b1a508fe2c841ec3cb6d068', // WIKI-PANTHER LP
    },
    tokenSymbol: 'PANTHER',
    tokenAddresses: {
      97: '',
      56: '0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
    },
    quoteTokenSymbol: QuoteToken.WIKI,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 20,
    
    lpSymbol: 'WIKI-SLION LP v2',
    lpAddresses: {
      97: '',
      56: '0xa32ee3c6a3b46b71dce03dc729d60d9a8fd81993', // WIKI-SLION LP
    },
    tokenSymbol: 'SLION',
    tokenAddresses: {
      97: '',
      56: '0xb9fcb5b2935d57a8568b6309b3093200482c448d',
    },
    quoteTokenSymbol: QuoteToken.WIKI,
    quoteTokenAdresses: contracts.cake,
  },

  {
    pid: 2,
    
    isTokenOnly: true,
    lpSymbol: 'WIKI',
    lpAddresses: {
      97: '',
      56: '0xE0323b608ef2D08af20eC3238Bfd8E38359A4B2C', // WIKI-BUSD
    },
    tokenSymbol: 'WIKI',
    tokenAddresses: {
      97: '',
      56: '0x372a61EBEB3fF5f36f603eAa4dF890b18d36065D',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 26,
    
    isTokenOnly: true,
    lpSymbol: 'sWIKI',
    lpAddresses: {
      97: '',
      56: '0xc3c29259dfb2b3d66d4e2e9b057015b3e1ea1d5e', // sWIKI-BUSD
    },
    tokenSymbol: 'sWIKI',
    tokenAddresses: {
      97: '',
      56: '0x8bde81029eda5e7381794c0df7ed65e6bb9005e0',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 3,
    
    lpSymbol: 'BNB-BUSD LP v1',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
  pid: 4,
  
  lpSymbol: 'BNB-BUSD LP v2',
  lpAddresses: {
    97: '',
    56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  },
  tokenSymbol: 'BNB',
  tokenAddresses: {
    97: '',
    56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 5,
  
  lpSymbol: 'BTCB-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  },
  tokenSymbol: 'BTCB',
  tokenAddresses: {
    97: '',
    56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},
{
  pid: 6,
  
  lpSymbol: 'ETH-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
  },
  tokenSymbol: 'ETH',
  tokenAddresses: {
    97: '',
    56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},
{
  pid: 7,
  
  lpSymbol: 'CAKE-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  },
  tokenSymbol: 'CAKE',
  tokenAddresses: {
    97: '',
    56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},
{
  pid: 8,
  
  lpSymbol: 'DOT-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
  },
  tokenSymbol: 'DOT',
  tokenAddresses: {
    97: '',
    56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},
{
  pid: 9,
  
  lpSymbol: 'ADA-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
  },
  tokenSymbol: 'ADA',
  tokenAddresses: {
    97: '',
    56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},
{
  pid: 10,
  
  lpSymbol: 'LINK-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
  },
  tokenSymbol: 'LINK',
  tokenAddresses: {
    97: '',
    56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},

{
  pid: 22,
  
  lpSymbol: 'UNI-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
  },
  tokenSymbol: 'UNI',
  tokenAddresses: {
    97: '',
    56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},

{
  pid: 11,
  
   lpSymbol: 'DAI-BUSD LP v2',
  lpAddresses: {
    97: '',
   56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489', // DAI-BUSD LP
  },
   tokenSymbol: 'DAI',
  tokenAddresses: {
    97: '',
  56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
 },
 quoteTokenSymbol: QuoteToken.BUSD,
quoteTokenAdresses: contracts.busd,
},
{
  pid: 12,

  lpSymbol: 'USDC-BUSD LP v2',
  lpAddresses: {
    97: '',
    56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1', // USDC-BUSD LP
  },
  tokenSymbol: 'USDC',
  tokenAddresses: {
    97: '',
    56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 13,
  
  isTokenOnly: true,
  lpSymbol: 'BUSD',
  lpAddresses: {
    97: '',
    56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // solo BUSD
  },
  tokenSymbol: 'BUSD',
  tokenAddresses: {
    97: '',
    56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', 
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 14,
  
  isTokenOnly: true,
  lpSymbol: 'BNB',
  lpAddresses: {
    97: '',
    56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
  },
  tokenSymbol: 'BNB',
  tokenAddresses: {
    97: '',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 15,
  
  isTokenOnly: true,
  lpSymbol: 'BTCB',
  lpAddresses: {
    97: '',
    56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33', // BTCB-BUSD LP
  },
  tokenSymbol: 'BTCB',
  tokenAddresses: {
    97: '',
    56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 16,
  
  isTokenOnly: true,
  lpSymbol: 'ETH',
  lpAddresses: {
    97: '',
    56: '0xd9A0d1F5e02dE2403f68Bb71a15F8847A854b494', // ETH-BUSD LP
  },
  tokenSymbol: 'ETH',
  tokenAddresses: {
    97: '',
    56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 17,
  
  isTokenOnly: true,
  lpSymbol: 'CAKE',
  lpAddresses: {
   97: '',
   56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
 },
 tokenSymbol: 'CAKE',
  tokenAddresses: {
    97: '',
    56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},



{
  pid: 21,
  
  lpSymbol: 'BNB-USDT LP v2',
  lpAddresses: {
    97: '',
    56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
  },
  tokenSymbol: 'USDT',
  tokenAddresses: {
    97: '',
    56: '0x55d398326f99059fF775485246999027B3197955',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},

{
  pid: 23,
  
  lpSymbol: 'USDT-BUSD LP v2',
  lpAddresses: {
    97: '',
    56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  },
  tokenSymbol: 'USDT',
  tokenAddresses: {
    97: '',
    56: '0x55d398326f99059ff775485246999027b3197955',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},


]
export default farms
