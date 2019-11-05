import React,{Component} from 'react';
import {Card, Button,Form,Input} from 'semantic-ui-react';
import factory from '../../../ethereum/factory';
import Layout from '../../../components/Layout';
import ContributeForm from '../../../components/ContributeForm';
import Insurance from '../../../ethereum/insurance';
import {Link} from '../../../routes';
import web3 from '../../../ethereum/web3';

class InsuranceDeposit extends Component{
     static async getInitialProps(props){
        const insurance = Insurance(props.query.address);
        //console.log('hi props'+props.query.address);
        return {
            address: props.query.address
        };
     }
     state ={
        value :''
    }
    onSubmit = async event =>{
        event.preventDefault();
        const insurance = Insurance(this.props.address);
        
        try{
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            await insurance.methods.enterdeposit().send(
            {    
                from : accounts[0],
                value: web3.utils.toWei(this.state.value,'ether')
            }
            );
        }catch(err){

        }

    
    
    }


    render(){
        return(
            <Layout>

            <div>DEPOSIT PAGE</div>
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    
                    <Input
                        value ={this.state.value}
                        onChange ={ event => this.setState({value:event.target.value})}
                        label = "ether" 
                        labelPosition ="right"

                    />
                </Form.Field>
                <Button primary>
                    Pay!
                </Button>
            </Form>

            
            <Link route={'/'}><a>Back to Home</a></Link>
            </Layout>
            
        );
    }
}

export default InsuranceDeposit;