//import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardComponent = ({ cards }) => {
  console.log(cards)
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
              <Link to={`/rides/grid/${card.id}`}>
                <h3 className="text-2xl font-bold text-gray-800 hover:text-yellow-500">
                  {card.title}
                </h3>
              </Link>
              <p className="text-gray-600 text-lg mt-6">{card.introduction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes Validation
CardComponent.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardComponent;





