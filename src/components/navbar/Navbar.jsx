import React, { useState } from 'react'
import './Navbar.css'

import { SiCrunchyroll } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <section className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <SiCrunchyroll />
          <h2>AnimeFind</h2>
        </Link>
      </div>
      <div className='nav'>
        <ul className={showNav ? 'active' : 'null'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/topanimes'>top animes</Link>
          </li>
        </ul>
      </div>
      <div
        className='menu'
        onClick={() => {
          setShowNav(!showNav)
        }}
      >
        {showNav ? <MdOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </section>
  )
}

export default Navbar
