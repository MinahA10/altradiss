import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import Scroll from "./infinityscroll" 
export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Modifier</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>Faire une commande special</MDBCardText>
                    <MDBBtn href='commandsp'><MDBIcon fas icon="cart-plus" /></MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Nom et Prenom</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Thuran Myr</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">blast@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(+261)340457819</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(261)328742211</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Historique</span>des services</MDBCardText> 
                    {/* <MDBCardHeader className='mb-1'style={{ fontSize: '.77rem' }}>14/02/23</MDBCardHeader>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>installation</MDBCardText>
                  </MDBCardBody>
                  <MDBCardBody>
                    <MDBCardHeader className='mb-1'style={{ fontSize: '.77rem' }}>14/02/23</MDBCardHeader>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                  </MDBCardBody>
                  <MDBCardBody>
                    <MDBCardHeader className='mb-1'style={{ fontSize: '.77rem' }}>14/02/23</MDBCardHeader>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                  </MDBCardBody>
                  <MDBCardBody>
                    <MDBCardHeader className='mb-1'style={{ fontSize: '.77rem' }}>14/02/23</MDBCardHeader>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                  </MDBCardBody>
                  <MDBCardBody>
                    <MDBCardHeader className='mb-1'style={{ fontSize: '.77rem' }}>14/02/23</MDBCardHeader>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText> */} 
                    < Scroll/>
                    </MDBCardBody>
                  
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Historique</span>des achats</MDBCardText>

                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Switch</MDBCardText>
                    <MDBBtn className='me-1' size='sm' color='danger' href='signaler' >
                      Signaler
                    </MDBBtn>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Router </MDBCardText>
                    <MDBBtn className='me-1' size='sm' color='danger' >
                       Signaler
                    </MDBBtn>
                    
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>acces pointe</MDBCardText>
                     <MDBBtn className='me-1' size='sm' color='danger' >
                       Signaler
                    </MDBBtn>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>disque dur</MDBCardText>
                     <MDBBtn className='me-1' size='sm' color='danger' >
                       Signaler
                    </MDBBtn>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Ordinateur</MDBCardText>
                     <MDBBtn className='me-1' size='sm' color='danger' >
                       Signaler
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}