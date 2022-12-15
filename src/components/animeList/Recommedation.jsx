import React from 'react'
import { Link } from 'react-router-dom'

const Recommedation = ({ image, title }) => {
  return (
    <div className='anime-recom'>
      <div className='top'>
        <img src={image.images.jpg.image_url} alt={title.title} />
      </div>
      <div className='bottom'>
        <p className='title'>{title.title}</p>

        <div className='details'>
          <Link to={`/anime/${image.mal_id}`} className='detail'>
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Recommedation
