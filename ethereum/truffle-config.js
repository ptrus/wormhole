require("dotenv").config({ path: ".env" });
const HDWalletProvider = require("@truffle/hdwallet-provider");

// 0x1f1455c61485737accdd610f5ea9ac1e4272c29b4c6c3189a349acc5bb598e7d
const mnemonic =
  "tray ripple elevator ramp insect butter top mouse old cinnamon panther chief";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // 42261 - for oasis
      //gas: 300000,
      gasPrice: 1,
      // confirmations: 1,
      provider: function() {
        return new HDWalletProvider({
          providerOrUrl: "http://127.0.0.1:8545",
          mnemonic: mnemonic,
        });
      },
      skipDryRun: false,
      timeoutBlocks: 10,
    },
    staging: {
      network_id: "*",
      gasPrice: 1,
      provider: function() {
        return new HDWalletProvider({
          providerOrUrl: "http://web3.ja.nez.si:8545/",
          mnemonic: mnemonic,
        });
      },
      timeoutBlocks: 10,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://mainnet.infura.io/v3/` + process.env.INFURA_KEY
        ),
      network_id: 1,
      gas: 10000000,
      gasPrice: 101000000000,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: false,
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://rinkeby.infura.io/v3/` + process.env.INFURA_KEY
        ),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://goerli.infura.io/v3/" + process.env.INFURA_KEY
        );
      },
      network_id: "5",
      gas: 4465030,
      gasPrice: 10000000000,
    },
    binance: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://bsc-dataseed.binance.org/"
        );
      },
      network_id: "56",
      gas: 70000000,
      gasPrice: 8000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  plugins: ["@chainsafe/truffle-plugin-abigen", "truffle-plugin-verify"],

  api_keys: {
    etherscan: process.env.ETHERSCAN_KEY,
  },
};
