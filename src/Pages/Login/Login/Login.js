import React from 'react';

const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 lg:w-2/4 mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                    <div className="card w-full max-w-sm shadow-xl bg-base-100 mx-auto rounded-none ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered rounded-none" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;