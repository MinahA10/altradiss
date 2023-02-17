import './login.css'
import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
   MDBValidation,
  MDBValidationItem,
  }
  from 'mdb-react-ui-kit';


function SignIn() {

  const [formValue, setFormValue] = useState({
    name: '',
    Contact: '',
    NIF: '',
    STAT: '',
    email: '',
    adresse: '',
    mpd: '',
    Cmdp:'',
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

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <MDBValidation isValidated>
              <MDBRow>
                <MDBCol col='6'>
                
      <MDBValidationItem className='mb-3 pb-1' feedback=' Entrer un nom valide' invalid>
                      <MDBInput wrapperClass='mb-4' label="Nom de l'entreprise" id='form1' name='name' value={formValue.name} onChange={onChange} type='text' required/>
                      </MDBValidationItem>
                    
                </MDBCol>

                  <MDBCol col='6'>
                     <MDBValidationItem >
                      <MDBInput wrapperClass='mb-4' label='Contact' id='form2' type='number' name='contact' value={formValue.contact} onChange={onChange} required />
                      </MDBValidationItem>
                </MDBCol>
                </MDBRow>
                <MDBValidationItem >
                  <MDBInput wrapperClass='mb-4' label='NIF' id='form3' type='number' name='NIF' value={formValue.NIF} onChange={onChange} required />
                </MDBValidationItem>
                    <MDBValidationItem >
                  <MDBInput wrapperClass='mb-4' label='STAT' id='form3' type='number' name='STAT' value={formValue.STAT} onChange={onChange} required />
                </MDBValidationItem>
                <MDBValidationItem >
                  <MDBInput wrapperClass='mb-4' label='Adresse mail' id='form3' type='email' name='email' value={formValue.email} onChange={onChange} required />
                </MDBValidationItem>
                <MDBValidationItem>
                  <MDBInput wrapperClass='mb-4' label='Adresse' id='form3' type='text' name='adresse' value={formValue.adresse} onChange={onChange} required />
                </MDBValidationItem>
                <MDBValidationItem>
                  <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form4' type='password' value={formValue.mdp} onChange={onChange} required />
                </MDBValidationItem>
                <MDBValidationItem>
                  <MDBInput wrapperClass='mb-4' label='confirmer mot de passe' id='form4' type='confirm password' value={formValue.Cmpd} onChange={onChange} required />
                  </MDBValidationItem>
              <MDBValidationItem className='col-12' feedback="Vous devez accepteé les conditions d'utilisation" invalid>
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label="J'accepte toutes les déclarations dans les conditions d'utilisation" required />
              </div>
              </MDBValidationItem>
                <MDBBtn className='w-100 mb-4' size='md' type='submit'>S'enregistrez</MDBBtn>
                </MDBValidation>
                <div>
                <p className="mb-0">Déja un compte ? <a href="signIn" class="text-black-50 fw-bold">Se connectez</a></p>
                </div>
                
            
              
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    );
  }




export default SignIn;
