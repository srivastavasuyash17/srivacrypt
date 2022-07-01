 

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks : {
    goerli:{
      url:'https://eth-goerli.alchemyapi.io/v2/M9dckSjXWCEOCSoZaZpV4kpXldNUN3ad',
      accounts: ['719cf272c94d80f258885c17aa32f44568a155da51991d0e1d6c7283195f2ec4']
    }
  }

}
