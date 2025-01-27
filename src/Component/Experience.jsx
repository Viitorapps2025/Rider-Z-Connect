import  { useEffect, useState } from "react";
import image from "../Assets/lexrider_banner2_1a.jpg"

const Experience = () => {
  const [animateBar, setAnimateBar] = useState(false);

  // Trigger animation when the component mounts
  useEffect(() => {
    setAnimateBar(true);
  }, []);

  return (
    <section className="bg-black text-white py-12 px-4 md:px-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="uppercase text-red-500 font-semibold tracking-widest">
            WE ARE EXPERIENCED
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
          MORE THAN 15 YEARS <br />OF MOTORCYCLING
          </h2>
        </div>
       
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-400 leading-relaxed mb-6">
            Looking for adventure? At RIDERZCONNECT, we&apos;re gearing up for an exciting lineup of short tours and enduro rides across some of India&apos;s most breathtaking landscapes! From the majestic Himalayas 
and the serene Northeast to the vibrant trails of South India, both on-road and off-road, there’s so much waiting to be discovered. Stay tuned to our website and subscribe to our Newsletter for the latest 
updates on these thrilling tours. Get ready to go off the beaten track and explore the hidden gems of India with our expert guides leading the way!
            </p>

            {/* Skills with Animated Bars */}
            <div className="space-y-4">
              {/* Riding Skill */}
              <div>
                <h3 className="text-lg font-bold mb-1">RIDING SKILL</h3>
                <div className="w-full h-1 bg-gray-700 relative overflow-hidden">
                  <div
                    className={`h-1 bg-red-500 transition-all duration-[2000ms] ease-out ${
                      animateBar ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Survival Skill */}
              <div>
                <h3 className="text-lg font-bold mb-1">SURVIVAL SKILL</h3>
                <div className="w-full h-1 bg-gray-700 relative overflow-hidden">
                  <div
                    className={`h-1 bg-red-500 transition-all duration-[2000ms] ease-out ${
                      animateBar ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Performance */}
              <div>
                <h3 className="text-lg font-bold mb-1">PERFORMANCE</h3>
                <div className="w-full h-1 bg-gray-700 relative overflow-hidden">
                  <div
                    className={`h-1 bg-red-500 transition-all duration-[2000ms] ease-out ${
                      animateBar ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={image}
              alt="Motorcycle Experience"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-red-600 flex items-center justify-center rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-8 h-8 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.75 5.75l12.5 6.25-12.5 6.25z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
