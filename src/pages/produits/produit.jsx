import React, { useState, useEffect } from 'react'
import Product from "../panier/Products"
import Recherche from "../recherhce/Recherche"
const Produit = () => {
  return (
    <section className='home'>
      <div className='left'>
       <Recherche/>
        <Product/>
      </div>
    </section>
  )
}

export default Produit
