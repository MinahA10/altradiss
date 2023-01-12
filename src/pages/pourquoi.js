import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const pourquoi = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        height: '90vh',
      
    }}
    >
    <h1>Pourquoi Nous ?</h1>
    
    <CardGroup>
    <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
        <Card.Title>La sécurisation des données</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
        <Card.Title>La vente des produits</Card.Title>
        <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Le Software</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </CardGroup>

    </div>
  );
};

export default pourquoi;
