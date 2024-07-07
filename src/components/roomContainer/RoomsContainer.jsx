import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../../context/Context";
import Loading from "../Loading";


const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;

        return (
          <div>
            {loading ? <Loading /> : (
              <>
                <RoomsFilter rooms={rooms} />
                <RoomsList rooms={sortedRooms} />
              </>
            )}
          </div>
        );
      }}
    </RoomConsumer>
  )
}

export default RoomsContainer;

