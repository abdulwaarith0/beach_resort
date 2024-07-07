import { useState } from "react";
import logo from "../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <button
                        type="button"
                        className="nav-btn"
                        onClick={handleToggle}>
                        <FaAlignRight
                            className="nav-icon" />
                    </button>
                </div>
                {
                    isOpen && (
                        <ul className={` ${isOpen ? 'nav-links show-nav' : 'nav-links'}`}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/rooms">Rooms</Link>
                            </li>
                        </ul>
                    )};
            </div>
        </div>
    )
}

export default Navbar;