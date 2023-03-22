/**
 * @type import('Hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const {PRIVATE_KEY, API_URL_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
