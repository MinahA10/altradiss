import './login.css'
import React , { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
  MDBInput,
    MDBValidation,
  MDBValidationItem
  
  }
  from 'mdb-react-ui-kit';


function SignIn() {
  
   const [formValue, setFormValue] = useState({
     email: '',
     mdp: '',
   });
  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
      
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 50%)'}}>
            ALTRADISS<br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>EVOLVE FURTHER</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            VOTRE PARTENAIRE EN SOLUTION INFORMATIQUE
              </p>
              </MDBCol>
          
          <MDBCol md='5' className='position-relative '>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className='my-5 bg-glass'>
                <MDBCardBody className='p-5'>
           <MDBValidation className='row g-3'>
      <MDBValidationItem className='' feedback='Entrer un Email valide.'>
          <MDBInput wrapperClass='mb-4' label='Adresse mail' id='form3' type='email' value={formValue.email} name='email' onChange={onChange} required />
                </MDBValidationItem>
             
              <MDBValidationItem>
                 <MDBValidationItem className='' feedback='Entrée un mot de passe valide.' invalid>
                  <MDBInput wrapperClass='mb-4' label='mot de passe' id='form4' type='password' value={formValue.mdp} name='mdp' onChange={onChange} required />
                  </MDBValidationItem>
                </MDBValidationItem>
                
                <MDBBtn className='w-100 mb-4' size='md' type='submit'>Se connectez</MDBBtn>
               </MDBValidation>
                <div>
                <p className="mb-0">Pas encore de compte? <a href="signUp" class="text-black-50 fw-bold">S'enregistrer</a></p>
              </div> 
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
              
              </MDBRow>
      </MDBContainer>
        
  
  

      
    );
  }




export default SignIn;
