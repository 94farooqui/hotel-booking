import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminHotelDetails from "./pages/admin/AdminHotelDetails";
import AdminRootLayout from "./layouts/AdminRootLayout";
import AdminHotels from "./pages/admin/AdminHotels";
import PrivateRoute from "./components/shared/PrivateRoute";
import AddNewHotel from "./pages/admin/AddNewHotel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route
          path="/booking"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route element={<AdminRootLayout />}>
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/admin/hotels" element={<AdminHotels />} />
          <Route
            path="/admin/hotels/:hotelId"
            element={<AdminHotelDetails />}
          />
          <Route path="/admin/hotels/new" element={<AddNewHotel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
