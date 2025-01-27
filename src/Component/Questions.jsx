
// import { FaPhone, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useRef } from 'react';

const Questions = () => {
  //const ref = useRef(null);
  //const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 })

  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: false,    // Animation triggers every time the element enters the viewport
    offset: window   // Offset distance in pixels (increase this for higher delay)
  });


  return (
    <div className="w-full bg-black/90 py-4 px-8 pb-20">
      <div className="mx-auto flex lg:flex-row md:flex-col sm:flex-col  flex-col flex-wrap gap-8 justify-between">
        {/* Left Section */}
        {/* <div className="flex-1 rounded-lg p-6 w-full md:w-[60%]">
          <h2 className="text-4xl font-bold mb-4 text-white "
           data-aos="fade-right"
           >DO YOU HAVE QUESTIONS</h2>
          <h3 className="text-5xl font-semibold mb-6 text-white"
           data-aos="fade-left"
           >
            DO NOT WAIT, <span className='text-yellow-500'
             data-aos="fade-left"
             > LET&apos;S TALK</span>
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
        </div> */}

        {/* <motion.div
          className="flex-1 rounded-lg p-6 w-full md:w-[60%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            DO YOU HAVE QUESTIONS
          </motion.h2>
          <motion.h3
            className="text-5xl font-semibold mb-6 text-white"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            DO NOT WAIT,{" "}
            <motion.span
              className="text-yellow-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              LET&apos;S TALK
            </motion.span>
          </motion.h3>
          <div className="w-full flex flex-wrap gap-12 mt-16">
            <motion.div
              className="flex items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaPhone className="text-yellow-500 text-sm lg:text-xl mr-4" />
              <a href="tel:+919818855952">
                <motion.span
                  className="text-xl lg:text-3xl text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  +91 9818855952
                </motion.span>
              </a>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaEnvelope className="text-yellow-500 text-sm lg:text-xl mr-4" />
              <a href="mailto:admin@riderzconnect.com">
                <motion.span
                  className="text-lg lg:text-3xl text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  admin@riderzconnect.com
                </motion.span>
              </a>
            </motion.div>
          </div>
        </motion.div> */}

        <motion.div
          className="flex-1 rounded-lg p-6 w-full md:w-[60%]"
          initial={{ opacity: 0 }} // Fade in from transparent
          animate={{ opacity: 1 }} // Fully visible
          transition={{ duration: 0.5 }} // Animation duration
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-white"
            initial={{ x: -100, opacity: 0 }} // Slide in from the left
            animate={{ x: 0, opacity: 1 }} // Slide to the center
            transition={{ duration: 0.6 }} // Animation duration
          >
            DO YOU HAVE QUESTIONS
          </motion.h2>

          <motion.h3
            className="text-5xl font-semibold mb-6 text-white"
            initial={{ x: 100, opacity: 0 }} // Slide in from the right
            animate={{ x: 0, opacity: 1 }} // Slide to the center
            transition={{ duration: 0.6 }} // Animation duration
          >
            DO NOT WAIT,{" "}
            <motion.span
              className="text-yellow-500"
              initial={{ scale: 0.8, opacity: 0 }} // Scale up from 80% and fade in
              animate={{ scale: 1, opacity: 1 }} // Fully visible at full size
              transition={{ duration: 0.8 }} // Animation duration
            >
              LET&apos;S TALK
            </motion.span>
          </motion.h3>

          <div className="w-full flex flex-wrap gap-12 mt-16">
            <motion.div
              className="flex items-center"
              initial={{ y: 50, opacity: 0 }} // Slide up from below
              animate={{ y: 0, opacity: 1 }} // Move to original position
              transition={{ duration: 0.6, delay: 0.2 }} // Animation duration and delay
            >
              <FaPhone className="text-yellow-500 text-sm lg:text-xl mr-4" />
              <a href="tel:+919818855952">
                <motion.span
                  className="text-xl lg:text-3xl text-white"
                  initial={{ opacity: 0 }} // Fade in
                  animate={{ opacity: 1 }} // Fully visible
                  transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
                >
                  +91 9818855952
                </motion.span>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ y: 50, opacity: 0 }} // Slide up from below
              animate={{ y: 0, opacity: 1 }} // Move to original position
              transition={{ duration: 0.6, delay: 0.4 }} // Animation duration and delay
            >
              <FaEnvelope className="text-yellow-500 text-sm lg:text-xl mr-4" />
              <a href="mailto:admin@riderzconnect.com">
                <motion.span
                  className="text-lg lg:text-3xl text-white"
                  initial={{ opacity: 0 }} // Fade in
                  animate={{ opacity: 1 }} // Fully visible
                  transition={{ duration: 0.8, delay: 0.6 }} // Animation duration and delay
                >
                  admin@riderzconnect.com
                </motion.span>
              </a>
            </motion.div>
          </div>
        </motion.div>
         {/* <motion.div
      ref={ref}
      className="flex-1 rounded-lg p-6 w-full md:w-[60%]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
 
      <motion.h2
        className="text-4xl font-bold mb-4 text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        DO YOU HAVE QUESTIONS
      </motion.h2>

  
      <motion.h3
        className="text-5xl font-semibold mb-6 text-white"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        DO NOT WAIT,{" "}
        <motion.span
          className="text-yellow-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          LET&apos;S TALK
        </motion.span>
      </motion.h3>

      <div className="w-full flex flex-wrap gap-12 mt-16">
    
        <motion.div
          className="flex items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaPhone className="text-yellow-500 text-sm lg:text-xl mr-4" />
          <a href="tel:+919818855952">
            <motion.span
              className="text-xl lg:text-3xl text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              +91 9818855952
            </motion.span>
          </a>
        </motion.div>

     
        <motion.div
          className="flex items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaEnvelope className="text-yellow-500 text-sm lg:text-xl mr-4" />
          <a href="mailto:admin@riderzconnect.com">
            <motion.span
              className="text-lg lg:text-3xl text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              admin@riderzconnect.com
            </motion.span>
          </a>
        </motion.div>
      </div>
    </motion.div> */}

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
