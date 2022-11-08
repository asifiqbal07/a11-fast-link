import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Package from '../Package/Package';

const Packages = () => {
    const allPackages = useLoaderData();
    return (
        <div>
            <h2>Our All Packages{allPackages.length}</h2>
            <div className='grid lg:grid-cols-3 gap-20'>
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