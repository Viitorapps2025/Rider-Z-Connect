import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewStrip = () => {
  return (
    <>
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-4xl mx-auto">
      {/* Reviews Section */}
      <div className="text-left mb-6">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">Reviews</h2>

        {/* Rating Score and Stars */}
        <div className="mb-2">
          <span className="text-4xl font-extrabold">5/5</span>
        </div>
        <div className="flex items-center mb-2">
          {Array(5)
            .fill()
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-400 text-xl mr-1" />
            ))}
        </div>

        {/* Total Ratings */}
        <p className="text-gray-400 text-lg">Total: 6 Ratings</p>
      </div>

      {/* Review Strip for Individuals */}
      <div className="border-t border-gray-700 pt-4">
        {/* Review 1 */}
        <div className="flex items-start mb-4">
          {/* Person Image */}
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="rounded-full w-10 h-10 mr-4"
          />
          <div className="flex-1">
            {/* Name and Rating */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">John Doe</span>
              <div className="flex items-center">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 text-sm mr-1" />
                  ))}
              </div>
            </div>

            {/* Review Date */}
            <p className="text-gray-400 text-sm mb-2">Reviewed on 12th Jan 2024</p>

            {/* Review Comment */}
            <p className="text-gray-300">
              "Amazing experience! The bike ride was smooth, and the scenic views were breathtaking. Highly recommend this tour!"
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="flex items-start mb-4">
          {/* Person Image */}
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="rounded-full w-10 h-10 mr-4"
          />
          <div className="flex-1">
            {/* Name and Rating */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Jane Smith</span>
              <div className="flex items-center">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 text-sm mr-1" />
                  ))}
              </div>
            </div>

            {/* Review Date */}
            <p className="text-gray-400 text-sm mb-2">Reviewed on 10th Feb 2024</p>

            {/* Review Comment */}
            <p className="text-gray-300">
              "A perfect getaway! The staff was friendly and the route was carefully planned. I felt safe the entire time!"
            </p>
          </div>

        
        </div>

        
      </div>

     
    </div>

    <div className="w-full pt-12 pb-20">
        <div className="w-fit mx-auto">
        <button className="pl-4 pr-4 pt-2 pb-2 border bg-yellow-500 rounded-md font-bold">Read More</button>
        </div>
    </div>

<h1 className="text-white font-bold">ADD A REVIEW</h1>
<p className="text-white ">You must logged in to post a review</p>
</>

  );
};

export default ReviewStrip;
