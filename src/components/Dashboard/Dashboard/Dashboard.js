import React from 'react';
import Home from '../../Home/Home/Home';
import AllOrders from '../AllOrders/AllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';

const Dashboard = () => {
    return (
        <div>
            <Home></Home>
            <h2>Dashboard</h2>

            <MyOrders></MyOrders>
            <Review></Review>
            <AllOrders></AllOrders>
            <ManageProducts></ManageProducts>
        </div>
    );
};

export default Dashboard;