import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'

const Footer = () => {
    return (
        <div className='mt-10 '>
             <footer className="footer lg:p-16 p-9 bg-base-200 text-base-content">
                <div>
                    <img className='w-20 mx-auto' src={logo} alt=''></img>
                    <p className='text-center'><span className='text-xl font-bold'>Fast Link</span><br />Providing internet service since 2021</p>
                </div>
                <div>
                    <span className="footer-title">Get Updated News</span>
                    <a href='facebook.com' className="link link-hover">Facebook</a>
                    <a href='youtube.com' className="link link-hover">Youtube</a>
                    <a href='instagram.com' className="link link-hover">Instagram</a>
                    <a href='twitter.com' className="link link-hover">Twitter</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/maintenance' className="link link-hover">Terms of use</Link>
                    <Link to='/maintenance' className="link link-hover">Privacy policy</Link>
                    <Link to='/maintenance' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;