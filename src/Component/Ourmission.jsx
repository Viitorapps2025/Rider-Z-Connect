import React from 'react'
import helmet from "../Assets/Icons/helmet.png"
import support from "../Assets/Icons/collaboration.png"
import community from "../Assets/Icons/group.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ourmission = () => {


  
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: false,    // Animation triggers every time the element enters the viewport
      offset: window   // Offset distance in pixels (increase this for higher delay)
  });
      


  return (
    <div className=' w-full min-h-screen pb-16 max-w-7xl mx-auto'>
      <div>
        <h1 className='text-white text-center pt-32 font-bold mb-4' data-aos="fade-up">WHAT WE DO</h1>
        <p className='text-white text-center text-6xl font-bold' data-aos="fade-down">OUR MISSIONS</p>
      </div>

      <div className='flex flex-col lg:flex-row mt-20 lg:space-x-8 space-y-8 lg:space-y-0 px-4'>
        {/* Ride Outs Section */}
        <div className='w-full lg:w-1/3  overflow-hidden bg-black pt-16 pb-8 rounded-lg'>
          <div className='h-16 w-16 mx-auto mb-6'>
            <img src={helmet} alt="icon" className='w-[70%]' data-aos="fade-down" />
          </div>
          <h1 className='text-yellow-500 text-2xl text-center mb-6 font-bold hover:text-yellow-600 ' data-aos="fade-right">RIDE OUTS</h1>
          <div className="w-full mx-auto">
            <p className='text-sm text-white text-center font-bold px-2' data-aos="fade-up">
              Lex Rider regularly organises ride-outs suitable for all types of bikes and speeds. Our ride-outs range from short, local routes, to continental travel.
            </p>
          </div>
        </div>

        {/* Supports Section */}
        <div className='w-full lg:w-1/3  overflow-hidden bg-black pt-16 pb-8 rounded-lg'>
          <div className='h-16 w-16 mx-auto mb-6'>
            <img src={support} alt="icon" className='w-[70%]' data-aos="fade-down" />
          </div>
          <h1 className='text-yellow-500 text-2xl text-center mb-6 font-bold hover:text-yellow-500 ' data-aos="fade-right">SUPPORTS</h1>
          <div className="w-full mx-auto">
            <p className='text-sm text-white text-center font-bold px-2' data-aos="fade-up" >
              Establish a brotherhood of other like minded bikers who take an oath to stand with us, to support and defend the Constitution against all enemies, foreign and domestic.
            </p>
          </div>
        </div>

        {/* Communities Section */}
        <div className='w-full lg:w-1/3  overflow-hidden bg-black pt-16 pb-8 rounded-lg'>
          <div className='h-16 w-16 mx-auto mb-6'>
            <img src={community} alt="icon" className='w-[70%]' data-aos="fade-down" />
          </div>
          <h1 className='text-yellow-500 text-2xl text-center mb-6 font-bold hover:text-yellow-500 ' data-aos="fade-right">COMMUNITIES</h1>
          <div className="w-full mx-auto">
            <p className='text-sm text-white text-center font-bold px-2' data-aos="fade-up">
              Provide an opportunity to give back to communities as well as provide assistance to veterans related injuries via charities, benefits, and donations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourmission;
