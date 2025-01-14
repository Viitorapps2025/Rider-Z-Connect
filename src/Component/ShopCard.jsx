//import React from 'react';
import ProductSuggession from './ProductSuggession';
import { Link } from 'react-router-dom';

const ShopCard = () => {

    
  return (
      <div>
    <div className="min-h-screen flex items-center justify-center bg-black/90 text-white p-4 ">
      <div className="max-w-4xl bg-black/90 rounded-lg shadow-lg p-8 flex flex-col md:flex-row mt-28">
        <img
          src="https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg" // Replace with your T-shirt image URL
          alt="RCX Logo T-Shirt"
          className="w-full md:w-1/2 rounded-lg max-h-96"
        />
        <div className="md:ml-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold mb-2">RCX LOGO T-SHIRT</h2>
          <p className="text-gray-400 mb-4">
            <span className="line-through">₹1000.00</span>{' '}
            <span className="font-bold text-yellow-400">₹799.00</span>{' '}
            <span className="text-green-400">You save ₹200.00 (20%)</span>
          </p>
          <label className="block mb-2" htmlFor="size">Size</label>
          <select className="w-full p-2 bg-gray-700 rounded mb-4" id="size">
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
          </select>
          <label className="block mb-2" htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            className="w-full p-2 bg-gray-700 rounded mb-4"
            min="1"
            defaultValue="1"
          />
          <div className="flex space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
              BUY NOW
            </button>
         <Link to="/addtocart">   <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
              ADD TO CART
            </button></Link>
          </div>
          <ul className="mt-4 text-sm text-gray-400 space-y-2">
            <li>💡 Introducing the RC Logo Round Neck T-Shirt, the perfect blend of style and comfort. Crafted with utmost precision, this t-shirt is designed to elevate your casual wardrobe to a whole new level.</li>
            <li>👕 Made with premium quality fabric, this t-shirt offers a soft and breathable feel, ensuring all-day comfort.</li>
            <li>🌟 The classic round neck design adds a touch of sophistication, making it suitable for any occasion.</li>
             <li>💪 Featuring the iconic RC logo embroidered on the front, this t-shirt showcases your impeccable taste in Motorbiking.</li>
             <li>🎨 Available in Black Colour only</li>
             <li>🏷️ With its versatile nature, this t-shirt can be effortlessly styled with jeans, shorts, or joggers, giving you endless outfit possibilities.</li>
             <li>💯 Bring home the RC Logo Round Neck T-Shirt and let your fashion mantra speak volumes with every step you take. Get ready to enhance your wardrobe with this must-have t-shirt that combines comfort, style, and the perfect touch of personality. Upgrade your outfit game and make a statement with this iconic piece today!</li>
<li>✨ Shop now and add a touch of RC to your wardrobe! ✨ </li>
          </ul>
        </div>
      </div>
    </div>

    <ProductSuggession/>
    </div>

  );
};

export default ShopCard;
