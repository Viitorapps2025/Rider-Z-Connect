
import './App.css';
import {  Routes , Route } from 'react-router-dom';

import Home from './Pages/Home';
import NavigationBar from './Component/NavigationBar';
import Breakfastrides from './Pages/Breakfastrides';
import Events from './Pages/Events';
import Expeditions from './Pages/Expeditions';
import Workshops from './Pages/Workshops';
import AdventurePark1 from './Pages/AdventurePark1';
import ScrollToTop from './Component/Scrolltotop';
import ClickToTop from './Component/ClicktoTop';
import Aboutinfo from './Pages/Aboutinfo';
import Clubhistory from './Pages/Clubhistory';
import OurMISSIONS from './Pages/OurMISSIONS';
import OurMembers from './Pages/OurMembers';
import GridStyle from './Pages/GridStyle';
import News from './Pages/News';
import GridStylecard from './Pages/GridStylecard';
import Shop from './Pages/Shop';
import ShopCard from './Component/ShopCard';
import AddtoCart from './Component/AddtoCart';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import Media from './Pages/Media';
import VerifyUser from './Pages/VerifyUser';
import ContactPage from './Pages/Contact';
import FAQ from './Pages/Faq';
import Questions from './Component/Questions';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <ScrollToTop/>
      
      <ClickToTop/>
      
      <Routes>
      
        <Route path="/" element={<LandingPage/>}/>
       
        <Route path="/home" element={<Home/>}/>
        <Route path="/breakfastrides" element={<Breakfastrides/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/expeditions" element={<Expeditions/>}/>
        <Route path="/workshops" element={<Workshops/>}/>
        <Route path="/adventure/:id" element={<AdventurePark1/>}/>
        <Route path="about-club" element={<Aboutinfo/>}/>
        <Route path="about-club/club-info" element={<Aboutinfo/>}/>
        <Route path="about-club/club-history" element={<Clubhistory/>}/>
        <Route path="about-club/our-mission" element={<OurMISSIONS/>}/>
        <Route path="about-club/our-members" element={<OurMembers/>}/>
        <Route path="/rides" element={<GridStyle/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/rides/grid/:id" element={<GridStylecard/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shopcard" element={<ShopCard/>}/>
        <Route path="/addtocart" element={<AddtoCart/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/verifyuser" element={<VerifyUser/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/faq" element={<FAQ/>}/>
      </Routes>

<Questions/>
<Footer/>
      
    </div>
  );
}

export default App;
