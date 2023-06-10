import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';

const Classes = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: approveClasses = [], refetch } = useQuery({
        queryKey: ['approveClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/addedClasses?status=approve');
            console.log(res.data);
            return res.data;
        },
    });

    return (
        <div className='mb-3 lg:mb-5'>
            <Helmet>
                <title>
                    SportsMania | Classes
                </title>
            </Helmet>
            <h2 className='lg:my-20 my-5 text-3xl font-semibold text-center text-accent'>Here are Our Provide Classes: {approveClasses.length}</h2>
            <div className='flex flex-wrap justify-center gap-5 mx-4 md:mx-0'>
                {
                    approveClasses.map((cla) => (
                        <div className="card col-span-4 md:col-span-2 w-96 bg-base-100 shadow-xl" key={cla.id}>
                            <figure className="px-10 pt-10">
                                <LazyLoadImage
                                    className="rounded-xl"
                                    alt='class'
                                    effect="blur"
                                    src={cla.image} />
                            </figure>
                            <div className="card-body items-start text-start">
                                <h2 className="card-title">Name: {cla.name}</h2>
                                <p>Price: ${cla.price}</p>
                                <div className="card-actions">
                                    <button className="btn btn-accent text-white">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Classes;