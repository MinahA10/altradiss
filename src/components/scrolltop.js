
import React, { useEffect } from 'react';

const ScrollUpButton=()=> {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleClick}>
      Scroll Up
    </button>
  );
}
export default ScrollUpButton;