import React from 'react'
import HotelMap from '../../components/user/HotelMap';

const HotelInfo = ({hotel}) => {
  return (
    <div>
      <p className="text-gray-700">{hotel.location}</p>
      <p className="mt-4">{hotel.description}</p>
      <h2 className="text-2xl font-bold mt-6">Location</h2>
      <HotelMap
        latitude={hotel.coordinates.latitude}
        longitude={hotel.coordinates.longitude}
      />
    </div>
  );
}

export default HotelInfo