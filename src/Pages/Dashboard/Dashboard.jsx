import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdClass, MdFlightClass, MdHotelClass } from "react-icons/md";
import { FaHome, FaUsers } from "react-icons/fa";
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import { AuthContext } from '../../Provider/AuthProvider';

const Dashboard = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-slate-800 text-xl text-center text-neutral-content">
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    {isAdmin && (
                        <>
                            <li><NavLink to='/dashboard/manageclasses'><MdClass /> Manage classes</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers /> Manage Users</NavLink></li>
                        </>
                    )}
                    {!isAdmin && isInstructor && (
                        <>
                            <li><NavLink to='/dashboard/addclass'><MdClass /> Add Class</NavLink></li>
                            <li><NavLink to='/dashboard/myclass'><MdFlightClass /> My class</NavLink></li>
                        </>
                    )}
                    {!isAdmin && !isInstructor && (
                        <>
                            <li><NavLink to='/dashboard/selectedclass'><MdClass /> Selected Classes</NavLink></li>
                            <li><NavLink to='/dashboard/enrollclass'><MdHotelClass /> Enroll Classes</NavLink></li>
                            <li><NavLink to='/dashboard/paymentHistory'><MdHotelClass /> Payment Classes</NavLink></li>
                        </>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;