import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    // useEffect(()=>{
    //     fetch('https://lit-badlands-25658.herokuapp.com/create-payment-intent', {
    //         method :'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body:JSON.stringify()
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError(error.message);
          } else {
              setError('');
            console.log('[PaymentMethod]', paymentMethod);
          }
        
       
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement className='check-form'
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='check-form' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {error && <p style={{color:'red'}}>{error}</p>}
  );
        </div>
    );
};

export default CheckoutForm;