const assert= require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3=new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/FlightFactory.json');
const compiledInsurance= require('../ethereum/build/Insurance.json');

let accounts;
let factory;
let insuranceAddress;
let insurance;

beforeEach(async ()=>{
accounts = await web3.eth.getAccounts();

factory= await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '3000000'});


await factory.methods.createInsurance('10',1561389942,"Spicejet","SP123").send({
    from: accounts[0],
    gas: '3000000'
});

const addresses=await factory.methods.getDeployedInsurances().call();
insuranceAddress=addresses[0];

insurance = await new web3.eth.Contract(
    JSON.parse(compiledInsurance.interface),
    insuranceAddress
);

});



describe('Insurances', ()=>{
    it('deploys a factory and a insurance',async ()=>{
        assert.ok(factory.options.address);
        assert.ok(insurance.options.address);
    });

    it('marks caller as the airline manager', async () => {
        const airManager = await insurance.methods.airManager().call();
        assert.equal(accounts[0], airManager);
      });
    
      it('allows airline manager to enter deposit', async () => {
        await insurance.methods.enterdeposit().send({
          value: '1000000',
          from: accounts[0]
        });
      });
    
      it('allows passanger to buy insurance', async () => {
        try {
          await insurance.methods.buyInsurance().send({
            value: '500000',
            from: passangerlist[0]
          });
          assert(false);
        } catch (err) {
          assert(err);
        }
      });

    //   it('finalizing decision', async () => {
    //    let decision = await insurance.methods.finalizingDecision().send({
    //     gas : '300000',
    //     from: passangerlist[0]  
    //    });
  
    //     assert(decision);
    //   });
      
   
      it('allows passanger to claim', async () => {
        try {
        await insurance.methods.claim().send({
        gas : '3000000',
        from: passangerlist[0]     
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    });
    
    it('allows airline to claim', async () => {
      try {
      await insurance.methods.airlineCompensation().send({
      gas : '3000000',
      from: accounts[0]     
    });
    assert(false);
  } catch (err) {
    assert(err);
  }
  });

    //   it('allows a manager to make a payment request', async () => {
    //     await campaign.methods
    //       .createRequest('Buy batteries', '100', accounts[1])
    //       .send({
    //         from: accounts[0],
    //         gas: '1000000'
    //       });
    //     const request = await campaign.methods.requests(0).call();
    
    //     assert.equal('Buy batteries', request.description);
    //   });
    
    //   it('processes requests', async () => {
    //     await campaign.methods.contribute().send({
    //       from: accounts[0],
    //       value: web3.utils.toWei('10', 'ether')
    //     });
    
    //     await campaign.methods
    //       .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
    //       .send({ from: accounts[0], gas: '1000000' });
    
    //     await campaign.methods.approveRequest(0).send({
    //       from: accounts[0],
    //       gas: '1000000'
    //     });
    
    // it('oraclized query', async () => {
    //   await insurance.methods.finalizingDecision();
    
    //     let balance = await web3.eth.getBalance(accounts[0]);
    //     balance = web3.utils.fromWei(balance, 'ether');
    //     balance = parseFloat(balance);
    
    //     assert(balance > 0 );
    //   });

});


