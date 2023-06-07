import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="mx-10 lg:w-1/2">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Summer camp</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam libero doloribus temporibus dicta inventore. Fugit maxime expedita officia minima?</p>
                    <button className="btn btn-primary">Some thing happed</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;