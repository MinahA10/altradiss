import React from 'react';
import { MDBInput,MDBCard,MDBCardBody,MDBTextArea,MDBInputGroup,MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
    return (
        
            
        <MDBCard>
                <MDBCardBody>
                    <h1>Signalement produits</h1>
                <MDBInputGroup className='mb-3'>
                    <MDBInput label='Nom du produits' id='form1' type='text' />
                </MDBInputGroup>
                    <MDBTextArea label='Message' id='textAreaExample' rows={4} />
                    <br></br>
                    <MDBBtn>Envoyer</MDBBtn>
            </MDBCardBody>
            
            </MDBCard>
           
  );
}