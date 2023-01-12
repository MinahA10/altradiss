import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Routes,Route, Link} from 'react-router-dom';
import Home from './pages';
import Produits from './pages/produits/produit';
import Services from './pages/services';
import Solution from './pages/solution';
import Contact from './pages/contact';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import SignUpbis from './pages/signUpbis';
import Pourquoi from './pages/pourquoi';
import Error from './pages/error/Error'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Footer from "./pages/footer";
import Scroll from "./components/scrolltop";
import Cart from './pages/panier/Cart';
import Product from './pages/panier/Products';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

function App() {
  return (
  


       
      


    <div className="app">
      <Navbar/>
       <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/solution' element={<Solution/>} />
        <Route path='/Produits' element={<Produits/>} />
        <Route path='/pourquoi' element={<Pourquoi/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUpbis' element={<SignUpbis/>} />
        <Route path='/*' element={<Error />} />
        <Route path='/cart' element={<Cart />} />
        <Route  path='/Products' element={<Product />}/>
       </Routes>
      <Scroll/>
      <Footer/>
    </div>
    
    

  );
  
}


export default App;
