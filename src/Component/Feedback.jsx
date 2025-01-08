import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Feedback = () => {
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full bg-black/80 text-white py-12 px-8 flex flex-col md:flex-row gap-8">
      {/* Left Div */}
      <div className="w-full md:w-1/4 space-y-6">
        <div className="flex items-start space-x-4">
          <div className="text-green-500 text-2xl">✔️</div>
          <p>Point 1: Excellent Service</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-green-500 text-2xl">✔️</div>
          <p>Point 2: Quality Assurance</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-green-500 text-2xl">✔️</div>
          <p>Point 3: Customer Satisfaction</p>
        </div>

        {/* Progress Bars */}
        <div>
          <h3 className="font-bold mb-2">Heading 1</h3>
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <h3 className="font-bold mb-2">Heading 2</h3>
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
          <h3 className="font-bold mb-2">Heading 3</h3>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>

      {/* Middle Div */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="https://www.shutterstock.com/image-photo/friends-senior-young-man-walking-260nw-2223478821.jpg"
          alt="Feedback Visual"
          className="rounded-lg shadow-lg  w-[80vh] h-[45vh] lg:h-[87vh]"
        />
      </div>
      

      
      {/* Right Div with Carousel */}
      <div className="w-full md:w-[60vh] h-[60vh] lg:h-[65vh] space-y-6 lg:-translate-x-40  translate-y-16  bg-gray-950 bg-opacity-90">
        <div className="sticky top-0  py-2">
          <h3 className="text-3xl font-bold pl-12 pt-10">Our Member Say</h3>
        </div>

        <Slider {...carouselSettings}>
          {[
            {
              comment: ' be converted to one of those with {{Resbox}}',
              name: 'John Doe',
              role: 'Member',
              avatar: 'https://www.shutterstock.com/image-photo/men-talking-260nw-326140295.jpg',
            },
            {
              comment: 'Loved the quality!',
              name: 'Jane Smith',
              role: 'Member',
              avatar: 'https://www.shutterstock.com/image-photo/men-talking-260nw-326140295.jpg',
            },
            {
              comment: 'Great support!',
              name: 'Mike Johnson',
              role: 'Member',
              avatar: 'https://www.shutterstock.com/image-photo/men-talking-260nw-326140295.jpg',
            },
          ].map((feedback, index) => (
            <div
              key={index}
              className="p-16 w-80 h-[65vh] rounded-lg shadow-lg space-y-4"
            >
              <p className="italic">{`"${feedback.comment}"`}</p>
              {/* Rating Stars */}
              <div className= "text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              {/* Member Details */}
              <div className="flex items-center space-x-4">
                <img
                  src={feedback.avatar}
                  alt={`Avatar of ${feedback.name}`}
                  className="rounded-full w-14 h-14"
                />
                <div>
                  <h4 className="font-bold">{feedback.name}</h4>
                  <p className="text-gray-400 text-sm">{feedback.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
