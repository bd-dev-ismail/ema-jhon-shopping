import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div>IsLoading ...</div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    
};

export default PrivateRoutes;