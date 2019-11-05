import React ,{Component } from 'react';
import Insurance from '../../ethereum/insurance';
import {Card, Grid, GridColumn, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import Layout from '../../components/Layout';
import ComponentForm from '../../components/ContributeForm';
import ContributeForm from '../../components/ContributeForm';

class InsuranceShow extends Component {
    static async getInitialProps(props){
        const insurance = Insurance(props.query.address);
        const summary = await insurance.methods.getSummary().call();
        const balance = await insurance.methods.getBalance().call();
       // const des = await insurance.methods.finalizingDecision().call();
       // console.log(des);
        var date = new Date();
        var currentTimestamp = date.getTime();
        console.log(balance);
        return {
            address: props.query.address,
            minimumAmount : summary[0],
            timeStamp : summary[1],
            airlineName : summary[2],
            flightCode : summary[3],
            balance : balance
            

        };
    }

    renderCards(){
        const {
            minimumAmount,
            timeStamp,
            airlineName,
            flightCode,
            balance
        } = this.props;

        const items = [
            {
                header: airlineName,
                meta:' Air Line',
                
                style:{overflowWrap: 'break-word'}
            },
            {   
                header: flightCode,
                meta:' Flight Code',
                
                style:{overflowWrap: 'break-word'}

            },
            {
                header: web3.utils.fromWei(minimumAmount, 'ether'),
                meta:'Amount',
                
                style:{overflowWrap: 'break-word'}
            },
            {
                header: timeStamp,
                meta:'Arrival Time',
                
                style:{overflowWrap: 'break-word'}
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta:'Balance',
                
                style:{overflowWrap: 'break-word'}
            }
        ];

        return <Card.Group items={items}/>;
    }

    onClaim = async() =>{
        const insurance = Insurance(this.props.address);

        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        await insurance.methods.claim().send({
            from: accounts[0]
        });
    };

    onAirLineClaim = async ()=> {
        const insurance = Insurance(this.props.address);

        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        await insurance.methods.airlineCompensation().send({
            from: accounts[0]
        });
    };
     async finalDecision(){
        const insurance = Insurance(this.props.address);
        // var decision = await insurance.methods.finalizingDecision().call(); 
        // var dflag = decision < 15;
        // return dflag;
    }

    render(){
        var date = new Date();
        var currentTimestamp = date.getTime();
        const timeLimit =( currentTimestamp - this.props.timeStamp) > 7200;
        var flag = (Math.ceil(Math.random()*10)%2==0)?true:false;
        console.log(flag);
        return (

            <Layout>
                <h3>Insurance Details</h3>
                <h1>{this.flag}</h1>
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                     
                     <ContributeForm address ={this.props.address}></ContributeForm>
                   <br></br>

                   <div positive = {timeLimit}>
                        { flag ? (
                        null
                        )
                        
                        :(
                            <Button  onClick = {this.onClaim}>
                                Claim
                            </Button>
                        )

                        }

                        
                        <br></br>
                        { flag ? (
                            <Button  onClick = {this.onAirLineClaim}>
                            For Airline
                        </Button>
                        )
                        
                        :(
                            null
                        )

                        }
                        
                    </div>
                    
                    </Grid.Column>
                </Grid>
                
                
               
            </Layout>
            
            
            
            
            )
        
        
        ;
    }
}

export default InsuranceShow;