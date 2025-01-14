//import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardComponent from './CardComponent';
import { Link } from 'react-router-dom';
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
      <div className='bg-black'>
      <CardComponent/>
      </div>
      {/* Explore More Button */}
      <div className='w-fit mx-auto mt-16' data-aos="fade-up">
     <Link to="rides">  <button className='py-4 px-4 text-white font-bold bg-yellow-500'>EXPLORE MORE</button></Link> 
      </div>
    </div>
  );
};

export default Ridingreport;
