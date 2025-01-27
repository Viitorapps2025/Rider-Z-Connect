import React, { useState } from "react";
import image  from "../Assets/gallery-8.jpg"
const testimonials = [
  {
    id: 1,
    name: "Alex Bold",
    role: "Member",
    image: "https://via.placeholder.com/40", // Replace with actual image URL
    text: "We met some really great people that you wouldn’t necessarily expect to meet in your normal day-to-day living. It gave me a really great insight into the diverse ways Americans think.",
  },
  {
    id: 2,
    name: "Sarah Connor",
    role: "Member",
    image: "https://via.placeholder.com/40", // Replace with actual image URL
    text: "Joining this club was one of the best decisions I’ve made. I’ve learned so much and met so many like-minded people.",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Member",
    image: "https://via.placeholder.com/40", // Replace with actual image URL
    text: "The community is amazing, and I’ve gotten a lot of support from the members. It’s been an incredible journey so far.",
  },
];

const MembershipSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-black text-white relative w-full h-screen">
      {/* Background Image Section */}
      <div
        className="h-2/3 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            `url(${image})`, // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-10 lg:left-20">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
            Become a Member and <br /> Get More Benefits
          </h2>
          <p className="text-lg mb-6">187 members and the family keeps growing!</p>
          <button className="bg-red-600 hover:bg-red-700 text-white uppercase px-6 py-3 font-bold rounded shadow">
            Join the Club
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex justify-center items-center -mt-16">
        <div className="bg-white text-black rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-[30%] p-6 relative h-48">
          {/* Testimonial Content */}
          <p className="italic text-gray-700 text-center mb-4">
            "{testimonials[currentTestimonial].text}"
          </p>
          <div className="flex gap-4">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold">{testimonials[currentTestimonial].name}</h3>
              <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={handlePrev}
              className="border border-gray-300 hover:bg-gray-200 text-black p-2 rounded"
            >
              &#60;
            </button>
            <button
              onClick={handleNext}
              className="border border-gray-300 hover:bg-gray-200 text-black p-2 rounded"
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
