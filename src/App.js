import React from 'react'
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from "./pages/User-Dashboard/UserDashboard"
import UserList from './pages/User-Dashboard/UserList/UserList'
import AuthRoute from './route/AuthRoute'

const App = () => {
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Login />} />
        
                {/* <Route element={<AuthRoute />}> */}
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route path="/user-list" element={<UserList />} />
                {/* </Route> */}
       
      </Routes>
</>
      
  )
}

export default App
