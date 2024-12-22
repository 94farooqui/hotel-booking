import { useState, useEffect } from 'react';
import { getHotels, addHotel, deleteHotel } from './../api/hotel';

const ManageHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newHotel, setNewHotel] = useState({ name: '', location: '', description: '' });

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  const handleAddHotel = async () => {
    try {
      const addedHotel = await addHotel(newHotel);
      setHotels([...hotels, addedHotel]);
      setNewHotel({ name: '', location: '', description: '' });
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  const handleDeleteHotel = async (id) => {
    try {
      await deleteHotel(id);
      setHotels(hotels.filter((hotel) => hotel._id !== id));
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Hotels</h2>
      <input
        type="text"
        placeholder="Search hotels by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border mb-4 block"
      />
      <div className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newHotel.name}
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
          className="p-2 border mr-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={newHotel.location}
          onChange={(e) => setNewHotel({ ...newHotel, location: e.target.value })}
          className="p-2 border mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newHotel.description}
          onChange={(e) => setNewHotel({ ...newHotel, description: e.target.value })}
          className="p-2 border mr-2"
        />
        <button onClick={handleAddHotel} className="bg-blue-600 text-white px-4 py-2">
          Add Hotel
        </button>
      </div>
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
