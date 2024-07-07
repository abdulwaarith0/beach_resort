import PropTypes from 'prop-types';


const Hero = ({ children, hero }) => {
    return (
        <header className={hero}>
            {children}
        </header>
    );
};

Hero.propTypes = {
    children: PropTypes.node.isRequired,
    hero: PropTypes.string,
};


Hero.defaultProps = {
    hero: 'defaultHero',
};


export default Hero; 

