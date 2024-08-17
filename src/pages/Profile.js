import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../ContextProvider/AppContext";

const ProfilePage = () => {
  const { user, updateUserData, loading } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(
    user?.reloadUserInfo.displayName || ""
  );
  const [photoUrl, setPhotoUrl] = useState(user?.reloadUserInfo.photoUrl || "");

  if (!user || loading) {
    return (
      <div className="h-[60vh] font-bold text-richblack-5 text-3xl flex  justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const trimmedDisplayName = displayName.trim();
    const trimmedPhotoUrl = photoUrl.trim();

    if (
      typeof trimmedDisplayName === "string" &&
      typeof trimmedPhotoUrl === "string"
    ) {
      try {
        await updateUserData({
          displayName: trimmedDisplayName,
          photoUrl: trimmedPhotoUrl,
        });
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    } else {
      console.error("Invalid data types for displayName or photoUrl");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src={photoUrl}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          {isEditing ? (
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="text-xl font-semibold text-gray-800 border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          ) : (
            displayName
          )}
        </h2>
        <p className="text-center text-gray-600 mb-4">
          {user.reloadUserInfo.email}
        </p>
        {isEditing ? (
          <div className="text-center mb-4">
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="Photo URL"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={handleSaveClick}
                className="bg-yellow-50 text-black     font-semibold px-4 py-2 rounded-lg hover:bg-yellow-200"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 bg-blue-800 hover:bg-blue-900 text-white px-4  py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={handleEditClick}
              className="text-blue-500 hover:underline"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
