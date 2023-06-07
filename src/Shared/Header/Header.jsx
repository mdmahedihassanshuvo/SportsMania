import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const listItem = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-600 border-b-4 border-blue-600"
                            : "hover:border-b-4 hover:border-accent"
                }
            >
                <span className='text-lg font-medium'>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/instructors'
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-600 border-b-4 border-blue-600"
                            : "hover:border-b-4 hover:border-accent"
                }
            >
                <span className='text-lg font-medium'>Instructors</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/classes'
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-600 border-b-4 border-blue-600"
                            : "hover:border-b-4 hover:border-accent"
                }
            >
                <span className='text-lg font-medium'>Classes</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-600 border-b-4 border-blue-600"
                            : "hover:border-b-4 hover:border-accent"
                }
            >
                <span className='text-lg font-medium'>Dashboard</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/login'
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-600 border-b-4 border-blue-600"
                            : "hover:border-b-4 hover:border-accent"
                }
            >
                <span className='text-lg font-medium'>Login</span>
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {listItem}
                    </ul>
                </div>
                <Link to='/' className='normal-case text-xl'>SportsMania</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {listItem}
                </ul>
            </div>
        </div>
    );
};

export default Header;