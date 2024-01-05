import React, { useState } from 'react';
import "./specialOcassion.css";

const SpecialOccasionsSection = () => {
  const specializations = ['Weddings', 'Birthdays', 'Anniversaries', 'Corporate Events'];
  const [activeSpecialization, setActiveSpecialization] = useState(specializations[0]);

  const specialOccasionChefs = {
    Weddings: [
      {
        name: 'Chef Isabella Garcia',
        tips: 'Create a customized wedding menu that reflects your unique love story. Chef Isabella Garcia specializes in crafting unforgettable dishes to make your special day even more memorable.',
        image: '/src/assets/CateringS3.png', 
      },
      // Add more wedding chefs as needed
    ],
    Birthdays: [
      {
        name: 'Chef Anthony Baker',
        tips: 'Celebrate your birthday in style with Chef Anthony Baker! From decadent cakes to themed menus, this chef knows how to turn your birthday bash into a culinary extravaganza.',
        image: '/src/assets/CateringS1.png', 
      },
      // Add more birthday chefs as needed
    ],
    Anniversaries: [
      {
        name: 'Chef Sophia Adams',
        tips: 'Rekindle the romance with a special anniversary dinner prepared by Chef Sophia Adams. Personalize your menu to relive the flavors of the moment you said, "I do."',
        image: '/src/assets/CateringS3.png', 
      },
      // Add more anniversary chefs as needed
    ],
    'Corporate Events': [
      {
        name: 'Chef Benjamin Taylor',
        tips: 'Impress your clients and colleagues with gourmet cuisine at your corporate event. Chef Benjamin Taylor brings professionalism to the table, ensuring a memorable dining experience.',
        image: '/src/assets/CateringS1.png', 
      },
      // Add more corporate event chefs as needed
    ],
  };

  const handleTabClick = (specialization) => {
    setActiveSpecialization(specialization);
  };

  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto max-w-[900px] p-4">
        <h2 className="text-5xl font-bold mb-8 text-white">Special Occasions with <span className='text-orange-500'>Personal Chefs</span></h2>
        
        <div className="flex flex-wrap mb-8">
          {specializations.map((specialization) => (
            <button
              key={specialization}
              className={`mb-2 mr-2 lg:mr-4 px-3 py-1.5 lg:px-4 lg:py-2 text-sm rounded-full focus:outline-none ${
                activeSpecialization === specialization ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleTabClick(specialization)}
            >
              {specialization}
            </button>
          ))}
        </div>

        {/* Display Chefs for the Active Specialization */}
        <div className="grid grid-cols-1  gap-8 ">
          {specialOccasionChefs[activeSpecialization].map((chef, index) => (
            <div key={index} className="lg:p-8 rounded-lg shadow-md flex flex-col lg:flex-row relative overflow-hidden h-[50vh]">
    <img
      src={chef.image}
      alt={`Chef ${chef.name}`}
      className="w-full h-48 object-contain rounded-md mb-2 relative z-10 top-10 2xl:top-24 "
    />
    <div className="absolute top-0 right-72 w-full h-full">
      
      <img
        src="/src/assets/Splash.svg"  
        alt="Splash Overlay"
        className="w-full h-full splashSvg"
      />
    </div>
    <div className="relative z-10 top-14 2xl:top-24 mx-2 lg:ml-10 mt-4">
      <h3 className="text-xl font-semibold mb-2 text-white">{chef.name}</h3>
      <p className="text-gray-400 lg:text-gray-600 mb-4">{chef.tips}</p>
    </div>
  </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOccasionsSection;
