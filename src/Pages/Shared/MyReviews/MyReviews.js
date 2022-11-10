import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReview] = useState([])
    useTitle('My Reviews')

    useEffect(() => {
        fetch(`https://fast-link-server.vercel.app/reviews?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('fastLink-token')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
            .then(data => setReview(data))
    }, [user?.email , logOut])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete the Review?")
        if (proceed) {
            fetch(`https://fast-link-server.vercel.app/reviews/${id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='font-bold text-2xl text-center mb-4'>My Total Reviews: {reviews.length}</h1>
            {
                reviews.length !== 0 ?
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                    </th>
                                    <th>Package Name</th>
                                    <th>Review</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review => <ReviewRow
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                    ></ReviewRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='mx-auto text-center font-semibold lg:h-96'>
                        <span className=''>No reviews were added.</span>
                    </div>
            }
        </div>
    );
};

export default MyReviews;