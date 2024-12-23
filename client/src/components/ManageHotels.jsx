import { useState, useEffect } from "react";
import { getHotels, addHotel, deleteHotel } from "./../api/hotel";

const ManageHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddNew, setShowAddNew] = useState(false);
  const [newHotel, setNewHotel] = useState({
    name: "",
    location: "",
    coordinates: "",
    description: "",
  });

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

  const handleAddHotel = async (e) => {
    e.preventDefault()
    try {
      const addedHotel = await addHotel(newHotel);
      if (addHotel) {
        setHotels([...hotels, addedHotel]);
        setNewHotel({
          name: "",
          location: "",
          description: "",
          coordinates: "",
        });
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

  // const filteredHotels = hotels.filter((hotel) =>
  //   hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="w-full">
      <div className="flex w-fill justify-between items-center bg-indigo-400 p-4 rounded-md">
        <h2 className="text-2xl font-bold text-white">Manage Hotels</h2>
        <button
          onClick={() => setShowAddNew(true)}
          className="bg-white rounded-md text-indigo-500  px-2 py-1 font-semibold"
        >
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

      {showAddNew && (
        <form
          onSubmit={handleAddHotel}
          className="mt-4 mb-6 flex flex-col gap-4"
        >
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
          <div className="w-full flex gap-2">
            <button
              onClick={() => setShowAddNew(false)}
              className="flex-1 btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="flex-1 btn-primary">
              Save
            </button>
          </div>
        </form>
      )}
      <ul>
        {filteredHotels.map((hotel) => (
          <li key={hotel._id} className="border p-2 mb-2 flex justify-between">
            <div>
              <p className="font-bold">{hotel.name}</p>
              <p>{hotel.location}</p>
            </div>
            <button
              onClick={() => handleDeleteHotel(hotel._id)}
              className="bg-red-600 text-white px-4 py-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageHotels;
