import React from "react";
import Flower from "./../../assets/dashboard/icons/flower.svg";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-full h-full rounded-md py-4 px-4">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-200 w-full h-full rounded-[10px]">
        <ul className="flex flex-col pt-8 text-sm">
          <Link to="/admin">
            <li className="px-8 py-4 text-gray-200 hover:bg-gray-600 hover:text-white flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Home
            </li>
          </Link>
          <Link to="admin/hotels">
            <li className="px-8 py-4 text-gray-200 hover:bg-gray-600 hover:text-white flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Hotels
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-200 hover:bg-gray-600 hover:text-white flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Users
            </li>
          </Link>
          <Link to="/admin/bookings">
            <li className="px-8 py-4 text-gray-200 hover:bg-gray-600 hover:text-white flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Bookings
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-200 hover:bg-gray-600 hover:text-white flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Transactions
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-200 hover:bg-gray-600 hover:text-white flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Enquiries
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-200 hover:bg-gray-600 hover:text-white flex items-center gap-2">
              <img src={Flower} className="w-6 opacity-50" />
              Packages
            </li>
          </Link>
          <Link to="">
            <li className="px-8 py-4 text-gray-200 hover:bg-gray-600 hover:text-white flex items-center gap-2">
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
