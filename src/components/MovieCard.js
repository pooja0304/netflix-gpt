import React from 'react'
import { TMDB_IMG } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='m-2'>
      <img alt="poster" src={TMDB_IMG + poster_path}/>
    </div>
  )
}

export default MovieCard
