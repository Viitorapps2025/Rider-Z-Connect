import React from "react";

const Cardsgrid = () => {
  const cards = [
    {
      id: "#1",
      title: "PURPOSE",
      content:
        "To make motorcycling communities, as well as the public at large, aware that people are serious motorcyclists and deserve such recognition.",
    },
    {
      id: "#2",
      title: "UNITY",
      content:
        "To unite with various organizations for the purpose of supporting charitable functions, and the improved communities such deserve.",
    },
    {
      id: "#3",
      title: "LEADERSHIP",
      content:
        "To lead our youth towards a positive direction such that life may be successful without drugs and violence such recognition.",
    },
    {
      id: "#4",
      title: "EDUCATION",
      content:
        "To make available, information on safe courses and to provide assistance to novice riders, through mentoring of good sportsmanship and motorcycle.",
    },
    {
      id: "#5",
      title: "ENCOURAGEMENT",
      content:
        "To show everyone, that they have limitless potential and can accomplish any goal or dream of good sportsmanship and motorcycle responsibility.",
    },
    {
      id: "#6",
      title: "RECREATION",
      content:
        "To enhance the sheer enjoyment of motorcycling while maintaining the integrity of good sportsmanship and motorcycle responsibility.",
    },
  ];

  return (
    <div className="bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-yellow-500 text-black p-12 rounded-lg shadow-lg relative border border-yellow-500  "
          >
            <div className="text-black text-3xl  font-bold ">
              {card.id}
            </div>
            <h2 className="text-xl lg:text-2xl font-bold mb-10 mt-20">{card.title}</h2>
            <p className="text-black">{card.content}</p>
            <div className="absolute inset-0 bg-no-repeat bg-bottom opacity-10 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-full h-full"
              >
                {/* Add any optional SVG texture */}
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardsgrid; 
