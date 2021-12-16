import React from 'react';
import Home from '../../Home/Home/Home';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    return (
        <div>
            <Home></Home>
            <h2>Dashboard</h2>

            <MyOrders></MyOrders>
        </div>
    );
};

export default Dashboard;