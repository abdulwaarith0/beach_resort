import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImg from "../../images/room-10.jpeg";

const Room = ({ room }) => {
    const { name, slug, images, price } = room;

    return (
        <article className="room">
            <div className="img-container">
                <Link to={`/rooms/${slug}`}>
                    <img src={images[0] || defaultImg}
                        alt={name} />
                </Link>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
};

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default Room;