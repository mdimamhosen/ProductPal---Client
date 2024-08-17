import React from "react";
import { FaAward } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { MdOutlineInventory } from "react-icons/md";
const Award = () => {
  return (
    <div className=" pb-4 mb-10">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold text-richblack-5 text-3xl mt-8 mb-2">
            Our Achievements
          </p>
          <h1 className="text-richblack-25 text-sm max-w-screen-lg mx-auto px-4 tracking-wide text-center">
            Serving Over 1,24,000+ Satisfied Customers Who Still Trust Our
            Services
          </h1>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 w-11/12 md:w-[85%] mx-auto">
        <div className="flex flex-col bg-richblack-600 hover:bg-richblack-500 transition-all ease-linear duration-300 py-2 shadow-2xl">
          <p className="text-richblack-5 text-4xl md:text-5xl flex justify-center items-center">
            <i className="fas fa-trophy"></i>
          </p>
          <br />
          <h1 className="text-richblack-5 flex items-center justify-center gap-3 mb-2 text-3xl md:text-4xl font-bold text-center">
            32
            <FaAward />
          </h1>
          <p className="text-richblack-25 mx-auto text-center w-[90%]">
            Excellence in Service Award
          </p>
        </div>

        <div className="bg-richblack-600 hover:bg-richblack-500 transition-all ease-linear duration-300  flex flex-col py-2 shadow-2xl">
          <p className="text-richblack-5 text-4xl md:text-5xl flex justify-center items-center">
            <i className="fas fa-briefcase"></i>
          </p>
          <br />
          <h1 className="text-richblack-5  flex items-center justify-center gap-3 mb-2  text-3xl md:text-4xl font-bold text-center">
            43
            <MdOutlineInventory />
          </h1>
          <p className="text-richblack-25 mx-auto text-center w-[90%]">
            Top Industry Innovator
          </p>
        </div>

        <div className="bg-richblack-600 hover:bg-richblack-500 transition-all ease-linear duration-300  flex flex-col py-2 shadow-2xl">
          <p className="text-richblack-5 text-4xl md:text-5xl flex justify-center items-center">
            <i className="fas fa-lightbulb"></i>
          </p>
          <br />
          <h1 className="text-richblack-5 flex items-center justify-center gap-3 mb-2 text-3xl md:text-4xl font-bold text-center">
            51
            <CiShop />
          </h1>
          <p className="text-richblack-25 mx-auto text-center w-[90%]">
            Innovation Excellence Award
          </p>
        </div>

        <div className="bg-richblack-600 hover:bg-richblack-500 transition-all ease-linear duration-300  flex flex-col py-2 shadow-2xl">
          <p className="text-richblack-5 text-4xl md:text-5xl flex justify-center items-center">
            <i className="fas fa-heart"></i>
          </p>
          <br />
          <h1 className="text-richblack-5 flex items-center justify-center gap-3 mb-2  text-3xl md:text-4xl font-bold text-center">
            42
            <RiCustomerService2Fill />
          </h1>
          <p className="text-richblack-25 mx-auto text-center w-[90%]">
            Best Customer Choice Award
          </p>
        </div>
      </div>
    </div>
  );
};

export default Award;
