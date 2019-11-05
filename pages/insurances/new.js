import React , {Component} from 'react';
import {Button, Form, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory'
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import { Link, Router} from '../../routes';


class InsuranceNew extends Component {
    static async getInitialProps(){
        const latestInsurance = await factory.methods.getLatestInsurance().call();
        return {latestInsurance};
    }
     
    state ={
        minimumAmount:'',
        departureTimestamp: '',
        airlineName: '',
        flightCode: '',
        errorMsg: '',
        loading:false,
        latestInsurance:''
    };
    onSubmit = async (event) =>{
        event.preventDefault();
        this.setState({ loading:true, errorMsg:''});
        try{
            const accounts = await web3.eth.getAccounts();
            
             await factory.methods.createInsurance(this.state.minimumAmount*1000000000,this.state.departureTimestamp,this.state.airlineName,this.state.flightCode)
            .send({
                from: accounts[0]
            });

           // console.log(latestInsurance);
           const latestInsurance = await factory.methods.getLatestInsurance().call();
            console.log(latestInsurance);
            this.setState({latestInsurance:latestInsurance});



            Router.pushRoute(`/insurances/${latestInsurance}/depositshow`);
        } catch (err) {
            this.setState({errorMsg: err.message });
            
        }

        /*try{
            const latestInsurance = await factory.methods.getLatestInsurance().call();
            console.log(latestInsurance);
        }catch(err){
            this.setState({errorMsg: err.message });
        }*/
        this.setState({loading:false});
    };



    render(){
        return(
            <Layout>
                <h1>
                    New Insurance
                </h1>
                <Form onSubmit={this.onSubmit} error ={!!this.state.errorMsg} >
                    <Form.Field>
                        <label>Amount</label>
                        <Input 
                        label = "ether" 
                        labelPosition = "right"
                        value = {this.state.minimumAmount}
                        onChange={
                            event =>
                                this.setState({minimumAmount: event.target.value })
                        }
                        
                        />
                        <label>Arrival Time</label>
                        <Input 
                        value = {this.state.departureTimestamp}
                        onChange={
                            event =>
                                this.setState({departureTimestamp: event.target.value })
                        }
                        
                        />
                        <label>Airline Name</label>
                        <Input 
                        value = {this.state.airlineName}
                        onChange={
                            event =>
                                this.setState({airlineName: event.target.value })
                        }
                        
                        />
                        <label>Flight Code</label>
                        <Input 
                        value = {this.state.flightCode}
                        onChange={
                            event =>
                                this.setState({flightCode : event.target.value })
                        }
                        
                        />
                    </Form.Field>
                    <Message error header ="Oops" content = {this.state.errorMsg}/>
                    
                        <Button loading={this.state.loading} primary> Create </Button>
                    

                </Form>


            </Layout>
        );
    }
}


export default InsuranceNew;