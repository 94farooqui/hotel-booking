import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-screen bg-gray-300">
      <div className="w-[1200px] mx-auto py-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-gray-900">
                <span className="text-indigo-500">Hoteling</span>.com
              </span>
            </Link>
            <Link className="text-sm">Home</Link>
            <Link className="text-sm">About</Link>
            <Link className="text-sm">Jobs</Link>
            <Link className="text-sm">List your property</Link>
            <Link className="text-sm">Feedback</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Policies</p>
            <Link className="text-sm">Privacy</Link>
            <Link className="text-sm">Cookies</Link>
            <Link className="text-sm">Terms of Service</Link>
            <Link className="text-sm">Content guidelines</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Address</p>
            <Link className="text-sm">Privacy</Link>
            <Link className="text-sm">Cookies</Link>
            <Link className="text-sm">Terms of Service</Link>
            <Link className="text-sm">Content guidelines</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
