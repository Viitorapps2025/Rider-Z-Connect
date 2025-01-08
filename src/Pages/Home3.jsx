import React from 'react'
import Bgcarousel from '../Component/Bgcarousel'
import UpcomingEvent from '../Component/Upcomingevent'
import Ourmission from '../Component/Ourmission'
import Joinevent from '../Component/Joinevent'
import Members from '../Component/Members'
import Review from '../Component/Reviews'
import Ridingreport from '../Component/Ridingreport'
import OurGallery from '../Component/OurGallery'
import Questions from '../Component/Questions'
import Footer from '../Component/Footer'

const Home3 = () => {
  return (
    <>
    <div className='overflow-hidden bg-black'>
    <div>
      <Bgcarousel/>
    </div>
     <div>
        <UpcomingEvent/>
     </div>
    
     <div>
      <Joinevent/>
     </div>
     <div>
      <Members/>
     </div>

     <div>
      <Review/>
     </div>
     <div>
      <Ridingreport/>
     </div>
     <div>
      <OurGallery/>
     </div>

     <div>
      <Questions/>
     </div>
     <div>
      <Footer/>
     </div>
      
     </div>
    </>

  )
}

export default Home3
