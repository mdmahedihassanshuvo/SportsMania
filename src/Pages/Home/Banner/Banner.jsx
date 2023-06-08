import React from 'react';
import './Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/images/banner1.jpg'
import bannerImg2 from '../../../assets/images/banner2.jpg'
import bannerImg3 from '../../../assets/images/banner3.jpg'
import bannerImg4 from '../../../assets/images/banner4.jpg'

const Banner = () => {
    return (
        <Carousel 
        autoPlay={true}
        interval={1500}
        infiniteLoop={true}
        >
            <div>
                <img src={bannerImg1} alt='banner-1'/>
            </div>
            <div>
                <img src={bannerImg2} alt='banner-2'/>
            </div>
            <div>
                <img src={bannerImg3} alt='banner-3'/>
            </div>
            <div>
                <img src={bannerImg4} alt='banner-4'/>
            </div>
        </Carousel>
    );
};

export default Banner;
