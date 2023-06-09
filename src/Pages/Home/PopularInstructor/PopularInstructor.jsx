import React from 'react';
import usePopularInstructor from '../../../Hooks/usePopularInstructor';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PopularInstructor = () => {

    const [popularInstructor] = usePopularInstructor()
    // console.log(popularinstructor)

    return (
        <div >
            <h2 className='lg:my-20 my-5 text-3xl font-semibold text-center text-accent'>Popular Instructors</h2>
            <div className='flex flex-wrap justify-center gap-5 mx-4 md:mx-0'>
                {
                    popularInstructor.map(instructor =>
                        <div className="card col-span-4 md:col-span-2 w-96 bg-base-100 shadow-xl" key={instructor._id}>
                            <figure className="px-10 pt-10">
                                <LazyLoadImage
                                    className="rounded-xl"
                                    alt='class'
                                    effect="blur"
                                    src={instructor.image} />
                            </figure>
                            <div className="card-body items-start text-start">
                                <h2 className="card-title">Name: {instructor.name}</h2>
                                <p>Email: {instructor.email}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;