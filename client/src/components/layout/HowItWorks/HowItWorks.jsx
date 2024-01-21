import { FiSearch, FiCalendar, FiSmile } from 'react-icons/fi';

const HowItWorks = () => {
  return (
    <section id="howItWorks" className="pt-52 lg:py-16">
      <div className="container max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 mt-10 text-white">How <span className='text-orange-500'>It Works</span></h2>

        <div className="flex flex-wrap justify-center">
          {/* Step 1 */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white flex-1 p-6 rounded-lg shadow-md flex items-center flex-col">
              <FiSearch className="text-3xl sm:text-4xl mb-4 text-orange-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">1. Find a Chef</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Explore our featured chefs or use the search to find a chef near you.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white flex-1 p-6 rounded-lg shadow-md flex items-center flex-col">
              <FiCalendar className="text-3xl sm:text-4xl mb-4 text-orange-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">2. Book a Chef</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Select your preferred chef, choose a date and time, and book their services.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white flex-1 p-6 rounded-lg shadow-md flex items-center flex-col">
              <FiSmile className="text-3xl sm:text-4xl mb-4 text-orange-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">3. Enjoy Your Meal</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Relax and let the chef prepare a delicious meal for you in the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
