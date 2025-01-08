import React from 'react'
import CardLayout from '../Component/Cardlayout'
import Footer from '../Component/Footer'
import Questions from '../Component/Questions'

const Breakfastrides = () => {
  return (
    <div className='w-full bg-black overflow-hidden '>
      <div className='pt-32'>
        <div className='w-[40vh] mx-auto text-center '>
      </div>
      
      <div className='max-w-7xl mx-auto'>
        <CardLayout/>
      </div>
      </div>

      <div className='mt-28'>
        <Questions/>
        <Footer/>
      </div>
    </div>
  )
}

export default Breakfastrides
