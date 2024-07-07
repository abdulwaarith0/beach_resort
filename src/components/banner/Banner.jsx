import PropTypes from "prop-types";


const Banner = ({ children, title, subtitle }) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
};

Banner.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Banner;