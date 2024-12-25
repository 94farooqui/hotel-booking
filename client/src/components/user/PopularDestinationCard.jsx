import React from 'react'
import PlaceHolderImage from './../../assets/placeholder.svg'

const PopularDestinationCard = ({destination,index}) => {
  return (
    <div className='flex-none w-[260px] h-52 border rounded-xl overflow-hidden '>
        <img src={PlaceHolderImage} className='w-full h-36 object-cover'  />
        <div className='p-2'>
          <p>{destination.city}</p>
          <p className='text-sm'>{destination.province? destination.province+", " : ""}{destination.country}</p>
        </div>
    </div>
  )
}

export default PopularDestinationCard