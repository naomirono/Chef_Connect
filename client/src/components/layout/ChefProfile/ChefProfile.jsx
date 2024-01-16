// ChefProfile.jsx
import React, { useEffect, useState } from 'react';
import chefMockData from './chefMockData'; // Import the chefMockData

const ChefProfile = ({ chefId }) => {
  const [chefData, setChefData] = useState(null);

  useEffect(() => {
    // Find the chef data based on chefId from the imported chefMockData
    const selectedChef = chefMockData.find((chef) => chef.id === parseInt(chefId, 10));

    // Set the chef data to the state
    setChefData(selectedChef);
  }, [chefId]);

  if (!chefData) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

  // Render chef profile with fetched data
  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md grid grid-cols-2 gap-8">
      {/* Cuisine Image Section */}
      <div>
        <img src={chefData.cuisineImage} alt="Cuisine" className="w-full h-auto rounded-md mb-4" />
      </div>

      {/* Details Section */}
      <div>
        {/* Cuisine Name */}
        <h2 className="text-xl font-bold mb-2">{chefData.cuisine}</h2>

        {/* Cuisine Description */}
        <p className="text-gray-600 mb-4">{chefData.description}</p>

        {/* Serving, Cook Time */}
        <div className="flex items-center mb-4">
          <p className="text-gray-500 mr-4">{chefData.servings} Servings</p>
          <p className="text-gray-500">{chefData.cookTime} Cook Time</p>
        </div>

        {/* Cook Now Button */}
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Cook Now
        </button>
      </div>
    </div>
  );
};

export default ChefProfile;
