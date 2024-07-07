import { useContext, useReducer, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/banner/Banner';
import { RoomContext } from '../context/Context';
import StyledHero from "../components/styled/StyledHero";


const initialState = {
  slug: '',
  defaultBcg: defaultBcg,
  room: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SLUG':
      return { ...state, slug: action.payload };
    case 'SET_ROOM':
      return { ...state, room: action.payload };
    default:
      return state;
  }
};

const SingleRoom = () => {

  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentImage, setCurrentImage] = useState(defaultBcg);

  useEffect(() => {
    dispatch({ type: 'SET_SLUG', payload: slug });
    const room = getRoom(slug);
    dispatch({ type: 'SET_ROOM', payload: room });
    if (room && room.images && room.images.length > 0) {
      setCurrentImage(room.images[0]);
    }
  }, [slug, getRoom]);

  const { room } = state;

  if (!room) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }

  const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
  const handleImageClick = (image) => {
    setCurrentImage(image);
  }


  return (
    <>
      <StyledHero img={currentImage}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {images?.map((image, index) => (
            <img key={index} src={image || defaultBcg}
              alt={name} style={{ cursor: "pointer" }}
              onClick={() => handleImageClick(image)}
            />
          ))};
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;  