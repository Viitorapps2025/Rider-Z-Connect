import { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-700 pb-4 mb-4">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h3 className="text-white text-sm sm:text-base font-medium">{item.name}</h3>
          {item.size && <p className="text-gray-400 text-sm">Size: {item.size}</p>}
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <span className="text-white text-sm sm:text-base">₹{item.price}</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="text-white font-bold p-2 rounded"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="text-white text-sm sm:text-base">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="text-white font-bold p-2 rounded"
          >
            +
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-400 hover:text-red-500"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const AddtoCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "RCX LOGO T-SHIRT",
      size: "S",
      price: 799.0,
      quantity: 1,
      image:
        "https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg",
    },
    {
      id: 2,
      name: "Wuerth Chain Cleaner Spray, 500 ml",
      price: 595.0,
      quantity: 1,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR5cwlhdujkMd00lUEURxKU_7y3__b_lK2nUiKGfy_0Wthej-lu3h6CTNsrleWswNNGwTaQT9OszJqXqHBkDxntPleFtfXtfwl_6U-ij8Fuw27-ZkYqkSGJLOg",
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Ensure quantity doesn't go below 1
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-black text-gray-300 min-h-screen p-4 sm:p-8 ">
      <Link to="/shop"> <button className="text-gray-400 text-sm mb-4 hover:text-white mt-28">
        &lt; Continue shopping
      </button></Link>

      <div className="bg-black rounded-lg shadow-lg p-4 sm:p-8">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}

        <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Have a coupon code?"
              className="bg-gray-800 text-white border border-gray-700 rounded w-full sm:w-64 px-4 py-2"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              Apply
            </button>
          </div>

          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-400 text-sm">Subtotal: </span>
            <span className="text-white text-lg font-medium">₹{subtotal.toFixed(2)}</span>
            <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600">
              Update cart
            </button>
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
