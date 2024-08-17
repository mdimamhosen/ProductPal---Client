import React, { useState, useEffect } from "react";
import {
  FaCartPlus,
  FaHeart,
  FaTag,
  FaDollarSign,
  FaLocationArrow,
  FaStar,
  FaClock,
  FaShippingFast,
  FaShopify,
  FaUser,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { axiosOpen } from "../hooks/useAxiosCommon";
import { toast } from "react-toastify";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://producttask.vercel.app/productDetails/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    toast.success("Product added to cart successfully");
  };

  const handleAddToWishlist = () => {
    toast.success("Product added to wishlist successfully");
  };

  if (!product)
    return <div className="text-center text-richblack-5">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1   w-full md:grid-cols-2  ">
        <div className="flex justify-center     items-center w-full">
          <img
            src={product.productImage}
            alt={product.productName}
            className="w-full h-full  object-cover     rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center    p-8 w-full">
          <h1 className="text-4xl font-bold text-richblack-5 mb-4">
            {product.productName}
          </h1>
          <p className="text-lg text-richblack-5 mb-4">{product.description}</p>

          <div className="flex items-center mb-4">
            <FaDollarSign className="text-2xl text-richblack-5 mr-2" />
            <span className="text-2xl font-semibold text-richblack-5">
              Price: ${product.price}
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-richblack-5 mb-4">
            Product Details
          </h2>
          <div className="bg-gray-100 flex flex-col sm:flex-row mb-6  w-full justify-start   items-center rounded-lg shadow-md">
            <div className="    w-full">
              <div className="flex items-center mb-3">
                <FaTag className="text-xl text-richblack-5 mr-2" />
                <span className="text-richblack-5">
                  Brand: {product.brandName}
                </span>
              </div>
              <div className="flex items-center mb-3">
                <FaTag className="text-xl text-richblack-5 mr-2" />
                <span className="text-richblack-5">
                  Category: {product.category}
                </span>
              </div>
              <div className="flex items-center mb-3">
                <FaStar className="text-xl text-yellow-500 mr-2" />
                <span className="text-richblack-5">{product.ratings} / 5</span>
              </div>
              <div className="flex items-center mb-3">
                <FaLocationArrow className="text-xl text-richblack-5 mr-2" />
                <span className="text-richblack-5">{product.location}</span>
              </div>
            </div>
            <div className="w-full    ">
              <div className="flex items-center mb-3">
                <FaClock className="text-xl text-richblack-5 mr-2" />
                <span className="text-richblack-5">
                  Delivery Time: {product.minDeliveryTime} -{" "}
                  {product.maxDeliveryTime} days
                </span>
              </div>
              <div className="flex items-center mb-3">
                <FaShippingFast className="text-xl text-richblack-5 mr-2" />
                <span className="text-richblack-5">
                  Delivery Cost: ${product.deliveryCharge}
                </span>
              </div>
              <div className="flex items-center mb-3">
                <FaShopify className="text-xl text-richblack-5 mr-2" />
                <span className="text-richblack-5">
                  Shop Name: {product.shopName}
                </span>
              </div>
              <div className="flex items-center mb-3">
                <FaUser className="text-xl text-richblack-5 mr-2" />
                <span className="text-richblack-5">
                  Author Name: {product.postedBy}
                </span>
              </div>
            </div>
          </div>
          <div className="flex mb-4 gap-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center bg-yellow-50 text-black px-4 py-2  font-semibold transition-all duration-300 ease-linear rounded-lg shadow hover:bg-yellow-200 focus:outline-none"
            >
              <FaCartPlus className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="flex items-center px-4 py-2 bg-blue-600 text-richblack-5 rounded-lg shadow hover:bg-blue-700 focus:outline-none  font-semibold transition-all duration-300 ease-linear "
            >
              <FaHeart className="mr-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
