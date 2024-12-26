import React, { useEffect, useState } from "react";
import { getHotels } from "../../api/hotel";
import { Link, useNavigate } from "react-router-dom";

const HotelList = () => {
    const navigate = useNavigate()
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  const filteredHotels = hotels.filter((hotel) =>
    searchTerm
      ? hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
      : hotel
  );

  return (
    <div>
      <div className="flex w-full justify-between items-center ">
        <h2 className="text-3xl font-semibold text-gray-800">Hotels</h2>
        <button onClick={()=>navigate("new")} className="bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-md">
          Add New
        </button>
      </div>
      <input
        type="text"
        placeholder="Search hotels by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border-2 border-indigo-500 border-opacity-50 rounded-md my-4 block"
      />
      <ul>
        {filteredHotels.map((hotel) => (
          <Link key={hotel._id} to={`${hotel._id}`}>
            <li
              key={hotel._id}
              className="border-b p-2 mb-2 flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-gray-700">{hotel.name}</p>
                <p className="text-sm text-gray-600">{hotel.location}</p>
              </div>
              <button
                onClick={() => handleDeleteHotel(hotel._id)}
                className="bg-indigo-200 text-indigo-600 font-semibold text-sm px-4 py-1 rounded-md"
              >
                Delete
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
