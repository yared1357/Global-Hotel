import React from "react";
import about1 from '../images/food.jpg';
import spa from '../images/spa.jpg';
import './About.css';

const News=()=>{
    return (
        <div className="container">
            <div className="parallax3">
                <div className="aboutcontent">Latest News From Global International Hotel</div>
            </div>
            
            <div className="sub-container2">
            <div className="left">
    <h2>Exclusive Spa Wellness Retreats</h2>
    <p>Escape to tranquility with our new wellness spa retreats, designed to provide you with a serene getaway.</p>
    <p>Experience a variety of rejuvenating treatments, from soothing massages to revitalizing facials, all tailored to refresh your mind and body.</p> 
    <p>Whether you seek relaxation or a holistic experience, our exclusive packages are perfect for self-care and rejuvenation.</p>
    <p>Book now and treat yourself to the ultimate spa experience! Enjoy exclusive packages that cater to your individual needs and preferences.</p>
</div>
<div className="right">
    <img src={spa} alt="about iamge" className="about1"/>
</div>
</div>
<div className="sub-container3">
<div className="sub1">
    <img src={about1} alt="about2 pic" className="about2"/>
</div>
<div className="sub2">
    <h2>Culinary Masterclass Series Launch</h2>
    <p>Join our renowned chefs for an exciting series of culinary masterclasses that will elevate your cooking skills to new heights! Each session focuses on creating gourmet dishes using seasonal and locally sourced ingredients.</p>
    <p>Perfect for food enthusiasts and beginners alike, these classes offer hands-on experience and expert tips. Reserve your spot today to learn from the best and impress your friends and family with your newfound culinary prowess!</p>
</div>
</div>
        </div>
    );
};

export default News;