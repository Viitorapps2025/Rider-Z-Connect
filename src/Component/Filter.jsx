import React, { useState } from "react";

const Filters = () => {
  const [filters, setFilters] = useState({
    days: "Any",
    difficulty: "All",
    destination: "All",
    popularity: "Any",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 rounded-lg shadow-md ">
      {/* Number of Days */}
      <div className="flex flex-col w-full sm:w-1/4 lg:w-[40vh] mx-auto">
       
        <select
          name="Number of Days:"
          value={filters.days}
          onChange={handleChange}
          className=" max-w-64 p-2 border border-gray-300 bg-black text-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
        >
          <option value="Any">Select No of Days</option>
          <option value="1-3">1-3 Days</option>
          <option value="4-7">4-7 Days</option>
          <option value="8+">8+ Days</option>
        </select>
      </div>

      {/* Difficulty */}
      <div className="flex flex-col w-full sm:w-1/4 lg:w-[40vh]  mx-auto">
       
        <select
          name="Difficulty"
          value={filters.difficulty}
          onChange={handleChange}
          className=" max-w-64 p-2 border border-gray-300  bg-black text-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Destination */}
      <div className="flex flex-col w-full sm:w-1/4 lg:w-[40vh]  mx-auto ">
       
        <select
          name="Destination"
          value={filters.destination}
          onChange={handleChange}
          className=" max-w-64 p-2 border border-gray-300 bg-black text-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
        >
          <option value="Destination">All Destination</option>
          <option value="Mountains">Mountains</option>
          <option value="Beaches">Beaches</option>
          <option value="Cities">Cities</option>
        </select>
      </div>

      {/* Popularity */}
      <div className="flex flex-col w-full sm:w-1/4 lg:w-[40vh]  mx-auto ">
        
        <select
          name="Popularity"
          value={filters.popularity}
          onChange={handleChange}
          className=" max-w-64 p-2 border border-gray-300 bg-black text-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
        >
          <option value="Popularity">All Popularity</option>
          <option value="Popular">Popular</option>
          <option value="Trending">Trending</option>
          <option value="Hidden Gems">Hidden Gems</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
