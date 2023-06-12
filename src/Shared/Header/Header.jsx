import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {

    const { user, logout } = useContext(AuthContext)
    // console.log(user)


    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                localStorage.removeItem('accessToken')
            })
            .catch(error => console.log(error))
    }

    const listItem = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "text-accent border-b-4 border-blue-600"
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
                        ? "text-accent border-b-4 border-blue-600"
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
                        ? "text-accent border-b-4 border-blue-600"
                        : "hover:border-b-4 hover:border-accent"
                }
            >
                <span className='text-lg font-medium'>Classes</span>
            </NavLink>
        </li>
        {user && <li>
            <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                    isActive
                        ? "text-accent border-b-4 border-blue-600"
                        : "hover:border-b-4 hover:border-accent"
                }
            >
                <span className='text-lg font-medium'>Dashboard</span>
            </NavLink>
        </li>}
        {user ?
            <div className='flex flex-col lg:flex-row justify-start items-start'>
                <button onClick={handleLogout} className="btn btn-ghost mr-2"><span className='text-lg font-medium'>Logout</span></button>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img title={user?.displayName} src={user?.photoURL} />
                    </div>
                </div>
            </div>
            : <li>
                <NavLink
                    to='/login'
                    className={({ isActive }) =>
                        isActive
                            ? "text-accent border-b-4 border-blue-600"
                            : "hover:border-b-4 hover:border-accent"
                    }
                >
                    <span className='text-lg font-medium'>Login</span>
                </NavLink>
            </li>}
    </>

    return (
        <div className="navbar bg-black bg-opacity-70">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu z-10 menu-sm bg-slate-200 text-white dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {listItem}
                    </ul>
                </div>
                <Link to='/' className='font-medium text-xl'><span className='text-orange-600'>Sports</span><span className='text-accent'>Mania</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    {listItem}
                </ul>
            </div>
        </div>
    );
};

export default Header;