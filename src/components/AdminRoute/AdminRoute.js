import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) { return <Spinner animation="border" variant="dark" /> }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;


};

export default AdminRoute;