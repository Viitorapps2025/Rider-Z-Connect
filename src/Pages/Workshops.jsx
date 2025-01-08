import React from 'react'
import SimpleNavbar from '../Component/Simplenav'
import Filters from '../Component/Filter'
import CardLayout from '../Component/Cardlayout'
import Footer from '../Component/Footer'

const Workshops = () => {
  return (
    <div className='w-full bg-black'>
        <div className='w-1/2 mx-auto '>
      <SimpleNavbar name="Workshops"/>
      </div>
      <div className='w-[180vh] mx-auto'>
        <div>
          <h1 className='text-white font-bold pl-6 text-lg'>Showing all 5 results</h1>
        </div>
        <Filters/>
      </div>
      <div className='w-[180vh] mx-auto'>
        <CardLayout/>
      </div>
      <div className='mt-28'>
        <Footer/>
      </div>
    </div>
  )
}

export default Workshops
