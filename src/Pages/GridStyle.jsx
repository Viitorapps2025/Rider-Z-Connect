import React from 'react'
import ClubInfo from '../Component/Clubinfo'
import image from "../Assets/gallery-6.jpg"
import CardComponent from '../Component/CardComponent'
import Questions from '../Component/Questions'
import Footer from '../Component/Footer'

const GridStyle = () => {
  return (
    <div className='overflow-hidden'>
     <ClubInfo name="REPORT GRID STYLE" background={image}/>


     <CardComponent/>
     <Questions/>
     <Footer/>
    </div>
  )
}

export default GridStyle
