import React from 'react';
import usePaidClasses from '../../../../Hooks/usePaidClasses';

const PaymentHistory = () => {

    const [paidClasses] = usePaidClasses()

    return (
        <div className='w-3/4'>
            <h2 className='text-center text-accent text-3xl my-10'>Here are Your payment history !!</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Student Email</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paidClasses.map((cla, index) => <tr key={paidClasses._id}>
                                <th>{index + 1}</th>
                                <td>{cla.name}</td>
                                <td>{cla.email}</td>
                                <td>{cla.transactionId}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;