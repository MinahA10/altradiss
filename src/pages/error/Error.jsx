import React from 'react'
import './Error.css'

import { Link } from 'react-router-dom'

import { FaRegSadCry } from 'react-icons/fa'

const Error = () => {
  return (
    <section className='error'>
      <p>
        Sorry, page not fount <FaRegSadCry />
      </p>
      <Link to='/'>Back home</Link>
    </section>
  )
}

export default Error
