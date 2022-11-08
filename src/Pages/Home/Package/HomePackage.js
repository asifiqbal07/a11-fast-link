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
        <div className='m-8 lg:m-0 grid lg:grid-cols-3 gap-12 '>
            <div className="card card-compact bg-base-100 ">
                
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    {/* <div className="card-actions justify-end">
                        
                    </div> */}
                </div>
            </div>
            
                {
                    packages.map(pack => <Packages
                        key={pack._id}
                        pack={pack}
                    ></Packages>)
                }
            
        </div>
    );
};

export default HomePackage;