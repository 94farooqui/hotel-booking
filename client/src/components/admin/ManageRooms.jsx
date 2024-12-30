import { useState, useEffect } from "react";
import { getRoomsByHotel, addRoom, deleteRoom } from "../../api/booking";

const ManageRooms = () => {
  const [hotelId, setHotelId] = useState("");
  const [rooms, setRooms] = useState([]);
  const [addNewRoom, setAddNewRoom] = useState(false);
  const [newRoom, setNewRoom] = useState({
    roomType: "",
    price: "",
    features: "",
  });

  useEffect(() => {
    if (hotelId) {
      const fetchRooms = async () => {
        try {
          const data = await getRoomsByHotel(hotelId);
          setRooms(data);
        } catch (error) {
          console.error("Error fetching rooms:", error);
        }
      };

      fetchRooms();
    }
  }, [hotelId]);

  const handleAddRoom = async () => {
    try {
      const room = await addRoom({ ...newRoom, hotelId });
      setRooms([...rooms, room]);
      setNewRoom({ roomType: "", price: "", features: "" });
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

  const handleDeleteRoom = async (id) => {
    try {
      await deleteRoom(id);
      setRooms(rooms.filter((room) => room._id !== id));
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center border-b">
        <h3 className="text-2xl font-bold mt-6">Manage Rooms</h3>
        <button
          onClick={() => setAddNewRoom(true)}
          className="bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-md"
        >
          Add New
        </button>
      </div>
      {/* 
      <div className="flex w-full justify-between items-center ">
        <h3 className="text-2xl font-bold mt-6">Room Types</h3>
        <button className="bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-md">
          Add New
        </button>
      </div> */}

      {addNewRoom && (
        <form className="my-6 grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Hotel ID"
            value={hotelId}
            onChange={(e) => setHotelId(e.target.value)}
            className="col-span-2 p-2 border block"
          />

          <input
            type="text"
            placeholder="Room Type"
            value={newRoom.roomType}
            onChange={(e) =>
              setNewRoom({ ...newRoom, roomType: e.target.value })
            }
            className="p-2 border mr-2"
          />
          <input
            type="text"
            placeholder="Price"
            value={newRoom.price}
            onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
            className="p-2 border mr-2"
          />

          <input
            type="text"
            placeholder="Features (comma-separated)"
            value={newRoom.features}
            onChange={(e) =>
              setNewRoom({ ...newRoom, features: e.target.value })
            }
            className="col-span-2 p-2 border mr-2"
          />
          <button
            onClick={() => setAddNewRoom(false)}
            className=" btn-primary  px-4 py-2"
          >
            Cancel
          </button>
          <button onClick={handleAddRoom} className=" btn-secondary  px-4 py-2">
            Save
          </button>
        </form>
      )}
      <ul>
        {rooms.map((room) => (
          <li key={room._id} className="border p-2 mb-2 flex justify-between">
            <div>
              <p className="font-bold">{room.roomType}</p>
              <p>Price: ${room.price}</p>
            </div>
            <button
              onClick={() => handleDeleteRoom(room._id)}
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

export default ManageRooms;
