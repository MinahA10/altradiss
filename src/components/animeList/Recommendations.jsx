import React, { useState, useEffect } from 'react'
import './Recommendations.css'

import Recommendation from './Recommedation'
import Loading from '../loading/Loading'

const Recommendations = () => {
  const [loading, setLoading] = useState(false)
  const [recommendations, setRecommendations] = useState([])

  const recommendationsAnime = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/recommendations/anime`
      )
      const animes = await response.json()
      const { data } = animes
      if (data) {
        const newAnimes = data.map((anime) => {
          const { entry, date } = anime
          return {
            image: entry[0],
            title: entry[0],
            date: date,
          }
        })
        setRecommendations(newAnimes)
      } else {
        setRecommendations([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    recommendationsAnime()
  }, [])

  const newRecommendations = recommendations.slice(0, 60)

  if (loading) {
    return <Loading />
  }

  return (
    <section className='recommendations'>
      <div className='title'>
        <h2>Recommendations</h2>
      </div>
      <div className='content'>
        {newRecommendations.map((animerec, index) => {
          return <Recommendation key={index} {...animerec} />
        })}
      </div>
    </section>
  )
}

export default Recommendations
