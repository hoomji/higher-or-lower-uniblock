export const nftCollections = [
  "https://opensea.io/collection/anifty",
  "https://opensea.io/collection/digidaigaku",
  "https://opensea.io/collection/boredapeyachtclub",
  "https://opensea.io/collection/azukis",
  "https://opensea.io/collection/kumaleon-nfts",
];

export type NftCollection = {
  contractAddress: string;
  chainId: number;
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

// list of all evm compatible token contracts on ethereum mainnet
export const tokenNames = [
  "Ethereum",
  "Tether",
  "USD Coin",
  "Binance USD",
  "Polygon",
  "Lido Staked Ether",
  "Shiba Inu",
  "Dai",
  "OKB",
  "Uniswap",
  "Wrapped Bitcoin",
  "LEO Token",
  "Chainlink",
  "The Open Network",
  "Cronos",
  "Quant",
  "Frax",
  "Chiliz",
  "Chain",
  "ApeCoin",
  "The Sandbox",
  "Decentraland",
  "Aave",
];

// list of all evm compatible token contracts on ethereum mainnet
export const tokenNameToAddress = {
  Ethereum: "0x0000000000000000000000000000000000000000",
  Tether: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "USD Coin": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "Binance USD": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
  Polygon: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
  "Lido Staked Ether": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
  "Shiba Inu": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
  Dai: "0x6b175474e89094c44da98b954eedeac495271d0f",
  OKB: "0x75231f58b43240c9718dd58b4967c5114342a86c",
  Uniswap: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  "Wrapped Bitcoin": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  "LEO Token": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
  Chainlink: "0x514910771af9ca656af840dff83e8264ecf986ca",
  "The Open Network": "0x69a95185ee2a045cdc4bcd1b1df10710395e4e23",
  Cronos: "0x9c2dc0c3cc2badde84b0025cf4df1c5af288d835",
  Quant: "0x4a220e6096b25eadb88358cb44068a3248254675",
  Frax: "0x853d955acef822db058eb8505911ed77f175b99e",
  Chiliz: "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
  Chain: "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb",
  ApeCoin: "0x8a9c67fee641579deba04928c4bc45f66e26343a",
  "The Sandbox": "0x3845badade8e6dff049820680d1f14bd3903a5d0",
  Decentraland: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
  Aave: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
};
