import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../../api/hotel";
import { IoClose } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";

import { IoCallOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";

import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


const roomTypesData = [
  "Deluxe",
  "Premium",
  "Premium Plus",
  "Non-deluxe",
  "Economic",
];

const AddNewHotel = () => {
  const navigate = useNavigate();
  const [showNewRoomTypeModel, setShowNewRoomTypeModal] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");
  const [showContactInfoTabs, setShowContactInfoTabs] = useState({
    call: true,
    whatsapp: false,
    email: false,
    website: false,
  });
  const [newHotel, setNewHotel] = useState({
    name: "",
    location: "",
    coordinates: "",
    description: "",
    contactinfo: [{ call: "", whatsapp: "", email: "", website: "" }],
    roomTypes: [],
  });

  const addroomType = (e) => {
    if (e.target.value == "new") {
      setShowNewRoomTypeModal(true);
    } else if (newHotel.roomTypes.includes(e.target.value)) {
      return;
    } else {
      const newRoomTypes = [...newHotel.roomTypes, e.target.value];
      setNewHotel({ ...newHotel, roomTypes: newRoomTypes });
    }
  };

  const handleAddHotel = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // try {
    //   const addedHotel = await addHotel(newHotel);
    //   if (addedHotel) {
    //     console.log(addedHotel);
    //     setHotels([...hotels, addedHotel.data]);
    //     setNewHotel({
    //       name: "",
    //       location: "",
    //       description: "",
    //       coordinates: "",
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error adding hotel:", error);
    // }
  };

  const handleDeleteHotel = async (id) => {
    try {
      await deleteHotel(id);
      setHotels(hotels.filter((hotel) => hotel._id !== id));
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  const handleAddContactinfo = (e) => {
    setNewHotel({
      ...newHotel,
      contactinfo: { ...newHotel.contactinfo, [e.target.name]: e.target.value },
    });
    console.log(newHotel);
  };

  const handleAddNewRoomType = () => {
    console.log("Room Type Added");
    const newRoomTypes = [...newHotel.roomTypes, newRoomType];
    setNewHotel({ ...newHotel, roomTypes: newRoomTypes });
    setNewRoomType("");
    setShowNewRoomTypeModal(false);
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center ">
        <h2 className="text-3xl font-semibold text-gray-800">New Hotel</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setShowAddNew(false)}
            className="bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button type="submit" className=" btn-primary">
            Save
          </button>
        </div>
      </div>
      <form
        onSubmit={handleAddHotel}
        className="mt-4 mb-6 flex flex-col gap-4 rounded-md overflow-hidden"
      >
        <h2 className="text-xl font-semibold text-gray-800">Details</h2>
        <input
          type="text"
          placeholder="Name"
          value={newHotel.name}
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
          className="rounded-md p-2 border mr-2"
        />
        <div className="w-full flex gap-2">
          <input
            type="text"
            placeholder="Location"
            value={newHotel.location}
            onChange={(e) =>
              setNewHotel({ ...newHotel, location: e.target.value })
            }
            className="flex-1 rounded-md  p-2 border mr-2"
          />
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Latitude"
              value={newHotel.coordinates?.latitude || ""}
              onChange={(e) =>
                setNewHotel({
                  ...newHotel,
                  coordinates: {
                    ...newHotel.coordinates,
                    latitude: e.target.value,
                  },
                })
              }
              className="p-2 border mr-2"
            />
            <input
              type="text"
              placeholder="Longitude"
              value={newHotel.coordinates?.longitude || ""}
              onChange={(e) =>
                setNewHotel({
                  ...newHotel,
                  coordinates: {
                    ...newHotel.coordinates,
                    longitude: e.target.value,
                  },
                })
              }
              className="p-2 border mr-2"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Description"
          value={newHotel.description}
          onChange={(e) =>
            setNewHotel({ ...newHotel, description: e.target.value })
          }
          className="rounded-md p-2 border mr-2"
        />
      </form>
      {/* Room Types Form */}
      <form className="mt-4 mb-6 flex flex-col gap-4 rounded-md overflow-hidden">
        <div className="flex items-center gap-4 mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Room Types</h2>
        </div>
        <select
          defaultValue="DEFAULT"
          className="rounded-md p-2 border mr-2"
          onChange={addroomType}
        >
          <option disabled value="DEFAULT">
            Select Room Types
          </option>
          {roomTypesData.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
          <option value="new">New Room Type</option>
        </select>
        {showNewRoomTypeModel && (
          <div className="absolute top-0 left-0 z-40 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="w-[400px] bg-white rounded-md overflow-hidden p-4 flex flex-col gap-4 shadow-md">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-600">
                  New Room Type
                </label>
                <button
                  className="text-xl"
                  onClick={() => setShowNewRoomTypeModal(false)}
                >
                  <IoClose />
                </button>
              </div>
              <input
                id="new_roomtype"
                type="text"
                className="border p-2 rounded-md"
                onChange={(e) => setNewRoomType(e.target.value)}
              />
              <button
                onClick={handleAddNewRoomType}
                className="bg-gray-200 self-center px-4 py-1 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        )}
        <div className="flex gap-4 mt-4">
          {newHotel.roomTypes &&
            newHotel.roomTypes.map((room) => (
              <div
                key={room}
                className="flex items-center group gap-2 px-4 border rounded-md py-2 shadow-sm font-semibold text-gray-600 bg-gradient-to-r from-gray-100 to-white"
              >
                <p>{room}</p>
                <button
                  onClick={() =>
                    setNewHotel({
                      ...newHotel,
                      roomTypes: newHotel.roomTypes.filter((e) => e != room),
                    })
                  }
                >
                  <IoClose className="hidden group-hover:block" />
                </button>
              </div>
            ))}
        </div>
      </form>
      {/* Contact Info Form */}
      <div className="flex items-center gap-4 mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Contact info</h2>
      </div>
      <form className="mt-4 mb-6 flex flex-col gap-4 rounded-md overflow-hidden">
        <div className="flex gap-x-4 items-center">
          <button
            type="button"
            onClick={(e) =>
              setShowContactInfoTabs({
                ...showContactInfoTabs,
                call: !showContactInfoTabs.call,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showContactInfoTabs.call
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoCallOutline />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowContactInfoTabs({
                ...showContactInfoTabs,
                whatsapp: !showContactInfoTabs.whatsapp,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showContactInfoTabs.whatsapp
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoLogoWhatsapp />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowContactInfoTabs({
                ...showContactInfoTabs,
                email: !showContactInfoTabs.email,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showContactInfoTabs.email
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoMailOutline />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowContactInfoTabs({
                ...showContactInfoTabs,
                website: !showContactInfoTabs.website,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showContactInfoTabs.website
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoEarth />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {showContactInfoTabs.call && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name="call"
                defaultValue={newHotel.contactinfo.call}
                onChange={handleAddContactinfo}
                className="p-2  w-full"
                placeholder="Call"
              />

              <IoCallOutline className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.whatsapp && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name="whatsapp"
                defaultValue={newHotel.contactinfo.whatsapp}
                onChange={handleAddContactinfo}
                className="p-2  w-full"
                placeholder="WhatsApp"
              />
              <IoLogoWhatsapp className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.email && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name="email"
                defaultValue={newHotel.contactinfo.email}
                onChange={handleAddContactinfo}
                className="p-2  w-full"
                placeholder="Email"
              />
              <IoMailOutline className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.website && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name="website"
                defaultValue={newHotel.contactinfo.website}
                onChange={handleAddContactinfo}
                className="p-2  w-full"
                placeholder="Website"
              />
              <IoEarth className="text-lg text-gray-400 mr-4" />
            </div>
          )}
        </div>
      </form>
      {/* Social Media Form */}
      {/* IoLogoFacebook IoLogoInstagram FaXTwitter IoLogoLinkedin */}
      <div className="flex items-center gap-4 mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Social Media</h2>
      </div>
      <form className="mt-4 mb-6 flex flex-col gap-4 rounded-md overflow-hidden">
        <div className="flex gap-x-4 items-center">
          <button
            type="button"
            onClick={(e) =>
              setShowContactInfoTabs({
                ...showContactInfoTabs,
                call: !showContactInfoTabs.call,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showContactInfoTabs.call
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoLogoFacebook />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowContactInfoTabs({
                ...showContactInfoTabs,
                whatsapp: !showContactInfoTabs.whatsapp,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showContactInfoTabs.whatsapp
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoLogoInstagram />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowContactInfoTabs({
                ...showContactInfoTabs,
                email: !showContactInfoTabs.email,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showContactInfoTabs.email
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <FaXTwitter />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowContactInfoTabs({
                ...showContactInfoTabs,
                website: !showContactInfoTabs.website,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showContactInfoTabs.website
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoLogoLinkedin />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {showContactInfoTabs.call && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name="call"
                defaultValue={newHotel.contactinfo.call}
                onChange={handleAddContactinfo}
                className="p-2  w-full"
                placeholder="Call"
              />

              <IoLogoFacebook className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.whatsapp && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name="whatsapp"
                defaultValue={newHotel.contactinfo.whatsapp}
                onChange={handleAddContactinfo}
                className="p-2  w-full"
                placeholder="WhatsApp"
              />
              <IoLogoInstagram className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.email && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name="email"
                defaultValue={newHotel.contactinfo.email}
                onChange={handleAddContactinfo}
                className="p-2  w-full"
                placeholder="Email"
              />
              <FaXTwitter className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.website && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name="website"
                defaultValue={newHotel.contactinfo.website}
                onChange={handleAddContactinfo}
                className="p-2  w-full"
                placeholder="Website"
              />
              <IoLogoLinkedin className="text-lg text-gray-400 mr-4" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddNewHotel;
