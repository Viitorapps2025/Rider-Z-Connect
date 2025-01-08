import React from 'react'
import ClubInfo from '../Component/Clubinfo'
import image from "../Assets/gallery-8.jpg"
import HierarchySection from '../Component/Hierarchysection'
import Members from '../Component/Members'
import Reviews from "../Component/Reviews"
import Ridingsection from "../Component/Ridingsection"
import Questions from '../Component/Questions'
import Footer from '../Component/Footer'
const OurMembers = () => {
  return (
    <div className='bg-black overflow-hidden'>
      <ClubInfo name="Our Members" background={image}/>
      <HierarchySection/>
      <Members/>
      <div className='mt-32 mb-32'>
      <Reviews/>
      </div>
      <Ridingsection/>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default OurMembers
