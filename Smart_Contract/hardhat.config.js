//https://eth-rinkeby.alchemyapi.io/v2/nae_knj-C8NmQI1_bvmTgquP4MYU2YKj

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/nae_knj-C8NmQI1_bvmTgquP4MYU2YKj',
      accounts: ['54536bc717b3f4e48e92acae46c2c0c6c8e0beeeb5ed4a2371217dad7cdb0834']
    }
  }
}