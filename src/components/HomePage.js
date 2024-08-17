import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">MFS Application</h1>
          <nav>
            <Link
              to="/overview"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 mx-2"
            >
              Overview
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 mx-2"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 mx-2"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to the MFS Application
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Secure and efficient mobile financial services at your fingertips.
        </p>
        <Link
          to="/login"
          className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6 py-3 rounded-md"
        >
          Get Started
        </Link>
      </main>
      <footer className="w-full bg-white shadow p-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 MFS Application. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
