import React from 'react';
import member from "../Assets/Icons/user (1).png";
import community from "../Assets/Icons/sociology.png";
import support from "../Assets/Icons/customer-support (2).png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {

  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: false,     // Whether animation should happen only once
  });

  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <div className="flex flex-col md:flex-row bg-black/80 text-white rounded-lg shadow-lg">
        {/* Left Div for Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/elementor/thumbs/biker-poses-on-a-motorcycle-in-city-on-sunset-e1655957903381-pqpz4k6kpulsdct943amzs4i6yj5g22p3zlf00sc8w.jpg"
            alt="Big Visual"
            className="rounded-lg w-full h-[60vh] object-cover md:h-[100vh]"
          />
        </div>

        {/* Right Div for Text */}
        <div className="w-full md:w-1/2 relative mt-6 md:mt-0 md:ml-6 pt-6 pb-0">
          {/* Background 'About' Text */}
          <div className="absolute top-0 left-0 text-5xl md:text-9xl font-bold text-black opacity-50" data-aos="fade-left">
            ABOUT
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 px-4 md:px-6">
            {/* Title in Yellow */}
            <h1 className="text-yellow-400 text-lg md:text-2xl uppercase font-bold mb-2" data-aos="fade-left">
              About Riderhood
            </h1>
            {/* Big White Title */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-left">
              We Are The Best Motorcycle Club In The World Since 1988
            </h2>
            {/* Description Text */}
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud tempor dolore adispa
            </p>

            {/* Four Divs with Icon, Title, and Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <img
                  src={member}
                  alt="Ride Together"
                  className="w-14 h-14 rounded-sm"
                />
                <div>
                  <h3 className="font-bold text-base md:text-lg">Ride Together</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <img
                  src={community}
                  alt="Active Community"
                  className="w-14 h-14 rounded-sm"
                />
                <div>
                  <h3 className="font-bold text-base md:text-lg">Active Community</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <img
                  src={support}
                  alt="Support Custom"
                  className="w-14 h-14 rounded-sm hover:bg-yellow-500"
                />
                <div>
                  <h3 className="font-bold text-base md:text-lg">Support Custom</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex items-start justify-center w-full md:w-64 mt-2 sm:mb-2 md:mt-0">
                <button className="pl-3 pr-3 pt-2 pb-2 max-w-40 mt-4 bg-yellow-500 font-bold hover:bg-white hover:text-yellow-500 w-full text-center rounded-lg">
                  VIEW HISTORY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
