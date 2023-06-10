import React from 'react';
import { Link } from 'react-router-dom';

const ManageClassRow = ({ cls, index, handleDeny, handleApprove }) => {
    console.log(cls)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{cls.name}</td>
            <td>{cls.status}</td>
            <td>
                {cls.status === 'approve' ? (
                    'approve'
                ) : (
                    <button
                        onClick={() => handleApprove(event, cls)}
                        className="btn bg-orange-600 hover:bg-slate-700 text-white btn-sm"
                        disabled={cls.status !== 'pending'}
                    >
                        Approve
                    </button>
                )}
            </td>
            <td>
                {cls.status === 'deny' ? (
                    'deny'
                ) : (
                    <button
                        id="deny"
                        onClick={() => handleDeny(event, cls)}
                        className="btn bg-orange-600 hover:bg-slate-700 text-white btn-sm"
                        disabled={cls.status !== 'pending'}
                    >
                        Deny
                    </button>
                )}
            </td>
            <td>
                {cls.status === 'feedback' ? (
                    'feedback'
                ) : (
                    <Link disabled={cls.feedBack} to={`/dashboard/feedback/${cls._id}`} className="btn bg-orange-600 hover:bg-slate-700 text-white btn-sm">Feedback</Link>
                    // <button
                    //     onClick={() => handleFeedback(event, cls)}
                    //     className="btn bg-orange-600 hover:bg-slate-700 text-white btn-sm"
                    // >
                    //     Feedback
                    // </button>
                )}
            </td>
        </tr>
    );
};

export default ManageClassRow;