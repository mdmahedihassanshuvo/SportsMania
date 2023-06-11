import React, { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Classes = () => {

    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [axiosSecure] = useAxiosSecure();
    const { data: approveClasses = [], refetch } = useQuery({
        queryKey: ['approveClasses'],
        // enabled: !loading && user.email,
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/addedClasses?status=approve');
            console.log(res.data);
            return res.data;
        },
    });

    console.log(approveClasses)

    const handleSelect = (cla) => {
        console.log('click')
        if (!user) {
            navigate('/login');
         }
         const { available_seats, price, name, instructor, image } = cla;
         axiosSecure.post(`/selectClasses/${user.email}`, { email: user.email, available_seats, price: parseFloat(price), name, instructor, image })
             .then(res => {
                 console.log(res.data)
                 if (res.data.insertedId) {
                     Swal.fire({
                         position: 'center',
                         icon: 'success',
                         title: `${cla.name} is selected`,
                         showConfirmButton: false,
                         timer: 1500
                     })
                 }
             })
    }

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
                                <p>Available Seats: {cla.available_seats}</p>
                                <p>Price: ${cla.price}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleSelect(cla)} className="btn btn-accent text-white" disabled={isAdmin || isInstructor}>Select Now</button>
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
