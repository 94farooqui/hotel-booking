import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import { getHotelById } from "../../api/hotel";
import HotelMap from "../../components/user/HotelMap";
import HotelInfo from "../../components/admin/HotelInfo";
import HotelRoomTypes from "../../components/admin/HotelRoomTypes";
import HotelPhotos from "../../components/admin/HotelPhotos";
import HotelSocialMedia from "../../components/admin/HotelSocialMedia";
import HotelContactInfo from "../../components/admin/HotelContactInfo";


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
        <div className=" rounded-lg ">
          <div>
            <div className="flex justify-between border-b pb-4">
              <h1 className="text-3xl font-bold">{hotel.name}</h1>
              <button className="bg-gray-200 hover:bg-indigo-400  hover:text-white px-8 py-2 rounded-lg">
                Edit
              </button>
            </div>
            <div className="my-4 ">
              <h3 className="text-xl font-semibold text-gray-700">Highlights</h3>
              <ul className="grid grid-cols-2 mt-2 text-gray-600">
                <li><span className="text-lg text-green-700 mr-2">+</span>3 Star Hotel</li>
                <li><span className="text-lg text-green-700 mr-2">+</span>Parking</li>
                <li><span className="text-lg text-green-700 mr-2">+</span>Indian/Chinese Food</li>
                <li><span className="text-lg text-green-700 mr-2">+</span>Gym</li>
                <li><span className="text-lg text-green-700 mr-2">+</span>5 kms to airport</li>
                <li><span className="text-lg text-green-700 mr-2">+</span>3 Kms to city center</li>
              </ul>
            </div>
          </div>

          <ul className="flex mt-8 border-b overflow-hidden">
            <li
              onClick={() => setSelectedTab("info")}
              className={` cursor-pointer px-4 py-2  ${
                selectedTab == "info" ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white" : ""
              }`}
            >
              Details
            </li>
            <li
              onClick={() => setSelectedTab("room_types")}
              className={` cursor-pointer px-4 py-2  ${
                selectedTab == "room_types" ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white" : ""
              }`}
            >
              Rooms
            </li>
            <li
              onClick={() => setSelectedTab("photo_gallery")}
              className={` cursor-pointer px-4 py-2  ${
                selectedTab == "photo_gallery" ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white" : ""
              }`}
            >
              Photo Gallery
            </li>
            <li
              onClick={() => setSelectedTab("social_media")}
              className={` cursor-pointer px-4 py-2  ${
                selectedTab == "social_media" ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white" : ""
              }`}
            >
              Social Media
            </li>
            <li
              onClick={() => setSelectedTab("contact")}
              className={` cursor-pointer px-4 py-2  ${
                selectedTab == "contact" ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white" : ""
              }`}
            >
              Contact Info
            </li>
          </ul>

          {selectedTab == "info" && <HotelInfo hotel={hotel} />}
          {selectedTab == "room_types" && <HotelRoomTypes hotel={hotel} />}
          {selectedTab == "photo_gallery" && <HotelPhotos hotel={hotel} />}
          {selectedTab == "social_media" && <HotelSocialMedia hotel={hotel} />}
          {selectedTab == "contact" && <HotelContactInfo hotel={hotel} />}
        </div>
      </main>
    </div>
  );
};

export default AdminHotelDetails;
