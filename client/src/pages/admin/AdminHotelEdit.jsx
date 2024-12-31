import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelById, updateHotel } from "../../api/hotel";


import { IoCallOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";


const defaultHotel = {
  name: "",
  location: "",
  coordinates: "",
  description: "",
  highlights: [],
  contactinfo: [{ call: "", whatsapp: "", email: "", website: "" }],
  socialMedia: [{ facebook: "", instagram: "", twitter: "", linkedin: "" }],
  roomTypes: [],
};

const AdminHotelEdit = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(defaultHotel);
  const [loading, setLoading] = useState(false);

    const [showContactInfoTabs, setShowContactInfoTabs] = useState({
      call: true,
      whatsapp: false,
      email: false,
      website: false,
    });

  useEffect(() => {
    setLoading(true);
    const fetchHotelDetails = async (hotelId) => {
      try {
        const response = await getHotelById(hotelId);
        if (response) {
          console.log(typeof [1, 2, 2, 3]);
          console.log("Hotel", response);
          console.log(response.highlights.map(point => point+"x"))
          setLoading(false);
          setHotel({ ...response });
        }
      } catch (error) {}
    };

    fetchHotelDetails(hotelId);
  }, []);

  useEffect(() => {
    console.log(hotelId);
  }, []);
  const handleAddHighlightField = () => {
    setHotel({ ...hotel, highlights: [...hotel.highlights, ""] });
  };
    const handleContactInfoChange = (e) => {
      const updatedContactInfo = hotel.contactinfo.map((contact) =>
        contact.mode === e.target.name
          ? { mode: e.target.name, detail: e.target.value }
          : contact
      );
      setHotel({
        ...hotel,
        contactinfo: updatedContactInfo,
      });
      console.log(hotel);
    };

  const handleUpdateHotel = async (e) => {
    e.preventDefault();
    //console.log(hotel)
    const response = await updateHotel(hotel);
    if (response.response) {
      alert(response.message);
      navigate(-1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (hotel) {
    return (
      <div>
        <div className="flex w-full justify-between items-center ">
          <h2 className="text-3xl font-semibold text-gray-800">Edit Hotel</h2>

          <div className="flex gap-2">
            <button
              onClick={() => setShowAddNew(false)}
              className="bg-gray-200 hover:ring-1 hover:ring-gray-400 text-gray-700 font-bold text-sm px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateHotel}
              className=" hover:ring-1 hover:ring-gray-400 btn-primary bg-gradient-to-r from-gray-700 to-gray-500"
            >
              Save
            </button>
          </div>
        </div>
        <form className="mt-4 mb-6 flex flex-col gap-4 rounded-md overflow-hidden">
          <h2 className="text-xl font-semibold text-gray-800">Details</h2>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="hotelName"
              className="font-semibold text-sm text-gray-800"
            >
              Name
            </label>
            <input
              id="hotelName"
              type="text"
              placeholder="Name"
              value={hotel.name}
              onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
              className="rounded-md p-2 border mr-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-sm text-gray-800"
              htmlFor="hotelLocation"
            >
              Location
            </label>

            <input
              id="hotelLocation"
              type="text"
              placeholder="Location"
              value={hotel.location}
              onChange={(e) => setHotel({ ...hotel, location: e.target.value })}
              className="flex-1 rounded-md  p-2 border mr-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2 ">
            <label
              className="font-semibold text-sm text-gray-800"
              htmlFor="hotelLocation"
            >
              Coordinates
            </label>
            <div className="w-full flex gap-2 items-center">
              <input
                type="text"
                placeholder="Latitude"
                value={hotel.coordinates?.latitude || ""}
                onChange={(e) =>
                  setHotel({
                    ...hotel,
                    coordinates: {
                      ...hotel.coordinates,
                      latitude: e.target.value,
                    },
                  })
                }
                className="p-2 border mr-2 flex-1 rounded-md"
              />

              <input
                type="text"
                placeholder="Longitude"
                value={hotel.coordinates?.longitude || ""}
                onChange={(e) =>
                  setHotel({
                    ...hotel,
                    coordinates: {
                      ...hotel.coordinates,
                      longitude: e.target.value,
                    },
                  })
                }
                className="p-2 border mr-2 flex-1 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-sm text-gray-800"
              htmlFor="hotelDescription"
            >
              Description
            </label>
            <input
              id="hotelDescription"
              type="text"
              placeholder="Description"
              value={hotel.description}
              onChange={(e) =>
                setHotel({ ...hotel, description: e.target.value })
              }
              className="rounded-md p-2 border mr-2"
            />
          </div>
          <div>
            <label
              className="font-semibold text-sm text-gray-800"
              htmlFor="highlights"
            >
              Highlights
            </label>
            <div id="hotelhighlightsContainer" className="flex flex-col gap-2">
              {hotel &&
                hotel.highlights.map((point, index) => {
                  return (
                    <input
                      key={index}
                      className="rounded-md p-2 border mr-2"
                      placeholder={`Highlight Point ${index + 1}`}
                      // onChange={(e) =>
                      //   setHotel({
                      //     ...hotel,
                      //     highlights: hotel.highlights.map((point, pointIndex) =>
                      //       pointIndex == index ?  e.target.value : point
                      //     ),
                      //   })
                      // }
                      onChange={(e) => {
                        const updatedHighlights = hotel.highlights.map((p, i) =>
                          i === index ? e.target.value : p
                        );
                        setHotel({ ...hotel, highlights: updatedHighlights });
                      }}
                      defaultValue={point}
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
          </div>
        </form>
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
                showContactInfoTabs.call || hotel.contactinfo[0].detail
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
                showContactInfoTabs.whatsapp || hotel.contactinfo[1]?.detail
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
                showContactInfoTabs.email || hotel.contactinfo[2]?.detail
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
                showContactInfoTabs.website || hotel.contactinfo[3]?.detail
                  ? "from-gray-700 to-gray-600 text-white "
                  : "from-gray-100 to-white border"
              } `}
            >
              <IoEarth />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(showContactInfoTabs.call || hotel.contactinfo[0]?.detail) && (
              <div className="border rounded-md w-full flex items-center">
                <input
                  name={hotel.contactinfo[0].mode}
                  defaultValue={hotel.contactinfo[0].detail}
                  onChange={handleContactInfoChange}
                  className="p-2  w-full focus:outline-none"
                  placeholder="Call"
                />

                <IoCallOutline className="text-lg text-gray-400 mr-4" />
              </div>
            )}
            {(showContactInfoTabs.whatsapp || hotel.contactinfo[1]?.detail) && (
              <div className="border rounded-md w-full flex items-center">
                <input
                  name={hotel.contactinfo[1].mode}
                  defaultValue={hotel.contactinfo[1].detail}
                  onChange={handleContactInfoChange}
                  className="p-2  w-full focus:outline-none"
                  placeholder="WhatsApp"
                />
                <IoLogoWhatsapp className="text-lg text-gray-400 mr-4" />
              </div>
            )}
            {(showContactInfoTabs.email || hotel.contactinfo[2]?.detail) && (
              <div className="border rounded-md w-full flex items-center">
                <input
                  name={hotel.contactinfo[2].mode}
                  defaultValue={hotel.contactinfo[2].detail}
                  onChange={handleContactInfoChange}
                  className="p-2  w-full focus:outline-none"
                  placeholder="Email"
                />
                <IoMailOutline className="text-lg text-gray-400 mr-4" />
              </div>
            )}
            {(showContactInfoTabs.website || hotel.contactinfo[3]?.detail) && (
              <div className="border rounded-md w-full flex items-center">
                <input
                  name={hotel.contactinfo[3].mode}
                  defaultValue={hotel.contactinfo[3].detail}
                  onChange={handleContactInfoChange}
                  className="p-2  w-full"
                  placeholder="Website"
                />
                <IoEarth className="text-lg text-gray-400 mr-4" />
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
};

export default AdminHotelEdit;
