import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages';
import Produits from './pages/produits/produit';
import Services from './pages/services';
import Solution from './pages/solution';
import Contact from './pages/contact';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import SignUpbis from './pages/signUpbis';
import Pourquoi from './pages/pourquoi';
import About from './pages/About/About'
import AnimeDetails from './pages/Details/AnimeDetails'
import Error from './pages/error/Error'
import TopAnimePage from './pages/top anime/TopAnimePage'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Footer from "./pages/footer";
import Scroll from "./components/scrolltop";
import Cart from './pages/panier/Cart';
import Home1 from './pages/panier/Home';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

function App() {
  return (

    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/solution' component={Solution} />
        <Route path='/Produits' component={Produits} />
        <Route path='/pourquoi' component={Pourquoi} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/signIn' component={SignIn} />
        <Route path='/signUpbis' component={SignUpbis} />
        <Route path='/about' element={<About />} />
        <Route path='/anime/:id' element={<AnimeDetails />} />
        <Route path='/topanimes' element={<TopAnimePage />} />
        <Route path='/*' element={<Error />} />
        <Route path='/cart' element={<Cart />} />
        <Route exact path='/' element={<Home1 />}/>
      </Routes>
      <Scroll/>
      <Footer/>
    </div>
   
    

  );
  
}


export default App;
