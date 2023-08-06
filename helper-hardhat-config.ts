export const networkConfig: {
  [chainId: string]: {
    name: string;
    ethUsdPriceFeed: string;
  };
} = {
  11155111: {
    name: "Sepolia",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
  },
};

export const developmentChains = ["hardhat", "localhost"];
export const DECIMALS = 8;
export const INITIAL_ANSWER = 200_000_000_000;
