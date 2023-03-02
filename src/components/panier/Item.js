import './item.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/cartSlice';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
function Item({id, title, image, price}) {

  const dispatch = useDispatch()
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <>
      
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src={image}
        alt="item"
      />
      <button 
        onClick={() => 
          dispatch(addToCart({
            id, title, image, price
          }))
        }>Add to Cart
      </button>
      </div>
      <div className='detail'>
       <MDBBtn onClick={toggleShow}>Detaile produit</MDBBtn>
      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{title}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <img
        src={image}
        alt="item"
              />
             {price} AR
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Fermer
              </MDBBtn>
              <MDBBtn     onClick={() => 
          dispatch(addToCart({
            id, title, image, price
          }))
        }> <MDBIcon fas icon="cart-plus" />
             
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
        </MDBModal>
        </div>
    </>
  )
}

export default Item