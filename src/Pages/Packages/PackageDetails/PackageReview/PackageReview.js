import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import PackageSoloReview from './PackageSoloReview';

const PackageReview = ({ packageDetails }) => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const { title, price, _id } = packageDetails;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregistered';
        const email = user?.email || 'unregistered';
        const img = user?.photoURL || 'unregistered';
        const customerReview = form.customerReview.value;

        const review = {
            soloPackage: _id,
            serviceName: title,
            price,
            customer: name,
            customer_photo: img,
            email,
            customerReview
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Posted')
                    form.reset();
                }
            })
            .catch(e => console.error(e));

    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

console.log(reviews);

    return (
        <div>
            <div>
                <h2 className='text-center text-3xl font-bold m-4'>Customer say some words</h2>
                <p className='text-center mx-auto lg:w-2/4 m-4 px-4'>Help agencies to define their new business objectives and then create professional software.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6'>
                    {
                        reviews.map(soloReview => <PackageSoloReview
                            key={soloReview._id}
                            soloReview={soloReview}
                        ></PackageSoloReview>)
                    }
                </div>
                <form onSubmit={handleReview} className='mt-10 mx-4'>
                    {
                        user?.uid ?
                            <div className='lg:flex items-center '>

                                <div className='shrink lg:w-80 lg:mr-4 '>
                                    <textarea name='customerReview' className="textarea textarea-info w-full border-[#3078fb]" placeholder="Add Your Review" required></textarea>
                                </div>
                                <div className=''>
                                    <button className="btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Post Review</button>
                                </div>
                            </div>
                            :
                            <span className='font-bold'>Please login to add a review.<Link className='btn btn-link transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' to='/login'>Login...</Link></span>
                    }
                </form>
            </div>
        </div>
    );
};

export default PackageReview;