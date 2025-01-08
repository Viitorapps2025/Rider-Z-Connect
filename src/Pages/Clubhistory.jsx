import React from 'react'
import ClubInfo from '../Component/Clubinfo'
import image from "../Assets/lexrider_banner2_2a.jpg"
import HistorySection from '../Component/Historysection'
import ClubHistory from '../Component/Clubhistory'
import Experience from '../Component/Experience'
import RidingSection from '../Component/Ridingsection'
import Questions from '../Component/Questions'
import Footer from '../Component/Footer'

const Clubhistory = () => {
  return (
    <div className='overflow-hidden'>
       <ClubInfo name="CLUB HISTORY" background={image}/>
       <HistorySection/>
       <ClubHistory/>
       <Experience/>
       <RidingSection/>
       <Questions/>
       <Footer/>
    </div>
  )
}

export default Clubhistory
