import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LargeCard = () => {
       
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: false,     // Whether animation should happen only once
  });

  return (
    <div className="relative bg-black text-white rounded-lg shadow-lg overflow-hidden w-[190vh] mx-auto">
      {/* Big Image */}
      <div className="relative">
        <img
          src="https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/elementor/thumbs/biker-poses-on-a-motorcycle-in-city-on-sunset-e1655957903381-pqpz4k6kpulsdct943amzs4i6yj5g22p3zlf00sc8w.jpg"
          alt="Large Visual"
          className="w-full h-[110vh] object-cover"
        />

        {/* Overlay Div */}
        <div className="absolute inset-0 flex justify-start items-center">
          <div className="bg-black/80 text-left p-8 rounded-lg max-w-md ml-6">
            {/* Yellow Heading */}
            <h1 className="text-yellow-400 text-9xl uppercase font-semibold mb-2" data-aos="fade-right">
              "
            </h1>
            {/* White Title */}
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-right">
            When You Are On a Great Motorcycle, You Have The Best Seat You Will Ever Have
            </h2>
            {/* Signature */}
            <div className="mb-2">
              <img
                src="	https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/2022/06/sign.png"
                alt="Signature"
                className="w-44 h-auto"
              />
            </div>
            {/* Name and Title */}
            <p className="text-gray-400 italic">
              Mark Cardness - Founder Riderhood
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
