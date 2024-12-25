import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import { getHotelById } from "../../api/hotel";
import HotelMap from "../../components/user/HotelMap";
import HotelInfo from "./HotelInfo";

const AdminHotelDetails = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab,setSelectedTab] = useState("info")

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        console.log("Hotel ID", hotelId);
        const data = await getHotelById(hotelId);
        setHotel(data);
      } catch (error) {
        console.error("Failed to load hotel details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetails();
  }, [hotelId]);

  if (loading) {
    return <p>Loading hotel details...</p>;
  }

  return (
    <div>
      <main className="container mx-auto">
        <div className="p-6  rounded-lg ">
          <div className="flex justify-between border-b pb-4">
            <h1 className="text-3xl font-bold">{hotel.name}</h1>
            <button className="bg-gray-200 hover:bg-indigo-400  hover:text-white px-8 py-2 rounded-lg">
              Edit
            </button>
          </div>

          <ul className="flex mt-4 bg-gray-300">
            <li
              onClick={() => setSelectedTab("info")}
              className={` cursor-pointer px-4 py-2 bg-gray-300 ${
                selectedTab == "info" ? "bg-gray-500" : ""
              }`}
            >
              Details
            </li>
            <li
              onClick={() => setSelectedTab("room_types")}
              className={` cursor-pointer px-4 py-2 bg-gray-300 ${
                selectedTab == "room_types" ? "bg-gray-500" : ""
              }`}
            >
              Room Types
            </li>
            <li
              onClick={() => setSelectedTab("photo_gallery")}
              className={` cursor-pointer px-4 py-2 bg-gray-300 ${
                selectedTab == "photo_gallery" ? "bg-gray-500" : ""
              }`}
            >
              Photo Gallery
            </li>
            <li
              onClick={() => setSelectedTab("social_media")}
              className={` cursor-pointer px-4 py-2 bg-gray-300 ${
                selectedTab == "social_media" ? "bg-gray-500" : ""
              }`}
            >
              Social Media
            </li>
            <li
              onClick={() => setSelectedTab("contact")}
              className={` cursor-pointer px-4 py-2 bg-gray-300 ${
                selectedTab == "contact" ? "bg-gray-500" : ""
              }`}
            >
              Contact Info
            </li>
          </ul>

          {selectedTab == "info" && <HotelInfo hotel={hotel} />}
          {selectedTab == "info" && <HotelInfo hotel={hotel} />}
          {selectedTab == "info" && <HotelInfo hotel={hotel} />}
          {selectedTab == "info" && <HotelInfo hotel={hotel} />}
          {selectedTab == "info" && <HotelInfo hotel={hotel} />}
        </div>
      </main>
    </div>
  );
};

export default AdminHotelDetails;
