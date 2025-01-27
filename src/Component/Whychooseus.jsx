import React, { useState } from "react";
import why from "../Assets/why.jpg"

const WhyChooseUs = () => {
  // State to manage visibility of paragraphs for each list item
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function
  const toggleParagraph = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Content for each list item
  const benefits = [
    {
      title: "Happiness multiplies when shared",
      description:
        "Riding with a group amplifies the joy of the journey as you share experiences, laughter, and memories with fellow riders.",
    },
    {
      title: "Rides are safer",
      description:
        "Group rides ensure safety in numbers, providing support in case of emergencies or unexpected situations.",
    },
    {
      title: "Get More Attention",
      description:
        "Riding together often draws admiration and attention, turning heads wherever the group travels.",
    },
    {
      title: "Get to know more machines",
      description:
        "Being part of a ride group introduces you to different motorcycles, helping you learn about their features and performance.",
    },
    {
      title: "Be part of a Legacy",
      description:
        "Joining a club allows you to contribute to and carry forward a rich legacy of passion and love for riding.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-sm tracking-widest text-red-500 uppercase font-semibold">
          Our Benefits
        </h2>
        <h1 className="text-4xl font-bold mt-2">Why Choose Us</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {/* Left Side: Image */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={why} // Replace with your actual image path
            alt="Why Choose Us"
            className="w-full h-full object-cover brightness-50 lg:brightness-100"
          />
          <div className="absolute inset-0 bg-red-600 opacity-40 lg:hidden"></div>
        </div>

        {/* Right Side: Content */}
        <div className="bg-white text-black p-6 sm:p-8 rounded-md flex flex-col justify-center w-full lg:w-1/2 relative">
          <h3 className="text-red-500 font-bold text-lg mb-4">
            Meet new and like-minded folks
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Being part of a ride group is a great way to get that missing hint
            of novelty in your life. Each ride takes you to new places, makes
            you see new faces, and while each face comes with its own
            eccentricities, the one thing that remains a common thread among all
            is their love for rubber on tarmac and freedom.
          </p>

          {/* Benefits List */}
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleParagraph(index)}
                >
                  <span className="text-lg font-extrabold mr-3">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                  <h4 className="font-medium">{benefit.title}</h4>
                </div>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-2 ml-7 text-sm">
                    {benefit.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
