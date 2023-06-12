import React, { useContext } from 'react';
import usePopularInstructor from '../../Hooks/usePopularInstructor';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useInstructor from '../../Hooks/useInstructor';
import axios from 'axios';

const Instructors = () => {

    const { user, loading } = useContext(AuthContext)
    // console.log(user)
    // const [axiosSecure] = useAxiosSecure()
    // const [isInstructor] = useInstructor()
    // console.log(isInstructor)
    const { data: instructors = [], refetch } = useQuery({
        queryKey: ['instructors'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get('https://summer-server-theta.vercel.app/users?role=instructor')
            console.log(res.data)
            return res.data;
        }
    })
    console.log(instructors)

    return (
        <div className='mb-3 lg:mb-5'>
            <Helmet>
                <title>SportsMania | Instructors</title>
            </Helmet>
            <h2 className='lg:my-20 my-5 text-3xl font-semibold text-center text-accent'>Here are Our Instructors: {instructors.length}</h2>
            <div className='flex flex-wrap justify-center gap-5 mx-4 md:mx-0'>
                {
                    instructors.map(instructor =>
                        <div className="card col-span-4 md:col-span-2 w-96 bg-base-100 shadow-xl" key={instructor._id}>
                            <figure className="px-10 pt-10">
                                <LazyLoadImage
                                    className="rounded-xl"
                                    alt='class'
                                    effect="blur"
                                    src={instructor.photo} />
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

export default Instructors;