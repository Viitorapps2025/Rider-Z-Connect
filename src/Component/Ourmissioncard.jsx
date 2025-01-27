import React from "react";

const Ourmissioncard = () => {
  return (
    <section className="bg-black text-white px-6 py-12 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
            WE KEPT WHAT WE 
            
          </h1>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
          LOVED ABOUT THE BIKE
          </h1>

          <button className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition duration-300 w-max">
            EXPLORE OUR RIDES
          </button>
        </div>

        {/* Right Section */}
        <div className="text-gray-300 text-lg leading-relaxed">
          <p className="mb-6">
            The Club Helping Veterans is a diverse group of individuals, with
            one thing in common: We all have a tremendous love and respect for
            our country and for those who risk their lives every day, whether on
            American soil or abroad, in securing our nation’s freedoms and
            liberties. We encourage those who share this respect to join us in
            support of all those who have served and still are serving.
          </p>
          <p>
            We are a non-profit corporation. Our primary mission is to provide
            financial assistance to Heroes and their families in their time of
            need when other resources are not available in a timely manner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ourmissioncard;
