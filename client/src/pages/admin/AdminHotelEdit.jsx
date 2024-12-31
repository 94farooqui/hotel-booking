import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelById, updateHotel } from "../../api/hotel";

const AdminHotelEdit = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate()
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addHighlight,setAddHighlight] = useState(false)

  useEffect(() => {
    setLoading(true);
    const fetchHotelDetails = async (hotelId) => {
      try {
        const response = await getHotelById(hotelId);
        if (response) {
          setLoading(false);
          setHotel({...response, highlights:""});
        }
      } catch (error) {}
    };

    fetchHotelDetails(hotelId);
  }, []);

  useEffect(() => {
    console.log(hotelId);
  }, []);
  const handleAddHighlightField = () => {
    setHotel({...hotel, highlights: [...hotel.highlights, ""]})
  }

  const handleUpdateHotel = async (e) => {
    e.preventDefault();
    //console.log(hotel)
    const response = await updateHotel(hotel)
    if(response.response){
      alert(response.message)
      navigate(-1)
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
        <form
          
          className="mt-4 mb-6 flex flex-col gap-4 rounded-md overflow-hidden"
        >
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
              {hotel.highlights &&
              
                  hotel.highlights.map((point,index) => <input key={index} className="rounded-md p-2 border mr-2" placeholder={`Highlight Point ${index+1}`} onChange={(e)=>setHotel({...hotel, highlights: hotel.highlights.map((point,pointIndex) => pointIndex == index ? point = e.target.value : point)})} defaultValue={point} />)}
                {/* {addHighlight && <input placeholder="Highlight point" />} */}
                <button type="button" onClick={handleAddHighlightField} className="px-4 py-1 bg-gray-400 text-white self-start rounded-md mt-2">+</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default AdminHotelEdit;
