import React, { useState } from "react";
import './Services.css';
import wedding from '../images/wedding.jpeg';
import meeting from '../images/meeting.jpg';
import event from '../images/event.jpg';
import ceremony from '../images/ceremony.jpg';
import room from '../images/room.jpg';
import dining from '../images/dining.jpg';

const Services = () => {
    const [showMore, setShowMore] = useState({
        wedding: false,
        meeting: false,
        event: false,
        ceremony: false,
    });

    const toggleShowMore = (service) => {
        setShowMore(prev => ({ ...prev, [service]: !prev[service] }));
    };

    const servicesContent = {
        wedding: "At Global International Hotel, we understand that your wedding day is one of the most significant moments in your life. Our dedicated team is committed to making your dream wedding a reality, ensuring that every detail is perfect.",
        meeting: "At Global International Hotel, we understand that successful meetings require the perfect environment combined with top-notch services. Our dedicated meeting program is designed to cater to all your business needs, ensuring a seamless and productive experience for you and your attendees.",
        event: "At Global International Hotel, we specialize in creating memorable experiences tailored to your unique event needs. Whether you're planning a corporate gathering, a social celebration, or a private party, our dedicated team is here to ensure every detail is meticulously managed.",
        ceremony: "At Global International Hotel, we understand that ceremonies are significant milestones in your life. Whether it’s a wedding, anniversary, or a special celebration, our dedicated team is here to ensure that every detail is perfect."
    };

    return (
        <div className="container">
            <div className="parallax3">
                <div className="service-content">Global International Hotel Services</div>
            </div>
            <h1>Here are our services.</h1>
            <div className='middle-container'>
                {Object.keys(servicesContent).map(service => (
                    <div className='classofhome' key={service}>
                        <h2 className="wedding">{service.charAt(0).toUpperCase() + service.slice(1)}</h2>
                        <img src={service === 'wedding' ? wedding : service === 'meeting' ? meeting : service === 'event' ? event : ceremony} alt={service} className='imgageofweeding'/>
                        <p>
                            {showMore[service] ? servicesContent[service] : `${servicesContent[service].substring(0, 100)}...`}
                            <span onClick={() => toggleShowMore(service)} className="read-more">
                                {showMore[service] ? " Read Less" : " Read More"}
                            </span>
                        </p>
                    </div>
                ))}
            </div>

            <div className="sub-container2">
                <div className="left">
                    <h2>Luxury Room</h2>
                    <p>Indulge in the elegance of our luxury rooms at Global International Hotel, where comfort meets sophistication. Each room features plush king-size beds, exquisite decor, and stunning views, creating a serene retreat for discerning travelers.</p>
                    <p>Enjoy modern amenities, including a flat-screen TV, high-speed Wi-Fi, and a lavish en-suite bathroom with a soaking tub and rain shower. With attentive service and a commitment to excellence, our luxury rooms offer an unforgettable experience, ensuring your stay is both relaxing and rejuvenating. Escape to a world of luxury and make your visit truly exceptional.</p>
                </div>
                <div className="right">
                    <img src={room} alt="room" className="room"/>
                </div>
            </div>
            <div className="sub-container3">
                <div className="sub1">
                    <img src={dining} alt="dining" className="dining"/>
                </div>
                <div className="sub2">
                    <h2>Exceptional Dining Service</h2>
                    <p>At Global International Hotel, our dining service is designed to elevate your
                         culinary experience to new heights. Our signature restaurant showcases a menu 
                         crafted by renowned chefs who blend local flavors with international cuisine, 
                         ensuring a delightful array of dishes that cater to every palate. With a focus 
                         on fresh, locally sourced ingredients, each meal is a celebration of taste and 
                         presentation.
                    </p>

                    <p>Our attentive staff is dedicated to providing personalized service, ensuring that 
                        every guest feels special from the moment they sit down. Whether you're enjoying a 
                        leisurely breakfast, a business lunch, or an intimate dinner, our team is committed 
                        to making your dining experience seamless and memorable.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Services;