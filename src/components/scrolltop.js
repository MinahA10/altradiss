
import React from 'react';
import ScrollUp from '../scrollUp';
import './scroll.css';
import { MDBIcon } from 'mdb-react-ui-kit';
const ScrollUpButton=()=> {
  return (
    <div style={{ fontSize: '2rem' }}>
  <ScrollUp showUnder={100} >
    <span><MDBIcon  fas icon="chevron-up"/></span>
      </ScrollUp>
      </div>
  );
}
export default ScrollUpButton;