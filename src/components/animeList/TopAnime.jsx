import React from 'react'
import { Link } from 'react-router-dom'

const TopAnime = ({ id, image, title, studios, orig_title, year }) => {
  return (
    <div className='anime'>
      <div className='left-content'>
        <img src={image.jpg.image_url} alt={title} />
      </div>
      <div className='right-content'>
        <p className='title'>
          <span>title: </span>
          {title}
        </p>
        <p className='oririnal_title'>
          {' '}
          <span> Original title: </span>
          {orig_title}
        </p>
        <p className='studio'>
          <span> Studios: </span>
          {studios[0].name}
        </p>
        <p className='year'>
          <span>Publication: </span>
          {year}
        </p>
        <div className='details'>
          <Link to={`/anime/${id}`}>Details</Link>
        </div>
      </div>
    </div>
  )
}

export default TopAnime
