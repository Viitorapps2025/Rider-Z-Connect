import { useEffect } from "react";
import helmet from "../Assets/Icons/helmet.png";
import support from "../Assets/Icons/collaboration.png";
import community from "../Assets/Icons/group.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Ourmission = () => {
  // Initialize AOS only once
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      offset: 200, // Adjusted offset for consistent animation trigger
    });
  }, []);

  const missionData = [
    {
      id: 1,
      title: "RIDE OUTS",
      description:
        "Embark on thrilling adventures with our meticulously planned ride-outs. Tailored for bikers of all levels, our journeys cover scenic local trails, adrenaline-pumping highways, and breathtaking long-distance escapades, fostering camaraderie and unforgettable memories.",
      icon: helmet,
    },
    {
      id: 2,
      title: "SUPPORTS",
      description:
        " We stand united as a community, fostering a bond of trust and mutual support among riders. Together, we champion road safety, promote responsible biking, and create a network that uplifts and empowers each member, both on and off the road.",
      icon: support,
    },
    {
      id: 3,
      title: "COMMUNITIES",
      description:
        "Our mission goes beyond riding—we aim to build thriving communities. Through charity drives, awareness campaigns, and collaborative initiatives, we give back to society, making a meaningful difference while celebrating the spirit of unity among riders.",
      icon: community,
    },
  ];

  return (
    <div className="w-full min-h-screen pb-16 max-w-7xl mx-auto">
      <div>
        <h1 className="text-white text-center pt-32 font-bold mb-4" data-aos="fade-up">
          WHAT WE DO
        </h1>
        <p className="text-white text-center text-6xl font-bold" data-aos="fade-down">
          OUR MISSIONS
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-20 lg:space-x-8 space-y-8 lg:space-y-0 px-4">
        {missionData.map((mission) => (
          <div
            key={mission.id}
            className="w-full lg:w-1/3 overflow-hidden bg-black pt-16 pb-8 rounded-lg"
          >
            <div className="h-16 w-16 mx-auto mb-6">
              <img
                src={mission.icon}
                alt={`${mission.title} icon`}
                className="w-[70%]"
                data-aos="fade-down"
              />
            </div>
            <h1
              className="text-yellow-500 text-2xl text-center mb-6 font-bold hover:text-yellow-600"
              data-aos="fade-right"
            >
              {mission.title}
            </h1>
            <div className="w-full mx-auto">
              <p
                className="text-sm text-white text-center font-bold px-2"
                data-aos="fade-up"
              >
                {mission.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourmission;
