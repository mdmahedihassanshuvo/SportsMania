import React from 'react';
import useMyClass from '../../../../Hooks/useMyClass';

const ManageClasses = () => {

    const [myClasses, refetch] = useMyClass()
    console.log(myClasses)

    return (
        <div className='w-3/4'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((cls, index) => <tr key={cls._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cls.name}
                                </td>
                                <td>{cls.status}</td>
                                <td>{cls?.status === 'approve' ? 'approve' : <button onClick={() => handleApprove(cls)} className='btn bg-orange-600 hover:bg-slate-700 text-white btn-sm'>Approve</button>}</td>
                                <td>{cls?.status === 'approve' ? 'approve' : <button onClick={() => handleApprove(cls)} className='btn bg-orange-600 hover:bg-slate-700 text-white btn-sm'>Deny</button>}</td>
                                <td>{cls?.status === 'approve' ? 'approve' : <button onClick={() => handleApprove(cls)} className='btn bg-orange-600 hover:bg-slate-700 text-white btn-sm'>Feedback</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;