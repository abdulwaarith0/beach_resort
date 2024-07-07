import { useReducer, useEffect, createContext } from 'react';
import items from '../data';
import PropTypes from "prop-types";

const initialState = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    isLoading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
};

const RoomContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ROOMS':
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        case 'HANDLE_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case 'FILTER_ROOMS':
            return {
                ...state,
                sortedRooms: action.payload,
            };
        default:
            return state;
    }
};

const RoomProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const rooms = formatData(items);
        const featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        dispatch({
            type: 'SET_ROOMS',
            payload: {
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                price: maxPrice,
                isLoading: false,
                maxPrice,
                maxSize,
            },
        });
    }, []);


    const formatData = (items) => {
        const tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id }
            return room;

        });
        return tempItems;
    }

    const getRoom = (rooms, slug) => {
        return rooms.find((room) => room.slug === slug);
    };

    const handleChange = (e) => {
        const { type, name, checked, value } = e.target;
        const val = type === "checkbox" ? checked : value;
        dispatch({
            type: "HANDLE_CHANGE",
            payload: { name, value: val }
        });
        filterRooms();
    };

    const filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, pets, breakfast } = state;
        let tempRooms = [...rooms];

        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        capacity = parseInt(capacity);
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        tempRooms = tempRooms.filter(room => room.price <= price);

        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        dispatch({
            type: 'FILTER_ROOMS',
            payload: tempRooms,
        });
    };



    return (
        <RoomContext.Provider value={{ ...state, getRoom: (slug) => getRoom(state.rooms, slug), handleChange }}>
            {children}
        </RoomContext.Provider>
    );
}


RoomProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props}
                context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };