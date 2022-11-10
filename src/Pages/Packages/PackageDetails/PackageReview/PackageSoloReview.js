import React from 'react';
import { FaStar } from 'react-icons/fa';

const PackageSoloReview = ({ soloReview}) => {

    const { customerReview, customer, customer_photo} = soloReview;

    return (
        <div>  
            <div className='border p-6 mx-4 lg:mx-0 my-4 lg:mr-5 rounded-xl shadow-md'>
                <div className='flex just mb-5'>
                    <FaStar className='text-[#FFDF00]'></FaStar>
                    <FaStar className='text-[#FFDF00]'></FaStar>
                    <FaStar className='text-[#FFDF00]'></FaStar>
                    <FaStar className='text-[#FFDF00]'></FaStar>
                    <FaStar className='text-[#FFDF00]'></FaStar>
                </div>
                <div>
                    <p className='text-base'>{customerReview}</p>
                    <h2 className='text-2xl font-bold mt-4'>{customer}</h2>
                    <img className='rounded-full w-12 mt-4' src={customer_photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PackageSoloReview;