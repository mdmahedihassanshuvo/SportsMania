import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHED_KEY)

const Payment = () => {

    const {price} = useParams()
    // console.log(typeof price)

    return (
        <div className='lg:w-3/4'>
            <h2 className='text-center text-3xl text-accent lg:my-10'>Please provide payment Information</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;