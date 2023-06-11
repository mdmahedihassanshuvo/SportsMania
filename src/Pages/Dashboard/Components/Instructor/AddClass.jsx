import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const AddClass = () => {

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const { name, price, instructor, photo, seats } = data;
        axiosSecure.post('/addedClasses', { email: user?.email, name, price: parseFloat(price), instructor, image: photo, status: 'pending', available_seats: seats })
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Food Item has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    };

    return (
        <div className='w-full'>
            <h2 className='text-center text-accent text-3xl mb-5'>Add Your Class Here</h2>
            <form className='mx-20' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Name*</span>
                    </label>
                    <input type="text" name='name' placeholder="class name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>
                <div className='flex gap-3 lg:gap-5 my-5'>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Image URL*</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" {...register("photo", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" name='price' placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex gap-3 lg:gap-5 my-5'>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Instructor*</span>
                        </label>
                        <input type="text" name='instructor' defaultValue={user?.displayName} placeholder="instructor name" {...register("instructor", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seats*</span>
                        </label>
                        <input type="number" name='seats' placeholder="available_seats" {...register("seats", { required: true })} className="input input-bordered w-full" />
                    </div>
                </div>

                <input className='btn bg-accent text-white hover:bg-blue-600' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;