import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/login.json";
import googleIcon from '../../assets/images/google-icon.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {

    const { createUser, loginByGoogle, profileUpdate } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from || '/'
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const password = watch('password', '');
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                profileUpdate(data.name, data.photo)
                    .then(() => {
                        axios.post('http://localhost:5000/users', { name: data.name, email: data.email })
                            .then(res => {
                                console.log(res.data);
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Sign Up successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate(from, { replace: true })
                                reset();
                                return res.data;
                            })
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                });
            })
    };

    const handleSocialLogin = () => {
        loginByGoogle()
            .then((result) => {
                const loggedUser = result.user;
                axios.post('http://localhost:5000/users', { name: loggedUser.displayName, email: loggedUser.email })
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login by Google successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                        return res.data;
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            })
    }

    return (
        <div className='my-10'>
            <Helmet>
                <title>
                    SportsMania | Sign Up
                </title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:w-4/12">
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
                        <h1 className="text-3xl text-center my-2 font-bold">Sign Up now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" id="password" name="password" {...register("password", { required: true, minLength: 8, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="email" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Please input password</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">password must be 8 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">password must have one uppercase , one special, one digits, one lowercase character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: value => value === password || 'Passwords do not match',
                                    })}
                                    placeholder="confirm password"
                                    className="input input-bordered"
                                />
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <div className="divider">OR</div>
                            <button onClick={handleSocialLogin} className='btn flex items-center justify-center'>
                                <img className='w-10' src={googleIcon} alt="" />
                                <p className='text-lg'>Login With Google</p>
                            </button>
                            <p className='text-center my-2'>Already have an account please, <Link to='/login' className='text-blue-600 underline'>Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;