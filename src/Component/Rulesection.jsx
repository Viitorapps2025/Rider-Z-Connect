import React, { useState } from 'react';

const RulesSection = () => {
  const [activeTab, setActiveTab] = useState('General Rules');

  const rules = {
    'General Rules': {
      image: 'https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/lexrider_mis_banner1.jpg',
      text: [
        'You must be at least 16 years old, preferably 18 or older',
        'You must have your profile, wall, and friends set to public',
        'Members will observe all State/Provincial traffic laws at all times',
        'Meetings have strict protocols',
        'Attendance at all meetings is mandatory',
      ],
    },
    Vehicles: {
      image: 'https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/lexrider_mis_banner1.jpg',
      text: [
        'Members may have to commit acts of violence',
        'Only one motorcycle club can control an area',
        'Members must be completely loyal to the club',
        'Nonmembers are not allowed to know club business',
        'Leaving a motorcycle club isn’t easy',
      ],
    },
    Membership: {
      image: 'https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/lexrider_mis_banner1.jpg',
      text: [
        'Only men can join',
        'Meetings have strict protocols',
        'Prospective members endure brutal hazing',
        'Some new members have to deal with human waste',
        'Attendance at all meetings is mandatory',
        'Race may play a part in the induction process',
      ],
    },
  };

  return (
    <div className='bg-black w-full'>
    <div className=" text-white font-bold p-16 font-sans max-w-7xl mx-auto">
      <h2 className="text-center text-xl font-bold uppercase mb-6">REQUIREMENTS</h2>
      <h1 className="text-center text-3xl lg:text-7xl font-bold mb-12">OUR RULES</h1>
      <div className="flex justify-center mb-20 space-x-4">
        {Object.keys(rules).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-4 rounded ${
              activeTab === tab ? 'bg-yellow-500' : 'bg-gray-800'
            } hover:bg-yellow-600`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={rules[activeTab].image}
            alt={`${activeTab} image`}
            className="rounded shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 px-16 text-gray-500">
          <p className="mb-10">
            {activeTab === 'General Rules' && (
              <>For example, club members must adhere to a code of conduct while wearing their outlaw club’s colors, and women who associate with the groups are expected to behave in specific ways. In fact, many of these bikers appreciate a military-style hierarchy. Rules are integral to life in an outlaw biker club.</>
            )}
            {activeTab === 'Vehicles' && (
              <>Some of the regulations are simple mandates all motorcycle club members must follow. Other rules are unique to particular clubs such as the Hells Angels, the Bandidos, or the Outlaws. Members must follow each set of regulations or else face strict punishment.</>
            )}
            {activeTab === 'Membership' && (
              <>If you are looking to find a group of well-established and safe to ride with, you’ve found us. We were founded as a formal motorcycle club in Boston in 1985, and are still going strong. We focus on safe riding and we also ride for charities that are near and dear to our hearts.</>
            )}
          </p>
          <ul className="list-disc list-inside space-y-4">
            {rules[activeTab].text.map((rule, index) => (
              <li key={index} className="text-sm">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RulesSection;
