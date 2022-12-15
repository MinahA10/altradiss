import React, { useState, useEffect } from 'react'
import './TopAnimePage.css'

import Loading from '../../components/loading/Loading'
import TopAnimeElement from './TopAnimeElement'

const TopAnimePage = () => {
  const [topAnimes, setTopAnimes] = useState([])
  const [loading, setLoading] = useState(false)

  const TopAnimeRank = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime`)
      const animes = await response.json()
      const { data } = animes

      if (data) {
        const newAnimes = data.map((anime) => {
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
          } = anime

          return {
            id: mal_id,
            image: images,
            nb_episodes: episodes,
            studios: studios,
            synopsis: synopsis,
            title: title,
            orig_title: title_japanese,
            year: year,
            difusion: aired,
          }
        })
        setTopAnimes(newAnimes)
      } else {
        setTopAnimes([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    TopAnimeRank()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <section className='top-animes-page'>
      <div className='title-top'>
        <h2>Top animes from the moment</h2>
      </div>
      <div className='content-animes'>
        {topAnimes.map((anime) => {
          return <TopAnimeElement key={anime.id} {...anime} />
        })}
      </div>
    </section>
  )
}

export default TopAnimePage
