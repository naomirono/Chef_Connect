import Header from "../../components/layout/Header/Header";
import Hero from "../../components/layout/Hero/Hero";
import HowItWorks from "../../components/layout/HowItWorks/HowItWorks";
import FeaturedChefsSection from "../../components/Layout/Featured/FeaturedChefsSection";
import Blog from "../../components/Layout/Blog/Blog";
import FeaturedMenus from "../../components/Layout/Featured/FeaturedMenu";
import SpecialOccasions from "../../components/Layout/SpecialOcassion/SpecialOccasion";
import DownloadApp from "../../components/Layout/Download/Download";
import Newsletter from "../../components/Layout/NewsLetter/Newsletter";
import ReviewList from "../../components/Layout/Reviews/Reviews";
import Footer from "../../components/Layout/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <FeaturedChefsSection />
      <FeaturedMenus />
      <Blog />
      <SpecialOccasions />
      <DownloadApp />
      <Newsletter />
      <ReviewList />
      <Footer />
    </div>
  );
};

export default Home;
