import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
 const {isAuthenticated}= useSelector((state)=>state.userDetail)
    // const accessToken = localStorage.getItem("accessToken");

    // return accessToken ? <Outlet /> : <Navigate to="/" />;
    if (!isAuthenticated) {
        return <Navigate to="/" />
    }
    else {
        return <Outlet/>
    }
}

export default AuthRoute
