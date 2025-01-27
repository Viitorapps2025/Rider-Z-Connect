//import React from 'react'
import Bgcarousel from '../Component/Bgcarousel'
import UpcomingEvent from '../Component/Upcomingevent'
//import Ourmission from '../Component/Ourmission'
import Joinevent from '../Component/Joinevent'
import Members from '../Component/Members'
import Review from '../Component/Reviews'
import Ridingreport from '../Component/Ridingreport'
import OurGallery from '../Component/OurGallery'

import FAQ from "../Pages/Faq"



const Home = () => {
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
<FAQ/>
   
      
     </div>
    </>

  )
}

export default Home
