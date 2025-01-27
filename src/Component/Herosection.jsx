import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Section */}
      <div className="absolute inset-0 bg-opacity-75 bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}></div>
      
      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 lg:flex-row lg:items-center lg:justify-between lg:py-32">
        {/* Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="text-orange-500">SAFETY</span> <br />
            <span className="text-orange-500">DISCOVERY</span> <br />
            <span className="text-orange-500">COMMUNITY</span>
          </h1>
          <p className="mt-4 text-lg sm:mt-6 sm:text-xl">
            The lifesaving motorcycle app that will take your riding to the next level.
          </p>
          {/* App Store Buttons */}
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="inline-block px-4 py-2 bg-black text-white rounded-md shadow-md hover:bg-gray-800"
            >
              <img src="/google-play-logo.png" alt="Google Play" className="w-24" />
            </a>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-black text-white rounded-md shadow-md hover:bg-gray-800"
            >
              <img src="/app-store-logo.png" alt="App Store" className="w-24" />
            </a>
          </div>
        </div>

        {/* Phone Screens */}
        <div className="mt-10 flex items-center justify-center lg:mt-0">
          <div className="relative">
            <img
              src="/phone-screen-1.png"
              alt="Main Screen"
              className="h-72 w-auto lg:h-96"
            />
            <img
              src="/phone-screen-2.png"
              alt="Secondary Screen"
              className="absolute right-10 top-16 h-48 w-auto lg:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
