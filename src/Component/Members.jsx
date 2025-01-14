
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Members = () => {
 

  const images = ["https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/lexrider_team4-o6rt20alcbsieg5ckoe0rcczgqnd2lriss7cfestvs.jpg",
    "https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/lexrider_team4-o6rt20alcbsieg5ckoe0rcczgqnd2lriss7cfestvs.jpg",
    "https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/lexrider_team4-o6rt20alcbsieg5ckoe0rcczgqnd2lriss7cfestvs.jpg",
    "https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/lexrider_team4-o6rt20alcbsieg5ckoe0rcczgqnd2lriss7cfestvs.jpg"

  ]
  
    AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: false,    // Animation triggers every time the element enters the viewport
        offset: window   // Offset distance in pixels (increase this for higher delay)
    });

  return (
    <div className="w-full min-h-screen bg-black bg-opacity-90 text-white p-8">
      {/* Heading Section */}
      <div className="mb-8">
        <h3 className="text-sm uppercase tracking-widest text-white font-bold mb-2" data-aos="fade-right">Our Team</h3>
        <h1 className="text-5xl lg:text-6xl font-bold mb-2 lg:mb-8" data-aos="fade-left">MEET OUR</h1>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-20" data-aos="fade-right">CREW MEMBERS</h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden relative group" data-aos="fade-right"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Member ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Yellow Overlay */}
            <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-60 transition-all duration-300"></div>

            {/* Member Info (Default State) */}
            <div className="absolute bottom-4 left-8 transition-all duration-300 group-hover:bottom-20">
              <h2 className="text-lg font-bold text-white">Member {index + 1}</h2>
              <p className="text-md font-bold text-gray-300">Title {index + 1}</p>
            </div>
            {/* Hover State */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:bottom-4 flex flex-col items-center transition-all duration-300">
              <div className="h-[1px] bg-white w-full mb-2"></div>
              <div className="flex gap-4 pl-4 w-full">
                <FaFacebook className="text-lg hover:text-white cursor-pointer transition-colors duration-200" />
                <FaInstagram className="text-lg hover:text-white cursor-pointer transition-colors duration-200" />
                <FaTwitter className="text-lg hover:text-white cursor-pointer transition-colors duration-200" />
                <FaYoutube className="text-lg hover:text-white cursor-pointer transition-colors duration-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
