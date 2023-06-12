import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { FaUser, FaUserAlt, FaUserGraduate, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useUser from '../../../../Hooks/useUser';
import { Helmet } from 'react-helmet-async';

const ManageUsers = () => {

    const [users, refetch] = useUser()

    const handleInstructor = (user) => {
        axios.patch('https://summer-server-theta.vercel.app/users/admin', { email: user?.email })
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is now an Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };


    const handleAdmin = (user) => {
        axios.patch(`https://summer-server-theta.vercel.app/users/admin/${user?._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is now Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='w-ll'>
            <Helmet>
                <title>SportsMania | Manage Users</title>
            </Helmet>
            <h2 className='text-center text-accent my-10 text-3xl'>User Management: Streamlining Access and Permissions</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role === 'admin' ? 'Admin' : <button onClick={() => handleAdmin(user)} className='btn bg-blue-600 text-white btn-sm'><FaUserShield /></button>}</td>
                                <td>{user?.role === 'instructor' ? 'Instructor' : <button onClick={() => handleInstructor(user)} className='btn bg-orange-600 text-white btn-sm'><FaUserGraduate /></button>}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;