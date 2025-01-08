import React from "react";
import image from "../Assets/bg-newsletter.jpg"
const HierarchySection = () => {
  return (
    <div className="bg-black text-white p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={image} // Replace with actual image URL
            alt="Motorcycle Club Leader"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 space-y-8 lg:pl-24">
          <h2 className="text-2xl md:text-6xl font-bold">
            The Hierarchy of a Motorcycle Club
          </h2>
          <p className="text-gray-400 text-sm md:text-2xl leading-relaxed md:font-semibold">
            A motorcycle club assumes a serious hierarchy in leadership just like any
            other organization. At the top is the president who is the head of the
            executive committee and the MC CEO.
          </p>
          <div className="border-l-4 border-red-600 pl-4">
            <p className="font-bold text-white text-sm md:text-2xl md:font-extrabold">
              The treasurer is in charge of the motorcycle club funds. He is also
              the custodian of the
            </p>
          </div>
          <p className="text-gray-400 text-sm md:text-2xl leading-relaxed md:font-semibold">
            We have sergeant-at-arms whose job is to ensure that the club’s bylaws
            are adhered to. The road captain is the boss in the road runs and
            everything related to the road.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HierarchySection;
