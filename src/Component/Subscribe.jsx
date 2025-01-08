import React from "react";

const Subscribe = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/45/65/a1/4565a126078fafabe9227eaa441bd621.png')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">
          Get News, Updates, Special Event Notices and More When You Join Our
          Email List
        </h1>

        {/* Subscription Form */}
        <form className="flex flex-col md:flex-row items-center gap-4 w-full bg-white pt-2 pb-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-2/3 px-4 py-3 rounded-md focus:outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md md:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
