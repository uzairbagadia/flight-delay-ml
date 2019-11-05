import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import FooterPage from './footer';

export default props => {
     return (
         <div>
            <Header></Header>
            <Container>
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.2/css/mdb.min.css" rel="stylesheet"></link>
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.2/js/mdb.min.js"></script>

                </Head>
                
                    {props.children}
                
            </Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <FooterPage></FooterPage>
         </div>
     );
};