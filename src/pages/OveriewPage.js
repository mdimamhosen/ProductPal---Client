import React, { useState, useEffect } from "react";
import axios from "axios";

const OverviewPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("/api/user/overview", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <header className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">MFS Application</h1>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center text-center mt-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Overview</h2>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <p className="text-lg font-medium text-gray-700">Name: {user.name}</p>
          <p className="text-lg font-medium text-gray-700">
            Email: {user.email}
          </p>
          <p className="text-lg font-medium text-gray-700">
            Phone Number: {user.phoneNumber}
          </p>
          <p className="text-lg font-medium text-gray-700">
            Account Balance: {user.balance} Taka
          </p>
        </div>
      </main>
      <footer className="w-full bg-white shadow p-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 MFS Application. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default OverviewPage;
