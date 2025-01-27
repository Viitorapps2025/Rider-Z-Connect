import  { useState } from 'react';

const RulesSection = () => {
  const [activeTab, setActiveTab] = useState('General Rules');

  const rules = {
    'General Rules': {
      image: 'https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/lexrider_mis_banner1.jpg',
      text: [
        'Always ride safely and responsibly, respecting local laws and regulations.',
        'Helmets and safety gear must be worn during all rides and events.',
        'Be respectful towards fellow riders and community members, promoting a positive atmosphere.',
        'No reckless or aggressive riding; prioritize safety and control at all times.',
        'Community members must communicate any issues or concerns respectfully and constructively.',
        'Maintain your bike in good working condition for the safety of all participants.',
        'Follow the instructions and guidance of ride leaders, managers, and event organizers.',
        'No alcohol or drugs are permitted during events or rides.',
        'Participate actively in community rides, events, and initiatives, fostering camaraderie and support.',
        'Any form of harassment, discrimination, or unsafe behavior will result in immediate action, including possible removal from the community.'
      ],
    },
    Vehicles: {
      image: 'https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/lexrider_mis_banner1.jpg',
      text: [
        'All bike makes and models from 100cc to 150cc are welcome to join our rides and events.',
        'Riders must ensure their bikes are in safe working condition for all rides and events.',
        'Helmets and full safety gear are mandatory for all riders, regardless of bike size.',
        'Maintain a respectful attitude towards other riders, regardless of the bike they ride.',
        'Safety is our top priority; ride within your skill level and always follow ride leaders’ instructions.',
        'Riders must follow all local traffic laws and regulations at all times.',
        'No reckless riding or stunts are allowed during events or rides',
        'Riders are encouraged to participate in group rides to build camaraderie and community spirit.',
        'Alcohol or drugs are strictly prohibited during any events or rides.',
        'Any form of unsafe behavior or harassment will lead to immediate action, including removal from the community.',
      ],
    },
    Membership: {
      image: 'https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/lexrider_mis_banner1.jpg',
      text: [
        'Membership is open to all riders aged 18 years and above.  ',
        'A one-time fee of INR 199 is mandatory to become a lifetime member. ',
        'Members must provide accurate personal and bike-related details during registration.',
        'Membership benefits are non-transferable and apply only to the registered member. ',
        'Members must uphold the values of safety, respect, and community spirit at all times.  ',
        'Participation in events and rides is subject to compliance with safety and community guidelines. ',
        'RIDERZCONNECT reserves the right to revoke membership in case of misconduct or violation of rules. ',
     ' Members are encouraged to actively participate in rides, events, and discussions to foster community engagement. ',
     'Exclusive member benefits and updates will be shared via email or official communication channels. ',
     ' Refunds for membership fees will not be provided under any circumstances.',
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
              <>At RIDERZCONNECT, we foster a community of like-minded motorcycle enthusiasts who share a passion for safe and responsible riding. To ensure a positive and respectful environment for all members, 
we have established the following rules and regulations. Adherence to these guidelines is essential to maintain the integrity and spirit of our community.</>
            )}
            {activeTab === 'Vehicles' && (
              <>CHANGE VEHICLE TO MOTORBIKES

              At RIDERZCONNECT, we welcome riders from all walks of life, no matter the bike you ride! Whether you&apos;re on a 100cc commuter or a 150cc sportbike, our community embraces all makes and models, 
              fostering a supportive environment for riders of every skill level. Our goal is to promote safe, responsible, and exciting riding experiences for everyone, ensuring that each ride is enjoyable and inclusive.</>
            )}
            {activeTab === 'Membership' && (
              <>Join the RIDERZCONNECT community with a one-time membership fee of just INR 199 and unlock a world of exciting benefits and exclusive opportunities. To ensure a smooth and rewarding experience, 
all members must adhere to the following rules: </>
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
