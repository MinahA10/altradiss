import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import Contact from "../pages/contact"
import Service from "../pages/services"
import Solution from "../pages/solution"
import Pourquoi from "../pages/pourquoi"
// slider
class BootstrapCarouselComponent extends React.Component {
  render() {
  return (
    
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
              <MDBBtn tag="a" outline size="lg" href='Products'>
               Voir nos Produits
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Solution />
      <Pourquoi />
      <Contact/>
    </header>

    
  
  )
  };
  }

  
  export default BootstrapCarouselComponent;
// slide fin


