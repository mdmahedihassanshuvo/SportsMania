import React from 'react';
import useMyClass from '../../../../Hooks/useMyClass';
import { Helmet } from 'react-helmet-async';

const MyClass = () => {

    const [myClasses] = useMyClass()

    return (
        <div className='w-3/4'>
            <Helmet>
                <title>SportsMania | My Classes</title>
            </Helmet>
            <h2 className='text-center text-accent text-3xl my-5'>My Total classes: {myClasses.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>FeedBack</th>
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
                                <td>{cls?.feedBack}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;