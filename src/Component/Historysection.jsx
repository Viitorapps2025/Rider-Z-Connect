import React from "react";
import image from "../Assets/history-1.jpg"
import image2 from "../Assets/history-2.jpg"

const HistorySection = () => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <img
            src={image}
            alt="Motorcycle close-up"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="mt-6 p-6 bg-gray-900 rounded-lg relative text-left">
            <div className="absolute -top-8 left-6 text-red-600 text-5xl font-bold">
              “
            </div>
            <p className="text-lg font-semibold mb-4 pl-6">
              Our mission is to provide a friendly club for owners and
              enthusiasts of Classic Motorcycles.
            </p>
            <p className="pl-6 text-red-500 font-signature text-2xl">
              Richard Nelson
            </p>
            <p className="pl-6 text-sm text-gray-400 uppercase">
              Founder
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            HOW IT ALL STARTED
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Originally the club was formed for the interest of both car and bike
            riders in Launceston and was called the Tasmanian Automobile Club.
            The constitution stated that membership had to be approximately 50%
            for car and bike. As events were conducted for both vehicles, it was
            always a difficult rule to hold to, and the rule was swapped for the
            second half.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From the start, the club ran regular competitive events, mainly on
            the roads around Launceston. Hill climbs and sprints took place at
            many places, including High Street, Devon Hills Road, and
            Lambton-cliff. Accelerations were held at many places along the
            Midland Highway.
          </p>
          <img
            src={image2}
            alt="Classic motorcycles group"
            className="w-full h-auto mt-6 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
