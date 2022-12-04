import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('	pk_test_51JvwzoCJMTQZSrF9h4qfOuQcvhwCGJMHpQvUMsRCHXsZ59skCY39bQBmKj1mHIs4kyGKZ912673OzjSvWAAnFFH800NySRGl9d')

const Payment = () => {
    // const {id} = useParams();
    // const [productOne, setProductOne] =useState({})
    // useEffect(()=>{
    //     fetch(`https://cctv-camera-api.onrender.com/products/${id}`)
    //     .then(res=>res.json())
    //     .then(data=>setProductOne(data))
    // },[id])
   
    return (
        <div>
            {/* <h2> Please Pay For : {id}</h2> 
            <h4>Pay: {productOne.price}</h4> */}

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;