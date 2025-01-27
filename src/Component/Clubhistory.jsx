import  { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure TailwindCSS is included
import image from "../Assets/img-timeline.jpg"
const ClubHistory = () => {
  // State to track active year based on scroll position
  const [activeYear, setActiveYear] = useState("2022");

  // Handle scroll to set active year dynamically
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop < 150) setActiveYear("2022");
    else if (scrollTop >= 150 && scrollTop < 300) setActiveYear("2023");
    else setActiveYear("2024");
  };

  return (
    <section className="bg-black text-white py-12 px-4 md:px-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="uppercase text-red-500 font-semibold tracking-widest">
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">CLUB HISTORY</h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={image}
              alt="Club History"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Scrollable Text */}
          <div className="w-full lg:w-1/2 bg-white text-black rounded-lg shadow-lg flex">
            {/* Year Numbers (Left Side) */}
            <div className="flex flex-col items-center justify-start pt-16 px-4">
              <p
                className={`mb-6 font-bold text-xl cursor-pointer ${
                  activeYear === "2022" ? "text-yellow-600" : "text-gray-400"
                }`}
              >
                2022
              </p>
              <p
                className={`mb-6 font-bold text-xl cursor-pointer ${
                  activeYear === "2023" ? "text-yellow-600" : "text-gray-400"
                }`}
              >
                2023
              </p>
              <p
                className={`mb-6 font-bold text-xl cursor-pointer ${
                  activeYear === "2024" ? "text-yellow-600" : "text-gray-400"
                }`}
              >
                2024
              </p>

              <p
                className={`mb-6 font-bold text-xl cursor-pointer ${
                  activeYear === "2025" ? "text-yellow-600" : "text-gray-400"
                }`}
              >
                2025
              </p>
            </div>

            {/* Scrollable Text Content */}
            <div
              className="h-[95vh] overflow-y-scroll pr-4 scrollbar-hide flex-1 px-6 py-16"
              onScroll={handleScroll}
            >
              {/* 1935 Section */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-yellow-600 mb-8">2022</h3>
                <h4 className="text-2xl font-semibold mb-8">
                  The McCook Outlaws Motorcycle Club
                </h4>
                <p className="text-gray-600 leading-relaxed w-[80%] justify-start">
                Founded in 2022, RIDERZCONNECT quickly became a thriving hub for motorcycle enthusiasts across India. The vision was simple: to create a community where riders could connect, 
share their passion for motorcycling, and engage in thrilling, safe, and adventurous rides. What started as a small group of like-minded individuals grew into a national network, bringing together 
bikers from diverse backgrounds and bike genres. In its early years, RIDERZCONNECT focused on organizing local and regional rides, fostering a culture of safety and camaraderie. </p>
              </div>

              {/* 1946 Section */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-yellow-600 mb-8">2023</h3>
                <h4 className="text-2xl font-semibold mb-8">
                  Post-War Motorcycle Events
                </h4>
                <p className="text-gray-600 leading-relaxed">
                By 2023, the community expanded its reach with the launch of chapters across various cities, hosting larger rides and more structured events, including charity rides and social gatherings. 
The club became known for its emphasis on road safety, providing riders with educational sessions, safety gear partnerships, and expert-led expeditions. RIDERZCONNECT&apos;s signature rides, like 
the Spiti Valley expedition and various breakfast rides across India, became hugely popular, offering both adventure and the opportunity to give back to causes that resonated with the community.  </p>
              </div>

              {/* 1950 Section */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-yellow-600 mb-8">2024</h3>
                <h4 className="text-2xl font-semibold mb-8">
                  The Chicago Outlaws
                </h4>
                <p className="text-gray-600 leading-relaxed">
                In 2024, the club made significant strides in its partnerships with top industry brands, including collaborations with leading motorcycle apparel brands and tire companies. RIDERZCONNECT 
also formed alliances with other motorcycle clubs, further expanding its influence and reach. The club&apos;s focus on innovation and member benefits continued to set it apart, offering premium services 
like ride managers, mechanics, and navigators for paid expeditions. </p>
              </div>

              {/* 2025 Section */}

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-yellow-600 mb-8">2025</h3>
                <h4 className="text-2xl font-semibold mb-8">
                  The Chicago Outlaws
                </h4>
                <p className="text-gray-600 leading-relaxed">
                As RIDERZCONNECT enters 2025, the club stands as one of the most recognized motorcycle communities in India, offering not only an unparalleled riding experience but also a sense of belonging 
for riders who share the same passion. Also planning to launch its own Bikers App With a focus on inclusivity, safety, and adventure, RIDERZCONNECT continues to grow, inspiring the next generation
 of bikers and creating a legacy of unforgettable experiences</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubHistory;
