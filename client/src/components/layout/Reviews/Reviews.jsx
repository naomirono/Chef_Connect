import React from 'react';
import { FaStar } from 'react-icons/fa';

const renderStars = (rating) => {
  const starCount = 5;
  const fullStarCount = Math.floor(rating);
  const remainingStarCount = starCount - fullStarCount;

  const stars = [];
  for (let i = 0; i < fullStarCount; i++) {
    stars.push(<FaStar key={`full-star-${i}`} className="text-orange-500" />);
  }
  for (let i = 0; i < remainingStarCount; i++) {
    stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
  }

  return stars;
};

const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

const Review = ({ name, image, rating, review }) => {
  return (
    <div className="max-w-xl w-full mx-auto p-4 bg-white shadow-md my-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-10 h-10 rounded-full mr-4" />
          <div>
            <p className="text-lg font-semibold">{name}</p>
            <div className="flex items-center">
              {renderStars(rating)}
              <span className="ml-1 text-gray-600">{rating}</span>
            </div>
          </div>
        </div>
        
      </div>
      <p className="mt-4 text-gray-700">"{review}"</p>
    </div>
  );
};

const chefReviews = [
  {
    name: 'Alice Baker',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4.5,
    review: 'I found an amazing chef through this website! The variety of talented chefs and the ease of the search made my experience delightful.',
  },
  {
    name: 'Charlie Foodie',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    rating: 5.0,
    review: 'The chef finder website exceeded my expectations. I connected with a skilled chef who prepared a fantastic meal for my event. Highly recommended!',
  },
  {
    name: 'Eva Gourmet',
    image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4.2,
    review: 'As a food enthusiast, I appreciate the high-quality chefs available on this platform. The user-friendly interface makes it easy to discover and hire top-notch culinary talent.',
  },
];

const ReviewList = () => {
  return (
      <div className='max-w-[1100px] mx-auto py-16 relative px-3'>
      <h2 className='text-2xl font-semibold text-center mb-4 text-orange-500'>Testimonials</h2>
      <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-12 text-white max-w-[700px] mx-auto">We have worked with thousands of amazing people</h2>
    <div className="flex flex-col lg:flex-row  lg:space-x-4">
      {chefReviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
    <div>
  <div className="flex items-center space-x-2 text-base mt-4">
    <h4 className="font-semibold text-orange-500">Client Reviews</h4>
    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
  </div>
  <div className="mt-3 flex -space-x-2 overflow-hidden">
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  </div>
  <div className="mt-3 text-sm font-medium">
    <a href="#" className="text-gray-200">+ 198 others</a>
  </div>
</div>
    <div className="absolute top-[230px] right-4 transform -translate-y-1/2 flex items-center space-x-2 hidden lg:block">
        <button
          className="border-2 border-orange-500 text-orange-500 rounded-full py-2 px-4"
          style={{ marginRight: '10px' }}
          onClick={handlePrevClick}
        >
          {'<'}
        </button>
        <button
          className="border-2 border-orange-500 text-orange-500 rounded-full py-2 px-4"
          onClick={handleNextClick}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default ReviewList;
