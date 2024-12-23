import React from "react";
import Flower from "./../../assets/dashboard/icons/flower.svg";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-full h-full rounded-md py-4 px-4">
      <div className="bg-indigo-950 w-full h-full rounded-lg shadow-md">
        <ul className="flex flex-col pt-8">
          <Link to="/admin">
            <li className="px-8 py-4 text-gray-100 hover:bg-indigo-800 flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Home
            </li>
          </Link>
          <Link to="admin/hotels">
            <li className="px-8 py-4 text-gray-100 hover:bg-indigo-800 flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Hotels
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-100 hover:bg-indigo-800 flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Users
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-100 hover:bg-indigo-800 flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Bookings
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-100 hover:bg-indigo-800 flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Transactions
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-100 hover:bg-indigo-800 flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Enquiries
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-100 hover:bg-indigo-800 flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Packages
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-100 hover:bg-indigo-800 flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Offers
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
