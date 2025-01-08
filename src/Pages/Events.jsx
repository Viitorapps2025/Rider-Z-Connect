import React from 'react'
import Hero from '../Component/Hero'
import Name from '../Component/Name'
import Carousel from '../Component/Carousel'
import Footer from '../Component/Footer'


const Events = () => {
  return (
    <>
      <div className='bg-black overflow-hidden'>
        <div className='bg-black '>
          <Hero />

          <div className='mt-10 md:mb-10 lg:mb-0 '>
            <Name />
          </div>

        </div>
        <div className="min-h-fit flex items-center justify-center  pb-32 lg:pb-0 mb-32 ">
          <Carousel />
        </div>
        <div>
          <Footer />
        </div>
      </div>

    </>

  )
}

export default Events
