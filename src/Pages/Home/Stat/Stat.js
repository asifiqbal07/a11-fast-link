import React from 'react';

const Stat = () => {
    return (
        <div>
            <div className="stats shadow w-full my-28 mx-auto">

                <div className="stat place-items-center">
                    <div className="stat-title">Service Taken</div>
                    <div className="stat-value">1K</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-[#3078fb]">757</div>
                    
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">102</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;