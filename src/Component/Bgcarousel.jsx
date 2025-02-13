import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Assets/Images/15.jpg";
import image2 from "../Assets/Images/16.jpg";
import image3 from "../Assets/Images/14.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Bgcarousel = () => {
  // Initialize AOS only once
  React.useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: false,    // Animation triggers every time the element enters the viewport
      offset: 200,    // Offset distance in pixels (increase this for higher delay)
    });
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative bottom-20 md:bottom-20 lg:bottom-0">
      <div className="flex flex-col md:flex-row relative min-h-screen z-0 overflow-hidden">
        {/* Sidebar */}
        <div
          className="absolute bottom-8 md:bottom-12 lg:bottom-20 left-16 p-4 sm:p-6 w-60 md:w-full z-10"
          data-aos="fade-right"
        >
          <div className="text-sm lg:text-md text-white font-bold mb-8 md:mb-16">
            RIDE AND LIVE TODAY
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold mb-2 text-white">
            WE RIDE
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold mb-4 text-white">
            TOGETHER
          </h2>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 text-sm sm:text-lg lg:text-xl">
            EXPLORE RIDES
          </button>
        </div>

        {/* Carousel */}
        <div className="w-full overflow-hidden mx-auto mt-16 sm:mt-20 md:mt-0 z-0">
          <Slider {...settings} ref={sliderRef}>
            {[image1, image2, image3].map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-screen object-cover" />
              </div>
            ))}
          </Slider>

          {/* Custom Navigation buttons */}
          <div
            className="absolute md:bottom-28 bottom-24 lg:bottom-48 left-4 right-4 flex justify-between transform -translate-y-1/2 z-30"
            data-aos="fade-up"
          >
            <button
              className="text-white bg-opacity-50 p-3 sm:p-4 rounded-full text-4xl sm:text-5xl cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            >
              ⟨
            </button>
            <button
              className="text-white bg-opacity-50 p-3 sm:p-4 rounded-full text-4xl sm:text-5xl cursor-pointer"
              onClick={() => sliderRef.current.slickNext()}
            >
              ⟩
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgcarousel;
