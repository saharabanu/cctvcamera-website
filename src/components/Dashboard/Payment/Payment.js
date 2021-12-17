import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('	pk_test_51JvwzoCJMTQZSrF9h4qfOuQcvhwCGJMHpQvUMsRCHXsZ59skCY39bQBmKj1mHIs4kyGKZ912673OzjSvWAAnFFH800NySRGl9d')

const Payment = () => {
   
    return (
        <div>
            <h2> Please Pay For</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;