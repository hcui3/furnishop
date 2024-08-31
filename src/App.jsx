import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewItems from "./components/NewItems";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <div className="bg-white max-w-[1440px] mx-auto">
        <Header />
        <Hero />
        <Features />
        <NewItems />
        <FeaturesSecond />
        <Products />
        <Testimonial />
        <Newsletter />
        <Footer />
      </div>

      {/* temporary div */}
      {/* <div className="h-[2000px]"></div> */}
    </>
  );
};

export default App;
