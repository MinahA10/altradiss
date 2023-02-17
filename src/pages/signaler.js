import React from 'react';
import { MDBInput,MDBCard,MDBCardBody,MDBTextArea,MDBInputGroup,MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
    return (
        
          
        <MDBCard className='' sm='4'>
            
        <MDBCardBody>
            <h1>Signalement produits</h1>
                    <MDBInput label='Nom du produits' id='form1' type='text' />
             <br></br>
                    <MDBTextArea label='Message' id='textAreaExample' rows={4} />
                    <br></br>
                    <MDBBtn>Envoyer</MDBBtn>
            </MDBCardBody>
            </MDBCard>
          
  );
}