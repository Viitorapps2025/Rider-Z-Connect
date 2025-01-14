//import React from 'react'
import ClubInfo from '../Component/Clubinfo'
import back from "../Assets/gallery-6.jpg"
import NewsCard from '../Component/NewsCard'
// import Questions from "../Component/Questions"
// import Footer from "../Component/Footer"
//import image from "../Assets/Images/WhatsApp Image 2024-12-16 at 6.11.55 PM.jpeg"
const News = () => {
  return (
    <>
   
    <div className='overflow-hidden'>
      <ClubInfo name="NEWS" background={back}/>
    

    <div className='mt-20 mb-20 space-y-8'>

    <NewsCard image="https://images.hindustantimes.com/auto/img/2025/01/08/600x338/BMW_R_1300_GS_Adventure_1720249641572_1736306899842.jpg" title="BMW R 1300 GS Adventure teased ahead of launch" description="In India, there are 24 BMW bikes that are featured on HT Auto, with the top picks being the BMW S 1000 RR, BMW M 1000 RR, BMW S 1000 R, BMW K 1600 GTL, BMW M 1000 R. These models have an ex-showroom price starting at Rs. 19 Lakhs. To explore the on-road price, available offers, specifications, and additional features of these vehicles, feel free to check them out." link = "https://auto.hindustantimes.com/new-bikes/bmw"/>
    <NewsCard image="https://images.drivespark.com/webp/img/2025/01/hero-xpulse-210-teased-cover-jpg-1736577051769_1736577053047-600x338.jpg" title="Auto Expo 2025: Hero MotoCorp To Showcase New Motorcycles Including Xpulse 210, Xtreme 250R & Karizma XMR 250" description="Hero MotoCorp is gearing up to showcase its latest offerings at the Bharat Mobility Global Expo. The company aims to strengthen its position as a premium motorcycle manufacturer in India. With models like the Karizma XMR, Mavrick 440, and scooters such as the Xoom 110 and Destini 125, Hero is making significant strides in the market. These vehicles reflect a vibrant and dynamic approach to design and performance." link = "https://www.drivespark.com/two-wheelers/2025/auto-expo-2025-hero-motocorp-upcoming-models-011-064083.html"/>
    <NewsCard image="https://images.drivespark.com/webp/img/2025/01/bmw-motorrad-launches-new-models-at-auto-expo-2025-1736430153983-600x338.jpg" title="BMW Motorrad At Bharat Mobility Global Expo 2025: To Launch R 1300 GS And S1000RR" description="BMW Motorrad is gearing up to introduce the eagerly awaited BMW R 1300 GS Adventure and BMW S 1000 RR models. These new motorcycles are expected to set new benchmarks in their categories, offering riders the best of what they can get." link=" https://www.drivespark.com/two-wheelers/2025/bmw-motorrad-bharat-mobility-global-expo-2025-launches-011-064011.html?ref_source=DS-EN&ref_medium=Article-Page&ref_campaign=More-Articles-DMP&ref_content=64083-p1"/>
    </div>
     {/* <Questions/>
     <Footer/> */}
     </div>
    </>

  )
}

export default News
