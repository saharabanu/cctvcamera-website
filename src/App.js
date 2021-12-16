import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddProduct from './components/Home/AddProduct/AddProduct';
import Details from './components/Home/Details/Details';
import Home from './components/Home/Home/Home';
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
      {/* <Route path="/products" element={<Products/>}>
       </Route> */}
      <Route path="/addProduct" element={<AddProduct/>}>
       </Route>
      <Route path="/details/:id" element={<PrivateRoute><Details/></PrivateRoute>}>
       </Route>
      <Route path="/dashboard" element={<Dashboard/>}>
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
