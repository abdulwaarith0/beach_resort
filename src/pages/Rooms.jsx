import Hero from "../components/Hero/Hero";
import Banner from "../components/banner/Banner";
import RoomsContainer from "../components/roomContainer/RoomsContainer";
import { Link } from "react-router-dom"

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  )};
  

export default Rooms;