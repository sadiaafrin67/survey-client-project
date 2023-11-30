import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../Hook/useAxiosSecure';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import Swal from "sweetalert2";


const CheckOutFrom = () => {

  const [error, setError] =useState('')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const {user} = useContext(AuthContext)
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const price = 99

    useEffect(() => {
      if(price > 0){
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
      }
    }, [axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if(card === null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card
        })

        if(error){
          console.log('payment error', error)
          setError(error.message)
        }
        else{
          console.log('payment method', paymentMethod)
          setError('')
        }

        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
          clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || 'unknown',
                name: user?.displayName || 'anonymous'
              }
            }
          }
        )

        if(confirmError){
          console.log('confirm Error', confirmError)
        }
        else{
          console.log('payment intent', paymentIntent)
          if(paymentIntent.status === 'succeeded'){
            console.log('transaction id', paymentIntent.id)
            setTransactionId(paymentIntent.id)

            // now save the payment in db
            const payment = {
              email: user?.email,
              price,
              date: new Date(),
              transactionId: paymentIntent.id,
              status: 'success',
            }

            const res = await axiosSecure.post('/payments', payment)
            console.log('payment saved', res)

            if(res.data?.paymentResult?.insertedId
              ){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your payemt has been completed",
                showConfirmButton: false,
                timer: 1500
              });

            }


          }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
      <button className="btn bg-blue-950 rounded-lg my-4 btn-sm text-white" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600 font-semibold text-sm">{error}</p>
      {transactionId && <p className="text-green-600 font-semibold text-sm">Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutFrom;