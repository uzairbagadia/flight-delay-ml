import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const divStyle = {
    position: 'fixed',
   left: '0',
   bottom: '0',
   
   
  
   width: '100%'
   
};

const FooterPage = () => {
  return (
    <MDBFooter className="problem enclose" color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">ATDIS</h5>
            <p>
              Air Travel Delay Insurance Surety
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Home</h5>
            <ul>
              <li className="list-unstyled">

                <a href="https://localhost:3000">Availabe Insurance</a>
              </li>
              <li className="list-unstyled">
                <a href="https://localhost:3000/new">New Insurance</a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://localhost:3000"> IT Department Group 21</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;

