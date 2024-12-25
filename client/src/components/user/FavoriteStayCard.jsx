import React from 'react'

const FavoriteStayCard = ({data}) => {
  return (
    <div className='relative '>
        <img src={data.image} className='top-0 left-0 w-full h-72 object-cover rounded-2xl overflow-hidden' />
        <div className='absolute top-0 left-0 w-full h-full bg-zinc-900 opacity-30 rounded-2xl'></div>
        <p className='text-white font-bold absolute bottom-4 left-4'>{data.title}</p>
    </div>
  )
}

export default FavoriteStayCard