import { useContext } from "react";
import { RoomContext } from "../../context/Context";
import Title from "../title/Title";
import PropTypes from "prop-types";


const getUnique = (items, value) => {
    return [...new Set(items.map((item) =>
        item[value]
    ))];
};

const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    });
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
        return <option key={index} value={item}>
            {item}
        </option>
    });


    return (
        <section className="filter-container">
            <Title title="search-rooms" />
            <form className="filter-form">
                {/* SELECT TYPE */}
                <div className="form-group">
                    <label htmlFor="type">
                        room type
                    </label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                    {/* END SELECT TYPE */}
                </div>

                {/* GUESt */}
                <div className="form-group">
                    <label htmlFor="capacity">
                        Guests
                    </label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                    {/* END GUESTS TYPE */}
                </div>

                {/* ROOM PRICE */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price" value={price}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                {/* END OF ROOM PRICE */}

                {/* SIZE */}
                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* END OF SIZE */}

                {/* EXTRAS */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">
                            breakfast
                        </label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">
                            pets
                        </label>
                    </div>
                </div>
                {/* END OF EXTRAS */}
            </form>
        </section>
    )
}

RoomsFilter.propTypes = {
    rooms:
        PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RoomsFilter;