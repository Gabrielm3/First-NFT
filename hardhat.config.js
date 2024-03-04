require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.polygon.technology",
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
};
