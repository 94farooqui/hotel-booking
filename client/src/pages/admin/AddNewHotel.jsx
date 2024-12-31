import React, { useEffect, useState } from "react";
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

const defaultNewHotel = {
  name: "",
  location: "",
  description: "",
  highlights: [""],
  rating: "",
  features: [""],
  contactinfo: [
    { mode: "Call", detail: "" },
    { mode: "WhatsApp", detail: "" },
    { mode: "Email", detail: "" },
    { mode: "Website", detail: "" },
  ],
  social_media: [
    { platform: "Facebook", url: "" },
    { platform: "Instagram", url: "" },
    { platform: "Twitter", url: "" },
    { platform: "LinkedIn", url: "" },
  ],
  coordinates: {
    latitude: "",
    longitude: "",
  },
};

const roomTypesData = [
  "Deluxe",
  "Premium",
  "Premium Plus",
  "Non-deluxe",
  "Economic",
];

const AddNewHotel = () => {
  const [newHotel, setNewHotel] = useState(defaultNewHotel);
  const navigate = useNavigate();

  const [showContactInfoTabs, setShowContactInfoTabs] = useState({
    call: true,
    whatsapp: false,
    email: false,
    website: false,
  });
  const [showSocialMediaTabs, setShowSocialMediaTabs] = useState({
    facebook: true,
    instagram: false,
    twitter: false,
    linkedin: false,
  });
  
  useEffect(()=>{
    console.log(newHotel)
  },[])

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

  const handleAddHighlightField = (e) => {
setNewHotel({ ...newHotel, highlights: [...newHotel.highlights, ""] });
  }

  const handleAddHotel = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const addedHotel = await addHotel(newHotel);
      if (addedHotel) {
        console.log(addedHotel);
        alert("Added Successfully")
        navigate(-1)
        //setHotels([...hotels, addedHotel.data]);
        setNewHotel(defaultNewHotel);
      }
    } catch (error) {
      console.error("Error adding hotel:", error);
    }
  };

  const handleDeleteHotel = async (id) => {
    try {
      await deleteHotel(id);
      setHotels(hotels.filter((hotel) => hotel._id !== id));
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  const handleContactInfoChange = (e) => {

    const updatedContactInfo = newHotel.contactinfo.map(contact => contact.mode === e.target.name ? {mode: e.target.name, detail: e.target.value} : contact)
    setNewHotel({
      ...newHotel,
      contactinfo: updatedContactInfo,
    });
    console.log(newHotel);
  };

    const handleSocialMediaChange = (e) => {
      const updatedSocialMedia = newHotel.social_media.map((media) =>
        media.platform === e.target.name
          ? { platform: e.target.name, url: e.target.value }
          : media
      );
      setNewHotel({
        ...newHotel,
        social_media: updatedSocialMedia,
      });
      console.log(newHotel);
    };

    const handleAddSocialMedia = (e) => {
      setNewHotel({
        ...newHotel,
        socialMedia: {
          ...newHotel.socialMedia,
          [e.target.name]: e.target.value,
        },
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
            className="bg-gray-200 hover:ring-1 hover:ring-gray-400 text-gray-700 font-bold text-sm px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleAddHotel}
            className=" hover:ring-1 hover:ring-gray-400 btn-primary bg-gradient-to-r from-gray-700 to-gray-500"
          >
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

      <div id="hotelhighlightsContainer" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-800">Highlights</h2>
        {newHotel.highlights.map((point, index) => {
          return (
            <input
              key={index}
              defaultValue={point}
              className="rounded-md p-2 border mr-2"
              placeholder={`Highlight Point`}
              onChange={(e) => {
                const updatedHighlights = newHotel.highlights.map((p, i) =>
                  i === index ? e.target.value : p
                );

                setNewHotel({ ...newHotel, highlights: updatedHighlights });
                console.log(newHotel);
              }}
            />
          );
        })}

        {/* {addHighlight && <input placeholder="Highlight point" />} */}
        <button
          type="button"
          onClick={handleAddHighlightField}
          className="px-4 py-1 bg-gray-400 text-white self-start rounded-md mt-2"
        >
          +
        </button>
      </div>

      {/* Contact Info Form */}
      <div className="flex items-center gap-4 mt-8">
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
                name={newHotel.contactinfo[0].mode}
                defaultValue={newHotel.contactinfo[0].detail}
                onChange={handleContactInfoChange}
                className="p-2  w-full focus:outline-none"
                placeholder="Call"
              />

              <IoCallOutline className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.whatsapp && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name={newHotel.contactinfo[1].mode}
                defaultValue={newHotel.contactinfo[1].detail}
                onChange={handleContactInfoChange}
                className="p-2  w-full focus:outline-none"
                placeholder="WhatsApp"
              />
              <IoLogoWhatsapp className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.email && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name={newHotel.contactinfo[2].mode}
                defaultValue={newHotel.contactinfo[2].detail}
                onChange={handleContactInfoChange}
                className="p-2  w-full focus:outline-none"
                placeholder="Email"
              />
              <IoMailOutline className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showContactInfoTabs.website && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name={newHotel.contactinfo[3].mode}
                defaultValue={newHotel.contactinfo[3].detail}
                onChange={handleContactInfoChange}
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
      <div className="flex items-center gap-4 mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Social Media</h2>
      </div>
      <form className="mt-4 mb-6 flex flex-col gap-4 rounded-md overflow-hidden">
        <div className="flex gap-x-4 items-center">
          <button
            type="button"
            onClick={(e) =>
              setShowSocialMediaTabs({
                ...showSocialMediaTabs,
                facebook: !showSocialMediaTabs.facebook,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showSocialMediaTabs.facebook
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoLogoFacebook />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowSocialMediaTabs({
                ...showSocialMediaTabs,
                instagram: !showSocialMediaTabs.instagram,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showSocialMediaTabs.instagram
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoLogoInstagram />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowSocialMediaTabs({
                ...showSocialMediaTabs,
                twitter: !showSocialMediaTabs.twitter,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showSocialMediaTabs.twitter
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <FaXTwitter />
          </button>
          <button
            type="button"
            onClick={(e) =>
              setShowSocialMediaTabs({
                ...showSocialMediaTabs,
                linkedin: !showSocialMediaTabs.linkedin,
              })
            }
            className={`px-4 py-2 rounded-md bg-gradient-to-r border shadow-sm ${
              showSocialMediaTabs.linkedin
                ? "from-gray-700 to-gray-600 text-white "
                : "from-gray-100 to-white border"
            } `}
          >
            <IoLogoLinkedin />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {showSocialMediaTabs.facebook && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name={newHotel.social_media[0].platform}
                defaultValue={newHotel.social_media[0].url}
                onChange={handleSocialMediaChange}
                className="p-2  w-full focus:outline-none"
                placeholder="Facebook"
              />

              <IoLogoFacebook className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showSocialMediaTabs.instagram && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name={newHotel.social_media[1].platform}
                defaultValue={newHotel.social_media[1].url}
                onChange={handleSocialMediaChange}
                className="p-2  w-full"
                placeholder="Instagram"
              />
              <IoLogoInstagram className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showSocialMediaTabs.twitter && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name={newHotel.social_media[2].platform}
                defaultValue={newHotel.social_media[2].url}
                onChange={handleSocialMediaChange}
                className="p-2  w-full focus:outline-none"
                placeholder="Twiiter/X"
              />
              <FaXTwitter className="text-lg text-gray-400 mr-4" />
            </div>
          )}
          {showSocialMediaTabs.linkedin && (
            <div className="border rounded-md w-full flex items-center">
              <input
                name={newHotel.social_media[3].platform}
                defaultValue={newHotel.social_media[3].url}
                onChange={handleSocialMediaChange}
                className="p-2  w-full focus:outline-none"
                placeholder="LinkedIn"
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
