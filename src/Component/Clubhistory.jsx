import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure TailwindCSS is included
import image from "../Assets/img-timeline.jpg"
const ClubHistory = () => {
  // State to track active year based on scroll position
  const [activeYear, setActiveYear] = useState("1935");

  // Handle scroll to set active year dynamically
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop < 150) setActiveYear("1935");
    else if (scrollTop >= 150 && scrollTop < 300) setActiveYear("1946");
    else setActiveYear("1950");
  };

  return (
    <section className="bg-black text-white py-12 px-4 md:px-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="uppercase text-red-500 font-semibold tracking-widest">
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">CLUB HISTORY</h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={image}
              alt="Club History"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Scrollable Text */}
          <div className="w-full lg:w-1/2 bg-white text-black rounded-lg shadow-lg flex">
            {/* Year Numbers (Left Side) */}
            <div className="flex flex-col items-center justify-start pt-16 px-4">
              <p
                className={`mb-6 font-bold text-xl cursor-pointer ${
                  activeYear === "1935" ? "text-red-500" : "text-gray-400"
                }`}
              >
                1935
              </p>
              <p
                className={`mb-6 font-bold text-xl cursor-pointer ${
                  activeYear === "1946" ? "text-red-500" : "text-gray-400"
                }`}
              >
                1946
              </p>
              <p
                className={`mb-6 font-bold text-xl cursor-pointer ${
                  activeYear === "1950" ? "text-red-500" : "text-gray-400"
                }`}
              >
                1950
              </p>
            </div>

            {/* Scrollable Text Content */}
            <div
              className="h-[95vh] overflow-y-scroll pr-4 scrollbar-hide flex-1 px-6 py-16"
              onScroll={handleScroll}
            >
              {/* 1935 Section */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-red-500 mb-8">1935</h3>
                <h4 className="text-2xl font-semibold mb-8">
                  The McCook Outlaws Motorcycle Club
                </h4>
                <p className="text-gray-600 leading-relaxed w-[80%] justify-start">
                The McCook Outlaws Motorcycle Club was established out of Matilda`s Bar on old Route 66 in McCook, Illinois, just outside of Chicago.
Although the Club stayed together their activities had been limited during World War II. In May of 1946, the first major post-war motorcycle event was held at Soldier Field in Chicago.
With new members coming from all over the Chicago area, the Club was growing in size from its early beginnings of 1935. Moving out of McCook and re-establishing itself in Chicago, the club decided to change its name.
The “McCook Outlaws” became The “Chicago Outlaws”. The club logo also underwent a change; a small skull replaced the winged motorcycle .
                </p>
              </div>

              {/* 1946 Section */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-red-500 mb-8">1946</h3>
                <h4 className="text-2xl font-semibold mb-8">
                  Post-War Motorcycle Events
                </h4>
                <p className="text-gray-600 leading-relaxed">
                The McCook Outlaws Motorcycle Club was established out of Matilda`s Bar on old Route 66 in McCook, Illinois, just outside of Chicago.
Although the Club stayed together their activities had been limited during World War II. In May of 1946, the first major post-war motorcycle event was held at Soldier Field in Chicago.
With new members coming from all over the Chicago area, the Club was growing in size from its early beginnings of 1935. Moving out of McCook and re-establishing itself in Chicago, the club decided to change its name.
The “McCook Outlaws” became The “Chicago Outlaws”. The club logo also underwent a change; a small skull replaced the winged motorcycle .
                </p>
              </div>

              {/* 1950 Section */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-red-500 mb-8">1950</h3>
                <h4 className="text-2xl font-semibold mb-8">
                  The Chicago Outlaws
                </h4>
                <p className="text-gray-600 leading-relaxed">
                The McCook Outlaws Motorcycle Club was established out of Matilda`s Bar on old Route 66 in McCook, Illinois, just outside of Chicago.
Although the Club stayed together their activities had been limited during World War II. In May of 1946, the first major post-war motorcycle event was held at Soldier Field in Chicago.
With new members coming from all over the Chicago area, the Club was growing in size from its early beginnings of 1935. Moving out of McCook and re-establishing itself in Chicago, the club decided to change its name.
The “McCook Outlaws” became The “Chicago Outlaws”. The club logo also underwent a change; a small skull replaced the winged motorcycle .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubHistory;
