import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const {token} = useAuth()
  
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        fetch("https://cctv-camera-api.onrender.com/users/admin", {
          method: "PUT",
          headers: { 
            'authorization':`Bearer ${token}`,
            "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.modifiedCount){
              console.log(result)
              setSuccess(true)

            }
            console.log(data)
            });
        
        reset()
      };
    return (
        <div className='py-5'>
        <h3 className='text-primary pb-3'>Make Admin</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field w-25"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />
  
          <input
            className="submit-btn btn btn-primary mt-3 border-0 w-25"
            type="submit"
            value="Make as Admin"
          />
        </form>
        {success && <Alert
      variant="success">Made Admin successfully</Alert>}
      </div>
    );
};

export default MakeAdmin;