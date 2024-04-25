export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

interface DeploymentConfig {
  MOONEYToken: string
  vMOONEYToken: string
  vMooneySweepstakesZeroG: string
  Marketplace?: string
  MarketplaceFeeSplit?: string
}

type Index = { [key: string]: string }

//vMooneySweepstakesZeroG is always mainnet address (using infura provider)
const defaultConfigL1 =
  require(`../../contracts/deployments/ethereum`) as DeploymentConfig

const defaultConfigL2 =
  require(`../../contracts/deployments/polygon`) as DeploymentConfig

const devConfigL1 =
  require(`../../contracts/deployments/goerli`) as DeploymentConfig

const devConfigL2 =
  require(`../../contracts/deployments/sepolia`) as DeploymentConfig

export const MOONEY_ADDRESSES: Index = {
  ethereum: defaultConfigL1.MOONEYToken,
  polygon: defaultConfigL2.MOONEYToken,
  goerli: devConfigL1.MOONEYToken,
  sepolia: devConfigL2.MOONEYToken,
  arbitrum: '0x1Fa56414549BdccBB09916f61f0A5827f779a85c',
  'arbitrum-sepolia': '0x0187951aeecDbB6d11D75E7aCe6aC290c6e70391',
}

export const DAI_ADDRESSES: Index = {
  ethereum: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  polygon: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  sepolia: '0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253',
  arbitrum: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  'arbtirum-sepolia': '0x8B90f054565718097BD583C2dF4260c9E8fb6464',
}

export const MOONEY_DECIMALS = 10 ** 18

export const VMOONEY_ADDRESSES: Index = {
  ethereum: defaultConfigL1.vMOONEYToken,
  polygon: defaultConfigL2.vMOONEYToken,
  goerli: devConfigL1.vMOONEYToken,
  sepolia: devConfigL2.vMOONEYToken,
}

export const CITIZEN_NFT_ADDRESSES: Index = {
  ethereum: '',
  polygon: '0xE8013d1B68FA9faF5C78DE4823f7F076A854407A',
}

export const CITIZEN_ADDRESSES: Index = {
  arbitrum: '',
  'arbitrum-sepolia': '0x6Df4d025cb2ee8CbC2263ce1CE91439f574a2a67',
}

export const ENTITY_ADDRESSES: Index = {
  arbitrum: '',
  'arbitrum-sepolia': '0xA2AC5bc748EeD541392d8f40720F81965738B1b6',
}

export const ENTITY_CREATOR_ADDRESSES: Index = {
  arbitrum: '',
  'arbitrum-sepolia': '0x1B4d6090Df479b9457882A565Cb0AAA6171A9Ae1',
}

export const VMOONEY_SWEEPSTAKES: string =
  defaultConfigL1.vMooneySweepstakesZeroG

export const MARKETPLACE_FEE_SPLIT: string =
  defaultConfigL2.MarketplaceFeeSplit || ''

export const MARKETPLACE_ADDRESS: string =
  process.env.NEXT_PUBLIC_CHAIN === 'mainnet'
    ? defaultConfigL2.Marketplace || ''
    : devConfigL2.Marketplace || ''

export const MOONDAO_L2_TREASURY: string =
  '0x8C0252c3232A2c7379DDC2E44214697ae8fF097a'
export const DEAD_ADDRESS: string =
  ' 0x000000000000000000000000000000000000dEaD'

// DB Config
const MONGO_USERNAME = process.env.MONGO_USERNAME || ''
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
const MONGO_PATH_SUFFIX = process.env.MONGO_PATH_SUFFIX || ''
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_PATH_SUFFIX}`
export const mongoConfig = {
  url: MONGO_URL,
}

export const TICKET_TO_SPACE_ADDRESS =
  process.env.NEXT_PUBLIC_CHAIN === 'mainnet'
    ? '0x6434c90c9063F0Bed0800a23c75eBEdDF71b6c52' //polygon
    : '0x5283b6035cfa7bb884b7f6a146fa6824ec9773c7' //mumbai

export const NEWSLETTER_FORM_ID = '3715552'

export const UNIVERSAL_ROUTER_ADDRESSES: Index = {
  ethereum: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
  polygon: '0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2',
  sepolia: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
  arbitrum: '0x5E325eDA8064b456f4781070C0738d849c824258',
  'arbitrum-sepolia': '0x4A7b5Da61326A6379179b40d00F57E5bbDC962c2',
}

export const DISCORD_GUILD_ID = '914720248140279868'

export const HATS_ADDRESS = '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137'
