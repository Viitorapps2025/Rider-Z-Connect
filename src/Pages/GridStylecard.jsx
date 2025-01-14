
import ClubInfo from '../Component/Clubinfo'
import back from "../Assets/gallery-8.jpg"

import Gridcard from '../Component/Gridcard'
// import Questions from '../Component/Questions'
// import Footer from '../Component/Footer'

const GridStylecard = () => {
  return (
    <div className='overflow-hidden'>
      <ClubInfo name="OFF ROAD ADVENTURE IN CASCA" background={back}/>
      <Gridcard/>
      {/* <Questions/>
      <Footer/> */}
    </div>
  )
}

export default GridStylecard
