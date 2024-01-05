import FeaturedChef from './FeaturedChef';
import { chefs } from './FeaturedData';

const FeaturedChefsSection = () => {
  return (
    <section className=" py-4 relative lg:py-12"
    style={{
        backgroundImage: "url('/src/assets/catering1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="container mx-auto max-w-[1100px] relative z-10">
        <h2 className="text-5xl font-bold text-center mt-4 mb-4 text-white">Featured <span className='text-orange-500'>Chefs</span> </h2>
        <p className="text-center text-gray-500 mb-12 max-w-[900px] mx-auto">
          Meet our talented chefs who bring a world of flavors to your doorstep. Each chef is a culinary artist, ready to create a memorable dining experience for you and your guests. Explore their profiles and discover the perfect chef to elevate your next meal.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <FeaturedChef key={index} {...chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedChefsSection;
