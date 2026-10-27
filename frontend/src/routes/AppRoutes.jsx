import DashboardLayout from '@/layout/DashBoardLayout'
import DashBoard from '@/pages/DashBoard'
import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route element={<DashboardLayout />}>
              <Route path='/dashboard' element={<DashBoard />} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes