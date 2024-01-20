// NewsletterSubscription.js

import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Implement logic to send the email to your backend for subscription handling
    console.log(`Subscribed with email: ${email}`);
    // You can make an API call to your backend to handle the subscription
    // (e.g., using fetch or axios)
  };

  return (
    <section className="py-4 lg:py-16">
      <div className="container mx-0 lg:mx-auto max-w-full lg:max-w-[1000px] relative rounded-lg shadow-md text-center"
        style={{
          backgroundImage: "url('https://chefconnectapp.s3.ap-south-1.amazonaws.com/catering1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="p-2 lg:p-16 relative z-10 flex flex-col items-center justify-center max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl Lg:text-3xl font-bold tracking-tight text-white mb-4">Subscribe to Our Newsletter </h2>
          <p className="mb-4 lg:mb-14 text-md md: text-lg lg:text-lg leading-8 text-gray-400">
            Stay updated on new chefs, promotions, and cooking tips. Don't miss out on the latest culinary experiences!
          </p>
          
          <div className="mt-3 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only text-black">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="w-full lg:w-[400px] flex-auto rounded-md border-0 border-orange-300 px-3.5 py-2 text-black shadow-sm  sm:text-sm sm:leading-6" placeholder="Enter your email" value={email}
              onChange={handleEmailChange}/>
          <button type="submit" className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 ">Subscribe</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
