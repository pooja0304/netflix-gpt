import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] pl-28 absolute bg-gradient-to-r from-black text-white aspect-video'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <h3 className='py-6 text-lg w-1/3'>{overview}</h3>
      <div>
        <button className='bg-white text-black px-8 text-center py-2 rounded-md hover:bg-opacity-80'>Play</button>
        <button className='mx-2 bg-white text-black px-8 text-center py-2 rounded-md'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
