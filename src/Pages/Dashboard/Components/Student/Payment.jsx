import React, { useContext } from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHED_KEY)

const Payment = () => {

    const { loading } = useContext(AuthContext)
    const { id } = useParams()
    // console.log(id)
    const [axiosSecure] = useAxiosSecure()
    const { data: item = [] } = useQuery({
        queryKey: ['item', id],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectClasses?id=${id}`)
            // console.log(res.data)
            return res.data;
        }
    })

    // const classItem = item[0]

    // console.log(item)

    return (
        <div>
            <Helmet>
                <title>SportsMania | Payment</title>
            </Helmet>
            <div className='lg:w-3/4'>
                <h2 className='text-center text-3xl text-accent lg:my-10'>Please provide payment Information</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm item={item} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;