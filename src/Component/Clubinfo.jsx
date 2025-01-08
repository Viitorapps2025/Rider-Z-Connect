import React from "react";
import background from "../Assets/breacumb.jpg";

const ClubInfo = (props) => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{props.name}</h1>
        <nav>
          <ul className="flex space-x-2 text-sm sm:text-base">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="mx-2">›</span>
            </li>
            <li>
              <span className="font-semibold">{props.name}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ClubInfo;
