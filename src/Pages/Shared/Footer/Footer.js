import React from 'react';
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
                    <span className="footer-title">Services</span>
                    <a href='google.com' className="link link-hover">Branding</a>
                    <a href='google.com' className="link link-hover">Design</a>
                    <a href='google.com' className="link link-hover">Marketing</a>
                    <a href='google.com' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='google.com' className="link link-hover">Terms of use</a>
                    <a href='google.com' className="link link-hover">Privacy policy</a>
                    <a href='google.com' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;