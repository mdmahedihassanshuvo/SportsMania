import React from 'react';
import './Banner.css';
import bannerImage from '../../../assets/images/banner.jpg'; // Import the image file

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="mx-10 lg:w-1/2">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Welcome to Summer camp</h1>
                    <p className="mb-5 hidden lg:block">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam libero doloribus temporibus dicta inventore. Fugit maxime expedita officia minima?</p>
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
