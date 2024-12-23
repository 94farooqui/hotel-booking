import { useState, useEffect } from 'react';
import { getBookings } from './../api/booking';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  if(bookings.length <1){
    return <p>No bookings</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">View Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id} className="border p-2 mb-2">
            <p>User: {booking.userId}</p>
            <p>Room: {booking.roomId}</p>
            <p>Check-In: {booking.checkInDate}</p>
            <p>Check-Out: {booking.checkOutDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBookings;
