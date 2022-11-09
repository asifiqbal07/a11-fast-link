import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div class="flex items-center">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-12" role="status">
                <span class="">.</span>
            </div>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;