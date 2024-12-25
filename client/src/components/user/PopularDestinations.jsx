import React from 'react'
import PopularDestinationCard from './PopularDestinationCard'

const popularDestinations = [
    {
        city: "Bangkok",
        province: "Bangkok Province",
        country : "Thailand"
    },
    {
        city: "Mumbai",
        province: "Maharashtra",
        country : "India"
    },
    {
        city: "Phuket",
        province: "Phuket Province",
        country : "Thailand"
    },
    {
        city: "Krabi",
        province: "Krabi Province",
        country : "Thailand"
    },
    {
        city: "Mahe Islands",
        province: "",
        country : "Seychelles"
    },
    {
        city: "Khor Fakkan",
        province: "Sharjah",
        country : "UAE"
    },
    {
        city: "Koh Samui",
        province: "Surat Thani Province",
        country : "Thailand"
    },
    {
        city: "Antalya",
        province: "Antalya Region",
        country : "Turkiye"
    }
]

const PopularDestinations = () => {
  return (
    <div className='w-[1200px] mx-auto py-8 overflow-x-scroll bg-pink-200 '>
        <div className='flex overflow-x-scroll gap-x-4'>
        {popularDestinations.map(destination => <PopularDestinationCard destination={destination}/>)}
        </div>
    </div>
  )
}

export default PopularDestinations