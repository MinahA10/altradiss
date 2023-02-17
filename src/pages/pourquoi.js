import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div>
      <MDBCard>
         <MDBCardBody>
      <h1 style={{color:'#256CE1'}}>Pourquoi contactez nos services?</h1>
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='./toujours à votre écoute1.png' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle><strong>Nous sommes toujours à votre écoute</strong></MDBCardTitle>
          <MDBCardText>
       Pour rester réactif face à vos demandes, notre service client est joignable 24h/7j.
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='./meilleur service.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle><strong>Une meilleur service</strong></MDBCardTitle>
          <MDBCardText>
                  Nos techniciens vous proposent des solutions adaptées en fonction de vos besoins.
                  Faites confiance en notre savoir-faire.
                </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='./réel accomp.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle><strong>Un réel Accompagement</strong></MDBCardTitle>
          <MDBCardText>
            Quels que soient vos besoins, notre équipe vous accompagne dans votre projet.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardImage src='./gestion.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle><strong>Un meilleur Gestion</strong></MDBCardTitle>
                <MDBCardText>
                  Vous pouvez vous concentrer à votre coeur de métier, car nous gérons vos accés dès l'installation à la maintenance.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
          </MDBCardGroup>
          </MDBCardBody>
        </MDBCard>
      </div>
  );
}