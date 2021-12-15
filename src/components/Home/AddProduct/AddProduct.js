import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data =>{
        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('product added successfully')
            }
            console.log(data)
            reset();
        })
    }
    return (
        <div className="add-service">
            <h2>Add A Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="dashboard-from ms-3">

                        <input placeholder="Product Name" type="text" {...register("name", { required: true })} />
                        <input placeholder="Price" type="number"{...register("price", { required: true, min: "0", max: "999999" })} />
                        <input placeholder="IMG Url Only" type="text" {...register("img", { required: true })} />
                        <textarea placeholder="Description" type="text" {...register("description", { required: true })} />
                        <textarea placeholder="Weight" type="number" {...register("weight", { required: true })} />
                        <textarea placeholder="Dimensions" type="number" {...register("dimension", { required: true })} />
                        <textarea placeholder="category" type="text" {...register("category", { required: true })} />

                        <Button type="submit" variant="dark">Add Product</Button>
                    </form>
        </div>
    );
};

export default AddProduct;