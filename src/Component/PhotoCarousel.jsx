import  { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const PhotoCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesPerDot = 3; // Number of images per dot
const numberOfDots = Math.ceil(images.length / imagesPerDot);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  console.log(currentIndex,"fyugiugiu")
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (!images.length) {
    return <div className="text-center text-white">No images available</div>;
  }

  return (
    <div className="bg-white">
      <div className="relative w-full bg-black/80 p-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex  * 100}%)`,
            }}
          >
            {images.map((photo, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
              >
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-orange-500 text-xl font-extrabold p-3 rounded-full hover:bg-red-700 hover:text-2xl hover:text-white transition"
        >
          &lt;
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-orange-500 font-extrabold text-xl p-3 rounded-full hover:bg-red-700 hover:text-2xl hover:text-white transition"
        >
          &gt;
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: numberOfDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

PhotoCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default PhotoCarousel;
