// Home.jsx
import React from 'react';
import './Home.css';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const Home = () => {
    return (
        <div className='container'>
            <div className='parallax1'>
                <div className='page-title'>Welcome to Global International Hotel</div>
            </div>

            <div className='sub-container1'>
                
                <p> 
                    Welcome to Global International Hotel, your premier destination for
                     luxury and comfort in the heart of the city. With a perfect blend
                      of contemporary design and timeless elegance, our hotel offers an 
                      oasis of tranquility amidst the bustling urban landscape. 
                </p>
                
                <p>
                    From the moment you arrive, our dedicated staff is committed to providing 
                    a personalized experience, whether you’re here for a romantic getaway,
                     a family vacation, or a business trip. 
                </p>
                <p>
                    Stay connected with complimentary high-speed Wi-Fi throughout the hotel,
                     and take advantage of our state-of-the-art fitness center to maintain
                      your routine while away from home. 
                </p>
            </div>

            

            <div className='sub-container2'>
                <div className='left'>
                    <img src={image2} alt='Showcasing the hotel amenities' className='left-image' />
                </div>
                <div className='right'>

                    <p>
                        We are thrilled to announce the launch of our Global International Hotel Mobile App! Designed with your convenience in mind, our app allows you to manage your stay effortlessly. Experience seamless booking, check-in and check-out options, and real-time access to exclusive offers directly from your smartphone.
                    </p>
                    <p>
                        Explore our hotel amenities, make restaurant reservations, and receive personalized recommendations tailored to your preferences all at your fingertips. Download the app today and unlock a new level of luxury and convenience during your stay with us!
                    </p>
                </div>
            </div>

            <div className='sub-container3'>
                <div className='sub1'>
                    <p>We are thrilled to announce the opening of our newly constructed building at Global International Hotel, designed with modern elegance and guest comfort in mind. This state of the art facility boasts spacious rooms with breathtaking views, contemporary decor, and the latest amenities to ensure a luxurious stay.</p>
                    <p>Guests can enjoy enhanced features such as a rooftop infinity pool, a fully equipped fitness center, and an upscale restaurant offering gourmet dining experiences.</p>
                </div>
                <div className='sub2'>
                    <img src={image3} alt="New Building" className='image3'/>
                </div>
            </div>
        </div>
    );
};

export default Home;