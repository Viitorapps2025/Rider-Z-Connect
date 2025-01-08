import React from 'react';
import image1 from "../Assets/lexrider_banner2_1a.jpg";
import image2 from "../Assets/lexrider_banner2_2a.jpg"
const MotorcycleClub = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl lg:text-5xl font-bold">
          VINTAGE MOTORCYCLE CLUB
        </h1>
        <h2 className="text-red-600 text-2xl lg:text-3xl font-bold mt-2">
          OF WESTERN AUSTRALIA
        </h2>
        <p className="text-gray-400 mt-4 text-sm lg:text-base">
          Dedicated to the Ownership, Use and Preservation of Motorcycles more
          than 25 years of age
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 px-6 lg:px-16">
        {/* Ride Outs Section */}
        <div className="relative bg-red-900 rounded-lg overflow-hidden">
          <img
            src={image1}
            alt="Ride Outs"
            className="w-full h-64 object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-white mb-4">RIDE OUTS</h3>
          </div>
          <div className="p-6 bg-black bg-opacity-80">
            <p className="text-gray-300 text-sm mb-4">
              Lex Rider regularly organises ride-outs suitable for all types of
              bikes and speeds. Our ride-outs range from short, local routes, to
              continental travel.
            </p>
            <ul className="text-red-500 text-sm space-y-2">
              <li>• Only men can join</li>
              <li>• Meetings have strict protocols</li>
              <li>• Prospective members endure brutal hazing</li>
            </ul>
          </div>
        </div>

        {/* Communities Section */}
        <div className="relative bg-red-900 rounded-lg overflow-hidden">
          <img
            src={image2}
            alt="Communities"
            className="w-full h-64 object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-white mb-4">COMMUNITIES</h3>
          </div>
          <div className="p-6 bg-black bg-opacity-80">
            <p className="text-gray-300 text-sm mb-4">
              Provide an opportunity to give back to communities as well as
              provide assistance to veterans related injuries via charities,
              benefits, and donations.
            </p>
            <ul className="text-red-500 text-sm space-y-2">
              <li>• Members may have to commit acts of violence</li>
              <li>• Members must be loyal to the club</li>
              <li>• Only one motorcycle club can control an area</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleClub;
