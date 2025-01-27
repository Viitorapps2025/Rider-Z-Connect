import React from "react";

const ProductCard = ({ image, title, price, oldPrice }) => {
  return (
    <div className="flex flex-col items-center  bg-white shadow-md p-4 rounded-md">
      <img src={image} alt={title} className="w-full max-w-xs rounded-md" />
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">Limited Edition</p>
      <div className="mt-2">
        <span className="line-through text-gray-400 text-sm">{oldPrice}</span>
        <span className="text-red-500 font-bold ml-2">{price}</span>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        More options
      </button>
    </div>
  );
};

const ProductSuggession = () => {
  const products = [
    {
      id: 1,
      image: "https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg", // Replace with actual image URL
      title: "RCX Logo T-Shirt",
      price: "₹799.00",
      oldPrice: "₹999.00",
    },
    {
      id: 2,
      image: "https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg", // Replace with actual image URL
      title: "RCX Logo T-Shirt - Women",
      price: "₹799.00",
      oldPrice: "₹999.00",
    },

    {
        id: 3,
        image: "https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg", // Replace with actual image URL
        title: "RCX Logo T-Shirt - Women",
        price: "₹799.00",
        oldPrice: "₹999.00",
      },
  ];

  return (
    <div className="p-6 bg-black/90 ">
      <h2 className="text-2xl font-semibold mb-6 text-white">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggession;
