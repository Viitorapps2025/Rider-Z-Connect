
import { FaMapMarkerAlt, FaStar, FaRegMoneyBillAlt, FaRegSmile } from "react-icons/fa";
// import SimpleNavbar from "../Component/Simplenav";
// import StickyPriceBar from "./StickyPriceBar";

const RatingContainer = () => {
  return (
    <div className="bg-white overflow-hidden">
    <div className="min-h-fit pb-6 max-height-fit bg-black/80 text-white overflow-hidden ">
    

      {/* Content */}
      <div className="p-1 pl-8">
        {/* Big Title */}
        <h1 className="text-2xl md:text-2xl font-bold ">Rishikesh Adventure Park</h1>

        {/* Location */}
        <div className="flex items-center ">
          <FaMapMarkerAlt className="text-orange-500 text-lg mr-2" />
          <span className="text-lg font-medium">New York, USA</span>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center ">
          {Array(5)
            .fill()
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-400 text-xl mr-1" />
            ))}
          <span className="text-lg font-medium ml-2">(4.8)</span>
        </div>

        {/* Price Strip */}
        <div className="bg-white">
        <div className="flex items-center justify-between bg-black/80  mb-1 ">
          <span className="text-lg font-bold">$120 per person</span>
         
        </div>
        </div>

        {/* Rating Divs */}
        <div className="grid grid-cols-2  gap-1 w-fit">
          {/* First Row - 3 Divs */}
          <div className="flex items-center max-w-fit bg-black/80 pl-1 pr-1 pt-1 pb-1 rounded-lg">
            <FaStar className="text-orange-500 text-lg mr-2" />
            <span className="text-sm font-medium">Excellent Service</span>
          </div>
          <div className="flex items-center max-w-fit bg-black/80 pl-1 pr-1 pt-1 pb-1 rounded-lg">
            <FaRegMoneyBillAlt className="text-green-500 text-lg mr-2" />
            <span className="text-sm font-medium">Affordable Price</span>
          </div>
          <div className="flex items-center max-w-fit  bg-black/80 pl-1 pr-1 pt-1 pb-1 rounded-lg">
            <FaRegSmile className="text-yellow-400 text-lg mr-2" />
            <span className="text-sm font-medium">Friendly Staff</span>
          </div>

          {/* Second Row - 1 Div */}
          <div className="flex items-center max-w-fit bg-black/80 pl-1 pr-1 pt-1 pb-1 rounded-lg">
            <FaStar className="text-orange-500 text-lg mr-2" />
            <span className="text-sm font-medium">Highly Recommended</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RatingContainer;
