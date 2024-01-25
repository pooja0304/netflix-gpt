import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GPTSearch = () => {
  return (
    <div>
      {/* gpt search bar   
      got movie suggestions */}
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch
