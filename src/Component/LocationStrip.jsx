import React, { useState } from "react";
import { FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaArrowRight } from "react-icons/fa";

const LocationStrip = () => {
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <div className="bg-white">


        <div className="bg-black/80 text-white p-6 border-t border-gray-500 max-w-4xl mx-auto">
            {/* Title with Expand Button */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Location</h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-white text-2xl focus:outline-none"
                >
                    {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>

            {/* Location Details */}
            {isExpanded && (
                <>
                    <div className="flex flex-col mb-4 space-y-4">
                        {/* Starting Point Title */}


                        {/* Red Location Icon and Info */}
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="text-red-500 text-2xl mr-4" />
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Starting Point</h4>
                                <h3 className="text-xl font-bold">Manali Bus Stand</h3>
                                <p className="text-gray-400">
                                    Mall Road, Siyal, Manali, Himachal Pradesh 175131, India
                                </p>
                            </div>
                        </div>
                        {/* Directions */}
                        <div className="flex items-center border-b-2 border-gray-700 pb-4 pl-10">
                            <h3 className="text-lg font-medium mr-2">Directions</h3>
                            <button className="text-red-500 text-2xl focus:outline-none">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mb-4 space-y-4">
                        {/* Starting Point Title */}


                        {/* Red Location Icon and Info */}
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="text-red-500 text-2xl mr-4" />
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Ending Point</h4>
                                <h3 className="text-xl font-bold">Manali Bus Stand</h3>
                                <p className="text-gray-400">
                                    Mall Road, Siyal, Manali, Himachal Pradesh 175131, India
                                </p>
                            </div>
                        </div>
                        {/* Directions */}
                        <div className="flex items-center border-b border-gray-700 pb-4 pl-10">
                            <h3 className="text-lg font-medium mr-2">Directions</h3>
                            <button className="text-red-500 text-2xl focus:outline-none">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </>

            )}


        </div>
</div>
    );
};

export default LocationStrip;
