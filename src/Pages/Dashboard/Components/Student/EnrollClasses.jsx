import React from 'react';
import usePaidClasses from '../../../../Hooks/usePaidClasses';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet-async';

const EnrollClasses = () => {

    const [paidClasses] = usePaidClasses()

    return (
        <div>
            <Helmet>
                <title>SportsMania | Enroll Classes</title>
            </Helmet>
            <div className='flex flex-wrap justify-center gap-5 mx-4 md:mx-0'>
                {
                    paidClasses.map((cla) => (
                        <div className="card col-span-4 md:col-span-2 w-96 bg-base-100 shadow-xl" key={cla._id}>
                            <figure className="px-10 pt-10">
                                <LazyLoadImage
                                    className="rounded-xl"
                                    alt='class'
                                    effect="blur"
                                    src={cla.image} />
                            </figure>
                            <div className="card-body items-start text-start">
                                <h2 className="card-title">Name: {cla.name}</h2>
                                <p>Instructor Name: {cla.instructor}</p>
                                <div className="card-actions">
                                    <button className="btn btn-accent text-white" >Start Class</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default EnrollClasses;