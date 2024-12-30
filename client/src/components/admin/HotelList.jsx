import React, { useEffect, useState } from "react";
import { getHotels } from "../../api/hotel";
import { Link, useNavigate } from "react-router-dom";


import { MdRemoveRedEye } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

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
        <button
          onClick={() => navigate("new")}
          className="bg-gray-200 hover:bg-gray-800 hover:text-white text-gray-700 font-bold text-sm px-4 py-2 rounded-md"
        >
          Add New
        </button>
      </div>
      <input
        type="text"
        placeholder="Search hotels by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border-2 border-gray-500 border-opacity-50 rounded-md my-4 block"
      />
      {/* <ul>
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
      </ul> */}
      <div className="relative flex flex-col w-full h-full  shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max rounded-md overflow-hidden text-sm">
          <thead className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <tr className="">
              <th className="pl-4 py-2">Name</th>
              <th className="py-2">Address</th>
              <th className=" py-2pr-4">Actions</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-gray-100">
            {filteredHotels.map((hotel) => (
              <tr className="">
                <td className="py-2 pl-4 font-semibold text-gray-600">
                  {hotel.name}
                </td>
                <td className="py-2">{hotel.location}</td>
                <td className="flex gap-4 items-center py-2 pr-4">
                  <button
                    onClick={() => navigate(`${hotel._id}`)}
                    className="p-1 hover:bg-gray-300 rounded-md"
                  >
                    <MdRemoveRedEye />
                  </button>
                  <button
                    onClick={() => navigate(`${hotel._id}/edit`)}
                    className="p-1 hover:bg-gray-300 rounded-md"
                  >
                    <MdEdit />
                  </button>
                  <button className="p-1 hover:bg-gray-300 rounded-md">
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelList;
