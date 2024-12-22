import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HotelCard from '../components/HotelCard';
import { getHotels } from './../api/hotel';

const Home = () => {
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
    <div>
      <Navbar />
      <header className="bg-gray-200 text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to Hotel Booking</h1>
        <p className="mt-4 text-lg">Find and book the perfect accommodation.</p>
      </header>
      <main className="container mx-auto my-10">
        <h2 className="text-2xl font-bold mb-4">Featured Hotels</h2>
        {loading ? (
          <p>Loading hotels...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
