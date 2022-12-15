import React from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('naruto')
  const [resData, setResData] = useState([])

  // =======call API Search animes ================

  const getSearchAnime = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
      )
      const resData = await response.json()
      const { data } = resData
      if (data) {
        const results = data.map((anime) => {
          const { mal_id, images, episodes, genres, title } = anime
          return {
            id: mal_id,
            image: images,
            nb_episodes: episodes,
            genres: genres,
            title: title,
          }
        })
        setResData(results)
      } else {
        setResData([])
      }

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getSearchAnime()
  }, [search])

  return (
    <AppContext.Provider
      value={{
        loading,
        resData,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
