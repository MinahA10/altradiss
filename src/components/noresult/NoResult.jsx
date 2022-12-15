import React from 'react'
import './NoResult.css'

import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegSadTear } from 'react-icons/fa'

const NoResult = () => {
  return (
    <section className='no-result'>
      <AiOutlineSearch className='search-icon' />
      <p>
        Sorry no result found <FaRegSadTear />{' '}
      </p>
    </section>
  )
}

export default NoResult
