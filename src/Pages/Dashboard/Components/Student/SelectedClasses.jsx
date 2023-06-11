import React, { useContext } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext);
    const { data: selectClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectClasses/${user?.email}`)
            // console.log(res.data);
            return res.data
        }
    })

    return (
        <div>
            {selectClasses.length <= 0 ? <h2 className='lg:my-20 my-5 text-3xl font-semibold text-center text-accent'>Please Selected Classes</h2> : <h2 className='lg:my-20 my-5 text-3xl font-semibold text-center text-accent'>Here are Your Selected Classes: {selectClasses.length}</h2>}
            <div className='flex flex-wrap justify-center gap-5 mx-4 md:mx-0'>
                {
                    selectClasses.map((cla) => (
                        <div className="card col-span-4 md:col-span-2 w-96 bg-base-100 shadow-xl" key={cla._id}>
                            <figure className="px-10 pt-10">
                                <LazyLoadImage
                                    className="rounded-xl"
                                    alt='class'
                                    effect="blur"
                                    src={cla.image} />
                            </figure>
                            <div className="card-body items-start text-start">
                                <h2 className="card-title">Name: {cla.name}</h2>
                                <p>Instructor Name: {cla.instructor}</p>
                                <p>Available Seats: {cla.available_seats}</p>
                                <p>Price: ${cla.price}</p>
                                <div className="card-actions">
                                    <Link to={`/dashboard/payment/${cla.price}`} className="btn btn-accent text-white" >Pay Now</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SelectedClasses;