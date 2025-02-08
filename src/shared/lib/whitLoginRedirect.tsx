import React from 'react'
import { Navigate } from 'react-router-dom';

export const withLoginRedirect = <T extends object>(Component: React.ComponentType<T>) => {
    const authComponent = (props:T) => {
        const token  = localStorage.getItem("token");
        return token ? <Component {...props}/> : <Navigate to={"/login"} replace/>
    } 
    return authComponent
}
