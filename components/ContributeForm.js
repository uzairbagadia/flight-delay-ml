import React, {Component} from 'react';

import {Form, Input , Message, Button} from 'semantic-ui-react';

import Insurance from '../ethereum/insurance';
import web3 from '../ethereum/web3';

class ContributeForm extends Component {

    state ={
        value :''
    }
    onSubmit = async event =>{
        event.preventDefault();
        const insurance = Insurance(this.props.address);
        
        try{
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            await insurance.methods.buyInsurance().send(
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
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>
                        Buy Insurance
                        {this.state.value}
                    </label>
                    <Input
                        value ={this.state.value}
                        onChange ={ event => this.setState({value:event.target.value})}
                        label = "ether" 
                        labelPosition ="right"

                    />
                </Form.Field>
                <Button primary>
                    Buy!
                </Button>
            </Form>
        );
    }
}

export default ContributeForm;