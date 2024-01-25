import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const language = useSelector(store=>store.config.language);
  return (
    <div className='pt-[8%] flex justify-center bg-black'>
      <form className='bg-black w-1/2 p-5 grid grid-cols-12'>
        <input type='text' name='input' placeholder={lang[language].gptSearchPlaceholder} className='col-span-10 p-3 rounded-lg'/>
        <button className='bg-red-700 rounded-lg p-3 col-span-2 ml-2'>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
