import React from 'react'
import ClubInfo from '../Component/Clubinfo'
import back from "../Assets/gallery-6.jpg"
import NewsCard from '../Component/NewsCard'
import Questions from "../Component/Questions"
import Footer from "../Component/Footer"
import image from "../Assets/Images/WhatsApp Image 2024-12-16 at 6.11.55 PM.jpeg"
const News = () => {
  return (
    <>
   
    <div className='overflow-hidden'>
      <ClubInfo name="NEWS" background={back}/>
    

    <div className='mt-20 mb-20 space-y-8'>

    <NewsCard image={image} title="All American Airlines flights grounded in US" description="American Airlines grounded all its flights in the US due to an unspecified technical issue on Christmas eve, according to the company and a notice on the US' Federal Aviation Administration website. An estimated timeframe has not been provided, but they're trying to fix it in the shortest possible time, the company responded to a question from a stranded flyer."/>
    <NewsCard image={image} title="All American Airlines flights grounded in US" description="American Airlines grounded all its flights in the US due to an unspecified technical issue on Christmas eve, according to the company and a notice on the US' Federal Aviation Administration website. An estimated timeframe has not been provided, but they're trying to fix it in the shortest possible time, the company responded to a question from a stranded flyer."/>
    <NewsCard image={image} title="All American Airlines flights grounded in US" description="American Airlines grounded all its flights in the US due to an unspecified technical issue on Christmas eve, according to the company and a notice on the US' Federal Aviation Administration website. An estimated timeframe has not been provided, but they're trying to fix it in the shortest possible time, the company responded to a question from a stranded flyer."/>
    <NewsCard image={image} title="All American Airlines flights grounded in US" description="American Airlines grounded all its flights in the US due to an unspecified technical issue on Christmas eve, according to the company and a notice on the US' Federal Aviation Administration website. An estimated timeframe has not been provided, but they're trying to fix it in the shortest possible time, the company responded to a question from a stranded flyer."/>
    <NewsCard image={image} title="All American Airlines flights grounded in US" description="American Airlines grounded all its flights in the US due to an unspecified technical issue on Christmas eve, according to the company and a notice on the US' Federal Aviation Administration website. An estimated timeframe has not been provided, but they're trying to fix it in the shortest possible time, the company responded to a question from a stranded flyer."/>
    <NewsCard image={image} title="All American Airlines flights grounded in US" description="American Airlines grounded all its flights in the US due to an unspecified technical issue on Christmas eve, according to the company and a notice on the US' Federal Aviation Administration website. An estimated timeframe has not been provided, but they're trying to fix it in the shortest possible time, the company responded to a question from a stranded flyer."/>
    <NewsCard image={image} title="All American Airlines flights grounded in US" description="American Airlines grounded all its flights in the US due to an unspecified technical issue on Christmas eve, according to the company and a notice on the US' Federal Aviation Administration website. An estimated timeframe has not been provided, but they're trying to fix it in the shortest possible time, the company responded to a question from a stranded flyer."/>
   
    <NewsCard image={image} title="All American Airlines flights grounded in US" description="American Airlines grounded all its flights in the US due to an unspecified technical issue on Christmas eve, according to the company and a notice on the US' Federal Aviation Administration website. An estimated timeframe has not been provided, but they're trying to fix it in the shortest possible time, the company responded to a question from a stranded flyer."/>

    </div>
     <Questions/>
     <Footer/>
     </div>
    </>

  )
}

export default News
