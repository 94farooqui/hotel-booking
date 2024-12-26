import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminRootLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="flex relative">
        <div className="h-screen w-[300px] overflow-hidden overflow-x-hidden sticky top-0 left-0 pt-16">
          <AdminSidebar />
        </div>
        <div className="overflow-y-auto py-24 px-8 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminRootLayout;
