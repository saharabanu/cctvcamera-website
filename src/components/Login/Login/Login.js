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
            <h4 className='text-primary'>Please Login</h4>
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
          className="submit-btn btn btn-primary  input-field"
          type="submit"
          value="Login"
        />
      </form>}
      {isLoading && <Spinner animation="border" variant="danger" />}
      {user?.email && <Alert
      variant="success">Create user successfully</Alert>}
      {error && <Alert variant="danger">User email or password does not match</Alert>}
      <p className="">Are You New User?<Link to='/register'>Please Register</Link> or <Link to="/">Back Home</Link></p>


      <div>-----------Social Media-----------------</div>
      <button onClick={handleGoogleSignIn} className="btn btn-secondary input-field fw-bold mt-2"> Google SignIn</button>

        </div>
            </div>
            
          </div>
         
        </div>
    );
};

export default Login;