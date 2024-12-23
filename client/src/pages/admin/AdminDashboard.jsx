import { useContext } from "react";

import AuthContext from "../../context/AuthContext";
import ManageHotels from "../../components/admin/ManageHotels";
import ManageRooms from "../../components/admin/ManageRooms";

import Navbar from "../../components/shared/Navbar";
import ViewBookings from "../../components/admin/ViewBookings";

const AdminDashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user?.role !== "admin") {
    return <div className="container mx-auto my-10">Access Denied</div>;
  }

  return (
    <div>
      <div className="container mx-auto my-8 w-[1000px] max-w-[1000px] ">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="w-full space-y-10">
          <ManageHotels />
          <ManageRooms />
          <ViewBookings />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
