import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleProfile = event => {
        event.preventDefault();
        console.log(name, photoURLRef.current.value);
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">User Profile</h1>
                        <p className="py-6 lg:w-2/4 mx-auto">Provident cupiditate voluptatem et in. </p>
                    </div>
                    <div className="card w-full max-w-sm shadow-xl bg-base-100 mx-auto rounded-none ">
                        <form onSubmit={handleProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input onChange={handleNameChange} defaultValue={name} type="text" name='name' placeholder="your name" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input ref={photoURLRef} defaultValue={user?.photoURL} type="text" name='photoURL' placeholder="URL" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input readOnly defaultValue={user?.email} type="email" name='email' placeholder="email" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;