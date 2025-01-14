//import React from 'react'
import ClubInfo from '../Component/Clubinfo'
import image from "../Assets/rev_slidehome1_1.jpg"
//import Questions from '../Component/Questions'
//import Footer from '../Component/Footer'
import Ourmissioncard from '../Component/Ourmissioncard'
import Cardsgrid from "../Component/Cardsgrid"
import RulesSection from '../Component/Rulesection'

const OurMISSIONS = () => {
  return (
   
   <>
   <div className='overflow-hidden'>
     <ClubInfo name="OUR MISSION" background={image}/>
     <Ourmissioncard/>
     <Cardsgrid/>
     <RulesSection/>
     {/* <Questions/> */}
     {/* <Footer/> */}
     </div>
     
   
   </>
  )
}

export default OurMISSIONS
