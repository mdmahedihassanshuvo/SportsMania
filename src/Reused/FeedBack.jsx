import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const FeedBack = () => {

    const {id} = useParams()
    // console.log(id)
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axiosSecure.put(`/addedClasses/${id}`, {feedBack: data.feedback})
        .then(res => {
            // console.log(res.data);
            if(res.data.modifiedCount){
                reset()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `FeedBack send successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
    };

    return (
        <div className='w-full'>
            <h1 className='text-center text-accent text-3xl my-5'>FeedBack</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
                <div>
                    <textarea {...register("feedback", { required: true })} className='border-2' name="feedback" id="" cols="100" rows="10"></textarea>
                </div>
                <input className='btn bg-orange-600 text-white' type="submit" value="Send FeedBack" />
            </form>
        </div>
    );
};

export default FeedBack;