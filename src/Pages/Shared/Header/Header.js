import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'

const Header = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 my-4 h-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link href='/' className="normal-case text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className='flex items-center'>
                        <img className='w-12 mr-4' src={logo} alt="" />
                        <span className='text-4xl font-bold'>Fast Link</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb]">Get Started</button>
            </div>
        </div>
    );
};

export default Header;