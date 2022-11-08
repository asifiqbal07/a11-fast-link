import React from 'react';
import banner from '../../../assets/Banner.png'

const Banner = () => {
    return (
        <div className='mb-16 m-6 lg:mx-0'>
            <div className="hero min-h-screen bg-base-200 shadow-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 text-center lg:text-left'>
                        <h1 className="text-5xl font-bold">Your Local <span className='text-[#3078fb]'>Internet <br /> Service Provider.</span></h1>
                        <p className="py-6 lg:w-3/4 text-lg">Best internet service provider in your area which provides fully dedicated, super fast, cost-effective, secured internet connection.</p>
                        <div className='mt-2'>
                        <button className="btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">My Services</button>
                        <button className="btn bg-white text-[#3078fb] border-[1px] border-[#3078fb]  hover:bg-[#3078fb] hover:text-white hover:border-[#3078fb] ml-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Contact Me</button>
                        </div>
                    </div>
                    <img src={banner} className="rounded-lg " alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;