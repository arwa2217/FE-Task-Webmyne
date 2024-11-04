import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
 const {isAuthenticated}= useSelector((state)=>state.userDetail)
    console.log('isAuthenticated???????', isAuthenticated);

    // const accessToken = localStorage.getItem("accessToken");

    if (!isAuthenticated) {
        return <Navigate to="/" />
    }
    else {
        return <Outlet/>
    }
}

export default AuthRoute
