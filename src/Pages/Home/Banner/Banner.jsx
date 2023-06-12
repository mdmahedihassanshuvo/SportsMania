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
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={2500}
            infiniteLoop={true}
        >
            <div>
                <img className='h-[700px]' src={bannerImg1} alt='banner-1' />
            </div>
            <div>
                <img className='h-[700px]' src={bannerImg2} alt='banner-2' />
            </div>
            <div>
                <img className='h-[700px]' src={bannerImg3} alt='banner-3' />
            </div>
            <div>
                <img className='h-[700px]' src={bannerImg4} alt='banner-4' />
            </div>
        </Carousel>
    );
};

export default Banner;
