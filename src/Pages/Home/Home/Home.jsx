import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    SportsMania | Home
                </title>
            </Helmet>
            <Banner/>
        </div>
    );
};

export default Home;