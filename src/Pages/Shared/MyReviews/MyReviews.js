import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    return (
        <div>
            <h1>My Reviews {reviews.length}</h1>
        </div>
    );
};

export default MyReviews;