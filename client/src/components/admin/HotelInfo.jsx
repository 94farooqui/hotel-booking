import React from "react";
import HotelMap from "../../components/user/HotelMap";
import { FaRegEdit } from "react-icons/fa";

const HotelInfo = ({ hotel }) => {
  return (
    <div className="w-full mt-4">
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold mt-6">Details </h3>
        <p className="text-gray-700">{hotel.description}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold mt-6">Location</h3>
        <p className="text-gray-700">{hotel.location}</p>
      </div>

      {/* <HotelMap
        latitude={hotel.coordinates.latitude}
        longitude={hotel.coordinates.longitude}
      /> */}
    </div>
  );
};

export default HotelInfo;
