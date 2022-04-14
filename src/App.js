import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AdminRoute from './components/AdminRoute/AdminRoute';
import AllOrders from './components/Dashboard/AllOrders/AllOrders';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Payment from './components/Dashboard/Payment/Payment';
import Review from './components/Dashboard/Review/Review';
import AddProduct from './components/Home/AddProduct/AddProduct';
import Details from './components/Home/Details/Details';
import Home from './components/Home/Home/Home';
import Reviews from './components/Home/Reviews/Reviews';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      
    <Routes>
      <Route path="/" element={<Home/> }>
       </Route>
      <Route path="/home" element={<Home/>}>
       </Route>
      <Route path="/aboutUs" element={<AboutUs/>}>
       </Route>
      <Route path="/reviews" element={<Reviews/>}>
       </Route>
      {/* <Route path="/makeAdmin" element={<MakeAdmin/>}>
       </Route>
      
      <Route path="/addProduct" element={<AddProduct/>}>
       </Route> */}
      <Route path="/details/:id" element={<PrivateRoute><Details/></PrivateRoute>}>
       </Route>
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
                            <Route path="/dashboard" >
                            
                            </Route>
                            <Route path={`/dashboard/payment`} element={<Payment />}>
                                
                            </Route>
                            <Route path={`/dashboard/myOrders`} element={<MyOrders />}>   
                            </Route>
                            <Route path={`/dashboard/review`} element={<Review />}>   
                            </Route>
                            <Route path={`/dashboard/allOrders`} element={<AdminRoute><AllOrders /></AdminRoute> }>
                               
                            </Route>
                            <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct/></AdminRoute>}>
                                
                            </Route>
                            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>
                                
                            </Route>
                            <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>}>
                                
                            </Route>

       </Route>
      <Route path="/login" element={<Login/>}>
       </Route>
      <Route path="/register" element={<Register/>}>
       </Route>
      <Route path="*" element={<NotFound />}>
       </Route>
        
    </Routes>
  </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
