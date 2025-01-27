import React from "react";

const StickyPriceBar = () => {
  return (
    <div className="fixed top-1/4 right-20 sm:w-64 sm:p-4  sm:text-white z-10 md:w-80 lg:w-96">
    {/* Sticky Price Bar */}
    <div className="bg-white">
    <div className="flex flex-col items-start space-y-2 sm:bg-black/90 p-10 ">
      <span className="text-2xl font-medium">Starting From</span>
      <span className="text-2xl font-bold text-yellow-400">$120</span>
   
    </div>
    </div>
  </div>
  
  );
};

export default StickyPriceBar;
