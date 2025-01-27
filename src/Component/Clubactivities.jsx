
import helmet from "../Assets/Icons/helmet.png" 
import support from "../Assets/Icons/customer-support (2).png"
import motorcycle from "../Assets/Icons/motorbike (1).png"

const ClubActivities = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-sm tracking-widest text-red-500 uppercase font-semibold">
          Club Activities
        </h2>
        <h1 className="text-4xl font-bold mt-2">What We Do</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white text-black p-6 rounded-md w-full sm:w-[300px] md:w-[350px] text-center shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Image for "We Ride Bikes" */}
            <img
              src={helmet} // Replace with your actual image path
              alt="We Ride Bikes"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg mb-3">We Ride Bikes</h3>
          <p className="text-gray-600">
          RIDERSCONNECT regularly organizes ride-outs that cater to all types of bikes and riding styles. From short, local routes to epic continental journeys, our rides offer 
          something for every rider, no matter your speed or experience level. Join us for unforgettable adventures on two wheels!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-6 rounded-md w-full sm:w-[300px] md:w-[350px] text-center shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Image for "We Support Charities" */}
            <img
              src={support} // Replace with your actual image path
              alt="We Support Charities"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg mb-3">We Support Charities</h3>
          <p className="text-gray-600">
            We support both local and national charities such as air ambulance,
            blood bikes, and the teenage cancer trust through the annual Stephen
            Sutton Ride.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black p-8 rounded-md w-full sm:w-[300px] md:w-[350px] text-center shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Image for "Motorcycle Shows" */}
            <img
              src={motorcycle} // Replace with your actual image path
              alt="Motorcycle Shows"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h3 className="font-bold text-lg mb-3">Motorcycle Shows</h3>
          <p className="text-gray-600">
          At RIDERSCONNECT, we pride ourselves on our diverse and impressive collection of bikes within our community. Our members ride everything from cruisers to adventure bikes, 
each one with its own unique story. We actively participate in and showcase our rides at major motorcycle shows across the country, offering a chance to see some of the finest and most 
eclectic bikes in the scene. Join us as we celebrate the art of motorcycling at these exciting events!.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition">
          See Our Activities
        </button>
      </div>
    </section>
  );
};

export default ClubActivities;
