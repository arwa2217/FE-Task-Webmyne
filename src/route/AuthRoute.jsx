import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
 
    const accessToken = localStorage.getItem("accessToken");

    return accessToken ? <Outlet /> : <Navigate to="/" />;
}

export default AuthRoute
