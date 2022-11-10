import React from 'react';
import banner from '../../assets/404.jpg'
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('404')
    return (
        <div>
           <img className='w-full lg:h-screen' src={banner} alt="" /> 
        </div>
    );
};

export default ErrorPage;