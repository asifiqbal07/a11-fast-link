import React from 'react';
import banner from '../../../assets/Banner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 shadow-lg mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 text-center lg:text-left'>
                        <h1 className="text-5xl font-bold"><span className='text-[#3078fb]'>FAST LINK</span> <br /> Internet Service Provider.</h1>
                        <p className="py-6 lg:w-3/4">Best internet service provider in Bangladesh which provides fully dedicated, super fast, cost-effective, secured internet connection.</p>
                        <div className='mt-2'>
                        <button className="btn bg-[#3078fb] border-0 rounded-none hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb]">Our Services</button>
                        <button className="btn bg-white text-[#3078fb] border-[1px] border-[#3078fb] rounded-none hover:bg-[#3078fb] hover:text-white hover:border-[#3078fb] ml-5">Contact US</button>
                        </div>
                    </div>
                    <img src={banner} className="rounded-lg " alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;