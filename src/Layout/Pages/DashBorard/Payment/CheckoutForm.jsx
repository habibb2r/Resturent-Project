import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";


const CheckoutForm = ({price , cart}) => {
    const {user} = useAuth();
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [secretClient, setClientSecret ] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(()=> {
     if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
        .then(res =>{
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        })
     }
        
    }, [price, axiosSecure])

    const handleSubmit= async(event)=>{
        event.preventDefault();
        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null) {
            return
        }
       const {error,paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
       })
       if(error) {
        console.error(error)
        setCardError(error.message)
       }
       else{
        setCardError('')
        console.log(paymentMethod)
       }

       setProcessing(true);
       const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        secretClient,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'unknown',
              email: user?.email || 'anonymous'
            },
          },
        },
      );
      if(confirmError){
        console.log(confirmError)
      }
      console.log('payment intentt',paymentIntent)
      setProcessing(false)
      if(paymentIntent.status === "succeeded"){
        setTransactionId(paymentIntent.id)
        const payment = {
          email : user?.email,
          name: user?.displayName,
          transactionId: paymentIntent.id,
          date: new Date(),
          price : price,
          quantity : cart.length,
          orderStatus : 'pending',
          cartItems : cart.map(item => item._id),
          menuItems : cart.map(item => item.menuID),
          itemName: cart.map(item => item.name)
        }
        axiosSecure.post('payments', payment)
        .then(res=> {
          console.log(res.data);
          if(res.data.insertResult.insertedId){
              alert('Payment success');
          }
        })
        
      }


    }
    return (
        <>
        <form className="text-center px-10 my-10" onSubmit={handleSubmit}>
        <CardElement
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
        <button className="btn btn-warning my-4" type="submit" 
        disabled={!stripe || !secretClient || processing}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-600 text-center">{cardError}</p>
      }
      {
        transactionId && <p className="text-green-600 font-semibold">Transection Succesfully </p>
      }
        </>
    );
};

export default CheckoutForm;