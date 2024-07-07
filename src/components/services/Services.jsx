import { useState } from 'react';
import Title from '../title/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
    const [services] = useState([
        {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, molestiae."
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, molestiae."
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, molestiae."
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, molestiae."
        }
    ]);

    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((item, index) => (
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;