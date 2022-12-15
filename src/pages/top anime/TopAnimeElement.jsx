import React from 'react'
import { Link } from 'react-router-dom'

const TopAnimeElement = ({
  id,
  image,
  studios,
  title,
  orig_title,
  year,
  synopsis,
}) => {
  return (
    <div className='anime-top'>
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

        <p className='synopsis'>
          <span>synopsis: </span>
          {synopsis.slice(0, 60)}...
        </p>

        <div className='details'>
          <Link to={`/anime/${id}`}>Details</Link>
        </div>
      </div>
    </div>
  )
}

export default TopAnimeElement
