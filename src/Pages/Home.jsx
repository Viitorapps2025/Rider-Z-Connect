import React from 'react';
import hero4 from "../Assets/Images/SAFETY (1).png"; // Ensure this path is correct
import back3 from "../Assets/Background/2.jpg"
import back5 from "../Assets/Background/3.jpg"
import back6 from "../Assets/Background/WhatsApp_Image_2024-12-26_at_1.35.05_PM.jpg"
import back7 from "../Assets/Background/Untitled_design_2.jpg"
import Footer from '../Component/Footer';
import Questions from '../Component/Questions';
import AOS from 'aos';
import phone from "../Assets/phone/1 (2).png"
import phone2 from "../Assets/phone/1 (1).png"
import phone3 from "../Assets/phone/3 (1).png"
import phone4 from "../Assets/phone/4 (1).png"
import phone5 from "../Assets/phone/5 (2).png"
import google from "../Assets/Icons/google.webp"
import appstore from "../Assets/Icons/app_store.webp"
import 'aos/dist/aos.css';
import image from "../Assets/Images/1.jpg"
import image2 from "../Assets/Background/Untitled_design_1.jpg"
import { useEffect } from 'react';

const Home = () => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: false,    // Animation triggers every time the element enters the viewport
    offset: 200     // Offset distance in pixels (increase this for higher delay)
  });

    const setResponsiveBackground = () => {
      const div = document.getElementById('section1');
      if (div) {
        if (window.innerWidth <= 768) {
          div.style.backgroundImage = `url(${image2})`;
        } else {
          div.style.backgroundImage = `url(${image})`;
        }
      }
    };
  
    useEffect(() => {
      // Set the background on component mount
      setResponsiveBackground();
  
      // Update the background on window resize
      window.addEventListener('resize', setResponsiveBackground);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', setResponsiveBackground);
      };
    }, []);



    const setResponsiveBackground2 = () => {
      const div = document.getElementById('section5');
      if (div) {
        if (window.innerWidth <= 768) {
          div.style.backgroundImage =  `url(${back6})`;
        } else {
          div.style.backgroundImage =  `url(${back5})`;
        }
      }
    };
  
    useEffect(() => {
      // Set the background on component mount
      setResponsiveBackground2();
  
      // Update the background on window resize
      window.addEventListener('resize', setResponsiveBackground2);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', setResponsiveBackground2);
      };
    }, []);




    
    const setResponsiveBackground3 = () => {
      const div = document.getElementById('section3');
      if (div) {
        if (window.innerWidth <= 768) {
          div.style.backgroundImage =  `url(${back7})`;
        } else {
          div.style.backgroundImage =  `url(${back3})`;
        }
      }
    };
  
    useEffect(() => {
      // Set the background on component mount
      setResponsiveBackground3();
  
      // Update the background on window resize
      window.addEventListener('resize', setResponsiveBackground3);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', setResponsiveBackground3);
      };
    }, []);

  return (
    <>
    <div className='overflow-hidden'>
      {/* Section 1 */}
      <div
      id="section1"
      className=" w-full h-auto min-h-screen "
      style={{
       
        backgroundSize: '100% 100%', // Stretches image to fit div
    backgroundRepeat: 'no-repeat',// Ensures the whole image fits
     // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image
      }}
    >
             <div className="w-fit mx-auto  ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between ">
            {/* Text Section */}
            <div className="text-left ml-6 lg:text-left max-w-lg lg:mr-12 text-yellow-500 mt-20 md:mt-32 lg:mt-0 ">
              <h1 className=" text-4xl font-semibold">#1</h1>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                SAFETY<br />DISCOVERY<br />COMMUNITY
              </h2>
              <p className="text-gray-300 mt-4 ">
                The lifesaving motorcycle app that will take your riding to the next level
              </p>
              <div className="flex items-center justify-center lg:justify-start mt-6 space-x-4">
                <a href="#" className="inline-block">
                  <img
                    src={google}
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src={appstore}
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </div>

            {/* Phone Image */}
            <div className="w-auto ">
              <img
                src={phone} // Replace with your actual image path
                alt="Phone showing app screens"
                className=" lg:pt-24"
              />
            </div>
          </div>
        </div>
    </div>
      

      {/* section2 */}


   
    <section className="relative bg-black text-white py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row  lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
          <img
            src={phone2} // Replace with your image path
            alt="Accident Detected Screen"
            className=""
          />
        
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 lg:ml-12 max-w-lg  lg:text-left text-yellow-500">
          <h1 className=" text-4xl font-semibold">#2</h1>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 leading-snug">
            FEEL SAFE <br /> WHILE RIDING
          </h2>
          <p className="text-gray-300 mt-4">
            Automatic crash detection using algorithms that detect accidents. In
            case of an accident, your Safety Contacts will be notified of your
            position.
          </p>
        </div>
      </div>

    
    </section>







    {/* section3 */}

    <div
      className="w-full h-auto min-h-screen "
      id="section3"
      style={{
       
        backgroundSize: '100% 100%', // Stretches image to fit div
    backgroundRepeat: 'no-repeat',// Ensures the whole image fits
     // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image
      }}
    >
             <div className="w-fit mx-auto  ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="ltext-left ml-6 lg:text-left max-w-lg lg:mr-12 text-yellow-500 mt-20 lg:mt-0">
              <h1 className=" text-4xl font-semibold">#3</h1>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                PLAN YOUR <br />ADVENTURE
              </h2>
              <p className="text-gray-300 mt-4 pr-2">
              Plan and customize different routes for tomorrows adventures
              </p>

              <p className="text-gray-300 mt-4 pr-2">
              Our Trip Planner makes it easy finding the best roads to your destination
              </p>
             
            </div>

            {/* Phone Image */}
            <div className="w-auto ">
              <img
                src={phone3} // Replace with your actual image path
                alt="Phone showing app screens"
                className=" lg:default:pt-20"
              />
            </div>
          </div>
        </div>
    </div>





      {/* section4 */}


   
      <section className="relative bg-black text-white py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            src={phone4} // Replace with your image path
            alt="Accident Detected Screen"
            className=""
          />
        
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 lg:ml-12 max-w-lg  lg:text-left text-yellow-500">
          <h1 className=" text-4xl font-semibold">#4</h1>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 leading-snug">
            EXPLORE YOUR <br /> SURROUNDINGS
          </h2>
          <p className="text-gray-300 mt-4">
          Discover the best routes made by other bikers or drive your own using Turn-by-Turn Navigation.
          </p>
        </div>

        <div className=" lg:hidden">
          <img
            src={phone4} // Replace with your image path
            alt="Accident Detected Screen"
            className=""
          />
        
        </div>
      </div>

     
    </section>

    
    {/* secction5 */}
    <div
      className="w-full h-auto min-h-screen bg-cover"
      id="section5"
      style={{
      
        backgroundSize: '100% 100%', // Stretches image to fit div
    backgroundRepeat: 'no-repeat',// Ensures the whole image fits
     // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image
      }}
    >
             <div className="w-fit mx-auto   ">
          <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between">
            {/* Text Section */}
            <div className="ltext-left ml-6 lg:text-left max-w-lg lg:mr-12 text-yellow-500 mt-20 lg:mt-0">
              <h1 className=" text-4xl font-semibold">#5</h1>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                TRACK YOUR <br />PROGRESS
              </h2>
              <p className="text-gray-300 mt-4">
              Get statistics for your rides and develop your driver profile
              </p>

              <p className="text-gray-300 mt-4">
              Plan your upcoming trips with your friends or share ride tips in the chat


              </p>
             
            </div>

            {/* Phone Image */}
            <div className="w-auto ">
              <img
                src={phone5} // Replace with your actual image path
                alt="Phone showing app screens"
                className=" lg:pt-20"
              />
            </div>
          </div>
        </div>
    </div>



      <Questions />
      {/* Footer */}
      <Footer />

      </div>
     
    </>
  );
};

export default Home;
