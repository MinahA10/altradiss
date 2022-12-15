import React from 'react'
import './SearchList.css'

import NoResult from '../noresult/NoResult'
import Loading from '../loading/Loading'

import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'

const SearchList = () => {
  const { resData, loading } = useGlobalContext()

  if (resData.length < 1) {
    return <NoResult />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className='search-list'>
      <div className='title'>
        <h2>Your search results</h2>
      </div>
      <div className='content'>
        {resData.map(({ id, image, nb_episodes, genres, title }) => {
          return (
            <div className='result' key={id}>
              <div className='top'>
                <img src={image.jpg.image_url} alt={title} />
              </div>
              <div className='bottom'>
                <p>
                  <span className='title'>title: </span> {title.slice(0, 30)}
                </p>
                <p>
                  <span>episodes: </span> {nb_episodes}
                </p>
                <p>
                  <span>Genres: </span>
                  {genres
                    .map((genre) => {
                      return genre.name
                    })
                    .join(', ')}
                </p>
                <div className='details'>
                  <Link to={`/anime/${id}`}>Details</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchList
