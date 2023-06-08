import React from 'react';
import usePopularClasses from '../../../Hooks/usePopularClasses';

const PopularClasses = () => {
    const [popularcls] = usePopularClasses();
    // console.log(popularcls)

    return (
        <div className=''>
            <h2 className='lg:my-20 my-5 text-3xl font-semibold text-center text-accent'>Popular Classes</h2>
            <div className='flex flex-wrap justify-center gap-5 mx-4 md:mx-0'>
                {
                    popularcls.slice(0, 6).map((cla) => (
                        <div className="card col-span-4 md:col-span-2 w-96 bg-base-100 shadow-xl" key={cla.id}>
                            <figure className="px-10 pt-10">
                                <img src={cla.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-start text-start">
                                <h2 className="card-title">Name: {cla.name}</h2>
                                <p>Price: ${cla.price}</p>
                                <div className="card-actions">
                                    <button className="btn btn-accent text-white">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularClasses;
