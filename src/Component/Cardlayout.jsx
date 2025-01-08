import React from "react";
import { Link } from "react-router-dom";
import image1 from "../Assets/Images/WhatsApp Image 2024-12-16 at 5.54.51 PM (1).jpeg"
import image2 from "../Assets/Images/WhatsApp Image 2024-12-16 at 5.54.51 PM (2).jpeg"
import image3 from "../Assets/Images/WhatsApp Image 2024-12-16 at 5.54.51 PM (3).jpeg"
import image4 from "../Assets/Images/WhatsApp Image 2024-12-16 at 5.54.51 PM.jpeg"
import image5 from "../Assets/Images/WhatsApp Image 2024-12-16 at 5.55.51 PM (2).jpeg"
const Card = ({ image, title, price }) => {
  return (
    <div className="bg-black text-white  shadow-lg  flex flex-col  ">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-2xl   ">
        <img
          src={image}
          alt={title}
          className="w-full h-60 2xl:h-96 object-cover"
        />
        {/* Save Button */}
        <button className="absolute top-2 right-2 bg-black/80 text-white text-xs px-3 py-1 rounded-md hover:bg-red-500 transition">
          Save
        </button>
      </div>

      {/* Title Section */}
      <div className="bg-white rounded-b-2xl">
      <div className="p-4 bg-black/80">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
      </div>

      {/* Price Strip */}
     
      <div className="flex justify-between items-center p-4 bg-black/80 border-t">
        <span className="text-lg font-semibold">${price}</span>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
          View
        </button>
      </div>
      </div>
    </div>
  );
};

const CardLayout = () => {
  // Sample card data
  const cards = [
    {
      image: image1,
      title: "Rishikesh Adventure Park",
      price: "120",
    },
    {
      image: image2,
      title: "Kumbhalgarh Adventure Park",
      price: "150",
    },
    {
      image: image3,
      title: "Pushkar Adventure Park",
      price: "180",
    },
    {
      image: image4,
      title: "Paintball in Jaipur",
      price: "200",
    },
    {
      image: image5,
      title: "Off Road Jeep Safari in Jaipur",
      price: "250",
    },
  ];

  return (
    <div className="p-6  min-h-screen ">
     
      <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
    <Link to="/adventure1"><Card
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
          /></Link>      
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
