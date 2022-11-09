import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { FaCheckCircle, FaStar } from 'react-icons/fa';

import PackageReview from './PackageReview/PackageReview';

const PackageDetails = () => {
    const packageDetails = useLoaderData();
    const { title, price, image_url, details, speed, rating, features } = packageDetails;
    
    return (
        <div>
            <div className='mx-6 lg:mx-0 mb-20 mt-10'>
                <div className='lg:flex items-center justify-between mb-6'>
                    <div className='lg:w-1/2'>
                        <figure><PhotoProvider>
                            <PhotoView src={image_url}>
                                <img className='' src={image_url} alt="" />
                            </PhotoView>
                        </PhotoProvider></figure>
                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className="text-center text-4xl font-bold mb-4 mt-5 lg:mt-5">Package <span className='text-[#3078fb]'>{title}</span> </h2>
                        <h2 className="text-center text-2xl font-bold lg:mb-8">{speed}Mbps</h2>
                        <div className="card card-compact  bg-base-100 shadow-lg p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-none lg:w-4/5 mx-auto m-4">
                            <div className="card-body">
                                <div className='flex items-center justify-between'>
                                    <h2 className="card-title ">{price}tk</h2>
                                    <span className='flex items-center text-base'>{rating} <FaStar className='text-[#FDFF00] ml-1'></FaStar></span>
                                </div>
                                <p className='mb-4'>{details}</p>
                                <hr />
                                <div className='mt-4 ' >
                                    <h1 className="card-title">Features</h1>
                                    <div>
                                        <ul className='mt-4'>
                                            <li className='flex items-center text-base my-2'><FaCheckCircle className='text-[#3078fb]' />  <span className='ml-2'>BDIX: {features.BDIX}</span></li>
                                            <hr className='w-3/4' />
                                            <li className='flex items-center text-base my-2'><FaCheckCircle className='text-[#3078fb]' /> <span className='ml-2'>IPv: {features.ipv}</span></li>
                                            <hr className='w-3/4' />
                                            <li className='flex items-center text-base my-2'><FaCheckCircle className='text-[#3078fb]' /> <span className='ml-2'>Social: {features.social}</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn bg-[#3078fb] border-0 rounded-none hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 w-full mt-2">Take the Service</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PackageReview
                packageDetails={packageDetails}
            ></PackageReview>
        </div>
    );
};

export default PackageDetails;