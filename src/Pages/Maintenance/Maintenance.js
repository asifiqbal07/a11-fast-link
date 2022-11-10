import React from 'react';
import banner from '../../assets/Maintenance.jpg'
import useTitle from '../../hooks/useTitle';
const Maintenance = () => {
    useTitle('Maintenance')
    return (
        <div>
            <img className='w-full lg:max-h-screen my-20' src={banner} alt="" />
        </div>
    );
};

export default Maintenance;