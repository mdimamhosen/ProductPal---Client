import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegClock, FaWarehouse, FaTruck } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all ease-linear duration-300 group">
      <img
        src={product.productImage}
        alt={product.productName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-56">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.productName}
        </h3>
        <p className="text-gray-600 mt-2">{product.description}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-[#0e2e49]">
            ${product.price}
          </span>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-sm text-gray-700">{product.ratings}</span>
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          <div className="flex items-center">
            <BsFillTagFill className="mr-2 text-[#0e2e49]" />
            <span>{product.brandName}</span>
          </div>
          <div className="flex items-center">
            <FaWarehouse className="mr-2 text-[#0e2e49]" />
            <span>
              {product.stockAvailability === true ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <div className="flex items-center">
            <FaRegClock className="mr-2 text-[#0e2e49]" />
            <span>
              Posted on {new Date(product.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="text-center text-white p-4">
          <span className="block text-xl font-bold mb-2">Special Offer</span>
          <p className="mb-4">{product.discount || "No Discount"}</p>
          <div className="flex items-center justify-center mb-4">
            <FaTruck className="mr-2 text-[#0e2e49]" />
            <span>
              Delivery: {product.minDeliveryTime} - {product.maxDeliveryTime}{" "}
              days
            </span>
          </div>
          <Link
            to={`/productDetails/${product._id}`}
            className="hover:bg-yellow-200 transition-all duration-300 ease-linear rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-semibold text-richblack-900"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
