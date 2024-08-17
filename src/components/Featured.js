import React from "react";
import {
  FaTshirt,
  FaLaptop,
  FaCouch,
  FaShoePrints,
  FaHeart,
} from "react-icons/fa";

const FeaturedCategories = () => {
  return (
    <div className="w-11/12 mx-auto py-5 mt-4">
      <p className="text-center text-4xl font-bold tracking-normal animate__backInLeft animate__heartBeat text-richblack-5">
        Featured Product Categories
      </p>
      <p className="text-lg pt-2 text-center text-richblack-100 animate__heartBeat">
        Explore Our Top Categories.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6 w-11/12 mx-auto">
        <div className="flex flex-col py-2 shadow-md rounded-lg hover:scale-105 transition-all ease-linear duration-300 cursor-pointer  bg-richblack-5    hover:bg-richblack-25">
          <p className="text-4xl   flex justify-center items-center text-center mt-4 mb-3 text-richblue-900">
            <FaTshirt />
          </p>
          <span className="text-lg font-semibold text-center block text-richblack-800">
            Clothing
          </span>
          <span className="text-richblack-500 text-center block">
            150 Products
          </span>
        </div>
        <div className="flex flex-col py-2 shadow-md rounded-lg hover:scale-105 transition-all ease-linear duration-300 cursor-pointer  bg-richblack-5    hover:bg-richblack-2525">
          <p className="text-4xl text-center  flex justify-center items-center  mt-4 mb-3 text-caribbeangreen-900">
            <FaLaptop />
          </p>
          <span className="text-lg font-semibold text-center block text-richblack-800">
            Electronics
          </span>
          <span className="text-richblack-500 text-center block">
            80 Products
          </span>
        </div>
        <div className="flex flex-col py-2 shadow-md rounded-lg hover:scale-105 transition-all ease-linear duration-300 cursor-pointer  bg-richblack-5    hover:bg-richblack-25">
          <p className="text-4xl  flex justify-center items-center  text-center mt-4 mb-3 text-brown-900">
            <FaCouch />
          </p>
          <span className="text-lg font-semibold text-center block text-richblack-800">
            Furniture
          </span>
          <span className="text-richblack-500 text-center block">
            120 Products
          </span>
        </div>
        <div className="flex flex-col py-2 shadow-md rounded-lg hover:scale-105 transition-all ease-linear duration-300 cursor-pointer  bg-richblack-5    hover:bg-richblack-25">
          <p className="text-4xl  flex justify-center items-center  text-center mt-4 mb-3 text-pink-900">
            <FaShoePrints />
          </p>
          <span className="text-lg font-semibold text-center block text-richblack-800">
            Footwear
          </span>
          <span className="text-richblack-500 text-center block">
            90 Products
          </span>
        </div>
        <div className="flex flex-col py-2 shadow-md rounded-lg hover:scale-105 transition-all ease-linear duration-300 cursor-pointer bg-richblack-5    hover:bg-richblack-25">
          <p className="text-4xl  flex justify-center items-center  text-center mt-4 mb-3 text-yellow-900">
            <FaHeart />
          </p>
          <span className="text-lg font-semibold text-center block text-richblack-800">
            Accessories
          </span>
          <span className="text-richblack-500 text-center block">
            60 Products
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
