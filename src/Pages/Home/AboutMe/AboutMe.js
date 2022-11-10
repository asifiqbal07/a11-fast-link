import React from 'react';
import about from '../../../assets/about.jpg'
import net from '../../../assets/net.jpg'

const AboutMe = () => {
    return (
        <div id='home-about'>
            <div className="hero bg-base-200 my-32">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={about} className="lg:w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                        <img src={net} className="lg:w-3/5 right-5 top-1/2 border-8 border-b-white absolute rounded-lg shadow-lg hidden lg:block" alt='' />
                    </div>
                    <div className='lg:w-1/2'>
                        <p className="text-2xl font-bold text-[#3078fb] text-center lg:text-left mt-5 lg:mt-0">About Me</p>
                        <h1 className="my-6 text-5xl font-bold text-center lg:text-left">
                            I'm qualified <br />
                            & experience <br />
                            in this field</h1>
                        <p className="p-4 text-center lg:text-left border-l-4 border-[#3078fb] mx-5 py-0 font-semibold">Best internet service provider in your area which provides fully dedicated, super fast, cost-effective, secured internet connection. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;