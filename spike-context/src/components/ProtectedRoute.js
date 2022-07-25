import React from 'react'
import { useContext } from "react";
import useIsAuthenticated from "../utils/useIsAuthenticated"
import { AuthContext } from "../context/authContext";
import {  Navigate} from "react-router-dom";

function ProtectedRoute({children}) {
    console.log('children >>>', children)
    const {user} = useContext(AuthContext)

    const isAuth = useIsAuthenticated()
    

  return (
    <div>{isAuth ? children : <Navigate to="/" />}</div>
  )
}

export default ProtectedRoute