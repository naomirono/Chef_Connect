import React from 'react';

const FeaturedChef = ({ name, expertise, location, imageSrc }) => {
  return (
    <div className="bg-orange-500 rounded-lg shadow-lg text-white rounded-xl mx-6 lg:mx-0">
      <img src={imageSrc} alt={`${name} - Chef`} className='rounded-[10px]' />
      <div className=' pt-4'>
        <h3 className="text-xl font-semibold mb-2 px-4">{name}</h3>
        <p className="text-sm px-4 pb-4">{expertise}</p>
        <p className="text-xs px-4 pb-4">{location}</p>
      </div>
      
    </div>
  );
};

export default FeaturedChef;
