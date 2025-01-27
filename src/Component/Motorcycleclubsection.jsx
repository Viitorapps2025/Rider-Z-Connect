import bikeImage1 from "../Assets/lexrider_banner2_2a.jpg"; // Replace with your red-tinted bike image
import bikeImage2 from "../Assets/lexrider_banner2_1a.jpg"; // Replace with your lower image

const MotorcycleClubSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            RIDERZCONNECT:{" "}
            <span className="text-yellow-600">
              The Ultimate Biker Community
            </span>
          </h1>
          <p className="text-gray-300 leading-relaxed">
            If you&apos;re looking for a dynamic, safe, and passionate community
            to ride with, you&apos;ve come to the right place. Founded with a
            vision to connect riders from all walks of life, RIDERZCONNECT has
            grown into one of the most trusted names in the motorcycle world.
            Since our inception in 2020, we have been committed to fostering a
            culture of safety, camaraderie, and adventure.
          </p>
          <p className="text-gray-300 leading-relaxed">
            At RIDERZCONNECT, we believe that riding isn&apos;t just about the
            destination it&apos;s about the journey and the bonds we create
            along the way. Whether you&apos;re a weekend warrior or a seasoned
            road enthusiast, our community offers a place where every rider is
            welcome. We host regular events, expeditions, and charity rides,
            giving back to causes that matter to us.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With chapters across India, we unite riders of all bike makes and
            models though you&apos;ll often find a strong presence of cruisers
            and adventure bikes in the mix. We embrace the diversity of
            motorcycling, and our members are bound by a shared love for the
            open road. Join us at RIDERZCONNECT, where riding is more than just
            a hobby it&apos;s a way of life. Ride safe, ride strong, and ride
            with purpose.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 font-semibold rounded-md self-start">
            EXPLORE OUR RIDES
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full h-auto">
          <img
            src={bikeImage1}
            alt="Motorcycle Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-center">
        {/* Left Image */}
        <div className="w-full h-auto">
          <img
            src={bikeImage2}
            alt="Motorcycle Rider"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Text */}
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            WE KEPT WHAT WE LOVED ABOUT THE BIKE
          </h2>
          <hr className="w-16 border-t-2 border-yellow-600 mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default MotorcycleClubSection;
