import React, { useState } from 'react';
import useMyClass from '../../../../Hooks/useMyClass';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import ManageClassRow from '../../../../Reused/ManageClassRow';

const ManageClasses = () => {
    const [myClasses, refetch] = useMyClass();
    const [disabledButtons, setDisabledButtons] = useState(false);
    const [axiosSecure] = useAxiosSecure();

    const handleApprove = (event, cls) => {
        event.preventDefault();
        const updatedStatus = 'approve';
        axiosSecure.patch(`/addedClasses/${cls._id}`, { status: updatedStatus })
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${cls.name} is an approve`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleDeny = (event, cls) => {
        event.preventDefault();
        const updatedStatus = 'deny';
        axiosSecure.patch(`/addedClasses/${cls._id}`, { status: updatedStatus })
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${cls.name} is denied`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    // const handleFeedback = (cls) => {
    //    console.log('feedback')
    // }

    return (
        <div className="w-3/4">
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
                        {myClasses.map((cls, index) => <ManageClassRow key={cls._id} cls={cls} index={index} handleApprove={handleApprove} handleDeny={handleDeny} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
