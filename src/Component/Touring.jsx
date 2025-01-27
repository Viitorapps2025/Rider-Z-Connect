import React from "react";

const tours = [
  {
    id: 1,
    category: "Explore",
    title: "Beautiful Beaches",
    image: "https://content.jdmagicbox.com/comp/def_content/motorcycle-dealers/shutterstock-201352892-motorcycle-dealers-9-njwgy.jpg",
  },
  {
    id: 2,
    category: "Adventure",
    title: "Mountain Trails",
    image: "https://media.istockphoto.com/id/1322687105/photo/man-sitting-at-motorcycle-at-tarmac-road-with-beautiful-natural-view-at-morning.jpg?s=612x612&w=0&k=20&c=ZgvQfrbZtxua2PdbIyMA648pdee3pXf-gUmmBV2daXQ=",
  },
  {
    id: 3,
    category: "Relax",
    title: "Countryside Retreats",
    image: "https://content.jdmagicbox.com/comp/mandsaur/c3/9999p7423.7423.101202132814.f7c3/catalogue/bhachawat-trade-vision-pvt-ltd-mandsaur-motorcycle-dealers-1sexzpqknk.jpg",
  },
  {
    id: 4,
    category: "Discover",
    title: "Cityscapes",
    image: "https://content.jdmagicbox.com/comp/def_content/motorcycle-dealers/shutterstock-203754553-motorcycle-dealers-10-lzg9i.jpg",
  },
];

const TouringStrip = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {tours.map((tour) => (
        <div
          key={tour.id}
          className="relative bg-cover bg-center rounded-lg h-96 p-6 text-white flex flex-col justify-end shadow-lg"
          style={{ backgroundImage: `url(${tour.image})` }}
        >
          <span className=" text-yellow-500 text-lg font-semibold px-3 py-1 rounded-md mb-2">
            {tour.category}
          </span>
          <h2 className="text-4xl font-bold mb-4">{tour.title}</h2>
          <button
            className="bg-yellow-400 text-gray-800 font-semibold pl-4 pr-4 pt-2 pb-2 max-w-28 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default TouringStrip;
