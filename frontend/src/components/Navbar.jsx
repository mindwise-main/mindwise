import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import UserNavigationPanel from "./user-navigation.component";
import { UserContext } from "../App";

function Navbar() {
  // const [searchBoxVisibility, setSearchBoxVisiblity] = useState(false);
  const [userNavPanel, setUserNavPanel] = useState(false);

  const {
    userAuth: { access_token, profile_img },
  } = useContext(UserContext);

  const handleUserNavPanel = () => {
    setUserNavPanel((currentVal) => !currentVal);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setUserNavPanel(false);
    }, 200);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-teal-600 text-white px-6 py-4 shadow-md">
        {/* Logo */}
        <div className="flex items-center px-8 space-x-1.5">
          <img
            src="/assets/png/logo.png" // Replace with the actual logo path
            alt="MindWise Logo"
            className="w-13 h-11"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-mono leading-none">Mind</h1>
            <h1 className="text-xl font-mono leading-none">Wise</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-16">
          <Link
            to="/"
            className="hover:underline hover:text-teal-200 transition duration-300 text-xl"
          >
            Home
          </Link>
          <Link
            to="/consultation"
            className="hover:underline hover:text-teal-200 transition duration-300 text-xl"
          >
            Consultation
          </Link>
          <Link
            to="/survey"
            className="hover:underline hover:text-teal-200 transition duration-300 text-xl"
          >
            Survey Modules
          </Link>
          <Link
            to="/chatbot"
            className="hover:underline hover:text-teal-200 transition duration-300 text-xl"
          >
            Chatbot
          </Link>
          <Link to="/explore" className="hover:underline hover:text-teal-200 transition duration-300 text-xl">
            Explore
          </Link>
        </div>

        {/* Sign Up/Login Buttons */}
        <div className="flex space-x-4">
          {/* <Link
            to="/signup"
            className="hidden md:inline-block px-4 py-2 bg-grey text-black font-semibold rounded-lg shadow hover:bg-dark-grey transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="hidden md:inline-block px-4 py-2 bg-dark-grey text-white font-semibold rounded-lg hover:bg-black transition duration-300"
          >
            Login
          </Link> */}

          {/* Mobile Menu Icon */}
          <button className="block md:hidden">
            <span className="material-icons text-white">
              <i className="fi fi-rr-menu-burger text-xl"></i>
            </span>
          </button>
        </div>

        {access_token ? (
          <>
            <Link to="/dashboard/notification">
              <button className="w-12 h-12 rounded-full bg-teal-700 relative hover:bg-black/10 ">
                <i className="fi fi-rr-bell text-2xl block mt-2"></i>
              </button>
            </Link>

            <div
              className="relative"
              onClick={handleUserNavPanel}
              onBlur={handleBlur}
            >
              <button className="w-12 h-12 mt-1">
                <img
                  src={profile_img}
                  className="w-full h-full object-cover rounded-full"
                  alt="no profile"
                />
              </button>

              {userNavPanel ? <UserNavigationPanel /> : ""}
            </div>
          </>
        ) : (
          <>
            <Link
              className="btn-dark bg-white text-teal-600 font-medium py-2"
              to="/signup"
            >
              Sign Up
            </Link>
            <Link
              className="btn-dark bg-teal-700 text-white py-2 hidden md:block"
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
