import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
  },
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/asl5j_chcjivtjM19k4dzWlRX62UVwZ1",
      accounts: [
        "bc874c223b1a80fcd9d5b3d302ff0e822dde709134872d26635199c9ac916f12",
      ],
    },
  },
};

export default config;
