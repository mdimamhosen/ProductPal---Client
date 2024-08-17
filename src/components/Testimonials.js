import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  // Function to fetch reviews asynchronously
  const fetchReviews = async () => {
    try {
      const response = await fetch("./reviews.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return [];
    }
  };

  // Function to update the review card
  const updateReview = () => {
    if (reviews.length === 0) return null;

    const review = reviews[index];
    return (
      <div className="flex-shrink-0  w-11/12 mx-auto border-blue-600 h-80">
        <div className="bg-richblack-5 transition-all max-w-2xl mx-auto   border-yellow-400 duration-300 ease-linear hover:bg-richblack-25 p-6 border-red-600 rounded-lg shadow-lg h-full flex flex-col items-center justify-between">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src={review.profilePicture}
            alt={review.name}
          />
          <h3 className="text-lg font-bold mt-4">{review.name}</h3>
          <p className="text-sm text-gray-600 mt-2">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </p>
          <p className="mt-4 text-center">{review.review}</p>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  };

  // Function to show the previous review
  const showPrevReview = () => {
    setIndex((index - 1 + reviews.length) % reviews.length); // Loop back if at start
  };

  // Function to show the next review
  const showNextReview = () => {
    setIndex((index + 1) % reviews.length); // Loop back if at end
  };

  // Initialize reviews and set up event listeners
  useEffect(() => {
    const initialize = async () => {
      const fetchedReviews = await fetchReviews();
      setReviews(fetchedReviews);

      if (fetchedReviews.length > 0) {
        setIndex(Math.floor(Math.random() * fetchedReviews.length)); // Randomly select initial review
      } else {
        console.error("No reviews available to display.");
      }
    };
    initialize();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl text-richblack-5 font-bold capitalize mb-7">
        what our customers are saying
      </h1>
      {updateReview()}
      <div className="flex  justify-center mt-4">
        <button
          id="prevReview"
          className="  transition-all duration-300 ease-linear rounded-[8px]  py-[8px]   font-semibold text-yellow-50 hover:text-yellow-200 text-3xl"
          onClick={showPrevReview}
        >
          <FaAngleLeft />
        </button>
        <button
          id="nextReview"
          className="  transition-all duration-300 ease-linear rounded-[8px]  py-[8px]  font-semibold text-yellow-50 hover:text-yellow-200 text-3xl"
          onClick={showNextReview}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
