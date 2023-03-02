import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { BsFillPersonFill } from "react-icons/bs";
// Import the default CSS
import "rsuite/dist/rsuite.min.css";
const Navbar = () => {
  return (
      <Nav>
        <NavLink to='/' >
          <img src='/logo-ALT.png' alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/solution' activeStyle>
            Solutions
          </NavLink>
          <NavLink to='/pourquoi' activeStyle>
            Pourquoi Nous ?
          </NavLink>
          <NavLink to='/produit' activeStyle>
           Nos produits
          </NavLink>
          <NavLink to='/profil' activeStyle>
            Profil
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signIn'  >    
          <BsFillPersonFill /> Login </NavBtnLink>
        
        </NavBtn>
      </Nav>
   
  );
};

export default Navbar;
