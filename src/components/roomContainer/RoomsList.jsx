import Room from "../room/Room";
import PropTypes from "prop-types";


const RoomsList = ({ rooms }) => {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately no rooms matched your search parameters </h3>
            </div>
        );
    }

    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((item) => {
                    return <Room
                        key={item.id}
                        room={item} />
                })};
            </div>
        </section>
    )
}


RoomsList.propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RoomsList;