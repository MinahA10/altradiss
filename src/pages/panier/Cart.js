import './cart.css'
import Total from '../../components/panier/Total'
import CartItem from '../../components/panier/CartItem'
import { useSelector } from 'react-redux'
import { MDBCheckbox,MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function Cart() {

  const cart = useSelector((state) => state.cart)

  return (
    
    <div className="cart">
      <div className="cart__left">
        <div>
          <MDBCard>
            <MDBCardBody>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
              </MDBCardBody>
          </MDBCard>
          
        </div>
      </div>

      <div className="cart__right">
        <Total/>
      </div>
      <MDBCard>
         <MDBCardBody>
      <h1>services ajouté</h1>
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Installation' />
          <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Checked checkbox' defaultChecked />
          </MDBCardBody>
       </MDBCard>
    </div>
  )
}

export default Cart