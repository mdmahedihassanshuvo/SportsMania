import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/images/error.jpg';


const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={error} alt="" />
            <Link to='/'><button className='btn btn-accent text-white'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;