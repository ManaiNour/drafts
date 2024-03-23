import React, { useContext } from 'react'
import { authContext } from '../context/ContextAuth'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes({children}) {
    const {auth}=useContext(authContext)
    console.log(auth);
  return (
auth&&auth.token?<Outlet/>:<Navigate to="/login"/>
  )
}

export default ProtectedRoutes