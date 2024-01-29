import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const language = useSelector(store=>store.config.language);
    const searchtext = useRef(null);
    const dispatch = useDispatch();
    // search movie in tmdb
    const searchMovieTmdb = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json()
        return json.results

    }
    const handleGptSearchClick = async() =>{
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchtext.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi mil gaya. If input is already a movie name then return only name of that movie."
        const gptresults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          const getMovies = gptresults.choices?.[0]?.message?.content.split(",");
          const promiseArray = getMovies.map(movie=>searchMovieTmdb(movie))
          const tmdbResults = await Promise.all(promiseArray)
          dispatch(addGptMovieResult({movieNames: getMovies,movieResults:tmdbResults}));
    }

  return (
    <div className='pt-[8%] flex justify-center bg-black'>
      <form className='bg-black w-1/2 p-5 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' ref={searchtext} name='input' placeholder={lang[language].gptSearchPlaceholder} className='col-span-10 p-3 rounded-lg'/>
        <button className='bg-red-700 rounded-lg p-3 col-span-2 ml-2' onClick={handleGptSearchClick}>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
