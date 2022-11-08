import React, { useEffect, useState } from 'react';
import Packages from './Packages';

const HomePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div  className=' grid lg:grid-cols-3 gap-20 '>
            <div className="card card-compact bg-base-100 ">
                <div className="card-body">
                    <h4 className="card-title text-[#3078fb]">MY SERVICES</h4>
                    <h1 className='text-4xl font-bold'>Internet Solutions & Customers Satisfaction</h1>
                    <p className='mt-4'>Best internet packages in your area which provides fully dedicated, super fast, cost-effective, secured internet connection.</p>
                    <button className="btn bg-[#3078fb] border-0 rounded-none hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Check All Packages </button>
                </div>
            </div>
            
                {
                    packages.slice(2,5).map(pack => <Packages
                        key={pack._id}
                        pack={pack}
                    ></Packages>)
                }
            
        </div>
    );
};

export default HomePackage;