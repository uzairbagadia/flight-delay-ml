const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/FlightFactory.json');

const provider = new HDWalletProvider(
    'mimic child lake grocery ecology basket dinosaur cave photo dog already picture'
    ,
    'https://rinkeby.infura.io/v3/07d89ccfc36e4e59b7c248e51ca6e756'
    
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' +  compiledFactory.bytecode })
    .send({ gas: '2100000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();