import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {

    const[reviewPackage, setReviewPackage] = useState([])

    const { _id, serviceName, price, customerReview, customer, soloPackage } = review;

        useEffect(()=>{
            fetch(`http://localhost:5000/packages/${soloPackage}`)
            .then(res=>res.json())
            .then(data => setReviewPackage(data))
        },[soloPackage])

    console.log(reviewPackage)

    console.log(soloPackage);

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-circle btn-outline '>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                reviewPackage?.image_url &&
                                <img src={reviewPackage.image_url} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Package {serviceName}</div>
                        <div className="text-sm opacity-50">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerReview}
                <br />
            </td>
            <td>{price}</td>
            <td><Link to='/profile'><button><FaEdit></FaEdit> Edit</button></Link></td>
        </tr>
    );
};

export default ReviewRow;