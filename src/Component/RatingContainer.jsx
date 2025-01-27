import { FaMapMarkerAlt, FaStar} from "react-icons/fa";
import PropTypes from "prop-types";
import Gutsy from "../Assets/Icons/travel.png"
import Couple from "../Assets/Icons/couple.png"
import Delivery from '../Assets/Icons/delivery.png'
import Bike from "../Assets/Icons/motorbike.png"
import Suite from "../Assets/Icons/suite.png"
import Guide from "../Assets/Icons/tour-guide.png"

const features = [
  { icon: Gutsy, text: " Gutsy Adventure" },
  { icon:Couple, text: " Couples/Group Adventure, Solo Adventure" },
  { icon: Delivery, text: " 24 hrs confirmation" },
  { icon: Suite, text: " Stay" },
  { icon: Bike, text: " Bike" },
  { icon: Guide, text: " Tour Guide" },
];

const RatingContainer = ({ 
  title, 
  location, 
  rating, 

}) => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="min-h-fit pb-6 max-height-fit bg-black/80 text-white overflow-hidden">
        {/* Content */}
        <div className="p-1 pl-8">
          {/* Big Title */}
          <h1 className="text-2xl md:text-2xl font-bold">{title}</h1>

          {/* Location */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-orange-500 text-lg mr-2" />
            <span className="text-lg font-medium">{location}</span>
          </div>

          {/* 5-Star Rating */}
          <div className="flex items-center">
            {Array(5)
              .fill()
              .map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-xl mr-1 ${
                    index < Math.round(rating) ? "text-yellow-400" : "text-gray-400"
                  }`}
                />
              ))}
            <span className="text-lg font-medium ml-2">({rating})</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-1 w-fit">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex  justify-between gap-3 items-center max-w-fit bg-black/80 pl-2 pr-2 pt-2 pb-2 rounded-lg"
              >
               <img className="max-w-fit h-5 w-8" src={feature.icon} alt={feature.text} />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes for validation
RatingContainer.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
 
};

// Example Usage
export const FeaturesCon = () => (
  <RatingContainer
    title="Rishikesh Adventure Park"
    location="New York, USA"
    rating={4.8}
    features={features}
  />
);

export default RatingContainer;
