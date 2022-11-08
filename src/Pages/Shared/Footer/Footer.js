import React from 'react';
import logo from '../../../assets/Logo.png'

const Footer = () => {
    return (
        <div className='mt-10'>
             <footer className="footer lg:p-28 p-9 bg-base-200 text-base-content">
                <div>
                    <img className='w-20' src={logo} alt=''></img>
                    <p>Fast Link<br />Providing reliable tech since 2021</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='google.com' className="link link-hover">Branding</a>
                    <a href='google.com' className="link link-hover">Design</a>
                    <a href='google.com' className="link link-hover">Marketing</a>
                    <a href='google.com' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='google.com' className="link link-hover">About us</a>
                    <a href='google.com' className="link link-hover">Contact</a>
                    <a href='google.com' className="link link-hover">Jobs</a>
                    <a href='google.com' className="link link-hover">Press kit</a>
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