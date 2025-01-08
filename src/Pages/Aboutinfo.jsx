import React from 'react'
import ClubInfo from '../Component/Clubinfo'
import MotorcycleClubSection from '../Component/Motorcycleclubsection'
import ClubActivities from '../Component/Clubactivities'
import Runningnumbers from '../Component/Runningnumbers'
import WhyChooseUs from '../Component/Whychooseus'
import RecentPosts from '../Component/Recentpost'
import RidingSection from '../Component/Ridingsection'
import background from "../Assets/breacumb.jpg";
import Questions from '../Component/Questions'
import Footer from '../Component/Footer'


const Aboutinfo = () => {
  return (
    <>
    <div className='overflow-hidden'>
   <ClubInfo name="CLUB INFO" background={background}/>
   <MotorcycleClubSection/>
   <ClubActivities/>
   <Runningnumbers/>
   <WhyChooseUs/>
   <RecentPosts/>
   <RidingSection/>
  
   <Questions/>
   <Footer/>

    </div>
  
   </>
  )
}

export default Aboutinfo
