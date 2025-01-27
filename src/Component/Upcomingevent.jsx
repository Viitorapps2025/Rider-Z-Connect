import { useState, useEffect } from "react";
// import image from "../Assets/Images/2.png"
import helmet from "../Assets/Icons/helmet.png";
import tyre from "../Assets/Icons/tyre.png";
import workshop from "../Assets/Icons/team.png";
import speedometer from "../Assets/Icons/speedometer.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Runningnumbers from "./Runningnumbers";
import back from "../Assets/Background/SAFETY_2.jpg";
import Ourmission from "./Ourmission";
import back2 from "../Assets/Background/WhatsApp Image 2024-12-27 at 6.04.34 PM.jpg";
import Videoimg from "../Assets/modal-video-img.png";

const UpcomingEvent = () => {
  AOS.init({
    duration: 2000,
    once: false,
    offset: 200,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Set the countdown target date
  const targetDate = new Date("2025-01-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    DAYS: 0,
    HOUR: 0,
    MINUTES: 0,
    SECONDS: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
          HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
          MINUTES: Math.floor((difference / (1000 * 60)) % 60),
          SECONDS: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const events = [
    { icon: helmet, targetNumber: 185, title: "MEMBERS" },
    { icon: tyre, targetNumber: 468, title: "CLUB RIDERS" },
    { icon: workshop, targetNumber: 1561, title: "REPAIRS IN WORKSHOPS" },
    { icon: speedometer, targetNumber: 219561, title: "TOTAL KMS BY THE CLUB" },
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(
    events.map((event) => ({ number: 0, target: event.targetNumber }))
  );

  // Function to animate numbers when the element is in view
  const animateNumbers = (index) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < events[index].targetNumber) {
        count += Math.ceil(events[index].targetNumber / 100); // Increment the count to a fraction of the target number
        setAnimatedNumbers((prev) => {
          const newNumbers = [...prev];
          newNumbers[index] = {
            number: Math.min(count, events[index].targetNumber),
            target: events[index].targetNumber,
          };
          return newNumbers;
        });
      } else {
        clearInterval(interval);
      }
    }, 30); // Adjust the speed of the animation here
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animation for each event when it enters the viewport
            const index = parseInt(entry.target.dataset.index);
            animateNumbers(index);
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each event number block
    const eventElements = document.querySelectorAll(".event-number");
    eventElements.forEach((element, index) => {
      element.dataset.index = index; // Store the index in a data attribute
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const setResponsiveBackground = () => {
    const div = document.getElementById("section1");
    if (div) {
      if (window.innerWidth <= 768) {
        div.style.backgroundImage = `url(${back2})`;
      } else {
        div.style.backgroundImage = `url(${back})`;
      }
    }
  };

  useEffect(() => {
    // Set the background on component mount
    setResponsiveBackground();

    // Update the background on window resize
    window.addEventListener("resize", setResponsiveBackground);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", setResponsiveBackground);
    };
  }, []);

  return (
    <>
      <div
        id="section1"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}
        className="w-full"
      >
        <div className="w-full text-white flex flex-col lg:flex-row items-center content-center lg:items-start lg:justify-between p-6 lg:p-12 space-y-6 lg:space-y-0 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-4xl lg:text-3xl font-bold" data-aos="fade-up">
              UPCOMING EVENT
            </h1>
            <p
              className="text-sm lg:text-sm text-yellow-400"
              data-aos="fade-down"
            >
              HIMALAYAS, JAN-31st-2025
            </p>
          </div>

          {/* Countdown Timer */}
          <div
            className="flex justify-center space-x-4 p-4 rounded-md"
            data-aos="fade-right"
          >
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className=" bg-gray-950 rounded-lg p-2">
                <div className="flex flex-col items-center bg-black/90 px-2 py-2">
                  <span className="text-2xl lg:text-4xl font-bold">
                    {value}
                  </span>
                  <span className="text-sm lg:text-base w-full text-yellow-400">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          {/* <div className="bg-white p-6 lg:p-10 w-full lg:w-auto rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 " data-aos="fade-left">
          <iframe
  width="100%"
  height="auto"
  src="https://www.youtube.com/embed/FKVLsoKGV6w?autoplay=1&controls=0&modestbranding=1&rel=0&disablekb=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

            <div className="pl-4 lg:pl-10" data-aos="fade-left">
              <h1 className="text-2xl font-bold text-black">WATCH US IN ACTION</h1>
              <p className="text-lg text-yellow-400 font-bold">MORE PHOTOS & VIDEOS</p>
            </div>
          </div>
        </div> */}
          <div className="bg-white p-6  lg:p-10 w-full lg:w-auto rounded-md">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 "
              data-aos="fade-left"
            >
              {/* Trigger the modal on iframe click */}
              <div className="relative cursor-pointer w-full max-w-md">
                {/* Image */}
                <img
                  src={Videoimg}
                  alt="Video Thumbnail"
                  className="w-full rounded-lg"
                />

                {/* Button */}
                <button
                  onClick={toggleModal}
                  className="absolute inset-0 flex items-center justify-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M19.615 7.318c-.186-.7-.73-1.25-1.43-1.436C16.65 5.333 12 5.333 12 5.333s-4.65 0-6.185.549c-.7.186-1.244.736-1.43 1.436-.548 1.535-.548 4.747-.548 4.747s0 3.213.548 4.748c.186.7.73 1.25 1.43 1.436 1.535.548 6.185.548 6.185.548s4.65 0 6.185-.548c.7-.186 1.244-.736 1.43-1.436.548-1.535.548-4.748.548-4.748s0-3.212-.548-4.747zM9.75 14.75v-5.5L15 12l-5.25 2.75z" />
                  </svg>
                </button>
              </div>

              <div className="pl-4 lg:pl-10" data-aos="fade-left">
                <h1 className="text-2xl font-bold text-black">
                  WATCH US IN ACTION
                </h1>
                <p className="text-lg text-yellow-400 font-bold">
                  MORE PHOTOS & VIDEOS
                </p>
              </div>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="text-xl font-semibold">Watch Video</h3>
                  <button
                    onClick={toggleModal}
                    className="text-gray-400 hover:bg-gray-200 rounded-lg p-2"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-4">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/FKVLsoKGV6w?controls=0&modestbranding=1&rel=0&disablekb=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {/* Video Section */}
        </div>

        <Runningnumbers />
        <Ourmission />
      </div>
    </>
  );
};

export default UpcomingEvent;
