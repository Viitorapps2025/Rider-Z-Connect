//import React from 'react'
//import SimpleNavbar from '../Component/Simplenav'
import Filters from '../Component/Filter'
import CardLayout from '../Component/Cardlayout'
import ClubInfo from '../Component/Clubinfo'
import background from "../Assets/breacumb.jpg";
//import Footer from '../Component/Footer'

const Expeditions = () => {
  return (
    <div className='w-full bg-black'>
       <ClubInfo name="Expeditions" background={background}/>
        <div className='w-1/2 mx-auto '>
      {/* <SimpleNavbar name="Expeditions"/> */}
      </div>
      <div className='w-full mx-auto'>
        <div>
          <h1 className='text-white font-bold pl-6 text-lg'>Showing all 5 results</h1>
        </div>
        <Filters/>
      </div>
      <div className='w-[100%] mx-auto'>
        <CardLayout/>
      </div>
     
    </div>
  )
}

export default Expeditions
