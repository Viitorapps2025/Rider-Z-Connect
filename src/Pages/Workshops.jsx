//import React from 'react'
// import SimpleNavbar from '../Component/Simplenav'
// import Filters from '../Component/Filter'
// import CardLayout from '../Component/Cardlayout'
// import Footer from '../Component/Footer'
import WorkShopCardLayout from '../Component/WorkShopCardLayout'
import ClubInfo from '../Component/Clubinfo'
import background from "../Assets/breacumb.jpg";

const Workshops = () => {
  return (
    <div className='w-full bg-black'>
      <ClubInfo name="Workshop" background={background}/>
        <div className='w-1/2 mx-auto '>
        
      </div>
      <div className='w-[180vh] mx-auto'>
        <div>
          {/* <h1 className='text-white font-bold pl-6 text-lg'>Showing all 5 results</h1> */}
        </div>
        {/* <Filters/> */}
      </div>
      <div className='w-[180vh] mx-auto'>
     
        <WorkShopCardLayout/>
      </div>
      <div className='mt-28'>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Workshops
