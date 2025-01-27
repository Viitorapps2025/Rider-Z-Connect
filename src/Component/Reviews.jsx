import  { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {

   AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: false,    // Animation triggers every time the element enters the viewport
          offset: window   // Offset distance in pixels (increase this for higher delay)
      });


  // Sample data for reviews and members
  const reviews = [
    {
      comment: "Joining RIDERSCONNECT has been a game-changer for my riding journey. Their meticulously planned rides, like the Bandipur National Park trip, offer a perfect blend of adventure and serenity. Beyond the breathtaking routes, it's the camaraderie among riders that makes it unforgettable. Every ride feels like a reunion of kindred spirits sharing a passion for the open road.",
      name: "Arjun Verma, Bangalore",
      title: "Product Enthusiast",
      image: "https://via.placeholder.com/100",
      memberImage: "https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/lexrider_avata1-o6rt2rjskl9fsdkqeewpghne3xig54fet4q7cs38ew.jpg", // Member image for display
    },
    {
      comment: "Safety and adventure rarely go hand-in-hand, but RIDERSCONNECT nails it! Their attention to detail—navigators, ride managers, and expert-led sessionsmakes every expedition not just thrilling but incredibly safe. Whether it’s a jungle safari or a challenging mountain pass, I know I’m in good hands. Thank you for redefining biking culture!",
      name: "Sonal Sharma, Pune",
      title: "Frequent Shopper",
      image: "https://via.placeholder.com/100",
      memberImage: "https://via.placeholder.com/50", // Member image for display
    },
    
    {
      comment: "RIDERSCONNECT is not just about rides; it’s a family. The events are thoughtfully curated, from exploring the Spiti Valley to the inaugural Nagpur ride, but it’s the people that make the difference. The surveys, contests, and road safety sessions add purpose to our passion. Proud to be part of this amazing community!",
      name: "Akash Salve, Nagpur",
      title: "Frequent Shopper",
      image: "https://via.placeholder.com/100",
      memberImage: "https://via.placeholder.com/50", // Member image for display
    },
    {
      comment: "Every ride with RIDERSCONNECT feels like a professionally managed adventure. The Spiti Expedition was an experience of a lifetime breathtaking landscapes, well-organized stops, and meaningful conversations around bonfires. It’s more than just riding; it’s about creating stories worth telling!",
      name: "Pooja Nair, Delhi",
      title: "Frequent Shopper",
      image: "https://via.placeholder.com/100",
      memberImage: "https://via.placeholder.com/50", // Member image for display
    },
    {
      comment: "RIDERSCONNECT brings more to the table than just scenic rides. Their collaborations with brands like BluArmor and Biryani by Kilo create unique perks and experiences for riders. It’s not just about the road; it’s about the journey, the connections, and the community. I couldn’t ask for more from a motorcycle group!",
      name: "Vikram Singh, Jaipur",
      title: "Frequent Shopper",
      image: "https://via.placeholder.com/100",
      memberImage: "https://via.placeholder.com/50", // Member image for display
    },
    // Add more reviews as needed
  ];

  const [currentReview, setCurrentReview] = useState(0);

  // Automatically change review every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-100 p-8">
      {/* Left Div (Image) */}
      <div className="w-full lg:w-1/2 h-full bg-gray-300 rounded-lg overflow-hidden relative">
        <img
          src="https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/h3_img-o6rt28r7wghhsl0b9bbu8uu3qkxyzpxlh1u92co2y8.jpg"  // Replace with your image URL
          alt="Review Image"
          className="w-full h-full object-cover rounded-lg"  // Ensuring the image is fully rounded
        />
      </div>

      {/* Right Div */}
      <div className="w-full lg:w-1/2 p-1 pt-4 lg:pt-0 lg:p-24 flex flex-col" data-aos="fade-left">
        {/* Top Heading */}
        <h3 className="text-sm uppercase tracking-widest text-black font-bold mb-2">TESTIMONIALS</h3>

        {/* Main Heading */}
        <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">WHAT </h1>
        <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">MEMBERS SAY</h1>

        {/* Carousel */}
        <div className="p-4 rounded-lg mb-8 h-60 transition-all duration-1000 ease-in-out">
          {/* Comment Text with Smooth Transition */}
          <p className="text-lg lg:text-1xl text-black mb-4 transition-opacity duration-1000 ease-in-out opacity-100">
          &quot; {reviews[currentReview].comment} &quot;
          </p>
        </div>

        {/* Member Info & Buttons */}
        <div className="flex flex-col lg:flex-row mb-8 gap-4">
          {/* Left Side (Member Image) */}
          <div className="w-fit">
            <img
              src={reviews[currentReview].memberImage}  // Member image changes based on current review
              alt="Member"
              className="w-16 h-16 rounded-md"
            />
          </div>

          {/* Right Side (Member Name and Title) */}
          <div className="flex flex-col w-full lg:w-1/2 top-3">
            <h3 className="font-semibold text-lg text-black">{reviews[currentReview].name}</h3>
            <p className="text-sm text-gray-600">{reviews[currentReview].title}</p>
          </div>

          {/* Buttons (Moved Below Image) */}
          <div className="flex gap-2 mt-4 lg:mt-0">
            <button
              onClick={prevReview}
              className="flex items-center justify-center px-6 py-4 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextReview}
              className="flex items-center justify-center px-6 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
