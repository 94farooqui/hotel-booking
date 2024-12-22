import { useContext } from 'react';
import Navbar from '../components/Navbar';
import AuthContext from '../context/AuthContext';
import ManageHotels from '../components/ManageHotels';
import ManageRooms from '../components/ManageRooms';
import ViewBookings from '../components/ViewBookings';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  if (user?.role !== 'admin') {
    return <div className="container mx-auto my-10">Access Denied</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="space-y-10">
          <ManageHotels />
          <ManageRooms />
          <ViewBookings />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
