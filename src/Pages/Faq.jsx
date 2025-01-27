//import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is RIDERZCONNECT?",
      answer:
        "RIDERZCONNECT is a motorcycle community that brings riders together for safe, adventurous, and engaging rides and events across India.",
    },
    {
      question: "Who can join RIDERZCONNECT?",
      answer:
        "Anyone aged 18 years or above, with a motorcycle ranging from 100cc to 1500cc, can join our community.",
    },
    {
      question: "How much does the membership cost?",
      answer:
        "A one-time fee of INR 199 is required to become a lifetime member.",
    },
    {
      question: "Are there fees for participating in rides and events?",
      answer:
        "Yes, all rides and events are on a paid basis. Fees vary depending on the destination, duration, and inclusions.",
    },
    {
      question: "What benefits do members get?",
      answer:
        "Members enjoy exclusive access to rides, events, discounts from partner brands, safety workshops, and much more.",
    },
    {
      question: "Can I participate in rides without becoming a member?",
      answer:
        "Some events and rides are exclusive to members, but non-members can participate in selected open events for a fee.",
    },
    {
      question: "What safety gear is required for rides?",
      answer:
        "Helmets are mandatory. We strongly recommend wearing full safety gear, including gloves, jackets, and riding boots.",
    },
    {
      question: "How do I register for a ride or event?",
      answer:
        "Ride and event details are shared through our official communication channels. Members can register online via our website or app.",
    },
    {
      question: "What types of bikes are allowed in the community?",
      answer:
        "We welcome bikes between 100cc and 1500cc, regardless of make or model.",
    },
    {
      question: "Can I cancel my membership?",
      answer:
        "Membership is non-cancellable and non-refundable as it is a one-time fee.",
    },
    {
      question: "Are pillion riders allowed on rides?",
      answer:
        "Yes, pillion riders are allowed, provided they wear helmets and adhere to all safety guidelines.",
    },
  ];

  return (
    <section className="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl  hover:text-yellow-600">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y divide-gray-700 sm:px-8 lg:px-12 xl:px-32">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-800 p-4 rounded-lg shadow-md transition-shadow hover:shadow-lg mb-4"
            >
              <summary className="py-2 outline-none cursor-pointer text-lg font-medium text-gray-100 group-hover:text-gray-300 focus:underline">
                {faq.question}
              </summary>
              <div className="px-4 pb-4 text-gray-300">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
