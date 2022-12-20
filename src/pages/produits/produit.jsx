import React, { useState, useEffect } from 'react'
import Search from '../../components/search/Search'
import Recommendations from '../../components/animeList/Recommendations'
import Ranking from '../../components/animeList/Ranking'
import SearchList from '../../components/animeList/SearchList'

const Produit = () => {
  return (
    <section className='home'>
      <div className='left'>
         {/* <Search />
        <SearchList />  */}
        <Recommendations />
        <h1>produits</h1>
      </div>
      <div className='right'>
        <Ranking />
      </div>
    </section>
  )
}

export default Produit
