import React from "react";
import image from "../Assets/mission.jpg"
const OurRides = () => {
  const rides = [
    {
      id: 1,
      title: "Off Road Adventure In Casca",
      date: "April 7, 2018",
      description:
        "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
      image: image, // Replace with actual image path
    },
    {
      id: 2,
      title: "First Ride Out To OFFA",
      date: "April 7, 2018",
      description:
        "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
      image: image, // Replace with actual image path
    },
    {
      id: 3,
      title: "From Lagos to Europe",
      date: "April 7, 2018",
      description:
        "We woke up to prepare for the trip back to Lagos. Breakfast was yam and sauce; Yam and egg and tea, coffee and chocolate drink.",
      image: image, // Replace with actual image path
    },
  ];

  return (
    <div className="bg-black text-white py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-red-500 uppercase text-sm tracking-widest mb-2">
          Riding Report
        </h3>
        <h2 className="text-4xl font-bold uppercase">Our Rides</h2>
        <div className="h-1 w-12 bg-red-600 mx-auto mt-2"></div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4 lg:px-16">
        {rides.map((ride) => (
          <div
            key={ride.id}
            className="max-w-sm bg-white text-black rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={ride.image}
              alt={ride.title}
              className="w-full h-60 object-fill"
            />
            {/* Content */}
            <div className="p-6 relative">
              <div className="absolute -top-4 left-4 bg-red-600 text-white text-xs uppercase px-3 py-1 font-bold rounded">
                {ride.date}
              </div>
              <h3 className="text-xl font-bold mb-2">{ride.title}</h3>
              <p className="text-gray-700 text-sm">{ride.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="text-center mt-10">
        <button className="bg-red-600 hover:bg-red-700 text-white uppercase font-bold py-3 px-6 rounded shadow">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default OurRides;
