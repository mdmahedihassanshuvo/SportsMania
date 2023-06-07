// import React, { useContext } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useForm } from 'react-hook-form';
// import Lottie from "lottie-react";
// import groovyWalkAnimation from "../../assets/login.json";
// import googleIcon from '../../assets/images/google-icon.png'
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';

// const Login = () => {

//     const { loginUser, loginByGoogle } = useContext(AuthContext);
//     const { register, handleSubmit, formState: { errors }, reset } = useForm();
//     const onSubmit = data => {
//         console.log(data);
//         loginUser(data.email, data.password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: 'Login successfully',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//                 reset();
//             })
//             .catch(error => {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: error.message
//                   })
//             })
//     };

//     const handleSocialLogin = () => {
//         loginByGoogle()
//             .then(() => {
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: 'Login by Google successfully',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             })
//             .catch(error => {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: error.message
//                 })
//             })
//     }

//     return (
//         <div className='my-10'>
//             <Helmet>
//                 <title>
//                     SportsMania | Login
//                 </title>
//             </Helmet>
//             <div className="hero min-h-screen">
//                 <div className="hero-content flex-col lg:flex-row">
//                     <div className="text-center lg:text-left lg:w-4/12">
//                         <Lottie animationData={groovyWalkAnimation} loop={true} />
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
//                         <h1 className="text-3xl text-center my-2 font-bold">Login now!</h1>
//                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Login" />
//                             </div>
//                             <div className="divider">OR</div>
//                             <button onClick={handleSocialLogin} className='btn flex items-center justify-center'>
//                                 <img className='w-10' src={googleIcon} alt="" />
//                                 <p className='text-lg'>Login With Google</p>
//                             </button>
//                             <p className='text-center my-2'>Don't have any account please, <Link to='/register' className='text-blue-600 underline'>Sign Up</Link> </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;