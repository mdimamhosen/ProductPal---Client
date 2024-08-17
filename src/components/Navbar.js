import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./../ContextProvider/AppContext";
import { toast } from "react-toastify";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const { user, logout, loading } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
    toast.success("Logged out successfully!");
  };
  console.log(user);
  return (
    <nav className="bg-gray-900 bg-[#161D29] text-richblack-5">
      <div className="w-11/12 mx-auto lg:px-8">
        <div className="relative flex items-center justify-between font-semibold py-7 md:py-4">
          <div className="absolute w-full justify-between inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
            <h1 className="text-right   md:hidden w-11/12 text-3xl mx-auto">
              <Link to="/">ProductPal</Link>
            </h1>
          </div>
          <div className="w-full flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="text-richblack-5 hidden sm:flex text-2xl lg:text-3xl xl:text-4xl font-bold"
              >
                ProductPal
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex text-richblack-50 space-x-3 lg:space-x-4">
                <Link
                  to="/products"
                  className="text-gray-300 bg-gray-800 transition-all ease-linear duration-300 border-gray-700 hover:bg-gray-900 hover:text-richblack-5 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 bg-gray-800 transition-all ease-linear duration-300 border-gray-700 hover:bg-gray-900 hover:text-richblack-5 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 bg-gray-800 transition-all ease-linear duration-300 border-gray-700 hover:bg-gray-900 hover:text-richblack-5 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {user && !loading ? (
                <div className="flex justify-center items-center flex-row-reverse gap-2">
                  <button
                    onClick={handleLogout}
                    className="bg-gray-800 transition-all ease-linear duration-300 hidden sm:flex text-gray-300 border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                  {/* <div className="relative border group border-pure-greys-300 h-10 w-10 p-[2px] rounded-full">
                    <div
                      className="hover:border group hover:border-pure-greys-200 transition-all duration-300 ease-linear h-full w-full rounded-full cursor-pointer"
                      onClick={toggleDropdown}
                    >
                      <img
                        src={user?.reloadUserInfo?.photoUrl}
                        alt="User"
                        className="w-full h-full object-cover rounded-full"
                        title={user?.reloadUserInfo?.displayName}
                      />
                    </div>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48  bg-richblack-700 p-3  shadow-lg rounded-lg z-50">
                        <ul className="py-1  space-y-2">
                          <li className="p-1 border-[1px] border-richblack-500 rounded-md">
                            <Link
                              to="/cart"
                              className="flex items-center px-4 py-1   text-richblack-5 transition-all duration-300 ease-linear "
                            >
                              Cart
                            </Link>
                          </li>
                          <li className="p-1 border-[1px] border-richblack-500 rounded-md">
                            {" "}
                            <Link
                              to="/profile"
                              className="flex items-center px-4 py-1  text-richblack-5 transition-all duration-300 ease-linear "
                            >
                              Profile
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div> */}
                </div>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-richblack-5 sm:hidden flex text-2xl lg:text-3xl xl:text-4xl font-bold"
                  >
                    ProductPal
                  </Link>
                  <div className="hidden sm:flex">
                    <Link
                      to="/login"
                      className="bg-gray-800 transition-all ease-linear duration-300 text-gray-300 border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="ml-4 bg-gray-800 transition-all ease-linear duration-300 text-gray-300 border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Register
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden px-4 transition-all ease-linear duration-300`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/products"
            className="text-gray-300 bg-gray-700 transition-all ease-linear duration-300 w-full text-center border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-gray-300 bg-gray-700 transition-all ease-linear duration-300 w-full text-center border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 bg-gray-700 transition-all ease-linear duration-300 w-full text-center border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          {user && !loading ? (
            <button
              onClick={handleLogout}
              className="text-gray-300 bg-gray-700 transition-all ease-linear duration-300 w-full text-center border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-300 bg-gray-700 transition-all ease-linear duration-300 w-full text-center border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-300 bg-gray-700 transition-all ease-linear duration-300 w-full text-center border border-richblack-200 hover:bg-richblack-800 hover:text-richblack-5 block px-3 py-2 rounded-md text-base font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
