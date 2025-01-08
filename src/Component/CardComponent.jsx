import React from "react";
import image from "../Assets/gallery-8.jpg"
import { Link } from "react-router-dom";

const cards = [
  {
    date: "April 15, 2023",
    title: "Off Road Adventure in Casco",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
  {
    date: "April 15, 2023",
    title: "First Ride Out To OTFA",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
  {
    date: "April 15, 2023",
    title: "From Lagos to Europe",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
  {
    date: "April 15, 2023",
    title: "Bogosi Tour",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
  {
    date: "April 15, 2023",
    title: "West Africa Tour",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
  {
    date: "April 15, 2023",
    title: "Death Valley on a Motorcycle",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
  {
    date: "April 15, 2023",
    title: "Triumph America",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
  {
    date: "April 15, 2023",
    title: "First Ride Out to OTFA",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
  {
    date: "April 15, 2023",
    title: "Spring Wildflowers",
    description: "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
    image: image,
  },
];

const CardComponent = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="z-30 absolute -bottom-4 left-0 bg-red-600 text-white text-xs font-bold uppercase px-3 py-2">
                {card.date}
              </div>
            </div>
            <div className="p-8">
            <Link to="grid"><h3 className="text-2xl font-bold text-gray-800 hover:text-yellow-500">{card.title}</h3></Link>  
              <p className="text-gray-600 text-lg mt-6">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
