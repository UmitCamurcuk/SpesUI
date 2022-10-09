import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

function ProtectedRoute({ children }) {
    const user  = useSelector(state => state.auth)
    console.log(user.onAuth);

    if(user.onAuth){
        return (
             children
        )
    }
    return <Navigate to='/login' />
    
}

export default ProtectedRoute     