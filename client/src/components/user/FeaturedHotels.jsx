import React, { useState } from 'react'
import { getHotels } from '../../api/hotel';
import HotelCard from './HotelCard';
import { useEffect } from 'react';

const FeaturedHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHotels = async () => {
          try {
            const data = await getHotels();
            setHotels(data);
          } catch (error) {
            console.error('Failed to load hotels:', error);
          } finally {
            setLoading(false);
          }
        };

    fetchHotels();
}, []);
    
  return (
    <div className='w-screen'>
        <div className='w-[1200px] max-w-[1200px] mx-auto'>
        <h2 className="text-2xl font-bold mb-4">Featured Hotels</h2>
        {loading ? (
          <p>Loading hotels...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-6">
            {hotels.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
          </div>
        )}
        </div>
    </div>
  )
}

export default FeaturedHotels