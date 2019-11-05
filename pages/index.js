import React,{Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

import {Link} from '../routes';
  
class InsuranceIndex extends Component {
    static async getInitialProps(){
        const insurances = await factory.methods.getDeployedInsurances().call();
        return {insurances};
    }
    
    async componentDidMount(){
       const insurances = await factory.methods.getDeployedInsurances().call();
       var date = new Date();
        var timestamp = date.getTime();
       
        console.log(timestamp);
    }
    renderInsurances(){
        // this is static will have view video 155 again once we deploy on rinkeby
        const items = this.props.insurances.map(
            address => {
                return {
                    header: address,
                    description: (
                        <Link route={`/insurances/${address}`}>
                            <a>View Insurance</a>
                        </Link>
                    ),
                    fluid :true
                };
            }
        );
        return <Card.Group items = {items}/>
        }
        
        
        
      /*  const items = [
            {
              header: 'Project Report - April',
              description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
              meta: 'ROI: 30%',
              fluid: true
            },
            {
              header: 'Project Report - May',
              description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
              meta: 'ROI: 34%',
              fluid: true
            },
            {
              header: 'Project Report - June',
              description:
                'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
              meta: 'ROI: 27%',
              fluid: true
            },
          ]

          return <Card.Group items = {items}/>
    }*/

    render(){
        return (
        <Layout>
            
            <div> 
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    <h3> Available Insurances</h3>
                    
                    <Link route="/insurances/new">
                        <a>
                            <Button
                                floated = "right"
                                content=" Create Insurance"
                                icon=" add circle"
                                primary={true}
                            />
                        </a>
                    </Link>
                    { this.renderInsurances()}
            </div>
        </Layout>);
    }

}

export default InsuranceIndex;