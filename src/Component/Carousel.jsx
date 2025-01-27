import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../Assets/Images/WhatsApp Image 2024-12-16 at 5.54.51 PM (1).jpeg"
import image2 from "../Assets/Images/WhatsApp Image 2024-12-16 at 5.54.51 PM (2).jpeg"
import image3 from "../Assets/Images/WhatsApp Image 2024-12-16 at 5.54.51 PM (3).jpeg"
//import image4 from "../Assets/Images/WhatsApp Image 2024-12-16 at 6.11.55 PM.jpeg";

const Carousel = () => {
  const carouselRef = useRef(null);

  const items = [
    { id: 1, image: image1, title: 'Breakfast Rides' ,link: "/breakfastrides" },
    
    { id: 2, image: image2, title: 'Expeditions' ,link:"/expeditions" },
    { id: 3, image: image3, title : "workshops" , link : "/workshops" },
   
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: 300, // Adjust scroll distance based on card width
          behavior: 'smooth',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden  max-w-7xl lg:w-full">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center "  // Adjusts layout for small screens
        ref={carouselRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-none  p-3 " // Full width for small screens, 50% on medium, 25% on large, 20% on extra large
          >
            <Link to={item.link}>
              <div className="bg-white rounded-2xl border border-black overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 lg:h-80 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center bg-black/80 text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
