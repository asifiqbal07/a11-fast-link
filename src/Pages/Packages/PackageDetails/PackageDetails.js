import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const PackageDetails = () => {
    const packageDetails = useLoaderData();
    const { title, price, image_url, details, speed, rating, features, review_one, review_two } = packageDetails;
    console.log(packageDetails);
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
            <div>
                <h2 className='text-center text-3xl font-bold '>Customer say some words</h2>
                <p className='text-center mx-auto lg:w-2/4 mt-4'>Help agencies to define their new business objectives and then create professional software.</p>
                <div className='lg:flex mt-10'>
                <div className='lg:w-1/2 border p-6 mx-4 lg:mx-0 my-4 lg:mr-5 rounded-xl shadow-md'>
                    <div className='flex just mb-5'>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                    </div>
                    <div>
                        <p className='text-base'>{review_one.review}</p>
                        <h2 className='text-2xl font-bold mt-4'>{review_one.name}</h2>
                        <img className='rounded-full w-12 mt-4' src={review_one.image} alt="" />
                    </div>
                </div>
                <div className='lg:w-1/2 border p-6 mx-4 lg:mx-0 my-4 lg:ml-5 rounded-xl shadow-md' >
                    <div>
                    <div className='flex just mb-5'>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                        <FaStar className='text-[#FDFF00]'></FaStar>
                    </div>
                    <div>
                        <p className='text-base'>{review_two.review}</p>
                        <h2 className='text-2xl font-bold mt-4'>{review_two.name}</h2>
                        <img className='rounded-full w-12 mt-4' src={review_two.image} alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;