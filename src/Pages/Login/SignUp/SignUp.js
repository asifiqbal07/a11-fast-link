import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    useTitle('SignUp')

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
                    <h1 className="text-4xl font-bold">Create A Free <br /> <span className='text-[#3078fb]'>Account</span></h1>
                    </div>

                    <div className="w-full shadow-xl bg-base-100 mx-auto rounded-none mt-10 p-4 ">
                        <form onSubmit={handleSignUp} className="card-body p-0 w-80">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered rounded-none bg-base-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="URL" className="input input-bordered rounded-none bg-base-200" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none bg-base-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none bg-base-200" required />
                                <label className="label">
                                    <span className='text-red-600'>{error}</span>
                                </label>
                            </div>
                            <button className=" rounded-none btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Sign up</button>
                        </form>
                        <p className='text-center'>Already have an account <Link className='btn btn-link font-bold' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;