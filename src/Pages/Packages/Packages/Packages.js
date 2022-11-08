import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Package from '../Package/Package';
import banner from '../../../assets/Packages Banner.jpg'

const Packages = () => {
    const allPackages = useLoaderData();
    return (
        <div className='mx-6 lg:mx-0 mb-20 mt-10'>
            <div className='lg:flex items-center justify-between mb-6'>
                <div className='h-52 hidden lg:block'>
                    <img className='' src={banner} alt="" />
                </div>
            <h2 className='text-center text-4xl font-bold lg:w-4/5 '>Explore Our <br /> Popular <span className='text-[#3078fb]' >Packages </span> </h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-20 '>
                {
                    allPackages.map(pack => <Package
                    key={pack._id}
                    pack={pack}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;