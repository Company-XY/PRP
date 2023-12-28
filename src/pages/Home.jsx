import Hero from "./home/hero";
import Features from "./home/features";
import About from "./home/about";
import Features2 from "./home/features2";
import Reviews from "./home/reviews";
import Footer from "./home/footer";
import Contact from "./home/contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <About />
      <Features2 />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;