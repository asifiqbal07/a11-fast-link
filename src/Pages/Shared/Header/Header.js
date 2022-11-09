import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'
import { AuthContext } from '../../../context/AuthProvider';
import { FaUser } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/packages'>Packages</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
                    <div className='flex items-center'>
                        <div><img className='w-10 mr-4' src={logo} alt="" /></div>
                        <div className='mr-5'><span className='text-4xl font-bold'>Fast Link</span></div>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end ">
                <button className="btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb]">Get Started</button>

                <ul className="menu menu-horizontal p-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <Link to='/'>
                        {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <button onClick={handleLogOut} className="btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb]">LogOut</button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup'>Sign Up</Link>
                                </>
                        }

                    </Link>
                    <Link to='/profile'>{user?.photoURL ?
                        <img className='rounded-full h-8' src={user?.photoURL} alt="" />
                        :
                        <FaUser></FaUser>
                    }
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;