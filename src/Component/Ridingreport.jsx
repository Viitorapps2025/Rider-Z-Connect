import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Ridingreport = () => {

   AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: false,    // Animation triggers every time the element enters the viewport
          offset: window   // Offset distance in pixels (increase this for higher delay)
      });


  return (
    <div className="w-full p-8 bg-black h-auto py-16 pb-32">
      <h1 className="text-center text-white text-xl pt-24 mb-4" data-aos="fade-up">RIDING REPORT</h1>
      <p className="text-center text-white text-6xl mb-20" data-aos="fade-down">OUR RIDES</p>

      {/* Card Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-8">

        {/* Card 1 */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
          <div className="relative">
            <img
              src="https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/report-8-600x390.jpg" // Replace with your image URL
              alt="Ride 1"
              className="w-full h-64 object-cover"
            />
            {/* Yellow Bottom Div: 50% inside and 50% outside */}
            <div className="absolute bottom-0 left-10 w-3/2 h-8 bg-yellow-500 text-white flex items-center justify-start px-4 transform translate-y-1/2">
              <h2 className="font-bold text-lg">APRIL 17,2019</h2>
            </div>
          </div>
          <div className="p-10">
            <h3 className="text-2xl font-bold text-black mt-4 mb-2">Off Road Adventure In Casca</h3>
            <p className="text-gray-500 mt-8 pb-4 font-bold">
              We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
          <div className="relative">
            <img
              src="https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/report-8-600x390.jpg" // Replace with your image URL
              alt="Ride 2"
              className="w-full h-64 object-cover"
            />
            {/* Yellow Bottom Div: 50% inside and 50% outside */}
            <div className="absolute bottom-0 left-10 w-3/2 h-8 bg-yellow-500 text-white flex items-center justify-start px-4 transform translate-y-1/2">
              <h2 className="font-bold text-lg">APRIL 17,2019</h2>
            </div>
          </div>
          <div className="p-10">
            <h3 className="text-2xl font-bold text-black mt-4 mb-2">Off Road Adventure In Casca</h3>
            <p className="text-gray-500 mt-8 pb-4 font-bold">
              We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
          <div className="relative">
            <img
              src="https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/report-8-600x390.jpg" // Replace with your image URL
              alt="Ride 3"
              className="w-full h-64 object-cover"
            />
            {/* Yellow Bottom Div: 50% inside and 50% outside */}
            <div className="absolute bottom-0 left-10 w-3/2 h-8 bg-yellow-500 text-white flex items-center justify-start px-4 transform translate-y-1/2" >
              <h2 className="font-bold text-lg">APRIL 17,2019</h2>
            </div>
          </div>
          <div className="p-10">
            <h3 className="text-2xl font-bold text-black mt-4 mb-2" data-aos="fade-right">Off Road Adventure In Casca</h3>
            <p className="text-gray-500 mt-8 pb-4 font-bold">
              We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.
            </p>
          </div>
        </div>

      </div>

      {/* Explore More Button */}
      <div className='w-fit mx-auto mt-16' data-aos="fade-up">
        <button className='py-4 px-4 text-white font-bold bg-yellow-500'>EXPLORE MORE</button>
      </div>
    </div>
  );
};

export default Ridingreport;
