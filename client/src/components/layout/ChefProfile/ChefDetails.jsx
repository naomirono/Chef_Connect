import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import chefMockData from './ChefMockData';

const ChefDetails = () => {
  const location = useLocation();
  const {
    selectedCuisine,
    selectedAvailability,
    selectedLocation,
    selectedRating,
  } = location.state || {};

  const [chefDetails, setChefDetails] = useState([]);

  useEffect(() => {
    console.log("Filter Criteria:", {
      selectedCuisine,
      selectedAvailability,
      selectedLocation,
      selectedRating,
    });
  
    const filteredChefs = chefMockData.filter((chef) => {
      const cuisineMatch = selectedCuisine ? chef.cuisine === selectedCuisine : true;
      const availabilityMatch = selectedAvailability ? chef.availability === selectedAvailability : true;
      const locationMatch = selectedLocation ? chef.location === selectedLocation : true;
      const ratingMatch = selectedRating ? chef.rating === parseInt(selectedRating, 10) : true;
  
      console.log("Chef:", chef);
      console.log("Matches:", cuisineMatch, availabilityMatch, locationMatch, ratingMatch);
  
      return cuisineMatch && availabilityMatch && locationMatch && ratingMatch;
    });
  
    console.log("Filtered Chefs:", filteredChefs);
  
    setChefDetails(filteredChefs); // Set to the array of matching chefs
  }, [selectedCuisine, selectedAvailability, selectedLocation, selectedRating]);
  
  

  return (
    <div className="max-w-[1000px] mx-auto h-[50vh] mt-24 shadow-md rounded-md ">
     {chefDetails.length > 0 ? (
       chefDetails.map((chef) => (
      
      <div key={chef.id} className="flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Left Section: Cuisine Image */}
        <div className='md:w-1/2 mt-2 lg:mt-0 p-10 text-white flex items-center justify-center'>
          <img
            src={chef.cuisineImage}
            alt="Cuisine"
            className="w-3/4 h-3/4 z-20"
          />
          <div className="absolute top-[-170px] right-72 w-full h-full">
      
      <img
        src="https://chefconnectapp.s3.ap-south-1.amazonaws.com/Splash2.svg"  
        alt="Splash Overlay"
        className="w-full h-full splashSvg"
      />
    </div>
        </div>
        {/* Right Section: Cuisine Details */}
        <div className="md:w-1/2 lg:block">
          <h2 className="text-orange-500 text-2xl font-extrabold font-fira mb-2">
            {chef.cuisine}
          </h2>
          <p className="text-gray-600 mb-4 p-2 font-inter">{chef.description}</p>
          <div className="flex items-center mb-4">
            <p className="text-gray-600 mr-8"><i className="fa-solid fa-people-group text-orange-500 mr-2"></i> Serving - {chef.servings} </p>
            <p className="text-gray-600 ml-4"><i className="fa-solid fa-kitchen-set icon text-orange-500 mr-2"></i> Cook Time - {chef.cookTime}</p>
          </div>
          <button className="bg-orange-500 text-white mt-4 py-1.5 px-5 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Book Now
          </button>
          {/* Chef Details */}
          <div className="flex items-center mt-4">
            <img
              src={chef.profileImage}
              alt={`Chef: ${chef.name}`}
              className="w-10 h-10 rounded-full border border-orange-500 mr-4"
            />
            <div>
              <p className="text-gray-600 font-bold">{chef.name}</p>
              <p className="text-gray-600">{chef.location}</p>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-orange-500">No matching chefs found.</p>
  )}
</div>

  );
};

export default ChefDetails;
