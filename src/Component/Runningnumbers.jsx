import React from 'react'
import image from "../Assets/Images/2.png"
import helmet from "../Assets/Icons/helmet.png"
import tyre from "../Assets/Icons/tyre.png"
import workshop from "../Assets/Icons/team.png"
import speedometer from "../Assets/Icons/speedometer.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState , useEffect } from 'react'
import back from "../Assets/Background/SAFETY_2.jpg"
import Upcomingevents from "../Component/Upcomingevent"
const Runningnumbers = () => {

    AOS.init({
        duration: 2000,
        once: false,
        offset: 200,
      });
    
      // Set the countdown target date
      const targetDate = new Date("2024-12-31T23:59:59").getTime();
    
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
        { icon: helmet, targetNumber: 185, title: 'MEMBERS' },
        { icon: tyre, targetNumber: 468, title: 'CLUB RIDERS' },
        { icon: workshop, targetNumber: 1561, title: 'REPAIRS IN WORKSHOPS' },
        { icon: speedometer, targetNumber: 219561, title: 'TOTAL KMS BY THE CLUB' },
      ];
    
      const [animatedNumbers, setAnimatedNumbers] = useState(
        events.map(event => ({ number: 0, target: event.targetNumber }))
      );
    
      // Function to animate numbers when the element is in view
      const animateNumbers = (index) => {
        let count = 0;
        const interval = setInterval(() => {
          if (count < events[index].targetNumber) {
            count += Math.ceil(events[index].targetNumber / 100); // Increment the count to a fraction of the target number
            setAnimatedNumbers(prev => {
              const newNumbers = [...prev];
              newNumbers[index] = { number: Math.min(count, events[index].targetNumber), target: events[index].targetNumber };
              return newNumbers;
            });
          } else {
            clearInterval(interval);
          }
        }, 30); // Adjust the speed of the animation here
      };
    
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Trigger the animation for each event when it enters the viewport
              const index = parseInt(entry.target.dataset.index);
              animateNumbers(index);
              observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
          });
        }, { threshold: 0.5 });
    
        // Observe each event number block
        const eventElements = document.querySelectorAll('.event-number');
        eventElements.forEach((element, index) => {
          element.dataset.index = index; // Store the index in a data attribute
          observer.observe(element);
        });
    
        return () => observer.disconnect();
      }, []);


  return (
   

    <div className="w-full  bg-cover bg-center bg-opacity-15 flex items-center justify-center py-12 mt-28 lg:mt-0 " 
   >

             
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-black/80 text-white event-number"
              data-aos="fade-up"
            >
              <div className="text-4xl mb-4">
                <img src={event.icon} alt="" className="w-12" />
              </div>
              <div className="text-4xl font-bold mb-4 text-yellow-500">
                {animatedNumbers[index]?.number}
              </div>
              <div className="w-full h-1 bg-yellow-400 mb-4"></div>
              <div className="text-md font-medium">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Runningnumbers
