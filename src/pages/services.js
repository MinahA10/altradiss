import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Services () {
  return (
  
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SERVICE CLIENT</MDBCardTitle>
            <MDBCardText>
            Nous mettons au service de notre clientèle, équipe disponible disposant de certification internationale, 
    disponible 24/7 pour notifier nos clients dès apparition d’une anomalie durant le monitoring.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>UNE EQUIPE DISPONIBLE</MDBCardTitle>
            <MDBCardText>
            Les besoins de nos clients constituent notre priorité. Ainsi, 
   toute anomalie constatée lors d’un monitoring est instantanément signalée. Nous offrons une intervention rapide, 
        car nos agents disposent tous de certification internationale dans le domaine des TIC.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>DES SOLUTIONS INNOVANTES</MDBCardTitle>
            <MDBCardText>
            ALTRADISS est un professionnel dans le domaine de la technologie informatique. Ingénierie de produit, gestions de garantie, 
     maintenance de parc informatique, infrastructure de réseau, etc. relèvent de notre compétence.

 Vous avez un souci dans un de ces domaines? Contactez-nous. Nous pouvons effectuer une prestation sur mesure en fonction de vos besoins. En principe, 
 les solutions à vos problèmes se trouvent dans l’un de ces services :

                <ul>
                    <li> Service de processus métier.</li>
                    <li>Service d’application.</li>
                    <li> Service d’infrastructure.</li>
                </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
  
  );
};

export default Services;

