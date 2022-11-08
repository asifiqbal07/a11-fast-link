import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PackageDetails = () => {
    const packageDetails = useLoaderData();
    console.log(packageDetails);
    return (
        <div>
            PackageDetails
        </div>
    );
};

export default PackageDetails;