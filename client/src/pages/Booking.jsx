import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const room = location.state?.room;
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });

  const handleBooking = () => {
    console.log("Booking made for room:", room, "with dates:", dates);
    // Call booking API here
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-6">Booking</h1>
        {room ? (
          <div className="p-4 border rounded-md">
            <h2 className="text-xl font-bold">{room.roomType}</h2>
            <p>Price: ${room.price}</p>
            <input
              type="date"
              value={dates.checkIn}
              onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
              className="w-full mb-4 p-2 border"
            />
            <input
              type="date"
              value={dates.checkOut}
              onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
              className="w-full mb-4 p-2 border"
            />
            <button
              onClick={handleBooking}
              className="bg-blue-600 text-white px-4 py-2"
            >
              Confirm Booking
            </button>
          </div>
        ) : (
          <p>No room selected.</p>
        )}
      </div>
    </div>
  );
};

export default Booking;
