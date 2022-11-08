import React from 'react';

const Packages = ({ pack }) => {
    const { title, image_url, speed, price, details } = pack;
    console.log(pack);
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-lg p-3 border transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <figure><img className='h-[250px] w-full' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.slice(0, 100) + '...'}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;