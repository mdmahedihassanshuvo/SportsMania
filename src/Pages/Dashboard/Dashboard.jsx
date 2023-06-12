import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdClass, MdFlightClass, MdHotelClass } from "react-icons/md";
import { FaHome, FaUsers } from "react-icons/fa";
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import { AuthContext } from '../../Provider/AuthProvider';
import { motion } from "framer-motion"

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    // console.log(user)
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
                            <li><NavLink to='/dashboard/manageclasses'><motion.button
                                className='flex justify-center gap-2 items-center'
                                whileHover={{
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                            >
                                <MdClass />Manage classes
                            </motion.button></NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><motion.button
                                className='flex justify-center gap-2 items-center'
                                whileHover={{
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                            >
                                <FaUsers />Manage Users
                            </motion.button></NavLink></li>
                        </>
                    )}
                    {!isAdmin && isInstructor && (
                        <>
                            <li><NavLink to='/dashboard/addclass'><motion.button
                                className='flex justify-center gap-2 items-center'
                                whileHover={{
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                            >
                                <MdFlightClass />Add Class
                            </motion.button></NavLink></li>
                            <li><NavLink to='/dashboard/myclass'><motion.button
                                className='flex justify-center gap-2 items-center'
                                whileHover={{
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                            >
                                <MdClass />My Classes
                            </motion.button></NavLink></li>
                        </>
                    )}
                    {!isAdmin && !isInstructor && (
                        <>
                            <li><NavLink to='/dashboard/selectedclass'><motion.button
                                className='flex justify-center gap-2 items-center'
                                whileHover={{
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                            >
                                <MdHotelClass />Selected Classes
                            </motion.button></NavLink></li>
                            <li><NavLink to='/dashboard/enrollclass'><motion.button
                                className='flex justify-center gap-2 items-center'
                                whileHover={{
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                            >
                                <MdHotelClass />Enrolled Classes
                            </motion.button></NavLink></li>
                            <li><NavLink to='/dashboard/paymentHistory'><motion.button
                                whileHover={{
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                            >
                                Payment History
                            </motion.button></NavLink></li>
                        </>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;