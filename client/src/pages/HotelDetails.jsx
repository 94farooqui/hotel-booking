import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getHotelById } from "./../api/hotel";
import HotelMap from "../components/HotelMap";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const data = await getHotelById(id);
        setHotel(data);
      } catch (error) {
        console.error("Failed to load hotel details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetails();
  }, [id]);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-10">
        {loading ? (
          <p>Loading hotel details...</p>
        ) : hotel ? (
          <div className="p-6 border rounded-lg shadow-md">
            <h1 className="text-3xl font-bold">{hotel.name}</h1>
            <p className="text-gray-700">{hotel.location}</p>
            <p className="mt-4">{hotel.description}</p>
            <h2 className="text-2xl font-bold mt-6">Location</h2>
            <HotelMap
              latitude={hotel.coordinates.latitude}
              longitude={hotel.coordinates.longitude}
            />
          </div>
        ) : (
          <p>Hotel not found.</p>
        )}
      </main>
    </div>
  );
};

export default HotelDetails;
