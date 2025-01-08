import React from "react";
import helmet from "../Assets/Icons/helmet.png" 
import support from "../Assets/Icons/customer-support (2).png"
import motorcycle from "../Assets/Icons/motorbike (1).png"

const ClubActivities = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-sm tracking-widest text-red-500 uppercase font-semibold">
          Club Activities
        </h2>
        <h1 className="text-4xl font-bold mt-2">What We Do</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white text-black p-6 rounded-md w-full sm:w-[300px] md:w-[350px] text-center shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Image for "We Ride Bikes" */}
            <img
              src={helmet} // Replace with your actual image path
              alt="We Ride Bikes"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg mb-3">We Ride Bikes</h3>
          <p className="text-gray-600">
            Lex Rider regularly organises ride-outs suitable for all types of
            bikes and speeds. Our ride-outs range from short, local routes, to
            continental travel.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-6 rounded-md w-full sm:w-[300px] md:w-[350px] text-center shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Image for "We Support Charities" */}
            <img
              src={support} // Replace with your actual image path
              alt="We Support Charities"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg mb-3">We Support Charities</h3>
          <p className="text-gray-600">
            We support both local and national charities such as air ambulance,
            blood bikes, and the teenage cancer trust through the annual Stephen
            Sutton Ride.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black p-8 rounded-md w-full sm:w-[300px] md:w-[350px] text-center shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Image for "Motorcycle Shows" */}
            <img
              src={motorcycle} // Replace with your actual image path
              alt="Motorcycle Shows"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg mb-3">Motorcycle Shows</h3>
          <p className="text-gray-600">
            We have such a diverse collection of bikes through the club. We
            attend and exhibit at most of the major motorcycle shows.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition">
          See Our Activities
        </button>
      </div>
    </section>
  );
};

export default ClubActivities;
