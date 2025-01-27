import React from 'react';
import video from "../Assets/Video/PPAR - WS2024 - Resized Landing Page Movie (1) (1).mp4"
const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-gray-900">
      {/* Background Video */}
     l <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video} // Replace with your video URL
        autoPlay
        loop
        muted
        playsInine
      ></video>

      
    </section>
  );
};

export default Hero;
