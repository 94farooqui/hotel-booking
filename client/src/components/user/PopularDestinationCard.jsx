import React from 'react'
import PlaceHolderImage from './../../assets/placeholder.svg'

const PopularDestinationCard = ({destination}) => {
  return (
    <div className='w-[200px] bg-green-200 border '>
        <img src={PlaceHolderImage} className='w-full h-36 object-cover'  />
    </div>
  )
}

export default PopularDestinationCard