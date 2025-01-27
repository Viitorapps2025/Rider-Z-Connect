import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import data from "../breakfast.json"; // Update with the correct path to your JSON file

const Card = ({ image, title, price, location, date }) => (
  <div className="bg-black text-white shadow-lg flex flex-col">
    <div className="relative overflow-hidden rounded-t-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-60 2xl:h-96 object-cover"
      />
      <button className="absolute top-2 right-2 bg-black/80 text-white text-xs px-3 py-1 rounded-md hover:bg-red-500 transition">
        Save
      </button>
    </div>
    <div className="bg-white rounded-b-2xl">
      <div className="p-4 bg-black/80">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex flex-row justify-between">
          <span className="text-lg font-semibold">{location}</span>
          <span className="text-sm font-semibold">{date}</span>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 bg-black/80 border-t">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold">₹{price}</span>
          <span className="text-sm font-semibold text-yellow-600">
            Organised By: RIDERZCONNECT
          </span>
        </div>
        <div className="flex flex-col items-end">
          <a className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
            View
          </a>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};



const CardLayout = () => {
  const expeditions = data[0].events.map((event) => ({
    id: event.id, // Ensure each event has a unique `id`
    image: event.img[0],
    title: event.title,
    price: event.price,
    location: event.location,
    date: event.date,
  }));

  return (
    <div className="p-6 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expeditions.map((card) => (
          <Link to={`/adventure/${card.id}`} key={card.id}>
            <Card
              image={card.image}
              title={card.title}
              price={card.price}
              location={card.location}
              date={card.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;

