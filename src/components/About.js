import React from "react";
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.jpg';
import './About.css';

const About=()=>{
    return (
        <div className="container">
            <div className="parallax2">
                <div className="aboutcontent">About Global Internation Hotel</div>
            </div>
            
            <div className="sub-container2">
<div className="left">
    <p>At Global International Hotel, we believe in the importance of sustainability and the well-being of our guests and the planet. Our beautifully landscaped green areas provide a serene escape from the hustle and bustle of city life.</p>
    <p>Guests can enjoy lush gardens, tranquil water features, and shaded seating areas, perfect for relaxation or casual gatherings. We are committed to eco-friendly practices, utilizing native plants to reduce water consumption and implementing organic gardening methods.</p>
</div>
<div className="right">
    <img src={about1} alt="about iamge" className="about1"/>
</div>
</div>
<div className="sub-container3">
<div className="sub1">
    <img src={about2} alt="about2 pic" className="about2"/>
</div>
<div className="sub2">
    <p>Experience unparalleled comfort and elegance in our Luxury Rooms at Global International Hotel. Each room is meticulously designed to provide a serene retreat, featuring plush king-sized beds adorned with premium linens, spacious layouts, and stunning views of the city skyline or tranquil gardens.</p>
    <p>Modern amenities, including a flat-screen TV, complimentary high-speed Wi-Fi, and a fully stocked minibar, ensure that your stay is both convenient and enjoyable. The en-suite bathrooms boast luxurious soaking tubs and rainfall showers, complemented by high-end toiletries and soft bathrobes, creating a spa-like atmosphere.</p>
</div>
</div>
        </div>
    );
};

export default About;