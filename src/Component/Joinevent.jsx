import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Joinevent = () => {

    AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: false,    // Animation triggers every time the element enters the viewport
        offset: window   // Offset distance in pixels (increase this for higher delay)
    });


  return (
    <div className="w-full h-[100vh] bg-cover bg-black flex items-center justify-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1699972551268-05491ecac3fc?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
      
    >  
      <div className="text-center rounded-md">
        <h1 className="text-white text-lg font-bold mb-12" data-aos="fade-left">COME RIDE WITH US</h1>
        <p className="text-white lg:text-7xl text-5xl font-bold mb-6" data-aos="fade-right">HIMALAYAS CALLING</p>
        <button className="bg-yellow-500 text-black px-6 py-5 rounded hover:bg-yellow-600" data-aos="fade-up">
          JOIN THIS RIDE
        </button>
      </div>
      
    </div>
  );
};

export default Joinevent;
