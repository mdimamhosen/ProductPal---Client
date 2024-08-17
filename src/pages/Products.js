import React, { useState, useEffect } from "react";
import { axiosOpen } from "../hooks/useAxiosCommon";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    brandName: "",
    minPrice: "",
    maxPrice: "",
    priceRange: "",
    sortBy: "",
    order: "",
    search: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://producttask.vercel.app/allproducts",
          {
            params: {
              ...filters,
              minPrice: filters.priceRange
                ? filters.priceRange.split("-")[0]
                : filters.minPrice,
              maxPrice: filters.priceRange
                ? filters.priceRange.split("-")[1]
                : filters.maxPrice,
              page: currentPage,
              limit: 12,
            },
          }
        );
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [filters, currentPage]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleNestedSortChange = (e) => {
    const [sortBy, order] = e.target.value.split("-");
    setFilters({ ...filters, sortBy, order });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="p-4 w-11/12 mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl text-richblack-5 font-bold text-gray-800 mb-2">
            All Our Products
          </h2>
          <p className="text-gray-600 text-center capitalize md:text-lg text-richblack-25 text-base leading-relaxed">
            Explore our top picks, curated just for you.
          </p>
        </div>
        <div className="w-11/12 mx-auto mb-2">
          <div className="flex md:w-1/2 justify-center items-center mx-auto">
            <input
              type="text"
              name="search"
              placeholder="Search for products, brands, and more..."
              onChange={handleFilterChange}
              className="px-4 py-3 w-full rounded-full bg-gray-100 text-gray-700 focus:outline-none shadow-md"
            />
          </div>
        </div>
        <div className="mb-4 w-11/12 mx-auto">
          <div className="flex gap-1">
            <div className="w-full flex flex-col md:flex-row gap-1">
              <div className="w-full">
                <select
                  name="category"
                  onChange={handleFilterChange}
                  className="border px-4 py-3 bg-blue-5 outline-none w-full"
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Health & Beauty">Health & Beauty</option>
                  <option value="Home Decorations">Home Decorations</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Food and Beverages">Food and Beverages</option>
                </select>
              </div>

              <div className="w-full">
                <select
                  name="brandName"
                  onChange={handleFilterChange}
                  className="border px-4 py-3 bg-blue-5 outline-none w-full"
                >
                  <option value="">Select Brand</option>
                  <option value="AudioPlus">AudioPlus</option>
                  <option value="TimeTech">TimeTech</option>
                  <option value="LeatherCraft">LeatherCraft</option>
                  <option value="SoundWave">SoundWave</option>
                  <option value="Supreme">Supreme</option>
                  <option value="ComfortPlus">ComfortPlus</option>
                  <option value="Bata">Bata</option>
                  <option value="Shanalee">Shanalee</option>
                  <option value="Kangaroo">Kangaroo</option>
                  <option value="StandPro">StandPro</option>
                  <option value="Luxor">Luxor</option>
                  <option value="Kisawan">Kisawan</option>
                </select>
              </div>
            </div>

            <div className="flex w-full gap-1 flex-col md:flex-row">
              <div className="w-full">
                <select
                  name="priceRange"
                  onChange={handleFilterChange}
                  className="border px-4 py-3 bg-blue-5 outline-none w-full"
                >
                  <option value="">Select Price Range</option>
                  <option value="10-30">10 - 30 Dollar</option>
                  <option value="31-60">31 - 60 Dollar</option>
                  <option value="61-100">61 - 100 Dollar</option>
                  <option value="101-150">101 - 150 Dollar</option>
                </select>
              </div>

              <div className="w-full">
                <select
                  name="sort"
                  onChange={handleNestedSortChange}
                  className="border px-4 py-3 bg-blue-5 outline-none w-full"
                >
                  <option value="">Sort By</option>
                  <optgroup label="Price">
                    <option value="price-asc">Low to High</option>
                    <option value="price-desc">High to Low</option>
                  </optgroup>
                  <optgroup label="Date">
                    <option value="createdAt-desc">Newest First</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center h-[40vh] flex justify-center items-center text-3xl text-richblack-5 font-semibold text-gray-800">
            <h1>Products are loading...</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 mx-auto w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center border-5 border-yellow-50 items-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="hover:bg-yellow-200 transition-all duration-300 ease-linear rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-semibold text-richblack-900 mx-2"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-700 text-white"
                : "bg-gray-300 text-richblack-5"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="hover:bg-yellow-200 transition-all duration-300 ease-linear rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-semibold text-richblack-900 mx-2"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Products;
