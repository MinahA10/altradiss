import React from 'react';
import { MDBCard, MDBCardBody, MDBInput,MDBTextArea,MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
    return (
      <MDBCard sm='4'>
        <MDBCardBody>
          <h1>Faire une commande special </h1>
    <MDBInput label='categories de produits' id='form1' type='text' />
    <br></br>
          <MDBInput label='nom du produits' id='form2' type='text' />
          <br></br>
          <MDBTextArea label='Message' id='textAreaExample' rows={4} />
          <br></br>
          <MDBBtn>Envoyer</MDBBtn>
          </MDBCardBody>
        </MDBCard>
    
  );
}