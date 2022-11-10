import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddPackages = () => {


    const handleAddPackage = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.packageName.value;
        const price = form.packagePrice.value;
        const speed = form.packageSpeed.value;
        const image_url = form.packageImg.value;
        const details = form.packageDescription.value;
        const rating = 5;
        const features ={
            BDIX:"150",
            social:"4K Youtube and Facebook Stream",
            ipv: "Both IPv4 and IPv6 Public IP"

        }

        const customPackage = {
            title,
            price,
            speed,
            image_url,
            details,
            rating,
            features

        }

        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customPackage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Package Added')
                    form.reset();
                }
            })
            .catch(e => console.error(e));

        console.log(customPackage);
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 p-5">
                    <div className="">

                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Make your custom <br /> <span className='text-[#3078fb]'>Package!</span></h1>
                        </div>

                        <div className=" shadow-xl bg-base-100 mx-auto rounded-none mt-10 p-8">
                            <form onSubmit={handleAddPackage} className="card-body p-0 w-full">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Package Name</span>
                                    </label>
                                    <input type="text" name='packageName' placeholder="package name" className="input input-bordered rounded-none bg-base-200" required />
                                </div>
                                <div className='lg:flex'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Price</span>
                                        </label>
                                        <input type="text" name='packagePrice' placeholder="price" className="input input-bordered rounded-none bg-base-200" required />
                                    </div>

                                    <div className="form-control lg:ml-8">
                                        <label className="label">
                                            <span className="label-text font-semibold">Speed</span>
                                        </label>
                                        <input type="text" name='packageSpeed' placeholder="speed" className="input input-bordered rounded-none bg-base-200" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">ImageURL</span>
                                    </label>
                                    <input type="text" name='packageImg' placeholder="imageURL" className="input input-bordered rounded-none bg-base-200" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Description</span>
                                    </label>
                                    <textarea name='packageDescription' className="textarea textarea-info w-full border-[#3078fb]" placeholder="description" required></textarea>
                                </div>

                                <button className=" rounded-none btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 my-4">Submit</button>
                            </form>

                            <p className='text-center'>Let's check our packages <Link className='btn btn-link font-bold' to='/packages'>Packages</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPackages;