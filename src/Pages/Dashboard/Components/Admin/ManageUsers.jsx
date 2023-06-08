import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaUser, FaUserAlt, FaUserGraduate, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/users')
            return res.data
        }
    })

    const handleInstructor = (user) => {

    }

    const handleAdmin = (user) => {
        axios.patch(`http://localhost:5000/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
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
                                <td>{user?.roll === 'admin' ? 'Admin' : <button onClick={() => handleAdmin(user)} className='btn bg-blue-600 text-white btn-sm'><FaUserShield/></button>}</td>
                                <td>{user?.roll === 'instructor' ? 'Instructor' : <button onClick={() => handleInstructor(user)} className='btn bg-orange-600 text-white btn-sm'><FaUserGraduate/></button>}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;