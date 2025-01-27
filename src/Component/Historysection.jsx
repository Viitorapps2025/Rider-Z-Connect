//import React from "react";
import image from "../Assets/history-1.jpg";
import image2 from "../Assets/history-2.jpg";

const HistorySection = () => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <img
            src={image}
            alt="Motorcycle close-up"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="mt-6 p-6 bg-gray-900 rounded-lg relative text-left">
            <div className="absolute -top-8 left-6 text-red-600 text-5xl font-bold">
              “
            </div>
            <p className="text-lg font-semibold mb-4 pl-6">
            Riding the road to connect, inspire, and empower the biker community with every twist and turn.
            </p>
            <p className="pl-6 text-red-500 font-signature text-2xl">
            Arjun Shetty
            </p>
            <p className="pl-6 text-sm text-gray-400 uppercase">Founder</p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            HOW IT ALL STARTED
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Originally, RIDERZCONNECT was founded with the vision of bringing
            together a community of motorcycle enthusiasts from all walks of
            life. Initially, our focus was to create a group that catered to a
            wide variety of riders, including both cruisers and adventure
            bikers, fostering a diverse and inclusive environment. Over time, as
            the community grew, we refined our focus towards creating a safe and
            thrilling space exclusively for riders who share a love for
            motorcycling.
            <br />
            Since our inception, RIDERSZONNECT has organized regular riding
            events, with a strong emphasis on adventure and road safety. We
            began with community rides and gradually expanded to more structured
            events such as long-distance expeditions and charity rides. As the
            community grew, we began hosting competitive events, focusing on
            both the thrill of the ride and the importance of safe biking
            practices.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our events have taken us to diverse terrains across the country,
            from the winding roads of hill stations to the open highways,
            creating opportunities for our members to showcase their riding
            skills. We’ve also ventured into off-road trails, and our
            expeditions, such as the iconic Spiti Valley and upcoming national
            rides, continue to attract riders from all backgrounds, uniting them
            through a shared love for motorcycling. Through these efforts,
            RIDERZCONNECT remains dedicated to its core values: safety,
            adventure, and community.
          </p>
          <img
            src={image2}
            alt="Classic motorcycles group"
            className="w-full h-auto mt-6 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
