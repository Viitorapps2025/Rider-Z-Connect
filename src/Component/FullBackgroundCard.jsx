import React from 'react';
import member from "../Assets/Icons/group.png"
import riding from "../Assets/Icons/motorcycle-of-big-size-black-silhouette.png"
import experience from "../Assets/Icons/reputation.png"
import calander from "../Assets/Icons/calendar.png"

const FullBackgroundCard = () => {
    return (
      <>
    <div className="relative w-full h-[60vh] bg-cover bg-center flex flex-row" 
         style={{ backgroundImage: "url('https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/elementor/thumbs/biker-poses-on-a-motorcycle-in-city-on-sunset-e1655957903381-pqpz4k6kpulsdct943amzs4i6yj5g22p3zlf00sc8w.jpg')" }}>
      
      {/* Overlay for text and button */}
      <div className="absolute inset-0 bg-black/50 flex justify-start items-center p-8 ">
        <div className="flex justify-between items-start w-full max-w-4xl">
          {/* Left Section with Title and Text */}
          <div className="text-white max-w-lg -translate-y-10">
            <h1 className="text-3xl font-bold mb-4">The Best Experience Awaits You</h1>
            <p className="text-lg mb-6">Join our community and discover the amazing possibilities.</p>
          </div>

          {/* Right Section with Register Button and Get Information */}
          <div className="flex flex-col items-end relative left-80 bottom-6">
            <button className="bg-yellow-500 text-black px-2 py-2 rounded-lg font-semibold mb-4">
              Register & Ride
            </button>
            <span className="text-yellow-400 cursor-pointer ">Get Information →</span>
          </div>
        </div>
      </div>

     
    </div>

     {/* Bottom Strip with 4 Divs */}
     <div className=" -translate-y-32 bottom-0 left-0 right-0 z-50 py-6">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
       {/* Each of the 4 Divs */}
       {
       [
        {icon :'Icon 1', image : member ,title : "RIDERHOOD MEMBER"} ,
       {icon :'Icon 2',image : riding , title: "KM's OF RIDING "}, 
       {icon :'Icon 3 ,' , image : experience , title : "YEARS OF EXPERIENCE  "}, 
       {icon : 'Icon 4' , image : calander ,title : "EVENT SUCESSFULL"}].map((item, index) => (
         <div key={index} className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center">
           {/* Image Icon */}
           <img src={item.image} alt={`Icon ${index + 1}`} className="mb-4" />
           {/* Number with Plus Symbol */}
           <div className="text-yellow-500 text-3xl font-bold mb-2">{index + 200}+</div>
           {/* Title */}
           <p className="text-center">{item.title}</p>
         </div>
       ))}
     </div>
   </div>
   </>
  );
};

export default FullBackgroundCard;
