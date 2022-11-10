import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState();
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        
                        localStorage.setItem('fastLink-token', data.token);
                        
                    });
                toast.success('Login Successful');
                navigate(from, { replace: true });
            })
            .catch(e => console.log(e))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        
                        localStorage.setItem('fastLink-token', data.token);
                        
                    });
                toast.success('Login Successful');
                navigate(from, { replace: true });
                
            })
            .catch(e => console.log(e))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        
                        localStorage.setItem('fastLink-token', data.token);
                        navigate(from, { replace: true });
                    });
                
                form.reset();
                setError('');
                toast.success('Login Successful');
            })
            .catch(error => {
                console.error(error)
                setError('Invalid username or password');
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Log In To <br /> get <span className='text-[#3078fb]'>Your Package.</span></h1>
                    </div>

                    <div className="w-full shadow-xl bg-base-100 mx-auto rounded-none mt-10 p-4">
                        <div className='mx-auto '>
                            <button className='rounded-none btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex items-center w-full' onClick={handleGoogleSignIn}><FaGoogle className='mr-2 text-base'></FaGoogle>Log in with Google</button>
                            <button className='rounded-none btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex items-center w-full mt-2' onClick={handleGithubSignIn}><FaGithub className='mr-2 text-base'></FaGithub>Log in with GitHub</button>
                        </div>
                        <p className='my-5 text-center'>Or, sign in with your email</p>
                        <hr className='my-5 w-4/5 mx-auto' />
                        
                        <form onSubmit={handleSubmit} className="card-body p-0 w-80">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input type="text" name='email' placeholder="Enter email" className="input input-bordered rounded-none bg-base-200 " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none bg-base-200 " />
                                <label className="label">
                                    <span className='text-red-600'>{error}</span>
                                </label>
                            </div>
                            <button className=" rounded-none btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Login</button>
                        </form>
                        <p className='text-center'>New Here? <Link className='btn btn-link font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;