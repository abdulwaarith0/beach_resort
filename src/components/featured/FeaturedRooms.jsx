import { useContext } from 'react';
import { RoomContext } from '../../context/Context';
import Title from '../title/Title';
import Loading from '../Loading';
import Room from '../room/Room';

const FeaturedRooms = () => {
    const { isLoading, featuredRooms: rooms } = useContext(RoomContext);

    const roomElements = rooms.map(room => (
        <Room key={room.id} room={room} />
    ));

    return (
        <section className='featured-rooms'>
            <Title title="featured-rooms" />
            <div className="featured-rooms-center">
                {isLoading ? <Loading /> : roomElements}
            </div>
        </section>
    );
};

export default FeaturedRooms;  