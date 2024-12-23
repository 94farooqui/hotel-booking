import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { FaGlobe } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef();
  const [showCurrencyCountryModal, setShowCurrencyCountryModal] = useState();
  const [language, setLangugae] = useState("EN");
  const [currency, setCurrency] = useState("AED");

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target))
      setShowUserMenu(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  return (
    <div className="w-screen border-b">
      <nav className="w-[1000px] max-w-[1000px] mx-auto">
        <div className="container w-full flex justify-between items-center ">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-gray-900">
              <span className="text-indigo-500">Hoteling</span>.com
            </span>
          </Link>
          <div className="space-x-8 flex py-4 text-gray-700">
            <Link to="/profile/favorites" className="flex items-center gap-2">
              <FaRegHeart className="text-xl" />
              Favorites
            </Link>
            <button
              onClick={() => setShowCurrencyCountryModal(true)}
              className="flex items-center gap-2"
            >
              <FaGlobe className="text-xl" />
              {language}.{currency}
            </button>
            {user ? (
              <>
                <span>Welcome, {user.role}</span>
                <button onClick={() => logout()} className="hover:underline">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:underline flex items-center gap-2"
                >
                  <FaRegUserCircle className="text-xl" />
                  Login
                </Link>
              </>
            )}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(true)}
                className="flex  items-center gap-2"
              >
                <IoMenu className="text-xl" /> Menu
              </button>
              {showUserMenu && (
                <div
                  ref={menuRef}
                  className="absolute top-8 z-30 bg-white rounded-md border"
                >
                  <ul className="w-24">
                    <li className="p-2">
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/admin">Admin</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {showCurrencyCountryModal && (
        <div className="absolute top-0 left-0 z-20 bg-gray-800 bg-opacity-70 w-screen h-screen flex justify-center items-center">
          <div className="w-[400px] p-6 bg-white rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold ">Select language and currency</p>
              <button
                className="font-semibold"
                onClick={() => setShowCurrencyCountryModal(false)}
              >
                <IoClose />
              </button>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600">
                  Language
                </label>
                <select className="p-2 rounded-md">
                  <option value="EN">English</option>
                  <option value="IT">Italiano</option>
                  <option value="DA">Dansk</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600">
                  Currency
                </label>
                <select className="p-2 rounded-md">
                  <option value="AED">AED - Emirati Dirham</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="INR">INR - Indian Rupee</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
