import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div className='bg-slate-200'>
            <Helmet>
                <title>
                    SportsMania | Home
                </title>
            </Helmet>
            <Banner/>
            <PopularClasses/>
            <PopularInstructor/>
        </div>
    );
};

export default Home;