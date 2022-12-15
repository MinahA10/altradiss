import React, { useEffect, useState } from 'react'
import './AnimeDetails.css'

import Loading from '../../components/loading/Loading'

import { useParams } from 'react-router-dom'

function AnimeDetails() {
  const [animeDetail, setAnimeDetail] = useState(null)
  const [loading, setLoading] = useState(false)

  // get id 
  const { id } = useParams()

  const getAnimebyId = async () => {
    setLoading(true)

    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
      const animeFind = await response.json()
      const { data } = animeFind

      if (data) {
        const {
          mal_id,
          images,
          episodes,
          studios,
          synopsis,
          title,
          title_japanese,
          year,
          aired,
          duration,
          genres,
          producers,
        } = data

        const newAnimeDetail = {
          id: mal_id,
          image: images,
          nb_episodes: episodes,
          studios: studios,
          synopsis: synopsis,
          title: title,
          title_japanese: title_japanese,
          year: year,
          difusion: aired,
          duration: duration,
          genres: genres,
          producers: producers,
        }
        setAnimeDetail(newAnimeDetail)
      } else {
        setAnimeDetail(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getAnimebyId()
  }, [id])

  if (loading) {
    return <Loading />
  }

  return (
    <section className='anime-detail'>
      <div className='left'>
        <img src={animeDetail?.image.jpg.large_image_url} />
      </div>
      <div className='right'>
        <p>
          <span>title: </span>
          {animeDetail?.title}
        </p>
        <p>
          <span>original title:</span>
          {animeDetail?.title_japanese}
        </p>
        <p>
          <span>episodes: </span>
          {animeDetail?.nb_episodes}
        </p>
        <p>
          <span>duration: </span>
          {animeDetail?.duration}
        </p>

        <p>
          <span>year:</span>
          {animeDetail?.year}
        </p>

        <p>
          <span>genres: </span>
          {animeDetail?.genres
            .map(({ name }) => {
              return name
            })
            .join(', ')}
        </p>
        <p>
          <span>studio: </span>
          {animeDetail?.studios.map(({ name }) => {
            return name
          })}
        </p>
        <p>
          <span>Producers: </span>
          {animeDetail?.producers
            .map(({ name }) => {
              return name
            })
            .join(', ')}
        </p>
        <p className='syno'>
          <span className='synopsis'>synopsis: </span>
          {animeDetail?.synopsis}
        </p>
        <div className='button'>
          <a href='https://french-manga.net' target='_blank'>
            Watch
          </a>
        </div>
      </div>
    </section>
  )
}

export default AnimeDetails
