import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Package = ({ pack }) => {
    const { title, image_url, details, _id, price } = pack
    console.log(pack);
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-none">
                <figure><PhotoProvider>
                    <PhotoView src={image_url}>
                        <img className='h-[250px] w-full' src={image_url} alt="" />
                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title">{title}</h2>
                        <h2 className="card-title t">{price}tk</h2>
                    </div>
                    <p>{details.slice(0, 95) + '...'}</p>
                    <Link to={`/packages/${_id}`}><span className='flex items-center text-[#3078fb] justify-center font-semibold mt-3 hover:text-xl'>Check Details <FaArrowRight className='ml-5 mt-1' /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Package;