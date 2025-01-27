import  { useState } from 'react';
//import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, description, price }) => (
  
    <div className="bg-black/90 p-4 rounded-lg shadow-sm shadow-slate-900">
      <img src={image} alt={title} className="w-full h-80 object-fill rounded-md" />
      <h3 className="text-white mt-2 font-semibold">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <p className="text-white mt-1">₹{price.toFixed(2)}</p>
    </div>
  
);

const ProductGrid = () => {
  const products = [
    {
      image: "https://img1.wsimg.com/isteam/ip/2c4cf42e-480c-417a-9268-406317adf002/ols/WhatsApp%20Image%202024-03-27%20at%201.32.52%20PM.jpeg/:/rs=w:1200,h:1200",
      title: "RCX LOGO T-SHIRT",
      description: "Comming Soon",
      price: 499,
      category: "T-SHIRTS",
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/2c4cf42e-480c-417a-9268-406317adf002/ols/RCX%20x%20BISON%20RAPTOR%20V.2%20LEVEL%202%20RIDING%20JACKET.png/:/rs=w:1200,h:1200",
      title: "RCX RAPTOR V.2 ALL SEASON RIDING JACKET",
      description: "Comming Soon",
      price: 4999,
      category: "RIDING",
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/2c4cf42e-480c-417a-9268-406317adf002/ols/OIP.jpg/:/rs=w:1200,h:1200",
      title: "BluArmor C30 Mesh Intercom",
      description: "Comming Soon",
      price: 9899,
      category: "RIDING",
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/2c4cf42e-480c-417a-9268-406317adf002/ols/WhatsApp%20Image%202025-01-08%20at%2012.43.31.jpeg/:/rs=w:1200,h:1200",
      title: "RCX LOGO T-SHIRT",
      description: "Comming Soon",
      price: 499,
      category: "T-SHIRTS",
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/2c4cf42e-480c-417a-9268-406317adf002/ols/WhatsApp%20Image%202025-01-08%20at%2012.45.42.jpeg/:/rs=w:1200,h:1200",
      title: "RCX LOGO T-SHIRT - WOMEN",
      description: "Comming Soon",
      price: 499,
      category: "T-SHIRTS",
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/2c4cf42e-480c-417a-9268-406317adf002/ols/WhatsApp%20Image%202025-01-08%20at%2013.12.28.jpeg/:/rs=w:1200,h:1200",
      title: "RCX LOGO T-SHIRT - FUL SLEEVE",
      description:"Comming Soon",
      price: 899,
      category: "T-SHIRTS",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortOption, setSortOption] = useState("popular");

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-to-high") return a.price - b.price;
    if (sortOption === "high-to-low") return b.price - a.price;
    return 0; // Default sorting
  });

  return (
    <div className="bg-black min-h-screen p-2">
      {/* Sidebar for Mobile View */}
      <div className="block sm:hidden">
        <button
          className="text-white bg-gray-700 px-4 py-2 rounded mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close Filters" : "Filters"}
        </button>
        {sidebarOpen && (
          <div className="bg-gray-800 p-4 rounded shadow-md space-y-4">
            {/* Category Filters */}
            <div className="mb-4">
              <h4 className="text-white mb-2">Categories</h4>
              {["ALL", "T-SHIRTS", "BIKE MAINTENANCE", "RIDING", "GEARS", "GADGETS", "MEN CLOTHING"].map(
                (category) => (
                  <button
                    key={category}
                    className={`w-full text-left px-4 py-2 rounded-full border-none focus:outline-none ${
                      selectedCategory === category ? "bg-gray-900 text-white" : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSidebarOpen(false);
                    }}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
            {/* Sorting Options */}
            <div>
              <h4 className="text-white mb-2">Sort By</h4>
              <select
                className="w-full bg-gray-900 text-white p-2 rounded"
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setSidebarOpen(false);
                }}
              >
                <option value="popular">Most Popular</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Horizontal Filter and Sorting for Larger Screens */}
      <div className="hidden sm:flex justify-between items-center mb-6">
        <nav className="text-white space-x-4 ml-4">
          {["ALL", "T-SHIRTS", "BIKE MAINTENANCE", "RIDING", "GEARS", "GADGETS", "MEN CLOTHING"].map(
            (category) => (
              <button
                key={category}
                className={`hover:text-gray-400 ${
                  selectedCategory === category ? "text-gray-400" : "text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            )
          )}
        </nav>
        <select
          className="bg-gray-800 text-white p-2 rounded mr-4"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="popular">Most Popular</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
        {sortedProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
