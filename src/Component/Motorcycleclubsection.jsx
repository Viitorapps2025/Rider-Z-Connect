import React from "react";
import bikeImage1 from "../Assets/lexrider_banner2_2a.jpg"; // Replace with your red-tinted bike image
import bikeImage2 from "../Assets/lexrider_banner2_1a.jpg"; // Replace with your lower image

const MotorcycleClubSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            VINTAGE MOTORCYCLE CLUB OF{" "}
            <span className="text-red-600">WESTERN AUSTRALIA</span>
          </h1>
          <p className="text-gray-300 leading-relaxed">
            If you are looking to find a group of well-established and safe to
            ride with, you’ve found us. We were founded as a formal motorcycle
            club in Boston in 1985, and are still going strong. We focus on safe
            riding and we also ride for charities that are near and dear to our
            hearts.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We are a national club with chapters and members across the country.
            Our passion for motorcycling provides a unique bond within the legal
            community. We ride virtually every make and model of bike, although
            a majority rides Harleys.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded-md self-start">
            EXPLORE OUR RIDES
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full h-auto">
          <img
            src={bikeImage1}
            alt="Motorcycle Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-center">
        {/* Left Image */}
        <div className="w-full h-auto">
          <img
            src={bikeImage2}
            alt="Motorcycle Rider"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Text */}
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            WE KEPT WHAT WE LOVED ABOUT THE BIKE
          </h2>
          <hr className="w-16 border-t-2 border-red-600 mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default MotorcycleClubSection;
