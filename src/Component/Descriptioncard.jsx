import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaFilePdf } from "react-icons/fa";
import PhotoCarousel from "./PhotoCarousel";
import LocationStrip from "./LocationStrip";
import ReviewStrip from "./Review";

const DescriptionCard = () => {
  const [highlightExpanded, setHighlightExpanded] = useState(false);
  const [itineraryExpanded, setItineraryExpanded] = useState(false);
  const [daysExpanded, setDaysExpanded] = useState([]);

  const descriptions = [
    "Day 1: Start your journey from Manali and enjoy the scenic beauty of the valleys.",
    "Day 2: Ride through the majestic Rohtang Pass and explore Keylong.",
    "Day 3: Cross Baralacha Pass and enjoy the beauty of Sarchu.",
    "Day 4: Experience the high-altitude deserts of Leh.",
    "Day 5: Visit the famous Pangong Lake.",
    "Day 6: Travel to Nubra Valley and ride through Khardung La.",
    "Day 7: Explore Turtuk and experience the local culture.",
    "Day 8: Drive back to Leh via the stunning Shyok River.",
    "Day 9: Wrap up your trip with a visit to Kargil.",
    "Day 10: Return to Srinagar and end your adventurous journey.",
  ];

  const toggleDay = (index) => {
    setDaysExpanded((prev) =>
      prev.includes(index) ? prev.filter((day) => day !== index) : [...prev, index]
    );
  };

  return (
    <div className="">
    <div className="bg-white text-white max-w-4xl mx-auto  rounded-lg">
      {/* Image */}
      <div className="w-full h-96 bg-black rounded-t-lg overflow-hidden">
        <img
          src="https://www.adventurush.com/wp-content/uploads/2022/06/Overview-Image-3-1024x427.jpg"
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overview */}
      <div className="bg-black/80 p-4">
        <h2 className="text-2xl font-bold mb-2">OVERVIEW</h2>
        <p className="text-gray-400">
          Join our 8N/9D Manali | Leh | Srinagar – Bike Expedition to experience a thrilling ride
          travelling through some of the world’s most scenic landscapes to reach your destination.
          Allow the road to take you across rivers, lakes, valleys, and mountains. Cross some of the
          highest motorable passes in the world, stop for quick breaks to relax beside some cool
          water bodies, and drive through rough terrains.
        </p>
      </div>

      {/* Highlight Strip */}
      <div className="bg-black/80 p-4 ">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setHighlightExpanded(!highlightExpanded)}
        >
          <h3 className="text-xl font-bold">Highlights</h3>
          {highlightExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {highlightExpanded && (
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Breathtaking Mountain Views
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Thrilling Adventure Activities
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Connect with Nature
            </li>
          </ul>
        )}
      </div>

      {/* Summarized Itinerary */}
      <div className="bg-black/80 p-4  mb-4 border-y-2 border-gray-500">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setItineraryExpanded(!itineraryExpanded)}
        >
          <h3 className="text-xl font-bold">Summarized Itinerary</h3>
          {itineraryExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {itineraryExpanded && (
          <div className="mt-4 space-y-4">
            {descriptions.map((desc, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleDay(index)}
              >
                {/* Day Strip */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-4">
                      Day {index + 1}
                    </span>
                    <span>Exciting Activities</span>
                  </div>
                  {daysExpanded.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {/* Short Description */}
                {daysExpanded.includes(index) && (
                  <p className="mt-4 text-gray-300">{desc}</p>
                )}
              </div>
            ))}
          </div>
        )}


        <div className=" text-white p-6  max-w-4xl mx-auto border-y-2 border-gray-500 mt-8">
          {/* Title */}
          <h2 className="text-xl font-bold mb-4">Stay Options</h2>

          {/* Two Divs in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
            {/* First Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Luxury Hotels</span>
            </div>

            {/* Second Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* Third Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* Fourth Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* Fifth Option */}
            <div className="flex items-center p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* 6th Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500  text-2xl mr-2" />
              <span className="text-base">Cozy Guest Houses</span>
            </div>

            {/* 6th Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500  text-2xl mr-2" />
              <span className="text-base">Cozy Guest Houses</span>
            </div>

            {/* 6th Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500  text-2xl mr-2" />
              <span className="text-base">Cozy Guest Houses</span>
            </div>

            {/* 6th Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500  text-2xl mr-2" />
              <span className="text-base">Cozy Guest Houses</span>
            </div>


          </div>
        </div>



        <div className=" text-white p-6  max-w-4xl mx-auto mt-8 ">
          {/* Title */}
          <h2 className="text-xl font-bold mb-4">Inclusions</h2>

          {/* Two Divs in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
            {/* First Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Luxury Hotels</span>
            </div>

            {/* Second Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* Third Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* Fourth Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* Fifth Option */}
            <div className="flex items-center p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* 6th Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500  text-2xl mr-2" />
              <span className="text-base">Cozy Guest Houses</span>
            </div>

            {/* 6th Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500  text-2xl mr-2" />
              <span className="text-base">Cozy Guest Houses</span>
            </div>

            {/* 6th Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500  text-2xl mr-2" />
              <span className="text-base">Cozy Guest Houses</span>
            </div>

            {/* 6th Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500  text-2xl mr-2" />
              <span className="text-base">Cozy Guest Houses</span>
            </div>


          </div>
        </div>
         

         {/* Note */}
         <div className="bg-white">

        <div className="bg-black/80 p-4  border-y-2 border-gray-500">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setHighlightExpanded(!highlightExpanded)}
          >
            <h3 className="text-xl font-bold">Note</h3>
            {highlightExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {highlightExpanded && (
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Breathtaking Mountain Views
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Thrilling Adventure Activities
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Connect with Nature
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Connect with Nature
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Connect with Nature
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Connect with Nature
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Connect with Nature
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Connect with Nature
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Connect with Nature
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                Connect with Nature
              </li>

            </ul>
          )}
        </div>
          </div>


        <h1 className="text-xl text-white font-bold mt-4 mb-4">Gallery</h1>
        <PhotoCarousel />
        <LocationStrip />

        <div>


          {/* Policies */}
          <div className="bg-white">

          <div className="bg-black/80 p-4  mb-4 border-y-2 border-gray-500">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setItineraryExpanded(!itineraryExpanded)}
            >
              <h3 className="text-xl font-bold">Policies</h3>
              {itineraryExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {itineraryExpanded && (
              <div className="mt-4 space-y-4">
                {descriptions.map((desc, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleDay(index)}
                  >
                    {/* Day Strip */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-4">
                          {index + 1}
                        </span>
                        <p>policies</p>

                      </div>
                      {daysExpanded.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {/* Short Description */}
                    {daysExpanded.includes(index) && (
                      <p className="mt-4 text-gray-300">{desc}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
            </div>


        {/* Attachments */}
        <div>
          <div className=" text-white p-6 rounded-lg max-w-4xl mx-auto">
          <h1 className="pb-4 text-lg font-bold">Attachments</h1>
            {/* Button Strip */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              
              {/* First Button */}
              <button className="flex items-start bg-black/80 p-4 rounded-lg w-full sm:w-auto lg:w-1/2 text-left hover:bg-gray-500 transition">
                <FaFilePdf className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Trip Detail</h3>
                  <p className="text-gray-400 text-sm">Download</p>
                </div>
              </button>

              {/* Second Button */}
              <button className="flex items-start bg-black/80 p-4 rounded-lg w-full sm:w-auto lg:w-1/2 text-left hover:bg-gray-500 transition">
                <FaFilePdf className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Trip Advisory</h3>
                  <p className="text-gray-400 text-sm">Download</p>
                </div>
              </button>
            </div>
          </div>
        </div>





         {/* Faq */}
          <div className="bg-white">

         <div className="bg-black/80 p-4  mb-4 border-y-2 border-gray-500">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setItineraryExpanded(!itineraryExpanded)}
            >
              <h3 className="text-xl font-bold">Faq</h3>
              {itineraryExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {itineraryExpanded && (
              <div className="mt-4 space-y-4">
                {descriptions.map((desc, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleDay(index)}
                  >
                    {/* Day Strip */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-4">
                          {index + 1}
                        </span>
                        <p>Faq</p>

                      </div>
                      {daysExpanded.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {/* Short Description */}
                    {daysExpanded.includes(index) && (
                      <p className="mt-4 text-gray-300">{desc}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
            </div>





 {/* Detail Itinerary */}
 <div className="bg-white">

 <div className="bg-black/80 p-4  mb-4 ">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setItineraryExpanded(!itineraryExpanded)}
            >
              <h3 className="text-xl font-bold">Detail Itinerary</h3>
              {itineraryExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {itineraryExpanded && (
              <div className="mt-4 space-y-4">
                {descriptions.map((desc, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleDay(index)}
                  >
                    {/* Day Strip */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-4">
                        Day  {index + 1}
                        </span>
                        <p>Detail Itinerary</p>

                      </div>
                      {daysExpanded.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {/* Short Description */}
                    {daysExpanded.includes(index) && (
                      <p className="mt-4 text-gray-300">{desc}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div> 
            </div>




          <div className=" text-white p-6  max-w-4xl mx-auto border-y-2 border-gray-500 mt-8">
          {/* Title */}
          <h2 className="text-xl font-bold mb-4">Document to carry</h2>

          {/* Two Divs in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-1">
            {/* First Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Luxury Hotels</span>
            </div>

            {/* Second Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

            {/* Third Option */}
            <div className="flex items-center  p-2 rounded-lg">
              <FaCheckCircle className="text-yellow-500 text-2xl mr-2" />
              <span className="text-base ">Cozy Guest Houses</span>
            </div>

             <ReviewStrip/>


          </div>
        </div>




      </div>



    </div>
    </div>


  );
};

export default DescriptionCard;
