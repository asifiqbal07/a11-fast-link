import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';

const PackageDetails = () => {
    const packageDetails = useLoaderData();
    const { title, price, image_url, details, speed, rating, features} = packageDetails;
    console.log(packageDetails);
    return (
        <div className='mx-6 lg:mx-0 mb-20 mt-10'>
            <div className='lg:flex items-center justify-between mb-6'>
                <div className='w-1/2'>
                    <figure><PhotoProvider>
                        <PhotoView src={image_url}>
                            <img className='' src={image_url} alt="" />
                        </PhotoView>
                    </PhotoProvider></figure>
                </div>
                <div className='w-1/2'>
                    <h2 className="text-center text-4xl font-bold mb-10">Package <span className='text-[#3078fb]'>{title}</span> </h2>
                    <div className="card card-compact  bg-base-100 shadow-lg p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-none w-4/5 mx-auto">
                        <div className="card-body">
                            <div className='flex items-center justify-between'>
                                <h2 className="card-title ">{price}tk</h2>
                                <h2 className="card-title ">{speed}Mbps</h2>
                            </div>
                            <p className='mb-4'>{details}</p>
                            <hr />
                            <div className='flex items-center justify-between mt-4'>
                                <div >
                                    <h1>Features</h1>
                                </div>
                                <span className='flex items-center'>{rating}<FaStar></FaStar></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;