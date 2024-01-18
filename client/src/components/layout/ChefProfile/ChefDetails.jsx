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

  const [chefDetails, setChefDetails] = useState(null);

  useEffect(() => {
    console.log("Filter Criteria:", {
      selectedCuisine,
      selectedAvailability,
      selectedLocation,
      selectedRating,
    });
  
    const filteredChef = chefMockData.find((chef) => {
      const isCuisineMatch = selectedCuisine ? chef.cuisine === selectedCuisine : true;
      const isAvailabilityMatch = selectedAvailability ? chef.availability === selectedAvailability : true;
      const isLocationMatch = selectedLocation ? chef.location === selectedLocation : true;
      const isRatingMatch = selectedRating ? chef.rating === parseInt(selectedRating, 10) : true;
  
      console.log("Filtering Chef:", chef, "Matches:", isCuisineMatch, isAvailabilityMatch, isLocationMatch, isRatingMatch);
  
      return isCuisineMatch && isAvailabilityMatch && isLocationMatch && isRatingMatch;
    });
  
    console.log("Filtered Chef:", filteredChef);
  
    setChefDetails(filteredChef);
  }, [selectedCuisine, selectedAvailability, selectedLocation, selectedRating]);
  

  console.log("ChefDetails - Chef Details:", chefDetails);

  return (
    <div>
      <h1>Chef Details Page</h1>
      {chefDetails ? (
        <div>
          <img
            src={chefDetails.cuisineImage}
            alt={`Cuisine: ${chefDetails.cuisine}`}
            style={{ width: '200px', height: '200px' }}
          />
          <h2>{chefDetails.cuisine}</h2>
        </div>
      ) : (
        <p>No matching chef found.</p>
      )}
    </div>
  );
};

export default ChefDetails;
