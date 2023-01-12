import React, { useState, useEffect } from 'react'
import Product from "../panier/Products"

const Produit = () => {
  return (
    <section className='home'>
      <div className='left'>
        <Product/>
      </div>
      <div className='right'>
      <Product/>
      </div>
    </section>
  )
}

export default Produit
