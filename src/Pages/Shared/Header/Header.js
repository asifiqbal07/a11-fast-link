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
                <Link href='/' className="normal-case text-xl">
                    <div className='flex items-center'>
                    <img className='w-12 mr-4' src={logo} alt="" />
                    <span className='text-4xl font-bold'>Fast Link</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='/' className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;