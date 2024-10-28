import React from 'react'
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from "./pages/User-Dashboard/UserDashboard"

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/user-dashboard' element={<UserDashboard/>} />
      </Routes>
    </>
  )
}

export default App
