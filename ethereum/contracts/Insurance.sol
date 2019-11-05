pragma solidity ^0.4.21;
import "../contracts/Oracle.sol";


contract FlightFactory {
    address[] public  deployedInsurances;

    function createInsurance(uint minimum, uint timestamp, string
airline, string flightCode) public  {
        address newInsurance = new Insurance(minimum,
msg.sender,timestamp,airline,flightCode);
        deployedInsurances.push(newInsurance);
    }

    function getDeployedInsurances() public view returns (address[]) {
        return deployedInsurances;
    }
}

contract Insurance is usingOraclize {

            FlightFactory ff;
            uint insuracePrice;
            uint timestamp;
            address airManager;
            string airline;
            string flightCode;
            uint ticketprice;
            address[] passangerlist;
            uint value=10;

   //variables for oraclized decision
    uint[30] votes;
    uint256 public  decision=0;
    uint nonce;
    uint  public randomnumber;

    //vaariable for timestamp
    string public currentTimestamp;
    uint256 public timeInInt;
    event LogNewOraclizeQuery(string description);
    event LogNewTimestampMeasure(string timestamp);

    //variables for passengers
   mapping(address => bool) public passanger;
   uint passangerCount;

    enum Flightstatus{NotDeparted,Delayed,NotDelayed }
    Flightstatus status;

    function Insurance(uint Iinimum, address AirManager, uint
       tImestamp,string airLineName, string flighTCode) public payable{
       insuracePrice = Iinimum;
       airManager = AirManager;
       timestamp = tImestamp;
       airline = airLineName;
       flightCode = flighTCode;
       status=Flightstatus.NotDeparted;
        ticketprice= 1 ether;
   }

   function enterdeposit()  public payable{
      require(msg.sender == airManager);
   }


//Function for passengers to buy insurance

   function buyInsurance() public payable {
        require(msg.value >= insuracePrice);

        passanger[msg.sender] = true;
        passangerCount++;

        passangerlist.push(msg.sender);

    }


     function __callback(bytes32 _myid,string memory  _result) public
    {
        require(msg.sender == oraclize_cbAddress());
        currentTimestamp = _result;
        timeInInt = parseInt(currentTimestamp);
        emit LogNewTimestampMeasure(currentTimestamp);

        // Do something with the temperature measure...

    }

//Function for passenger to cliam insurance 

    function claim() public {
        require(passanger[msg.sender]);
         LogNewOraclizeQuery("Oraclize query was sent, standing by forthe answer...");
        oraclize_query("WolframAlpha", "Current UNIX timestamp");
         require(timeInInt - timestamp >= 7200);
        finalizingDecision();
          require(decision>=15);
          msg.sender.transfer(ticketprice);

    }

//Function for airlines o get money back in case of no delay

  function airlineCompensation() public  {
      require(msg.sender == airManager);

         LogNewOraclizeQuery("Oraclize query was sent, standing by for the answer...");
        oraclize_query("WolframAlpha", "Current UNIX timestamp");
        require(timeInInt - timestamp >= 7200);
       // finalizingDecision();


               require(decision<15);
                airManager.send((insuracePrice*passangerCount));

  }

//Oraclized Call
    function oraclizedCall() public returns (uint){

        randomnumber =  uint(keccak256(block.difficulty, now, insuracePrice)) %2 ;

        return randomnumber;


    }

//Finalising Oraclized Decision
  function finalizingDecision() private returns (uint){

        uint i;
        decision=0;
        for(i=0;i<30;i++)
        {

           votes[i] =  oraclizedCall();
        }

        for(i=0;i<30;i++)
            decision+=votes[i];

        return decision;

    }
     uint a;

    function getBalance() public returns (uint){
         a= address(this).balance;
        return a;
    }


  function getDecision() public returns (uint){
       
        return decision;
    }

    function getSummary() public  returns ( uint, uint, string, string){
        return(
            insuracePrice,
            timestamp,
            airline,
            flightCode
        );
    }

    

}

