import React, { useState } from "react";

const PhotoCarousel = () => {
  const photos = [
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6f/52/21.jpg",
    "https://www.adventurush.com/wp-content/uploads/2023/09/Jeep-Safari.jpg",
    "https://www.adventurush.com/wp-content/uploads/2023/09/Jeep-safari-2.jpg",
    "https://media1.thrillophilia.com/filestore/2wp1rg14o5x3752ixf3p9uzmd8wf_photo-1467489904517-075c242c2b4f.jpg?w=400&dpr=2",
    "https://media.gettyimages.com/id/1363143763/photo/tourists-and-tracker-share-open-topped-jeep-off-road-4x4-for-animal-viewing-in-kanha-national.jpg?s=612x612&w=gi&k=20&c=fpPp073WDDyuptbRpSShzQhy62GWoBXbteZHZ2VzKRU=",
    "https://0c9896f4.rocketcdn.me/wp-content/uploads/2018/05/jeep-safari-870x555.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white">
      <div className="relative w-full bg-black/80 p-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
              >
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-orange-500 text-xl font-extrabold p-3 rounded-full hover:bg-red-700 hover:text-2xl hover:text-white transition"
          disabled={currentIndex === 0}
        >
          &lt;
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-orange-500 font-extrabold text-xl p-3 rounded-full hover:bg-red-700 hover:text-2xl hover:text-white transition"
          disabled={currentIndex >= photos.length - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PhotoCarousel;
