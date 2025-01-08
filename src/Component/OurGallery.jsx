import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurGallery = () => {

  
     AOS.init({
            duration: 2000, // Animation duration in milliseconds
            once: false,    // Animation triggers every time the element enters the viewport
            offset: window   // Offset distance in pixels (increase this for higher delay)
        });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,         // Enable automatic sliding
    autoplaySpeed: 2000,    // Set the autoplay speed (3 seconds)
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,          // Remove the previous/next arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "https://demo2.wpopal.com/lexrider/wp-content/uploads/2021/03/gallery-1.jpg",
    "https://demo2.wpopal.com/lexrider/wp-content/uploads/2021/03/gallery-1.jpg",
    "https://demo2.wpopal.com/lexrider/wp-content/uploads/2021/03/gallery-1.jpg",
    "https://demo2.wpopal.com/lexrider/wp-content/uploads/2021/03/gallery-1.jpg",
    "https://demo2.wpopal.com/lexrider/wp-content/uploads/2021/03/gallery-1.jpg",
  ];

  return (
    <div className="relative bg-black/90 pb-10">
      {/* Background Section */}
      <div
        className="relative h-[500px] bg-cover bg-center text-center text-white flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(https://imgd.aeplcdn.com/1280x720/n/cw/ec/103795/yzf-r15-right-front-three-quarter-12.jpeg?isig=0&q=100)` }}
      >
        <h4 className="text-sm uppercase tracking-wide mb-2 font-bold" data-aos="fade-down">Our Gallery</h4>
      </div>

      {/* Carousel Section */}
      <div className="relative mt-[-15%]">
        <div className="relative z-10 px-4 lg:px-10">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="p-1" data-aos="fade-left">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover rounded-md shadow-lg bg-white"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
