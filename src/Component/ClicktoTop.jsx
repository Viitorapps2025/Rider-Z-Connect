import React, { useState, useEffect } from "react";

const ClickToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-50 fixed bottom-5 right-5 pl-4 pr-4 pt-2 pb-2 bg-yellow-500 rounded-md text-white shadow-lg hover:bg-yellow-700 transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ClickToTop;
