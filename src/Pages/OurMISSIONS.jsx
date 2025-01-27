
import ClubInfo from '../Component/Clubinfo'
import image from "../Assets/rev_slidehome1_1.jpg"
import Ourmissioncard from '../Component/Ourmissioncard'
import Cardsgrid from "../Component/Cardsgrid"
import RulesSection from '../Component/Rulesection'

const OurMISSIONS = () => {
  return (
   
   <>
   <div className='overflow-hidden'>
     <ClubInfo name="OUR MISSION" background={image}/>
     <Ourmissioncard/>
     <Cardsgrid/>
     <RulesSection/>
    
     </div>
     
   
   </>
  )
}

export default OurMISSIONS
