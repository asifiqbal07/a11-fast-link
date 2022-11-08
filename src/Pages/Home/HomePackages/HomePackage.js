import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const HomePackage = ({ homePack }) => {
    const { title, image_url, details } = homePack;
    console.log(homePack);
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-none">
                <figure><img className='h-[250px] w-full' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.slice(0, 95) + '...'}</p>
                    <Link to='/'><span className='flex items-center text-[#3078fb] justify-center font-semibold mt-3'>Check Details <FaArrowRight className='ml-5 mt-1' /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default HomePackage;