import React from 'react';
import './CourseOffer.css'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/images/off.json";

const CourseOffer = () => {
    return (
        <div className='course-offer-container offer bg-fixed mt-10'>
            <div className='flex flex-col lg:flex-row justify-center lg:gap-10 items-center top-[30%]'>
                <div className='lg:w-1/4'>
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>
                <div className='relative space-y-3 hidden lg:block'>
                    <h2 className='text-5xl text-white'>Offer available <br />only Today</h2>
                    <Link className='btn btn-ghost border-0 hover:border-b-4 hover:border-red-600 border-b-4 border-accent text-white'>Enroll Now</Link >
                </div>
            </div>
        </div>
    );
};

export default CourseOffer;
