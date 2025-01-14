
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
// import Gallery from './Gallery';

const Questions = () => {

  
     AOS.init({
            duration: 2000, // Animation duration in milliseconds
            once: false,    // Animation triggers every time the element enters the viewport
            offset: window   // Offset distance in pixels (increase this for higher delay)
        });


  return (
    <div className="w-full bg-black/90 py-4 px-8 pb-20">
      <div className="mx-auto flex flex-wrap gap-8 justify-between">
        {/* Left Section */}
        <div className="flex-1 rounded-lg p-6 w-full md:w-[60%]">
          <h2 className="text-4xl font-bold mb-4 text-white " data-aos="fade-right">DO YOU HAVE QUESTIONS</h2>
          <h3 className="text-5xl font-semibold mb-6 text-white" data-aos="fade-left">
            DO NOT WAIT, <span className='text-yellow-500' data-aos="fade-left"> LET&apos;S TALK</span>
          </h3>
          <div className='w-full flex flex-wrap gap-12 mt-16'>
            <div className="flex items-center">
              <FaPhone className="text-yellow-500 text-sm lg:text-xl mr-4" />
             <a href="tel:+919818855952" ><span className="text-xl lg:text-3xl text-white" data-aos="fade-left">+91 9818855952</span></a> 
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-yellow-500 text-sm lg:text-xl mr-4" />
             <a href="mailto:admin@riderzconnect.com"><span className=" text-lg lg:text-3xl text-white" data-aos="fade-left">admin@riderzconnect.com</span></a> 
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 rounded-lg p-6 w-full md:max-w-[20%]">
          <h4 className="text-xl font-bold mb-10 text-white">HEAD OFFICE</h4>
          <p className="mb-2 text-gray-400 font-semibold">PLOT NO 15,</p>
          <p className="mb-2 text-gray-400 font-semibold">DLF PHASE 2,</p>
          <p className="mb-2 text-gray-400 font-semibold">GURUGRAM,</p>
          <p className="mb-2 text-gray-400 font-semibold">HARYANA-122002</p>
         <a href="https://maps.app.goo.gl/dJEMKDDiu1jbQ5Gz5"><p className="mb-2 text-yellow-500 font-semibold">VIEW MAP</p></a> 
        </div>

        {/* Right Section */}
        <div className="flex-1 rounded-lg p-6 w-full md:max-w-[20%]">
          <h4 className="text-xl font-bold mb-10 text-white">QUICK LINKS</h4>
          <Link to="/about-club">
        <p className="mb-2 text-gray-400 font-semibold cursor-pointer">About</p>
      </Link>
      <Link to="/about-club/our-mission">
        <p className="mb-2 text-gray-400 font-semibold">Our Missions</p>
      </Link>
      <Link to="/media">
        <p className="mb-2 text-gray-400 font-semibold">Gallery</p>
      </Link>
     
      <Link to="/contact">
        <p className="mb-2 text-gray-400 font-semibold">Contact</p>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default Questions;
