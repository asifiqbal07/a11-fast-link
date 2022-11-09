import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }

            updateUserProfile(profile)
                .then(() => { })
                .catch(e => console.error(e));
        }

        const handleEmailVerification = () => {
            verifyEmail()
                .then(() => { })
                .catch(e => console.error(e));
        }

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p className="py-6 lg:w-2/4 mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                    <div className="card w-full max-w-sm shadow-xl bg-base-100 mx-auto rounded-none ">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="URL" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" required />
                                <label className="label">
                                    <span className='text-red-600'>{error}</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;