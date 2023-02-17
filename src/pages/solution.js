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
import Accordion from 'react-bootstrap/Accordion';
import './solution.css';

const Solution = () => {
  return (
    <MDBCard>
        <MDBCardBody>
      <h1 style={{color:'#256CE1'}}>Solution proposés </h1>
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
       <Accordion.Header>Accompagnement dans le domaine de nouvelles technologies </Accordion.Header>
       <Accordion.Body>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./sécurisation des données 2.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>La sécurisation des données</strong></MDBCardTitle>
            <MDBCardText>
                        solution ayant pour but de vous garder loin des piratages, renforcer
                        l'accès à vos informations sensibles.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./vente de pdt info.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>La vente des produits</strong></MDBCardTitle>
            <MDBCardText>
              La vente et le commerce des produits reconditionnés dans une optique verte.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./software_IT-removebg-preview.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>Le Software</strong></MDBCardTitle>
            <MDBCardText>
                Dévzloppement de logicel adapté à vos besoins, fourniture de solution
                performante pour une gestion optimum de votre entreprise.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./maintenance info 1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>Le Maintenance Informatique</strong></MDBCardTitle>
            <MDBCardText>
              Réparation et entretien de vos matériels, proposition de monitoring des
              infrastructures, infogérance disponible à tout moment.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./IOT.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>L'internet of Thing</strong></MDBCardTitle>
            <MDBCardText>
              Installation de vos reseaux d'appareils physiques, fournitures des capteurs
              et logiciels essentiels à vos besoins d'accès à internet.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./Location.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>La location</strong></MDBCardTitle>
            <MDBCardText>
                Leasing et location d'infrastructures informatiques pour
                diminuer vos coût d'investissements.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </Accordion.Body>
      </Accordion.Item>
  
    {/* //  seconde sider  */}

    <Accordion.Item eventKey="1">
       <Accordion.Header><strong>Mise en valeur de l’énergie renouvelable</strong></Accordion.Header>
       <Accordion.Body>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./logiciel énergie renouv.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>Logiciels</strong></MDBCardTitle>
            <MDBCardText>
              Nous proposons des logiciels innovants respectant l'environnement.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./matériel_énergie_renouv-removebg-preview.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>Matériels</strong></MDBCardTitle>
            <MDBCardText>
              Nous fournissons des materiels adaptés à des sources d'énergie propre.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='./solutions énergierenouv.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>Solutions</strong></MDBCardTitle>
            <MDBCardText>
                        Si vous avez besoins de solution plus écologique,
                        nous effectuons des études sur vos besoins dans un bref délai.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </Accordion.Body>
      </Accordion.Item>
        </Accordion>
        </MDBCardBody>
    </MDBCard>
      
  );
};

export default Solution;
