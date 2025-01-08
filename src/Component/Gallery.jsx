import React from 'react';

const Gallery = () => {
  const images = [
    "https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/2022/06/bikers-women-in-leather-jackets-with-motorcycles-e1655957913441.jpg", // Tall Image 1
    "https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/2022/06/friends-riding-motorcycles-on-open-road-e1655957824711.jpg", // Regular Image 2
    "https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/2022/06/man-with-backpack-riding-motorcycle-on-road-e1655957809863.jpg", // Regular Image 3
    "https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/2022/06/couple-taking-a-selfie-on-the-motorcycle-e1655957867795.jpg", // Tall Image 4
    "https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/2022/06/vintage-rebuilt-motorcycle-motorbike-caferacer-e1655957767642.jpg", // Tall Image 5
    "https://templatekit.jegtheme.com/riderhood/wp-content/uploads/sites/293/2022/06/young-woman-driving-motorcycle-e1655957751224.jpg", // Regular Image 6
  ];

  return (
    <div className="py-8 px-4">
      <div
        className="max-w-[190vh] mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-lg ${
              (index === 0 || index === 4 || index === 3) ? 'row-span-2' : ''
            }`}
          >
            {/* Image */}
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
