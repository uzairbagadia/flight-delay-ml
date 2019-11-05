import web3 from './web3';
import CampaignFactory from './build/FlightFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3e9c6E86837Ea78cC0Ecc7795885650750bA08bc'
);

export default instance;
