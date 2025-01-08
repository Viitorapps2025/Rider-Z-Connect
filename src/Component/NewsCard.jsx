import React from 'react';

const NewsCard = ( props ) => {
  return (
    <div className="bg-white  rounded-lg p-4 flex flex-col md:flex-row items-start  gap-4 max-w-[800px] mt-4 shadow-md shadow-gray-500 mx-auto">
      <img
        src={props.image}
        alt={props.title}
        className="w-full md:w-64 h-60  object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{props.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{props.description}</p>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm mt-4 inline-block"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
