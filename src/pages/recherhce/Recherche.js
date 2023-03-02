import React, { useRef, useEffect } from 'react'
import './recherche.css'
import {MDBIcon}  from 'mdb-react-ui-kit';

const Search = () => {
  

  const searchText = useRef()

  useEffect(() => searchText.current.focus(), [])

  const handleSubmit = (e) => {
    e.preventDefault()


  
  }
  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Rechercher vos Produits</label>
          <input type='text' id='name' placeholder='' ref={searchText} />
          <span>
            <MDBIcon fas icon="search" className='icon-s' />
          </span>
        </div>
      </form>
    </section>
  )
}

export default Search