import Hero from "../components/Hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import Services from "../components/services/Services";
import FeaturedRooms from "../components/featured/FeaturedRooms";


const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxurious room" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  )
};


export default Home;