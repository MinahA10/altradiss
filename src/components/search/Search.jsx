import React, { useRef, useEffect } from 'react'
import './Search.css'

import { useGlobalContext } from '../../context'

const Search = () => {
  const { setSearch } = useGlobalContext()

  const searchText = useRef()

  useEffect(() => searchText.current.focus(), [])

  const handleSubmit = (e) => {
    e.preventDefault()

    let tempSearchTerm = searchText.current.value.trim()
    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setSearch('naruto')
    } else {
      setSearch(searchText.current.value)
    }
  }
  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your anime</label>
          <input type='text' id='name' placeholder='Naruto' ref={searchText} />
        </div>
      </form>
    </section>
  )
}

export default Search
