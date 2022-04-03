import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {user,loginUser,signinWithGoogle,isLoading,error} = useAuth();
    const { register, handleSubmit, } = useForm();
    
      const location = useLocation();
      const navigate = useNavigate();

    const onSubmit = (data) => {

      loginUser(data.email, data.password,location,navigate);
        // console.log(data);
    };
    const handleGoogleSignIn =()=>{
      signinWithGoogle(location,navigate);
    }
    return (
        <div className=' login'>
          <div className=" container">
            
            <div className=" d-flex justify-content-center align-items-center rounded">
            <div className="input-box">
            <h2 className=''>Please Login</h2>
            { !isLoading && <form onSubmit={handleSubmit(onSubmit)}>
        
        <input
          className="input-field mb-3 "
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field mb-3 "
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        <input
          className="submit-btn btn btn-danger  input-field"
          type="submit"
          value="Login"
        />
      </form>}
      {isLoading && <Spinner animation="border" variant="danger" />}
      {user?.email && <Alert
      variant="success">Create user successfully</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <p className="fw-bold">Are You New User?<Link to='/register'>Please Register</Link></p>


      <div>-----------Social Media-----------------</div>
      <button onClick={handleGoogleSignIn} className="btn btn-warning input-field fw-bold mt-2"> Google SignIn</button>

        </div>
            </div>
            
          </div>
         
        </div>
    );
};

export default Login;