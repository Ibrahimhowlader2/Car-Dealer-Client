import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './AboutUs.css';
import about from '../../images/aboutUs-1.png'

const AboutUs = () => {
    return (
        <>
            <Header/>
            <section class="single_page_heading">
                <h1>About Us</h1>
                <p> <a href="/">home</a> &#62;&#62; About Us </p>
            </section>

            <section className="about">

                <div className="image">
                    <img src={about} alt="" />
                </div>

                <div className="content">
                    <h4>ABOUT THE CAR DEALER</h4>
                    <h3>WE ARE THE BEST CAR SERVICE PROVIDE IN THE WORLD</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi, eum quibusdam perferendis dicta, incidunt dolores nemo ex.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi
                    </p>
                    <Link to="/products" ><button className="btn">Buy Now</button></Link>
                </div>
                

            </section>
            </>
    );
};

export default AboutUs;