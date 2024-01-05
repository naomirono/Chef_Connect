const Hero = () => {
  return (
    <section
      id="about"
      className="py-8 mx-auto items-center relative h-[90vh] 2xl:h-[80vh]"
      style={{
        backgroundImage: "url('/src/assets/catering1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="container max-w-[1100px] mx-auto md:my-8 md:px-4 lg:px-0 px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="md:w-1/2 mt-2 lg:mt-0 md:ml-14 lg:ml-14 lg:mb-28 2xl:ml-4 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Unleash Culinary Magic with Chef Connect
            </h2>
            <p className="text-lg md:text-xl mb-4">
              Dive into a realm of flavors and aromas. Chef Connect brings the finest chefs to your doorstep, turning every meal into a celebration of taste and innovation.
            </p>

            <button className="bg-orange-500 text-white py-2 px-4 mb-12 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
              Get Started
            </button>

            <div className="about_info flex justify-center mb-6">
              <div className="text-center mx-2 md:mx-4">
                <h3 className="text-xl md:text-xl lg:text-2xl font-bold">1,000+</h3>
                <p>Happy Customers</p>
              </div>

              <div className="text-center mx-2 md:mx-4">
                <h3 className="text-xl md:text-xl lg:text-2xl font-bold">4.8</h3>
                <p>Average Ratings</p>
              </div>

              <div className="text-center mx-2 md:mx-4">
                <h3 className="text-xl md:text-xl lg:text-2xl font-bold">200+</h3>
                <p>Chefs Available</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 pb-10 md:pb-36 lg:block">
            <div className="relative">
              <img
                src="/src/assets/chef2.jpg"
                alt="Image"
                className="w-[250px] md:w-5/6 h-[300px] md:h-[500px] lg:h-[500px] md:max-w-md ml-[80px] border-2 border-orange-500"
              />
              <img
                src="/src/assets/Chefbg9.png"
                alt="Image"
                className="w-[180px] h-[180px] md:w-5/6 absolute bottom-[-40px] md:bottom-[25px] left-[-40px] md:left-[-100px] md:mr-[-10%] md:mb-[-17%]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center z-10 absolute bottom-[-65px] 2xl:bottom-[-64px] right-[250px] 2xl:right-[380px] hidden lg:block">
        <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-l px-4 pt-4 pb-6 rounded shadow-lg max-w-[1100px] mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Chef Connect</h2>

    {/* Filters */}
    <div className="flex items-center space-x-4">
      <select
        className=" px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l"
      >
        <option value="">Select Cuisine</option>
        <option value="nyama-choma">Nyama Choma</option>
        <option value="ugali-fish">Ugali and Fish</option>
        <option value="sukuma-wiki">Sukuma Wiki</option>
      </select>

      <select
        className=" px-4 py-2 rounded-md focus:outline-none focus:border-orange-500 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l"
      >
        <option value="">Select Rating</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
      </select>

      <select
        className=" px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l"
      >
        <option value="">Select Availability</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="weekends">Weekends</option>
      </select>

      <input
        type="text"
        placeholder="Enter Location"
        className="placeholder:text-black px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l"
      />

      {/* Get Started Button */}
      <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Search
      </button>
    </div>
    
  </div>
</div>


    </section>
  );
};

export default Hero;
