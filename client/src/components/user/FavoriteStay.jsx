import React from 'react'
import AllInclusive from './../../assets/pictures/all_inclusive.jpg'
import OceanView from './../../assets/pictures/ocean_view.jpg'
import PetFriendly from './../../assets/pictures/pet_friendly.jpg'
import Resort from './../../assets/pictures/Resort.jpg'
import Spa from './../../assets/pictures/spa.jpg'
import FavoriteStayCard from './FavoriteStayCard'


const favoriteStaydata = [
    {
        title: "All Inclusive",
        image: AllInclusive
    },
    {
        title: "Resort",
        image: Resort
    },
    {
        title: "Ocean View",
        image: OceanView
    },
    {
        title: "Spa",
        image: Spa
    },
    {
        title: "Pet friendly",
        image: PetFriendly
    }
]

const FavoriteStay = () => {
  return (
    <div className='w-[1200px] mx-auto py-8'>
        <h2 className='text-3xl font-semibold text-gray-900 mb-4'>Discover your new favorite stay</h2>
        <div className='grid grid-cols-5 gap-x-4'>
            {favoriteStaydata.map(data=><FavoriteStayCard data={data}/>)}
        </div>
    </div>
  )
}

export default FavoriteStay