import React from 'react'
import PhotoCarousel from '../Component/PhotoCarousel'
import RatingContainer from '../Component/RatingContainer'
import Descriptioncard from '../Component/Descriptioncard'
import Footer from "../Component/Footer"
import CardLayout from '../Component/Cardlayout'

const AdventurePark1 = () => {
  return (
    <>
    <div className='bg-black overflow-hidden'>
    <div>
      <PhotoCarousel/>
    </div>
    <div className='overflow-hidden'>
      <RatingContainer/>
    
    </div>
   
    <div className='pt-10 lg:pr-72'>
       
        <Descriptioncard/>
        
    </div>
    <div className='lg:w-[200vh] lg:mx-auto'>
      <h1 className='text-white pl-8 pt-10 font-bold text-lg'>Similar Activities</h1>

      <CardLayout/>
    </div>
    <div className='pt-32'>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default AdventurePark1
