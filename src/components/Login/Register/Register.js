import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    
    const { register, handleSubmit, reset } = useForm();
    const {user,registerUser,isLoading,error} = useAuth();

    
    
    const onSubmit = (data) => {

      if(data.password !== data.password2){
        alert('Your password does not match')
        return
      }
      registerUser(data.email,data.password,data.name,navigate);
      reset()
       
        
        // console.log(data);
      };
    return (
      <div className='login'>
        <div className=" container">
          <div className="d-flex justify-content-center align-items-center rounded">
        <div className="input-box text-center">
      <h4 className='text-primary'>Please Register</h4>
      {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
  <input
    className="input-field mb-3"
    name="name"
    placeholder="Your Name"
    type="text"
    
    {...register("name", { required: true })}
  />
  <br />
  <input
    className="input-field mb-3"
    name="email"
    placeholder="Email"
    type="email"
    
    {...register("email", { required: true })}
  />
  <br />
  <input
    className="input-field mb-3"
    name="password"
    type="password"
    placeholder="Password"
    
    {...register("password", { required: true })}
  />
  <br />
  <input
    className="input-field mb-3"
    name="password2"
    type="password"
    placeholder="Re-enter Password"
    
    {...register("password2", { required: true })}
  />
  <br />

  <input
    className="submit-btn btn btn-primary input-field"
    type="submit"
    value="Register"
  />
</form>}
{isLoading && <Spinner animation="border" variant="danger" />}
{user?.email && <Alert variant="success">Create user successfully</Alert>}
{error && <Alert variant="danger">User id does not match</Alert>}
<p className="">Already Have an Account?<Link to='/login'>Please Login</Link> or <Link to="/">Back Home</Link></p>

  </div>
  </div>
        </div>
       
        
      </div>
);
};

export default Register;