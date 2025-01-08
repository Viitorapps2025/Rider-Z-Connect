import React from "react";
import background from "../Assets/rev_slidehome1_1.jpg"
const RidingSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h3 className="text-white text-sm md:text-base tracking-widest uppercase mb-2">
          Come Ride With Us!
        </h3>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
          Become a Part of <br /> Our Family
        </h1>
        <a
          href="#contact"
          className="bg-red-600 hover:bg-red-700 text-white text-sm md:text-lg font-semibold px-6 py-3 rounded-lg uppercase"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default RidingSection;
