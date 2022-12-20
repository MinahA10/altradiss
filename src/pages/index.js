import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBBtn
} from 'mdb-react-ui-kit';
// slider
class BootstrapCarouselComponent extends React.Component {
  render() {
  return (
    
  // <div>
  // <div className='container-fluid' >
  // <div className="row">
  // <div className="col-sm-12">

  // </div>
  // </div>
  // <div className="row">
  // <div className="col-12">
  // <Carousel>
  // <Carousel.Item>
  // <img
  // className="d-block w-100"
  // src="https://picsum.photos/500/300?img=1"
  // alt="First slide"
  // />
  // <Carousel.Caption>
  // <h3>First slide label</h3>
  // <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  // </Carousel.Caption>
  // </Carousel.Item>
  // <Carousel.Item>
  // <img
  // className="d-block w-100"
  // src="https://picsum.photos/500/300?img=2"
  // alt="Second slide"
  // />
  // <Carousel.Caption>
  // <h3>Second slide label</h3>
  // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  // </Carousel.Caption>
  // </Carousel.Item>
  // <Carousel.Item>
  // <img
  // className="d-block w-100"
  // src="https://picsum.photos/500/300?img=3"
  // alt="Third slide"
  // />
  // <Carousel.Caption>
  // <h3>Third slide label</h3>
  // <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  // </Carousel.Caption>
  // </Carousel.Item>
  // </Carousel>
  // </div>
  // </div>
  // </div>
  // </div>
    <header>
  <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: '' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>ALTRADISS</h1>
              <h4 className='mb-3'>VOTRE PARTENAIRE EN SOLUTION INFORMATIQUE</h4>
              <MDBBtn tag="a" outline size="lg" href='produit'>
               Voir nos Produits
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  
  
  )
  };
  }

  
  export default BootstrapCarouselComponent;
// slide fin


